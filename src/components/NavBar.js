import styled from 'styled-components';

const Container = styled.div`
  color: white;

  .navbar {
    border-bottom: 1px solid orange;
    height: 50px;
    display: flex;
    align-items: center;

    .left {
      display: flex;
      span {
        margin-left: 10px;
      }
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
        <div className="right"></div>
      </div>
    </Container>
  );
}
