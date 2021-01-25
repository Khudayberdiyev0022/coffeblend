import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import './styles/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scroll: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrallFunc)
    }

    scrallFunc = () => {
        console.log(window.scrollY);
        if (window.scrollY > 400) {
            this.setState({ scroll: true })
        } else {
            this.setState({ scroll: false })

        }
    }
    // Navbar container-fluid
    render() {
        return (
            <div className={this.state.scroll ? 'Navbar container-fluid black' : 'Navbar container-fluid'}>
                <nav class="navbar navbar-expand-lg navbar-dark nav-item">
                    <Link to='/'> <h4> Coffee <small className='brandBlend'>Blend</small>   </h4>   </Link>
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
                                <Link to='/shopcard'> <FiShoppingCart /> </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar