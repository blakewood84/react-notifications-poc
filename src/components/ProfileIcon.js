import { useStreamContext } from 'react-activity-feed';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;

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
    }
  }
`;

export default function ProfileIcon() {
  const { user } = useStreamContext();

  return (
    <Container>
      <div className="user-image">
        <img src={user.data.image} alt="" />
      </div>
    </Container>
  );
}
