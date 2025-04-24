// Simple Header for home/main page

// Imports
import "./Header.css";

// Header Component
const Header = function () {
    return (
        <div className="main-page-header-section">
            <div className="main-page-header-logo"></div>
            <ul className="main-page-header-content">
                <li>Home</li>
                <li>Analysis</li>
                <li>Business</li>
                <li>Miscellaneous</li>
            </ul>
        </div>
    )
}

export default Header;