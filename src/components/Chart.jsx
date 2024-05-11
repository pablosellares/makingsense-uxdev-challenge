import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "4",
    newFollowers: 4000,
    followersLast10days: 2400,
    amt: 2,
  },
  {
    name: "5",
    newFollowers: 3000,
    followersLast10days: 1398,
    amt: 2210,
  },
  {
    name: "6",
    newFollowers: 2000,
    followersLast10days: 9800,
    amt: 2290,
  },
  {
    name: "7",
    newFollowers: 2780,
    followersLast10days: 3908,
    amt: 2000,
  },
  {
    name: "8",
    newFollowers: 1890,
    followersLast10days: 4800,
    amt: 2181,
  },
  {
    name: "9",
    newFollowers: 2390,
    followersLast10days: 3800,
    amt: 2500,
  },
  {
    name: "10",
    newFollowers: 3490,
    followersLast10days: 4300,
    amt: 2100,
  },
  {
    name: "11",
    newFollowers: 3490,
    followersLast10days: 4300,
    amt: 2100,
  },
  {
    name: "12",
    newFollowers: 3490,
    followersLast10days: 4300,
    amt: 2100,
  },
  {
    name: "13",
    newFollowers: 3490,
    followersLast10days: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart-container" width="100%" height="100%">
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="followersLast10days"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="newFollowers" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;
