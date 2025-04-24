// A scatter plot component example for testing purposes

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Expanded data with multiple points
const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
    { name: 'Page F', uv: 239, pv: 3800, amt: 2400 },
    { name: 'Page G', uv: 349, pv: 4300, amt: 2400 },
];

const RenderLineChart = () => {
    return (
        <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
    );
};

export default RenderLineChart;
