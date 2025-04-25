import "./hamburger.css";
import {useNavigate} from "react-router-dom";

const Hamburger = function () {
    const navigate = useNavigate();

    return (
        <div className="hamburger-container">
            <div className="hamburger-menu-container">
                <div className="hamburger-menu-title">MENU</div>
                <ul className="hamburger-content">
                    <li>🌾 Crops</li>
                    <li>📊 Accounting</li>
                    <li>📈 Market Prices</li>
                    <li>🐄 Livestock</li>
                    <li onClick={() => navigate("/Login")}>🧑‍🌾 Login</li>
                </ul>
            </div>
        </div>
    );
}

export default Hamburger;