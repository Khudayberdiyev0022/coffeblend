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
                                <nav-link class="nav-link" href="#"><Link> Home </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link> Menu </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link> Services </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link> Blog </Link></nav-link>
                            </li>
                            <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link> About </Link></nav-link>
                            </li>
                            <li class="nav-item dropdown">
                                <nav-link class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</nav-link>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <nav-link class="dropdown-item" href="#">Action 1</nav-link>
                                    <nav-link class="dropdown-item" href="#">Action 2</nav-link>
                                </div>
                            </li>
                             <li class="nav-item">
                                <nav-link class="nav-link" href="#"><Link> Contact </Link></nav-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            )
    }
}

export default Navbar