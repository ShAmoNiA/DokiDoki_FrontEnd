import React, {useState} from 'react'

import Nav from './components/Nav'
import Main from './components/Main'

import './App.css'

function App() {

    const {innerWidth: width, innerHeight: height} = window;

    const [isOpen, open] = useState(false);

    const openNav = () => {
        open(!isOpen);
    }

    return (
        <div className="box">
            <Nav isOpen={isOpen}/>
            <Main setOpen={openNav}/>
        </div>
    );
}

export default App;
