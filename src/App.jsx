import React, { Children, useState } from "react";
import Map from "./Map";
import Footer from "./Footer";
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
    <Header/>
    <Map/> 
    <br/>
    <br/>
    <br/>

    <Footer/>
    </>,

    },
    
  ]);
  return(
  <>

  <RouterProvider router={router} />

    </>
  )
}
export default App;
