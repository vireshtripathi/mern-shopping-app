import { ManagedUIContext } from "@/context/ManagedUiContext";
import "@/styles/global.css"; // Import global styles
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  // Example of a global effect (executed on every page)
  useEffect(() => {
    // Your global initialization code here
    console.log("App initialized");
  }, []);

  return (
    <ManagedUIContext>
      <ToastContainer
        {...{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          theme: "light",
        }}
      />
      <Component {...pageProps} />
    </ManagedUIContext>
  );
}

export default MyApp;
