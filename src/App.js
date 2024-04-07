import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", margin: "0px" }}>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
