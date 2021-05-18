import React, { useState } from "react";
import Link from "next/link";
import Drawer from "./Drawer";
import Hamburger from "./Hamburger";
import css from "styled-jsx/css";

const { className: hamburgerClassName, styles: hamburgerStyles } = css.resolve`
  @media screen and (min-width: 480px) {
    .root {
      display: none;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {hamburgerStyles}
      <Hamburger
        className={hamburgerClassName}
        toggled={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className='desctop-nav'>
        <li>
          <Link href='#/'>
            <a data-page='home' href='#home'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <a data-page='about' href='#about'>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='#projects'>
            <a data-page='projects' href='#projects'>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href='#contacts'>
            <a data-page='contacts' href='#contacts'>
              Contacts
            </a>
          </Link>
        </li>
      </ul>
      <Drawer className={hamburgerClassName} isOpen={isOpen}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <a data-page='about' href='#about'>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <a data-page='project' href='#project'>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href='#contacts'>
              <a data-page='contacts' href='#contacts'>
                Contacts
              </a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Nav;
