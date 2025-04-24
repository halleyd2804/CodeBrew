import "./hamburger.css";

const Hamburger = function () {
    return (
        <div className="hamburger-container">
            <div className="hamburger-menu-container">
                <div className="hamburger-menu-title">MENU</div>
                <ul className="hamburger-content">
                    <li>🌾 Crops</li>
                    <li>📊 Accounting</li>
                    <li>📈 Market Prices</li>
                    <li>🐄 Livestock</li>
                </ul>
            </div>
        </div>
    );
}

export default Hamburger;