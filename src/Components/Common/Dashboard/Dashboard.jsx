import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './Dashboard.css'

const Dashboard = () => {
    const studentMarks = [
        {
            id: 1,
            name: "Alice",
            roll: 101,
            math: 50,
            physics: 60,
            chemistry: 65
        },
        {
            id: 2,
            name: "Bob",
            roll: 102,
            math: 60,
            physics: 75,
            chemistry: 70
        },
        {
            id: 3,
            name: "Charlie",
            roll: 103,
            math: 55,
            physics: 60,
            chemistry: 65
        },
        {
            id: 4,
            name: "David",
            roll: 104,
            math: 75,
            physics: 55,
            chemistry: 70
        },
        {
            id: 5,
            name: "Eve",
            roll: 105,
            math: 65,
            physics: 70,
            chemistry: 55
        },
        {
            id: 6,
            name: "Frank",
            roll: 106,
            math: 60,
            physics: 75,
            chemistry: 50
        },
        {
            id: 7,
            name: "Grace",
            roll: 107,
            math: 45,
            physics: 60,
            chemistry: 61
        },
        {
            id: 8,
            name: "Harry",
            roll: 108,
            math: 70,
            physics: 45,
            chemistry: 66
        },
        {
            id: 9,
            name: "Irene",
            roll: 109,
            math: 45,
            physics: 50,
            chemistry: 58
        },
        {
            id: 10,
            name: "Jack",
            roll: 110,
            math: 70,
            physics: 55,
            chemistry: 85
        }
    ];

    return (
        <div className="w-9/12 bg-blue-600 text-white p-10 rounded-md m-auto">
            <LineChart
                width={900}
                height={300}
                data={studentMarks}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line dataKey="physics" stroke="#fff"></Line>
                <Line dataKey="math" stroke="#fff"></Line>
                <Line dataKey="chemistry" stroke="#fff"></Line>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip stroke="#000" />
            </LineChart>
        </div>
    );
};

export default Dashboard;