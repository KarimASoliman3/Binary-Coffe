import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";


function App() {
  return <>
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
    </div>
  </>
}

export default App;
