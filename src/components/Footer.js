import React from 'react';

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-between align-items-center py-3 px-4"
      style={{
        backgroundColor: "#272f3d",
        color: "white",
        fontWeight: "bold",
        width: "100%",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
        marginTop: "auto", // Ensures it stays at the bottom
      }}
    >
      <span>Developed by Abdullah Bashir</span>
      <span>© 2025 All rights reserved</span>
    </footer>
  );
}
