import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  // toast.success("🦄 Wow so easy!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // });
  return (
    <ToastContainer
      {...{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        theme: "light",
      }}
    />
  );
};
export default Toaster;
