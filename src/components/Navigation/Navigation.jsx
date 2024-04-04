import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css'
import { RiMovie2Line } from "react-icons/ri";

const buildLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active] : isActive, });

const Navigation = () => {

  return (
    <header className={css.header}>
      <RiMovie2Line color='blue' size='50' className={css.icon} />
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
    </header>
  );
};

export default Navigation;