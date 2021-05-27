import React from 'react';
import {Link, useHistory } from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = () => {
    const history = useHistory();
    const test = useSelector(state => state.message);


    return <div className="chat-navbar">
        <nav className="chat-navbar-inner">
            <div className="chat-navbar-inner-left">
                <button className="btn btn-primary btn-sm back-button"
                        onClick={()=> history.goBack()}
                >Back</button>
                <Link to="/settings" className="btn btn-outline-success ml-2">Settings</Link>
            </div>
            <div className="chat-navbar-inner-right">
                <span className="logged-in-user">{test}</span>
                <Link
                    to='/register'
                    className="btn btn-sm btn-outline-danger ml-2">Register
                </Link>
                <Link
                    to='/login'
                    className="btn btn-sm btn-outline-success ml-2">Login
                </Link>
            </div>
        </nav>
    </div>
}

export default NavBar;
