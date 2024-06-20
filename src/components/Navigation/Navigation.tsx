import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import React from 'react';

interface Page {
  path: string;
  name: string;
}

interface NavigationProps {
  pages: Page[];
}

const Navigation = ({ pages }: NavigationProps) => {
  return (
    <>
      <div className={styles.navigation}>
        <nav>
          {pages.length ? (
            <ul>
              {pages.map((page) => (
                <li key={page.name}>
                  <NavLink
                    to={page.path}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <>{page.name}</>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
