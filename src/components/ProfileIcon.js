import { useStreamContext } from 'react-activity-feed';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid orange;
    overflow: hidden;
    margin-right: 15px;

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
  const { user } = useStreamContext();

  return (
    <Container>
      <div className="user-image">
        {user.data && (
          <img
            src={user.data.image}
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
