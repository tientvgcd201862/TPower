import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '10px' }}>
    {/* Add footer content */}
    <p>&copy; {new Date().getFullYear()} TPower-Saving Application. All rights reserved.</p>
  </footer>
  );
};

export default Footer;