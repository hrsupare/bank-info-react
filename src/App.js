import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBankServices from "./component/AllBankServices";
import About from "./component/About";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<Body />} />
          <Route path="/bank-info/:ID" element={<AllBankServices />} />
          <Route path="bank-info/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
