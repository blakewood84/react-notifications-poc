import { useStreamContext } from 'react-activity-feed';
import LoadingIndicator from '../LoadingIndicator';
import tracks from '../../constants/tracks';

export default function HomeContent() {
  const { client } = useStreamContext();
  const user = client.currentUser.data;

  if (!user) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {tracks.map((track) => {
        return <h1>{track.name}</h1>;
      })}
    </div>
  );
}
