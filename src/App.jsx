import Layout from "./components/Layout";
import './App.css'
import { Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./pages/Home";

export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
  
}