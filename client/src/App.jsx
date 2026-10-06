import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Write from './pages/Write';



const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: '/',
        element : <Home/>
      },
      {
        path: '/post/:id',
        element : <Single/>
      },
      {
        path: '/write',
        element : <Write/>
      },
    ]

  },
   {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
