import React, { Component } from 'react'
import '../styles/home3.css'

class Home3 extends Component {
    render() {
        console.log(this.props.color);
        const { color } = this.props
        return (
            <div className='Home3' style={{ backgroundColor: `${color}` }}>
                <div className="form-group" style={{ backgroundColor: `${color}` }}>
                    <h3 className='text-light m-1'>Book a table</h3>
                    <div className='input_top d-flex'>
                        <input type="text" className="form-control m-1" placeholder="First Name" />
                        <input type="text" className="form-control m-1" placeholder="Last Name" />
                    </div>
                    <div className='input_top d-flex'>
                        <input type="date" className="form-control m-1" />
                        <input type="time" className="form-control m-1" />
                        <input type="tel" className="form-control m-1" placeholder="Phone" />
                    </div>
                    <div className='input_top d-flex'>
                        <textarea className="form-control m-1" cols="70" rows="1" placeholder="Message"></textarea>
                        <input type="submit" className="form-control m-1 " value="Appointment" id="btn" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home3
