import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StreamClient } from 'getstream';
import { StreamApp } from 'react-activity-feed';
import ScrollToTop from './components/ScrollToTop';
import StartPage from './pages/StartPage';
import { useEffect, useState } from 'react';
import { getFromStorage } from './utils/storage';
import users from './users';
import HomePage from './pages/HomePage';

const APP_ID = '1241926';
const API_KEY = 'x2u4y9padhyg';

export default function App() {
  const userId = getFromStorage('user');

  const user = users.find((u) => u.id === userId) || user[0];

  const [client, setClient] = useState(null);

  useEffect(() => {
    console.log('user: ', user);
    async function init() {
      const client = new StreamClient(API_KEY, user.token, APP_ID);
      await client.user(user.id).getOrCreate({ ...user, token: '' });

      setClient(client);
    }

    init();
  }, []);

  if (!client) return <></>;

  return (
    <StreamApp token={user.token} appId={APP_ID} apiKey={API_KEY}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </StreamApp>
  );
}
