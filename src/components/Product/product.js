import { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import Filter from "../Filter/filter";
import ProductCard from "../ProductCard/poductcard";
import "./product.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

let count = 0;

const Product = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    productList: null,
    errorMsg: null,
  });

  const [show, setShow] = useState(false);

  const hide = () => {
    setShow(!show);
  };

  useEffect(() => {
    const getProduct = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        productList: null,
        errorMsg: null,
      });
      const apiUrl = "https://fakestoreapi.com/products";
      const options = { method: "GET" };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          productList: data,
        }));
      } else {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.failure,
          errorMsg: data.error_msg,
        }));
      }
    };

    getProduct();
  }, []);

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
    return <p>{errorMsg}</p>;
  };

  const renderSuccessView = () => {
    const { productList } = apiResponse;
    count = productList.length;

    return (
      <ul className="card-container">
        {productList.map((eachProduct) => (
          <ProductCard productData={eachProduct} />
        ))}
      </ul>
    );
  };

  const renderLoadingView = () => (
    <div className="loader-spinner-container">
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );

  const renderLeaderboard = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="product-header-container">
          <div className="product-header">
            <p className="product-count">{count} ITEMS</p>
            <button className="visible-btn" onClick={hide}>
              {show ? (
                <div className="show-hide-btn">
                  <span>
                    <MdOutlineKeyboardArrowLeft />
                  </span>
                  HIDE FILTER
                </div>
              ) : (
                <div className="show-hide-btn">
                  <span>
                    <MdOutlineKeyboardArrowRight />
                  </span>
                  SHOW FILTER
                </div>
              )}
            </button>
          </div>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWESTFIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <div className="filter-products">
          <Filter show={show} />
          {renderLeaderboard()}
        </div>
      </div>
    </>
  );
};

export default Product;
