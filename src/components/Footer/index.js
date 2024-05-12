import { FaInstagram, FaLinkedin } from "react-icons/fa";

import payments from "../../images/payments.png";
import usd from "../../images/Languageusd.png";
import "./index.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => (
  <div className="footer">
    <div className="long-screen">
      <div className="sub-card">
        <div>
          <h1 className="footer-head">BE THE FIRST TO KNOW</h1>
          <p className="footer-para">Sign up for updates from mettā muse.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              className="sub-card-input"
              type="text"
              placeholder="Enter your e-mail..."
              name="subscribe"
            />
            <button type="button" className="sub-btn">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <h1 className="footer-head">CONTACT US</h1>
          <p className="footer-para">+44 221 133 5360</p>
          <p className="footer-para">customercare@mettamuse.com</p>
          <h1 className="footer-head">CURRENCY</h1>
          <img src={usd} alt="usd" />
          <p
            className="footer-para"
            style={{
              // width: "60%",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "14.4px",
              textAlign: "left",
            }}
          >
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-card">
        <div>
          <h1 className="footer-head">metta muse</h1>
          <p className="footer-para">About Us</p>
          <p className="footer-para">Stories</p>
          <p className="footer-para">Artisans</p>
          <p className="footer-para">Boutiques</p>
          <p className="footer-para">Contact Us</p>
          <p className="footer-para">EU Compliances Docs</p>
        </div>
        <div>
          <h1 className="footer-head">QUICK LINKS</h1>
          <p className="footer-para">Orders & Shipping</p>
          <p className="footer-para">Join/Login as a Seller</p>
          <p className="footer-para">Payment & Pricing</p>
          <p className="footer-para">Return & Refunds</p>
          <p className="footer-para">FAQs</p>
          <p className="footer-para">Privacy Policy</p>
          <p className="footer-para">Terms & Conditions</p>
        </div>
        <div>
          <h1 className="footer-head">FOLLOW US</h1>
          <div className="icons">
            <button type="button">
              <FaInstagram size={30} color="white" />
            </button>
            <button type="button">
              <FaLinkedin size={30} color="white" />
            </button>
          </div>
          <h1 className="footer-head">metta muse ACCEPTS</h1>
          <img src={payments} alt="payments" />
        </div>
      </div>
    </div>
    <div className="mobile-card">
      <div className="mobile-sub-card">
        <h1 className="footer-head">BE THE FIRST TO KNOW</h1>
        <p className="footer-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <div>
          <input
            className="sub-card-input"
            type="text"
            placeholder="Enter your e-mail..."
            name="subscribe"
          />
          <button type="button" className="sub-btn">
            SUBSCRIBE
          </button>
        </div>
        <hr />
        <div>
          <h1 className="footer-head">CALL US</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p className="footer-para">+44 221 133 5360</p>
            <p className="footer-para">customercare@mettamuse.com</p>
          </div>
        </div>
        <hr />
        <div className="mobile-footer-card">
          <h1 className="footer-head">CURRENCY</h1>
          <img src={usd} alt="usd" style={{ height: "20px", width: "60px" }} />
        </div>
      </div>
      <hr />
      <div className="mobile-footer">
        <h1 className="footer-head">metta muse</h1>
        <MdKeyboardArrowDown size={30} color="white" />
      </div>
      <hr />
      <div className="mobile-footer">
        <h1 className="footer-head">QUICK LINKS</h1>
        <MdKeyboardArrowDown size={30} color="white" />
      </div>
      <hr />
      <div className="mobile-footer">
        <h1 className="footer-head">FOLLOW US</h1>
        <MdKeyboardArrowDown size={30} color="white" />
      </div>
      <hr />
      <div className="mobile-footer-card">
        <h1 className="footer-head">metta muse ACCEPTS</h1>
        <img src={payments} alt="payments" />
        <p style={{ color: "#ffffff", fontSize: "14px" }}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
