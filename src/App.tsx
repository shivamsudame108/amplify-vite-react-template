import React, { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Define types for the navigation items
interface NavItem {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [activeContent, setActiveContent] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // State to track authentication

  useEffect(() => {
    fetch('https://rzojefkldd.execute-api.us-east-2.amazonaws.com/mystage')
      .then(response => response.json())
      .then(data => {
        const body = data.body ? JSON.parse(data.body) : [];
        setNavItems(body);
        if (body.length > 0) {
          const firstItemContent = body[0].content;
          setActiveContent(firstItemContent);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handler to set authentication state
  const handleAuthStateChange = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Authenticator onStateChange={handleAuthStateChange}>
          {({ signOut }) => (
            <div className="auth-container"> {/* Centering wrapper for Authenticator */}
              <h1>Welcome! Please log in.</h1>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      ) : (
        <div className="content-wrapper"> {/* Only render content if authenticated */}
          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              {/* Left Navigation Pane */}
              <nav style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px' }}>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.id} onClick={() => setActiveContent(item.content)}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Main Content Area */}
               <section style={{ padding: '20px' }}>
                <h1>Content</h1>
                <p>{activeContent}</p>
              </section>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
