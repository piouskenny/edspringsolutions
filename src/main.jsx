import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import BuidingComponents from './components/Pages/buildingComponents';
import SystemAndProgramPlanning from './components/Pages/systemAndProgramPlanning';
import SpecialEducation from './components/Pages/specialEducation';
import AboutMore from './components/Pages/about'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buildingComponents",
    element: <BuidingComponents />,
  },
  {
    path: "/systemandprogramPlanning",
    element: <SystemAndProgramPlanning/>,
  },
  {
    path: "/specialeducation",
    element: <SpecialEducation/>,
  },
  {
    path: "/about",
    element: <AboutMore/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
