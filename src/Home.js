import React, { Component } from 'react'
import Home1 from './components/Home1'
import Home2 from './components/Home2'

class Home extends Component {
    render() {
        return (
            <div>
                <Home1 />
                <Home2 />
                <h1 style={{ marginTop: '1000px' }}>hcj</h1>
            </div>
        )
    }
}

export default Home
