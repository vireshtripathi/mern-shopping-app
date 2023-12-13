import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* Common Header */}
      <header>
        <h1>My Next.js App</h1>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Common Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
