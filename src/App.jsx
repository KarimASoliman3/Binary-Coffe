import AppBanner from "./Components/AppBanner/AppBanner";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import Footer from './Components/Footer/Footer';


function App() {
  return <>
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  </>
}

export default App;
