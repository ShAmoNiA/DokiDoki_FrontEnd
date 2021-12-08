import React from "react";

import './style/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <div>
                    <span>Denta care</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div>
                    <ul>
                        <span>Company</span>
                        <li>About Us</li>
                        <li>Leadership</li>
                        <li>History</li>
                        <li>Careers</li>
                        <li>Legal Notice</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <span>Support</span>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Get an Appointment</li>
                        <li>Help Center</li>
                        <li>Ticket System</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <span>Location</span>
                        <li>Location</li>
                        <li>support@domain.com</li>
                        <li>+11111111111</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="footer-more">
                <div>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Term of Use</li>
                        <li>Cookie Policy</li>
                        <li>Patient Right and Advocacy</li>
                    </ul>
                </div>
                <div>
                    <span><i className="bi bi-facebook"></i></span>
                    <span><i className="bi bi-twitter"></i></span>
                    <span><i className="bi bi-linkedin"></i></span>
                </div>
                <div>
                    <span>Copyright 2021 Dentacare, All rights reserved. Powered by MoxCreative</span>
                </div>
            </div>


        </footer>
    );
};