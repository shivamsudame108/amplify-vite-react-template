// Menu.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import { Auth } from "aws-amplify";

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.signOut()
      .then(() => navigate("/login")) // Redirect to login after logout
      .catch(err => console.error("Error signing out:", err));
  };

  return (
    <div className="menu-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <button onClick={() => navigate("/raga")}>Raga</button>
      <button onClick={() => navigate("/tala")}>Tala</button>
      <button onClick={() => navigate("/search")}>Search</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Menu;
