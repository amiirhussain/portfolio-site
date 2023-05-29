import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import "../styles/header.css";

const Header = ({ menuOpen, setMenuOpen }) => {
  const menuIcon = menuOpen ? (
    <RiCloseFill className="close-menu" />
  ) : (
    <RiMenu3Fill />
  );

  return (
    <>
      <header>
        <Navbar setMenuOpen={setMenuOpen} />
      </header>
      <button onClick={() => setMenuOpen(!menuOpen)} className="burger--menu">
        {menuIcon}
      </button>
    </>
  );
};

export const ResponsiveMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`res--menu ${menuOpen ? "res--menu--appear" : ""}`}>
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  );
};

const Navbar = ({ setMenuOpen }) => {
  return (
    <nav>
      <h1>
        Amir<span>.</span>
      </h1>
      <div className="nav--list">
        <a onClick={() => setMenuOpen(false)} href="#hero">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#about">
          About
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)} href="#projects">
          Projects
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
        <a onClick={() => setMenuOpen(false)} className="nav--btn" href="#">
          Email
        </a>
      </div>
    </nav>
  );
};
export default Header;
