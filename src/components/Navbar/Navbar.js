import React from 'react'
import './Navbar.css';
import '../General/general.css';
import Logo from '../Logo/Logo';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import Links from '../Links/Links';

export default function Navbar(){
    return(
      <nav className="navbar bg-body-tertiary">
      <Logo/>
      <Location/>
      <SearchBar/>
      <Links/>
</nav>

    )
}