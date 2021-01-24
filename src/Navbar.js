import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import './styles/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar container-fluid'>
                <nav class="navbar navbar-expand-md navbar-light nav-item">
                    <Link> Navbar </Link>
                    <button class="navbar-toggler d-lg-none" type="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <Link to='/'> Home </Link>
                            </li>
                            <li class="nav-item">
                             <Link to='/menu'> Menu </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/services'> Services </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blog'> Blog </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about'> About </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to='/shop'> Shop </Link>
                            </li>
                             <li class="nav-item">
                                <Link to='/contact'> Contact </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/shoppingcard'> <FiShoppingCart /> </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            )
    }
}

export default Navbar