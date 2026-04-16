import React, { useEffect, useState } from 'react';

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://keen-keeper-ecru-two.vercel.app/data.json");
        const data = await res.json();

        setFriends(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return { friends, loading };
};

export default useFriends;