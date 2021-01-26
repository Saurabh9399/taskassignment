import React, { useState } from "react";
import "./Header.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
   const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <DashboardOutlinedIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://static.thenounproject.com/png/317039-200.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
          className="header__input"
        />
        {/* <SearchComponent className="search__component"/> */}
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <NotificationsIcon className="header__right" />
        <Avatar
          alt="Saurabh J"
          src="https://avatars1.githubusercontent.com/u/64205497?s=460&u=8a84d598d143bf91220f3afd56e111439c6b1573&v=4"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
