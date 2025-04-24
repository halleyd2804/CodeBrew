// Crops page of the web app
// This page contains information relating to crops inventory tracking

import "./Crops.css";
import Hamburger from "../menus/hamburger.jsx";
import Header from "../miscellaneous/Header.jsx";



// Sample data - replace with your actual data or fetch from an API
const cropsData = [
    {
        id: 1,
        crop: "Wheat",
        cost: 1500,
        size: "5 acres",
        expectedYield: "8 tons",
        salesPrediction: 4000,
        profitLoss: 2500
    },
    {
        id: 2,
        crop: "Corn",
        cost: 2000,
        size: "8 acres",
        expectedYield: "12 tons",
        salesPrediction: 4800,
        profitLoss: 2800
    },  
];

const Crops = function () {
    return (
        <div className="crops-container">

            <Header />
            <Hamburger />
   
            {/*crop table data*/}
            <div className="crops-table-container">
                <h2 class="subtitle">Crops Inventory</h2>
                <table className="crops-table">
                <thead>
                    <tr>
                    <th>Crop</th>
                    <th>Cost ($)</th>
                    <th>Size</th>
                    <th>Expected Yield</th>
                    <th>Sales Prediction ($)</th>
                    <th>Profit/Loss ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {cropsData.map((crop) => (
                    <tr key={crop.id}>
                        <td>{crop.crop}</td>
                        <td>{crop.cost.toLocaleString()}</td>
                        <td>{crop.size}</td>
                        <td>{crop.expectedYield}</td>
                        <td>{crop.salesPrediction.toLocaleString()}</td>
                        <td className={crop.profitLoss >= 0 ? "profit" : "loss"}>
                        {crop.profitLoss >= 0 ? "+" : ""}
                        {crop.profitLoss.toLocaleString()}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            
            <button class="button"> Create new entry </button>
        </div>
    );
}

export default Crops;