import classNames from 'classnames';
import { useState } from 'react';
import { NotificationFeed } from 'react-activity-feed';
import styled from 'styled-components';

import NotificationGroup from './NotificationGroup';
import { useStreamContext } from 'react-activity-feed';
import { useEffect } from 'react';

const Container = styled.div`
  h1 {
    padding: 15px;
    font-size: 16px;
    color: white;
  }
`;

export default function NotificationContent() {
  const { client, user } = useStreamContext();

  useEffect(() => {
    async function init() {
      const notificationFeed = client.feed('notification', user.id);
      console.log(notificationFeed);
    }

    init();
  }, []);

  return (
    <Container>
      <h1>Notifications</h1>
      <NotificationFeed Group={NotificationGroup} />
    </Container>
  );
}
