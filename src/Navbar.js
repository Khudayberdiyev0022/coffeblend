import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <nav class="navbar navbar-expand-md navbar-light bg-light">
                    <nav-link class="navbar-brand" href="#"><Link> Navbar </Link></nav-link>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <nav-link class="nav-link" href="#"><Link to='/'> Home </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link to='/menu'> Menu </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link to='/services'> Services </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link to='/blog'> Blog </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link to='/about'> About </Link></nav-link>
                            </li>
                            <li class="nav-item dropdown">
                                <nav-link class="nav-link" href="#"><Link to='/shop'> Shop </Link></nav-link>
                            </li>
                             <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link to='/contact'> Contact </Link></nav-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            )
    }
}

export default Navbar