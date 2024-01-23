import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-7 bg-gray-800 text-white text-sm">
      <p>
        © {currentYear} Al-Qurran Online. All Rights Reserved ♥ by SaipulImdn
      </p>
    </footer>
  );
};

export default React.memo(Footer);
