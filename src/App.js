import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tour from "./pages/Tour/Tour.jsx";
import News from "./pages/News/News.jsx";
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
import DetailTour from "./components/DetailTour/DetailTour";
import Payment from "./components/Payment";
import DetailNews from "./components/DetailNews/DetailNews";
import Contact from "./pages/Contact";
import Introduce from "./pages/Introduce";
import InfoAccount from "./components/InfoAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        {console.log(window.location.pathname)}
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/account' element={<Account />} />
          <Route path='/infoAccount' element={<InfoAccount />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/tour/:id' element={<DetailTour />} />
          <Route path='/tour/:id/payment' element={<Payment />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<DetailNews />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
