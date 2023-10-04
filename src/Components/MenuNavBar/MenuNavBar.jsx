import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import style from "./MenuNavBar.module.css";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import TodoIcon from "../../assets/images/icon-todo.svg";
import RemindersIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";

const MenuNavBar = (props) => {
  const { open } = props;
  return (
    <div className={open === true ? style.open : style.close}>
      <ul className={style.collapseList}>
        <li>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton className={style.accordionBtn}>
                  <Box as="span" textAlign="left">
                    Features
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.accordionPanel}>
                <ul>
                  <li>
                    <img src={TodoIcon} alt="Calendar Icon" />
                    <p>Todo List</p>
                  </li>
                  <li>
                    <img src={CalendarIcon} alt="Calendar Icon" />
                    <p>Calendar</p>
                  </li>
                  <li>
                    <img src={RemindersIcon} alt="Calendar Icon" />
                    <p>Reminders</p>
                  </li>
                  <li>
                    <img src={PlanningIcon} alt="Calendar Icon" />
                    <p>Planning</p>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </li>
        <li>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton className={style.accordionBtn}>
                  <Box as="span" textAlign="left">
                    Company
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.accordionPanel}>
                <ul>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </li>
        <li>
          <button className={style.accordionBtn} disabled={true}>
            Careers
          </button>
        </li>
        <li>
          <button className={style.accordionBtn}>About</button>
        </li>
      </ul>
      <div className={style.btnsContainer}>
        <button className={style.login}>Login</button>
        <button className={style.register}>Register</button>
      </div>
    </div>
  );
};

export default MenuNavBar;
