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

  return (
    <div className="auth-container"> {/* Centering wrapper */}
      <Authenticator>
        {({ signOut }) => (
          <div className="content-wrapper"> {/* Centered content */}
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <div style={{ display: 'flex', width: '100%' }}>
                <nav>
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.id} onClick={() => setActiveContent(item.content)}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </nav>
                <section>
                  <h1>Content</h1>
                  <p>{activeContent}</p>
                </section>
              </div>
              <button onClick={signOut}>Sign out</button>
            </main>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default App;
