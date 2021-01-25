import React, { Component } from 'react'
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/bg_1.jpg'
import img2 from '../images/bg_2.jpg'
import img3 from '../images/bg_3.jpg'
import '../styles/home1.css'


class Home1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: img1,
            img1: img2,
            img2: img3,
            img3: img1
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            switch (this.state.img) {
                case img1:
                    this.setState({ img: img2 })
                    break;
                case img2:
                    this.setState({ img: img3 })
                    break;
                case img3:
                    this.setState({ img: img1 })
                    break;

                default:
                    this.setState({ img: null })
                    break;
            }
        }, 8000)
    }

    componentWillUnmount() {
        clearInterval(this.setInterval)
    }
    textRender = () => {
        if (this.state.img === img1) {
            return (
                <div>
                    <h1>The Best Coffee Testing Experience</h1>
                 
                </div>
            )
        } else if (this.state.img === img2) {
            return (
                <div>
                    <h1> Amazing Taste &  Beautiful Place</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Creamy Hot And Ready To Serve</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='Home1' style={{ backgroundImage: `url(${this.state.img})` }} >
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 text-center'>
                            <h3>Welcome</h3>
                            {this.textRender()}
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className='btn btn1'>Order Now</button>
                            <button className='btn btn-outline-light'>View Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home1