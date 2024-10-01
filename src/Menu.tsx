import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut }) => (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Menu Page</h1>
          <div>
            {/* Buttons to navigate to different pages */}
            <button onClick={() => navigate('/page1')} style={buttonStyle}>
              Go to Page 1
            </button>
            <button onClick={() => navigate('/page2')} style={buttonStyle}>
              Go to Page 2
            </button>
            <button onClick={() => navigate('/page3')} style={buttonStyle}>
              Go to Page 3
            </button>
            {/* Logout button */}
            <button onClick={signOut} style={buttonStyle}>
              Logout
            </button>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
};

export default Menu;
