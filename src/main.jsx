import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        position: "top-center",
        style: {
          background: "#283046",
          color: "white",
        },
      }}
    />
  </AuthProvider>
);
