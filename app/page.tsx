'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Mar', customers: 70 },
  { month: 'Apr', customers: 155 },
  { month: 'May', customers: 250 },
  { month: 'Jun', customers: 350 },
  { month: 'Jul', customers: 445 },
  { month: 'Aug', customers: 535 },
  { month: 'Sep', customers: 635 },
  { month: 'Oct', customers: 725 },
  { month: 'Nov', customers: 810 },
  { month: 'Dec', customers: 880 },
  { month: 'Jan', customers: 945 },
  { month: 'Feb', customers: 1000 },
];

export default function Page() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>KYT Insurance – Growth Dashboard</h1>
      <p>12-month cumulative customers</p>

      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="customers" stroke="#2ca02c" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
