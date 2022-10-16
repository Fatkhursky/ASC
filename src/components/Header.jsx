import React from "react";
import { BsPhone } from "react-icons/bs";
import Background from "../images/top.jpeg"
const Header = () => {
  return (
    <div>
      <header className="bg-[#198754] flex relative h-12 text-white px-8">
        <button className="p-3 flex absolute right-16  items-center">
        
          <a className="flex items-center gap-4" href="https://play.google.com/store/apps/details?id=id.asc.sepakat" target="_blank" rel="noreferrer">
          <p>Download Apps</p>
          <BsPhone />
          </a>
         
        </button>
      </header>
      <div className="header flex items-center text-2xl sticky top-0 gap-16 px-36 bg-white py-6 rounded">
        <div className="flex items-center gap-2">
          <img src={require('../images/Sepakat.png')}  alt="" />
          <button className="font-bold text-slate-700 hover:text-slate-900" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Sepakat</button>
        </div>
        <nav>
          <ul className="flex gap-3">
            <li className="cursor-pointer font-bold text-slate-700">Beranda</li>
            <li className="cursor-pointer font-bold text-slate-700">Fitur Kami</li>
            <li className="cursor-pointer font-bold text-slate-700">Kontak</li>
          </ul>
        </nav>
      </div>
      <div className="bg-cover h-[956px] flex items-center px-12" style={{backgroundImage:`url(${Background})`}} >
        <div className=" flex flex-col gap-4">
        <h1 className="text-amber-600 text-6xl font-bold font-serif">Sepakat</h1>
        <p className="text-white text-4xl font-bold">#MudahCariProperti</p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
