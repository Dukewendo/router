import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/Careerslayout";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/Career/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/Career/CareerDetails";
import CareersError from "./pages/Career/CareersError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element ={<RootLayout />}>
      <Route index="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element ={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
        index
        element ={<Careers />} 
        loader={careersLoader} 
        />
        <Route
        path=":id"
        element={<CareerDetails />}
        loader = {careerDetailsLoader}
        >
        </Route>
      </Route>

      <Route path="*" element ={<NotFound />}
      />
      </Route>
  )
);

function App() {
  return (
 
    <RouterProvider router={router} />
  );
}

export default App;