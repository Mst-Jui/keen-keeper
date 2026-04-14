import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Friend = ({ friend }) => {

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="w-72 bg-white shadow-md rounded-2xl p-5 text-center border border-gray-100">

        {/* Profile Image  */}
        <div className="flex justify-center">
          <Image
            src={friend.picture}
            alt="profile"
            className="rounded-full object-cover shadow-sm"
            width={80}
            height={80}
          />
        </div>

        {/* Name  */}
        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          {friend.name}
        </h2>

        {/* Time  */}
        <p className="text-sm text-gray-400 mt-1">
          {friend.next_due_date}
        </p>

        {/* Tag  */}
        <div className="mt-3">
          <div className="flex gap-2 flex-wrap justify-center">

            {friend.tags.map((t, index) => (
              <span key={index}
                className="px-3 py-1 gap-2 text-xs font-medium bg-green-100 text-green-700 rounded-full"
              >
                {t}
              </span>))}

          </div>
        </div>

        {/* Status  */}
        <div className="mt-2">
          <span className={`inline-block px-3 py-1 text-xs font-medium  text-white rounded-full 
          ${friend.status === "overdue"
                ? "bg-red-500"
                : (friend.status === "on-track"
                ? "bg-green-900"
                : "bg-yellow-400 "
              )}`}>
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default Friend;