import React, { Component } from 'react'
import '../styles/home3.css'

class Home3 extends Component {
    render() {
        console.log(this.props.color);
        const { color } = this.props
        return (
            <div className='Home3' style={{ backgroundColor: `${color}` }}>
                <div className="form-group" style={{ backgroundColor: `${color}` }}>
                    <h6 className='m-1'>Book a table</h6>
                    <div className='d-flex'>
                        <input type="text" className="form-control" placeholder="First Name" />
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className='d-flex'>
                        <input type="date" className="form-control" />
                        <input type="time" className="form-control" />
                        <input type="tel" className="form-control" placeholder="Phone" />
                    </div>
                    <div className='d-flex'>
                        <textarea className="form-control" placeholder="Message"></textarea>
                        <input type="submit" className="form-control m-1 p-2" value="Appointment" id="btn" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home3
