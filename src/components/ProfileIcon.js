import { useStreamContext } from 'react-activity-feed';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import { useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid orange;
    overflow: hidden;
    margin-right: 15px;
    z-index: 101;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

export default function ProfileIcon() {
  const navigate = useNavigate();
  const { userData, client } = useStreamContext();

  const [newNotifications, setNewNotifications] = useState(0);

  useEffect(() => {
    if (!userData) return;

    let notiFeed;

    async function init() {
      notiFeed = client.feed('notification', userData.id);

      const notifications = await notiFeed.get();

      const unread = notifications.results.filter(
        (notification) => !notification.is_seen
      );

      setNewNotifications(unread.length);

      notiFeed.subscribe((data) => {
        setNewNotifications(newNotifications + data.new.length);
      });
    }

    init();

    return () => notiFeed?.unsubscribe();
  }, [userData]);

  if (!userData) return <LoadingIndicator />;

  return (
    <Container>
      {newNotifications > 0 && (
        <div
          style={{
            position: 'absolute',
            background: 'red',
            borderRadius: '50%',
            padding: '1px 5px',
            fontSize: '11px',
            top: 0,
            right: 10,
            zIndex: 99999,
          }}
        >
          1
        </div>
      )}
      <div className="user-image">
        {userData && (
          <img
            src={userData.image}
            alt="Profile Icon"
            onClick={() => {
              navigate('/notifications');
            }}
          />
        )}
      </div>
    </Container>
  );
}
