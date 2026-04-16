"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { Pie, PieChart, Legend, Tooltip } from 'recharts';

const StatsPage = () => {

  const { checkInAction } = useContext(FriendContext);

  const data = [
    {
      name: 'Call',
      value: checkInAction.reduce((count, item) => item.type === "Call" ? count + 1 : count, 0),
      fill: '#166534'
    }, // Purple
    {
      name: 'Text',
      value: checkInAction.reduce((count, item) => item.type === "Text" ? count + 1 : count, 0),
      fill: '#9333ea'
    },
    {
      name: 'Video',
      value: checkInAction.reduce((count, item) => item.type === "Video" ? count + 1 : count, 0),
      fill: '#22c55e'
    },
  ];
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className='container mx-auto max-w-5xl my-10 px-4'>
      <h2 className='font-bold text-3xl md:text-5xl text-gray-700 mb-8'>Friendship Analytics</h2>


      <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-emerald-800 font-semibold text-lg mb-6">By Interaction Type</h3>

        {/* chart  */}
       

        {
          totalValue === 0 ?
            (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                {/* এখানে আপনি চাইলে একটি আইকনও যোগ করতে পারেন */}
                <p className="text-lg font-medium italic">No interactions logged yet.</p>
              </div>
            )
            :
            (
              <PieChart style={
                {
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '80vh',
                  margin: "auto",
                  aspectRatio: 1
                }} responsive>
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            )
        }
      </div>
    </div>
  );
};

export default StatsPage;