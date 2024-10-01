import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '@aws-amplify/ui-react/styles.css';

const Menu: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="menu-container">
          {user ? (
            <div>
              <h1>Welcome, {user.username}!</h1>
              <div className="button-container">
                <button onClick={() => navigate('/raga')}>Go to Raga</button>
                <button onClick={() => navigate('/tala')}>Go to Tala</button>
                <button onClick={() => navigate('/search')}>Go to Search</button>
              </div>
              <button onClick={signOut}>Sign out</button>
            </div>
          ) : (
            <h1>Welcome! Please log in.</h1>
          )}
        </div>
      )}
    </Authenticator>
  );
};

export default Menu;
