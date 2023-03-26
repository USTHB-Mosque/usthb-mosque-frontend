import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/LOGO.svg";

export default function Navbar() {
  return (
    <div className="flex items-center lg:items-stretch">
      <ul className="bg-white py-4 lg:py-0 flex-[1] rounded-br-3xl space-x-0 flex justify-center content-center flex-col lg:flex-row lg:space-x-12">
        <a href="#call-us" className="header-link">
          <li>اتصل بنا</li>
        </a>
        <a href="#blogs" className="header-link">
          <li>مقالات</li>
        </a>
        <a href="#activities" className="header-link">
          <li>نشاطتنا</li>
        </a>
        <a href="#about-us" className="header-link">
          <li>حولنا</li>
        </a>
        <a href="#main" className="header-link">
          <li>الرئيسية</li>
        </a>
      </ul>
      <div className="px-16 py-3">
        <Link to="/">
          <img
            src={logo}
            alt="masjid-usthb"
            width={140}
            className="hover:drop-shadow-2xl"
          />
        </Link>
      </div>
    </div>
  );
}
