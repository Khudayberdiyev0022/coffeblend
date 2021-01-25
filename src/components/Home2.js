import React, { Component } from 'react'
import '../styles/home2.css'
import { FiPhone } from 'react-icons/fi'
import { MdGpsFixed } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Home3 from './Home3'

class Home2 extends Component {
    render() {
        return (
            <div className='Home2'>
                <div className='container pt-5'>
                    <div class="row no-gutters">
                        <div className='col-md-3 d-flex'>
                            <div className='icon'>
                                <FiPhone />
                            </div>
                            <div className="text">
                                <h6>000 (123) 456 7890</h6>
                                <p className='text-muted'>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                        <div className='col-md-3 d-flex'>
                            <div className='icon'>
                                <MdGpsFixed />
                            </div>
                            <div className="text">
                                <h6>198 West 21th Street</h6>
                                <p className='text-muted'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                        <div className='col-md-3 d-flex'>
                            <div className='icon'>
                                <AiOutlineClockCircle />
                            </div>
                            <div className="text">
                                <h6>Open Monday-Friday</h6>
                                <p className='text-muted'>8:00am - 9:00pm</p>
                            </div>
                        </div>
                <Home3 />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home2
