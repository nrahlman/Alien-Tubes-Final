import React from 'react';
import video from "../assets/owen.mp4";
import { IoLogoTwitter } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logologo.png"
import Text from './Text';

const Main = () => {
  const toPurchase = () => {
    window.open("https://twitter.com/alientubes777?s=21&t=D_d2fMzaw7EvwUVa4qmipA", '_blank');
  };
  const toTwitter = () => {
    window.open("https://zora.co/collect/zora:0xefef6242c53da24d8842d42132dda2589425c357", '_blank');
  };

  return (
    <div className='main'>
        <div className='body'>
      <video className='video' src={video} autoPlay loop muted>
      </video>
      <div className='buttons-container'>
        <button className='twitter' onClick={toTwitter}>
        <img src={logo} alt="Twitter Logo" style={{ width: '50px', height: '50px', paddingRight: "0" }} />
        </button>
        <button className='purchase' onClick={toPurchase}>
          <IoLogoTwitter style={{ width: '50px', height: '50px', paddingRight: "0"}} />
        </button>
      </div>
      </div>
      <div className='footer'>
        <div className='statement'>
        “We are an anonymous collective bridging the great division of the chains that bind, restrict, and uphold each other.”
        <div className='links'>
        <button className='twitter' onClick={toTwitter}>
        <img src={logo} alt="Twitter Logo" style={{ width: '50px', height: '50px', paddingRight: "0" }} />
        </button>
        <button className='second' onClick={toPurchase}>
          <IoLogoTwitter style={{ width: '50px', height: '50px', paddingRight: "0"}} />
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Main;