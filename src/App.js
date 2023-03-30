import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './Admin-dasboard/DashBoard';
import ManageTeamMember from './Admin-dasboard/ManageTeamMember';
import UpdateTeam from './Admin-dasboard/UpdateTeam';
import AdminRoute from './AdminRoute/AdminRoute';
import './App.css';
import ContactUs from './ContactUs/ContactUs';
import Home from './Home/Home/Home';
import Services from './Home/services/Services';
import Main from './layout/Main/Main';
import Login from './Login/Login';
import OurTeam from './OurTeam/OurTeam';
import SignUp from './SignUp/SignUp';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/ourteam',
          element: <OurTeam></OurTeam>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/contactus',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/dashboard',
          element: <AdminRoute><DashBoard></DashBoard></AdminRoute>,
          children: [
            {
              path: '/dashboard/updateTeam',
              element: <AdminRoute><UpdateTeam></UpdateTeam></AdminRoute>
            },
            {
              path: '/dashboard/manageTeamMember',
              element: <AdminRoute><ManageTeamMember></ManageTeamMember></AdminRoute>
            }
          ]
        },

      ]
    }
  ])
  return (
    <div className="max-w-7xl mx-auto ">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
