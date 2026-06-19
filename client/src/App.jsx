import { createBrowserRouter , RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/",
     element: <h1>Home Page</h1> ,
    },
  
  { path: "/about",
      element:(
    <div>
    <h1>About Page</h1> 
     </div>
    ),
    },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
 
export default App;   