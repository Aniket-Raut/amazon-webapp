import './navbar.css';
import React, { useState } from 'react';

import Logo from '../../assets/images/amazon_logo.png'
import Loc_Ico from '../../assets/images/location_ico.png'
import search_ico from '../../assets/images/search_ico.png'
import flag from '../../assets/images/flag_ind.png'
import menu_ico from '../../assets/images/menu_ico.png';
import cart_ico from '../../assets/images/cart_ico.png';

export const Navbar=(prop)=>{
    const[user,setUser] = useState();
    
    const options=["All"]
    const catBarOptions=[
        {
            "title":"Best Sellers",
            "href":"link"
        },
        {
            "title":"Today's Deals",
            "href":"link"
        },
        {
            "title":"Mobiles",
            "href":"link"
        },
        {
            "title":"Customer Service",
            "href":"link"
        },
        {
            "title":"Electronics",
            "href":"link"
        },
        {
            "title":"Home & Kitchen",
            "href":"link"
        },
        {
            "title":"Fashion",
            "href":"link"
        },
        {
            "title":"Books",
            "href":"link"
        },
        {
            "title":"Prime",
            // "data":{
            //     "type":"banner",
            //     "img":""
            // },
            "href":"link"
        },
        {
            "title":"New Releases",
            "href":"link"
        },
        {
            "title":"Amazon Pay",
            "href":"link"
        }
    ]
    // const options=["All","Alexa Skills","Amazon Devices","Amazon Fashion"]
    return (
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-row-cnt">
            {/* logo */}
            <div className="amazon-logo">
              <img id="navbar-logo" src={Logo}></img>
              <span>.in</span>
            </div>

            <div className="address-btn">
              <div className="location-im">
                <img id="location-ico" src={Loc_Ico}></img>
              </div>
              <div className="address-font-cnt">
                <span className="small-font">Hello</span>
                <span className="mid-font bold">Select your address</span>
              </div>
            </div>

            <div className="navbar-search-bar">
              <select>
                {options.map((opt) => {
                  return <option value={opt}>{opt}</option>;
                })}
              </select>
              <div id="search-input-area">
                <input></input>
              </div>
              <div className="search-btn">
                <img id="search-ico" src={search_ico}></img>
              </div>
            </div>

            <div className="language-button">
              <span id="language-font">English</span>
              <div id="select-region">
                <img src={flag}></img>
                <div className="triangle"></div>
              </div>
            </div>

            <div className="account-button">
              <span className="navbar-font-small">Hello, sign in</span>
              <div id="account-list-drop">
                <span className="navbar-font-big">Account & List</span>
                <div className="triangle"></div>
                {/* <span className='triangle'></span> */}
              </div>
            </div>

            <div className="return-orders">
              <span className="navbar-font-small">Returns</span>
              <div id="account-list-drop">
                <span className="navbar-font-big">& Orders</span>
                <div className="triangle"></div>
              </div>
            </div>

            <div className="cart">
              <div className="cart-ico-container">
                <div className="cart-count">{prop.cartCount}</div>
                <img id="cart-ico" src={cart_ico}></img>
              </div>
              <span>Cart</span>
            </div>
          </div>
        </div>

        <div className="navbar-row lite-color">
          <div className="navbar-cat-bar">
            <div className="cat-menu-option">
              <img id="ham-menu" src={menu_ico}></img>
              <span>All</span>
            </div>

            {catBarOptions.map((opt) => {
                let isBanner = opt?.data?.type==="banner";
                return <div className="cat-menu-option">
                    <span>{opt.title}</span>
                    {
                        isBanner?<div>
                            <img src={opt.data.img}></img>
                        </div>:null
                    }
                </div>;
            })}

          </div>
        </div>
      </div>
    );
}

export const SearchInput=()=>{
    return(
        <div className='searchinput-input-bar'>
            <div></div>
        </div>
    )
}