import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Header from './components/Header'
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {


  return (
    <div className="bg-gray-50 h-full p-8">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  )
}

export default App
