import "./hamburger.css";
import { useNavigate } from "react-router-dom";

const Hamburger = function () {
    const navigate = useNavigate();

    return (
        <div className="hamburger-container">
            <div className="hamburger-menu-container">
                <div className="hamburger-menu-title">MENU</div>
                <ul className="hamburger-content">
                    <li onClick={() => navigate('/crops')}> 🌾 Crops</li>
                    <li>📊 Accounting</li>
                    <li>📈 Market Prices</li>
                    <li>🐄 Livestock</li>
                    <li>🧑‍🌾 My Account</li>
                </ul>
            </div>
        </div>
    );
}

export default Hamburger;