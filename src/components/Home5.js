import React, { Component } from 'react'
import '../styles/home5.css'
import {CgNotes} from 'react-icons/cg'
import {RiTruckLine} from 'react-icons/ri'
import {GiCoffeeBeans} from 'react-icons/gi'

class Home5 extends Component {
    render() {
        return (
            <div className='Home5'>
                <div className='container'>
                <div className="row m-0 text-center">
                    <div className='col-md-4 '>
                        <div className='icon_border'> <CgNotes /> </div>
                        <h5>EASY TO ORDER</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>         
                    </div>
                    <div className='col-md-4 '>
                      <div className='icon_border'> <RiTruckLine /> </div>
                        <h5>EASY TO ORDER</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>          
                    </div>
                    <div className='col-md-4 '>
                        <div className='icon_border'> <GiCoffeeBeans /> </div>
                        <h5>EASY TO ORDER</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>         
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home5
