import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="first-components">
            <div className="text">
              <h5>BE THE FIRST TO KNOW</h5>
              <p>Sign up for updates from mettā muse.</p>
            </div>
            <div className="subscribe-container">
              <input type="text" placeholder="please enter your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="second-components">
            <h5>CONTACT US</h5>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <div className="third-component">
              <h5>CURRENCY</h5>
              <p className="country">
                <img
                  src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712472642/appscrip/Group_caj375.png"
                  alt="usd"
                />
                <span>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712472866/appscrip/Star_1_teolwl.png"
                    alt="star"
                  />
                </span>
                <span>USD</span>
              </p>
              <p className="euro">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div>
            <h1>mettā muse</h1>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h1>QUICK LINKS</h1>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="follow-payment">
            <div className="follow-container">
              <h1>FOLLOW US</h1>
              <p>
                <span>
                  <AiFillInstagram />
                </span>
                <span>
                  <FaLinkedin />
                </span>
              </p>
            </div>
            <div className="payment-container">
              <h1>mettā muse Accepts</h1>
              <ul>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498816/appscrip/Group_136188_cegg8s.png"
                    alt="payment-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498863/appscrip/Group_136190_xoxd7e.png"
                    alt="payment-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498816/appscrip/Group_136192_udwq55.png"
                    alt="payment-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498817/appscrip/Group_136193_zm6ezt.png"
                    alt="payment-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498816/appscrip/Group_136194_fjkxyw.png"
                    alt="payment-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712498817/appscrip/Group_136195_q9hnvr.png"
                    alt="payment-icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copy-right">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </>
  );
};
export default Footer;
