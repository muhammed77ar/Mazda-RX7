import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';

// Real-world-inspired data for Mazda RX-7 FD3S (approximated from typical stock dyno runs)
// Source: Approximated from RX-7 forums and tuning data (e.g., 276 HP official, often ~290-300 HP at wheels)
const data = [
  { rpm: 1000, hp: 45, torque: 115 },
  { rpm: 2000, hp: 75, torque: 165 },
  { rpm: 3000, hp: 125, torque: 195 },
  { rpm: 4000, hp: 175, torque: 220 }, // First turbo spools
  { rpm: 4500, hp: 205, torque: 231 }, // Peak torque (matches your 231 lb-ft spec)
  { rpm: 5000, hp: 235, torque: 228 }, // Second turbo kicks in
  { rpm: 6000, hp: 275, torque: 215 },
  { rpm: 6500, hp: 290, torque: 208 }, // Peak power (realistic "above official" value)
  { rpm: 7000, hp: 288, torque: 200 },
  { rpm: 7500, hp: 285, torque: 190 },
  { rpm: 8000, hp: 280, torque: 180 },
  { rpm: 8500, hp: 270, torque: 170 },
];

const DynoChart = () => {
  const [zoomDomain, setZoomDomain] = useState(null);
  const [showTorque, setShowTorque] = useState(true); // Toggle for torque line
  const [selectedPoint, setSelectedPoint] = useState(null); // For clickable points

  const handleResetZoom = () => {
    setZoomDomain(null);
    setSelectedPoint(null); // Reset selected point too
  };

  const handlePointClick = (point) => {
    setSelectedPoint(point); // Set clicked point data
  };

  return (
    <div className="bg-gradient-to-br mb-6 from-gray-900 via-gray-800 to-gray-700 p-6 rounded-xl shadow-[0_8px_24px_rgb(0_0_0/0.5)] border-2 border-gradient">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
          🔹 RX-7 FD3S Dyno Chart
        </h4>
        <div className="flex gap-4">
          <button
            onClick={() => setShowTorque(!showTorque)}
            className="px-3 py-1 text-sm text-white bg-amber-600 hover:bg-amber-700 rounded-md transition duration-300"
          >
            {showTorque ? 'Hide Torque' : 'Show Torque'}
          </button>
          <button
            onClick={handleResetZoom}
            className="px-3 py-1 text-sm text-white bg-orange-600 hover:bg-orange-700 rounded-md transition duration-300"
          >
            Reset Zoom
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-300 mb-6">
        Interactive power and torque curve with twin-turbo dynamics.
      </p>
      {selectedPoint && (
        <div className="mb-2 p-3 bg-gray-800 rounded-lg text-white text-sm">
          RPM: {selectedPoint.rpm} | Power: {selectedPoint.hp} HP | Torque: {selectedPoint.torque} lb-ft
        </div>
      )}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          domain={zoomDomain}
          onClick={(e) => {
            if (e && e.activePayload) {
              handlePointClick(e.activePayload[0].payload);
            }
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#666" />
          <XAxis
            dataKey="rpm"
            label={{ value: 'RPM', position: 'insideBottom', offset: -10, fill: '#fff' }}
            stroke="#fff"
            tick={{ fill: '#fff' }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <YAxis
            yAxisId="left"
            label={{ value: 'Horsepower (HP)', angle: -90, position: 'insideLeft', fill: '#f97316' }}
            stroke="#f97316"
            tick={{ fill: '#f97316' }}
            domain={[0, 320]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: 'Torque (lb-ft)', angle: 90, position: 'insideRight', fill: '#f59e0b' }}
            stroke="#f59e0b"
            tick={{ fill: '#f59e0b' }}
            domain={[0, 250]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            labelFormatter={(label) => `RPM: ${label}`}
            formatter={(value, name) => [`${value} ${name === 'hp' ? 'HP' : 'lb-ft'}`, name === 'hp' ? 'Power' : 'Torque']}
          />
          <Legend wrapperStyle={{ color: '#fff', paddingTop: '10px' }} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="hp"
            name="Power"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 4, fill: '#f97316', stroke: '#fff', strokeWidth: 1 }}
            activeDot={{ r: 8, fill: '#fff', stroke: '#f97316' }}
            animationDuration={2500}
            animationEasing="ease-in-out"
          />
          {showTorque && (
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="torque"
              name="Torque"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ r: 4, fill: '#f59e0b', stroke: '#fff', strokeWidth: 1 }}
              activeDot={{ r: 8, fill: '#fff', stroke: '#f59e0b' }}
              animationDuration={2500}
              animationEasing="ease-in-out"
            />
          )}
          <Brush
            dataKey="rpm"
            height={30}
            stroke="#f97316"
            fill="#333"
            travellerWidth={10}
            onChange={(e) => setZoomDomain([e.startIndex, e.endIndex])}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynoChart;