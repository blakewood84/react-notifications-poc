import { useStreamContext } from 'react-activity-feed';
import LoadingIndicator from '../LoadingIndicator';
import tracks from '../../constants/tracks';
import styled from 'styled-components';
import Heart from '../Icons/Heart';
import useNotification from '../../hooks/useNotifications';

const TrackContainer = styled.div`
  .track {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px;

    .track__info {
      margin-left: 10px;
    }
  }

  h3 {
    color: white;
  }
  span {
    color: orange;
    margin-bottom: 5px;
  }
`;

export default function HomeContent() {
  const { client } = useStreamContext();
  const user = client.currentUser.data;

  const { createNotification } = useNotification();

  if (!user) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {tracks.map((track, index) => {
        return (
          <TrackContainer key={track.id + index + track.name}>
            <div className="track">
              <img src={track.image} alt="Track Image" />
              <div className="track__info">
                <h3>{track.name}</h3>
                <span>By {track.artist}</span>
                <div
                  className="heart__icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (user.id !== track.artist) {
                      createNotification(
                        track.artist,
                        'track',
                        { trackId: track.id, actor: user.id },
                        `SO:track:${track.id}`
                      );
                    } else {
                      console.log('cannot create notification!');
                    }
                  }}
                >
                  <Heart color="red" size={25} />
                </div>
              </div>
            </div>
          </TrackContainer>
        );
      })}
    </div>
  );
}
