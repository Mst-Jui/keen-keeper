"use client"
import { createContext, useState } from "react";

export const FriendContext = createContext();
const FriendProvider = ({ children }) => {
  const [selectedFriend, setSelectedFriend] = useState([]);
  const [checkInAction, setCheckInAction] = useState([]);
  const addTimelineEntry = (newEntry) => {
  setCheckInAction((prev) => [newEntry, ...prev]); 
};
  const data = {
    selectedFriend,
    setSelectedFriend,
    checkInAction,
    setCheckInAction,
    addTimelineEntry,
  }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
}

export default FriendProvider;