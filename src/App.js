import React, { useState, useEffect } from 'react';

const App = () => {
  const [navItems, setNavItems] = useState([]); // Store navigation items
  const [activeContent, setActiveContent] = useState(''); // Store selected content

  // Fetch data from AWS API Gateway
  useEffect(() => {
    fetch('https://rzojefkldd.execute-api.us-east-2.amazonaws.com/mystage') // Replace with your API Gateway URL
      //https://rzojefkldd.execute-api.us-east-2.amazonaws.com/mystage
      //https://your-api-endpoint.amazonaws.com/nav-items
      .then(response => response.json())
      .then(data => setNavItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Navigation Pane */}
      <nav style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
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
  );
};

export default App;
