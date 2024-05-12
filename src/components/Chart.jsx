import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "4",
    followersLast10days: 4000,
    newFollowers: 3,
    amt: 2,
  },
  {
    name: "5",
    followersLast10days: 3000,
    newFollowers: 2,
    amt: 2210,
  },
  {
    name: "6",
    followersLast10days: 2000,
    newFollowers: 6,
    amt: 2290,
  },
  {
    name: "7",
    followersLast10days: 2780,
    newFollowers: 8,
    amt: 2000,
  },
  {
    name: "8",
    followersLast10days: 1890,
    newFollowers: 9,
    amt: 2181,
  },
  {
    name: "9",
    followersLast10days: 2390,
    newFollowers: 10,
    amt: 2500,
  },
  {
    name: "10",
    followersLast10days: 3490,
    newFollowers: 9,
    amt: 2100,
  },
  {
    name: "11",
    followersLast10days: 3490,
    newFollowers: 10,
    amt: 2100,
  },
  {
    name: "12",
    followersLast10days: 3490,
    newFollowers: 12,
    amt: 2100,
  },
  {
    name: "13",
    followersLast10days: 3490,
    newFollowers: 12,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart-container" width="100%" height="100%">
      <LineChart width={880} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="newFollowers"
          stroke="hsl(243, 51%, 70%)"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
