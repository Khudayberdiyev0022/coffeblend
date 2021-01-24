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


    render() {
        return (
            <div style={{ backgroundImage: `url(${this.state.img})` }} className='back'>
                
            </div>
        )
    }
}

export default Home1