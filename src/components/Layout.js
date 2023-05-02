import { useStreamContext } from 'react-activity-feed';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';
import NavBar from './NavBar';

const Container = styled.div`
  min-height: 100vh;
  background: black;

  .content {
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    position: relative;
    min-height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;

    h1 {
      color: white;
    }
  }
`;

export default function Layout({ children }) {
  const { user } = useStreamContext();

  if (!user) return <LoadingIndicator />;

  return (
    <Container>
      <div className="content">
        <NavBar />
        <main className="main-content">{children}</main>
      </div>
    </Container>
  );
}
