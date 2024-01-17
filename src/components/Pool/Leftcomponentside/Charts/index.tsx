import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",

    pv: 10,
    amt: 0,
  },
  {
    name: "Feb",

    pv: 5,
    amt: 5,
  },
  {
    name: "Mar",

    pv: 3,
    amt: 10,
  },
  {
    name: "Apr",

    pv: 5,
    amt: 15,
  },
  {
    name: "Jun",

    pv: 7,
    amt: 20,
  },
  {
    name: "Jul",

    pv: 8,
    amt: 25,
  },
  {
    name: "Aug",

    pv: 10,
    amt: 30,
  },
  {
    name: "Sep",

    pv: 11,
    amt: 35,
  },
  {
    name: "Oct",

    pv: 6,
    amt: 40,
  },
];

const Charts = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#313131" strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ right: 2 }} />
          <YAxis tickFormatter={(value) => `$${value}m`} />
          {/* <Tooltip />*/}

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#40E0D0"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Charts;
