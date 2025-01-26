import React, { Component } from 'react';
import './style/Navbar.css';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    render() {
        const { isMenuOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">R&C</div>
                    <button
                        className="navbar-toggle"
                        onClick={this.toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                    <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                        <li className="navbar-item">
                            <NavLink className="navLink" to="/timeline" activeClassName="active">Timeline</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink className="navLink" to="/attendance-confirmation" activeClassName="active">Attendance Confirmation</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
