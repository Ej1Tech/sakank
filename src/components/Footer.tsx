import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Sakank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
