import React, { Component } from 'react'
import Home1 from './components/Home1'
import Home2 from './components/Home2'
import Home4 from './components/Home4'
import Home5 from './components/Home5'
import Home6 from './components/Home6'

class Home extends Component {
    render() {
        return (
            <div>
                <Home1 />
                <Home2 />
                <Home4 />
                <Home5 />
                <Home6 />
                <h1 style={{ marginTop: '1000px' }}>hcj</h1>
            </div>
        )
    }
}

export default Home
