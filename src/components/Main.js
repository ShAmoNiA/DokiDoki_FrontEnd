import React from 'react'
import PatientPanel from './PatientPanel'

import './style/main.css'
import Profile from '../profile.png'

export default function Main(props) {

    return (
        <section className="main-container">
            <header>
                <i onClick={props.setOpen} className="bi bi-list side-nav"></i>
                <i className="bi bi-bell notification"></i>
                <span>Dija Larkin</span>

                <img className="header-prof" src={Profile} alt="profile-photo"/>
            </header>
            <PatientPanel/>
        </section>
    );
};