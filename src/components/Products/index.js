import { useEffect, useState } from "react";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import { CiHeart } from "react-icons/ci";

import "./index.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [arrow, setArrow] = useState(true);

  const onclickFilteBtn = () => {
    setShowFilter((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="products-comp">
      <div className="mobile-nav-card">
        <p className="mobile-nav" style={{ color: "#BFC8CD" }}>
          HOME
        </p>
        <hr className="hr" />
        <p className="mobile-nav">SHOP</p>
      </div>
      <div className="product-description">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="filter-card">
        <h1 className="mobile-filter-head">FILTER</h1>
        <div className="items-count-card">
          <p>{data.length} ITEMS</p>
          {showFilter ? (
            <button type="button" onClick={onclickFilteBtn}>
              <MdKeyboardArrowLeft size={20} />
              HIDE FILTER
            </button>
          ) : (
            <button type="button" onClick={onclickFilteBtn}>
              <MdKeyboardArrowRight size={20} />
              SHOW FILTER
            </button>
          )}
        </div>
        <select className="filter-sel" name="sort">
          <option className="filter-sel-opt">RECOMMENDED</option>
          <option className="filter-sel-opt">NEWEST FIRST</option>
          <option className="filter-sel-opt">POPULAR</option>
          <option className="filter-sel-opt">PRICE: HIGH TO LOW</option>
          <option className="filter-sel-opt">PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <div className="products-card">
        {showFilter && (
          <div className="left-filter">
            <div className="left-filter-1">
              <input className="checkbox" id="customizble" type="checkbox" />
              <label htmlFor="customizble">CUSTOMIZBLE</label>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>IDEAL FOR</h1>
                {arrow ? (
                  <MdKeyboardArrowUp
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setArrow((prev) => !prev);
                    }}
                    size={20}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setArrow((prev) => !prev);
                    }}
                    size={20}
                  />
                )}
              </div>
              <p className="option-1">All</p>
              {arrow && (
                <div className="options">
                  <p className="option-2">Unselect all</p>
                  <div className="option-card">
                    <input className="checkbox" type="checkbox" id="men" />
                    <label htmlFor="men">Men</label>
                  </div>
                  <div className="option-card">
                    <input className="checkbox" type="checkbox" id="women" />
                    <label htmlFor="women">Women</label>
                  </div>
                  <div className="option-card">
                    <input className="checkbox" type="checkbox" id="kids" />
                    <label htmlFor="kids">Baby & Kids</label>
                  </div>
                </div>
              )}
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>OCCASION</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>WORK</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>FABRIK</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>SEGMENT</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>SUATABLE FOR</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>RAW METARIALS</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
            <div className="left-filter-2">
              <div className="arrow-card">
                <h1>PATTERN</h1>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="options">
                <p className="option-1">All</p>
              </div>
            </div>
          </div>
        )}
        <div className="products-list">
          <ul>
            {data.map((each) => (
              <li key={each.id}>
                <img src={each.image} alt={each.title} />
                <div className="product-head-card">
                  <h1>{each.title}</h1>
                  <CiHeart size={20} />
                </div>
                <p>
                  <a href="/">Sign in</a> or Create an account to see pricing
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
