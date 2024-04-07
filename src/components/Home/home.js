import Header from "../Header/header";
import Product from "../Product/product";
import Footer from "../Footer/footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heading-container">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <Product />
      <Footer/>
    </>
  );
};

export default Home;
