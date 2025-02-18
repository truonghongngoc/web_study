import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Reset from "./pages/Reset";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path:'/sign-in',
    element:<SignIn/>

  },
  {
    path:'sign-up',
    element:<SignUp/>
  },
  {
    path:'reset',
    element:<Reset/>
  },
  {
    path:'forgot',
    element:<Forgot/>
  },
  {
    path:'confirm',
    element:<Confirm/>
  }
]);
function App(){
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
