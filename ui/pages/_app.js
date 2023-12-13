import "@/styles/global.css"; // Import global styles
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Example of a global effect (executed on every page)
  useEffect(() => {
    // Your global initialization code here
    console.log("App initialized");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
