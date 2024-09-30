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
  // State for storing navigation items and active content
  const [navItems, setNavItems] = useState<NavItem[]>([]); // Store navigation items
  const [activeContent, setActiveContent] = useState<string>(''); // Store selected content

  // Fetch data from AWS API Gateway
  useEffect(() => {
    fetch('https://rzojefkldd.execute-api.us-east-2.amazonaws.com/mystage') // Replace with your API Gateway URL
    .then(response => response.json())
    .then(data => {
      // Check if the body property exists and parse it
      const body = data.body ? JSON.parse(data.body) : [];
      console.log('Fetched nav items:', body); // Log the parsed items
      setNavItems(body);
      // Set the active content to the first item if available
      if (body.length > 0) {
        const firstItemContent = body[0].content;
        setActiveContent(firstItemContent); // Set the content of the first item
      }
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Authenticator>
        {({ signOut }) => (
          <main style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', padding: '20px' }}>
            {/* Layout with Flexbox */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
            <button onClick={signOut} style={{ alignSelf: 'flex-start', marginTop: '20px' }}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default App;
