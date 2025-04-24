// Home page of the web app
// It is the first page that the user sees

import "./Home.css";
import RenderLineChart from "../charts/Line.jsx";
import ButtonUsage from "../simple/Button.jsx";
import Hamburger from "../menus/hamburger.jsx";
import Header from "../miscellaneous/Header.jsx";

const Home = function () {
    return (
        <div className="test">
            <Header />
            <Hamburger />
        </div>
    );
}

export default Home;