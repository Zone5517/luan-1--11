import React from 'react';
import { UsersProvider } from './context/UsersProvider';
import UsersPage from './pages/UsersPage';

const App: React.FC = () => {
  return (
    <UsersProvider>
      <UsersPage />
    </UsersProvider>
  );
};

export default App;