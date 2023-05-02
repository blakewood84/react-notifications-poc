import styled from 'styled-components';
import ProfileIcon from './ProfileIcon';

const Container = styled.div`
  color: white;

  .navbar {
    border-bottom: 1px solid orange;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      margin-left: 10px;
      display: flex;
      span {
        margin-left: 10px;
      }
    }

    .right {
      margin-right: 10px;
    }
  }
`;

export default function NavBar() {
  return (
    <Container>
      <div className="navbar">
        <div className="left">
          <span>Discover</span>
          <span>My Library</span>
        </div>
        <div className="right">
          <ProfileIcon />
        </div>
      </div>
    </Container>
  );
}
