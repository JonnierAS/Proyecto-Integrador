import style from "./nav.module.css";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import BurguerButton from "./BurguerButton";
import { useState } from "react";

const Nav = ({ onSearch, setAccess }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked);
  };
  const handleLogout = () => {
    setAccess(false);
  };

  return (
    <NavContainer className={style.nav}>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`links ${clicked ? "active" : ""}`}>
        <NavLink className={style.NavLink} to={"/about"}>
          <button className={style.btn}>About</button>
        </NavLink>
        <NavLink className={style.NavLink} to={"/home"}>
          <button className={style.btn}>Home</button>
        </NavLink>
        <NavLink className={style.NavLink} to={"/favorites"}>
          <button className={style.btn}>Favorites</button>
        </NavLink>
        <NavLink>
          <button className={style.btn} onClick={handleLogout}>
            Log out
          </button>
        </NavLink>
      </div>
      

      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 96%;
    height: 90vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 6.8%;
    left: 0;
    right: 3px;
    z-index: 5;
    background-color: rgba(2, 2, 2, 0.9);
    border-radius: 20px;
    text-align: center;
    a {
      margin-top: 1rem;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;


