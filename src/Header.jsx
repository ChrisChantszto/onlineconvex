import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './Header.css'; // Make sure to create a Header.css file for header-specific styles
import { useConvexAuth } from "convex/react";
import LoginButton from './login';
import LogoutButton from './logout';

const Header = () => {
    const { isLoading, isAuthenticated } = useConvexAuth();
    return (
        <nav className="header">
            {/* Use Link components for navigation */}
            <Link to="/" className="title">Online Schools</Link>
            <Link to="/programs" className="title">Programs</Link>
            <Link to="/reviews" className="title">Reviews</Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {isAuthenticated ? console.log("You are log in") : console.log("You are log out")}
            {/* Buttons can remain as they are if they perform actions other than navigation */}
            <button className="add-review-btn">Add Reviews</button>
            <button className="add-review-btn">Add Programmes</button>
        </nav>
    );
};

export default Header;