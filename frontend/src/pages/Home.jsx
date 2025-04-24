import "./Home.css";
import RenderLineChart from "../charts/Line.jsx";
import ButtonUsage from "../simple/Button.jsx";

const Home = function () {
    return (
        <div className="test">
            <RenderLineChart />
            <ButtonUsage />
        </div>
    );
}

export default Home;