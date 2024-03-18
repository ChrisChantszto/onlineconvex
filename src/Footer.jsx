import React from 'react';
import coffeeIcon from './coffee-icon.png'; // Place a coffee icon image in your src folder.

const Footer = () => {
    const footerStyle = {
        display: 'flex', // This will align items in a row
        alignItems: 'center', // This will center items vertically
        justifyContent: 'space-between', // This will place space between your items
        padding: '10px 20px', // Adjust padding as needed
    };

    const coffeeLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none', // Removes underline from link
    };

    const coffeeImageStyle = {
        height: '50px', // Adjust the size of the image as needed
        width: 'auto',
        cursor: 'pointer', // Changes the cursor to a pointer to indicate it's clickable
        transition: 'transform 0.2s', // Adds a subtle transform effect on hover
    };

    // Add this function inside your Footer component
    const handleMouseOver = (e) => {
        e.target.style.transform = 'scale(1.1)';
    };

    const handleMouseOut = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    return (
        <footer style={footerStyle}>
            <p>Chris Chan © 2024</p>
            <a href="https://www.buymeacoffee.com/yourprofile" style={coffeeLinkStyle}>
                <img
                    src={coffeeIcon}
                    alt="Buy Me a Coffee"
                    style={coffeeImageStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </a>
        </footer>
    );
};

export default Footer;