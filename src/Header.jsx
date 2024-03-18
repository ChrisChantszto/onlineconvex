import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component from react-router-dom
import './Header.css'; // Make sure to create a Header.css file for header-specific styles
import { useConvexAuth } from "convex/react";
import LoginButton from './login';
import LogoutButton from './logout';

const Header = () => {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useConvexAuth();
    const handleAddReviewClick = () => {
        navigate('/add-review'); // Navigate to the ReviewsForm when the button is clicked
    };
    return (
        <nav className="header">
            <Link to="/" className="title">Online Schools</Link>
            <Link to="/programs" className="title">Programs</Link>
            <Link to="/reviews" className="title">Reviews</Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {isAuthenticated ? console.log("You are log in") : console.log("You are log out")}
            {/* Buttons can remain as they are if they perform actions other than navigation */}
            <button className="add-review-btn" onClick={handleAddReviewClick}>Add Reviews</button>
            <button className="add-review-btn">Add Programmes</button>
        </nav>
    );
};

export default Header;