"use Client";

import { createContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider() {
  const [range, setRagnge] = useState(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRagnge }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if(context === undefined) throw new Error ("Context was outside provider");
}

export default ( ReservationProvider, useReservation );