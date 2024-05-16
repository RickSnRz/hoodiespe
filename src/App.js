import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/FooterMain";

function App() {
  return <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>;
}

export default App;
