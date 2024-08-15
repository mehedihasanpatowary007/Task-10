import Footer from "./Components/Frontend/Footer";
import Header from "./Components/Frontend/Header";
import Hero from "./Components/Frontend/Hero";
import Navbar from "./Components/Frontend/Navbar/Navbar";
// import Navbar from "./Components/Frontend/Navbar";
import Products from "./Components/Frontend/Products";

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;
