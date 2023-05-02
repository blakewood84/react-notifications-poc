import { Link } from 'react-router-dom';
import styled from 'styled-components';

import User from '../Icons/User';

const Block = styled.div`
  padding: 15px;
  border-bottom: 1px solid #333;
  display: flex;

  a {
    color: white;
  }

  .right {
    margin-left: 20px;
    flex: 1;
  }

  .actors__images {
    display: flex;

    &__image {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .actors__text {
    margin-top: 10px;
    color: white;
    font-size: 15px;

    span {
      display: inline-block;
    }

    .actors__name {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function TrackLikedNotification({ trackActivities }) {
  const firstActivity = trackActivities[0];
  console.log('trackActivities: ', trackActivities);

  return (
    <Block>
      <User color="#1c9bef" size={25} />
      <div className="right">
        <div className="actors__images">
          {trackActivities.map((track) => {
            return (
              <Link
                to={`/${track.actor.id}`}
                className="actors__images__image"
                key={track.id}
              >
                <img src={track.actor.data.image} alt="" />
              </Link>
            );
          })}
        </div>
        <p className="actors__text">
          <Link className="actors__name" to={`/${firstActivity.actor.id}`}>
            {firstActivity.actor.data.name}
          </Link>{' '}
          <span>
            {trackActivities.length > 1 &&
              `and ${trackActivities.length - 1} others`}{' '}
            liked your track
          </span>
        </p>
      </div>
    </Block>
  );
}
