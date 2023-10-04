import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import style from "./NavBar.module.css";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import TodoIcon from "../../assets/images/icon-todo.svg";
import RemindersIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";
import MenuNavBar from "../MenuNavBar/MenuNavBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className={style.navBarContainer}>
      <div className={style.logoList}>
        <img src={logo} alt="logo" />
        <ul className={style.listContainer}>
          <li>
            <Menu className={style.menuStyle}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Features
              </MenuButton>
              <MenuList className={style.menuStyle}>
                <MenuItem className={style.menuItemStyle}>
                  <img src={TodoIcon} alt="Calendar Icon" />
                  <p>Todo List</p>
                </MenuItem>
                <MenuItem className={style.menuItemStyle}>
                  <img src={CalendarIcon} alt="Calendar Icon" />
                  <p>Calendar</p>
                </MenuItem>
                <MenuItem className={style.menuItemStyle}>
                  <img src={RemindersIcon} alt="Calendar Icon" />
                  <p>Reminders</p>
                </MenuItem>
                <MenuItem className={style.menuItemStyle}>
                  <img src={PlanningIcon} alt="Calendar Icon" />
                  <p>Planning</p>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Company
              </MenuButton>
              <MenuList className={style.menuStyle}>
                <MenuItem>History</MenuItem>
                <MenuItem>Our team</MenuItem>
                <MenuItem>Blog</MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <button disabled={true}>Career</button>
          </li>
          <li>
            <button>About</button>
          </li>
        </ul>
      </div>
      <div className={style.btnsContainer}>
        <button className={style.login}>Login</button>
        <button className={style.register}>Register</button>
      </div>

      <button
        className={open === true ? style.menuBtnClose : style.menuBtn}
        onClick={handleMenu}
      >
        <hr className={open === true ? style.bigHrX : style.bigHr} />
        <hr className={open === true ? style.littleHrX : style.littleHr} />
      </button>
      <div
        className={open === true ? style.divOverLayOpen : style.divOverLayClose}
        onClick={handleMenu}
      ></div>
      <MenuNavBar open={open} />
    </div>
  );
};

export default NavBar;
