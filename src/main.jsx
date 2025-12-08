
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import StudentList from "./components/StudentsList.jsx";
import AddStudent from "./components/AddStudent.jsx";
import EditStudent from "./components/EditStudent.jsx";
import "./index.css";
import HomePage from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/students",
        element: <StudentList></StudentList>
      },
      {
        path: "/add",
        element: <AddStudent></AddStudent>
      },
      {
        path: "/edit/:id",
        element: <EditStudent></EditStudent>
      },
      {
        path:"",
        element:<HomePage></HomePage>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
