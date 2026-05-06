import { createContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider() {
  const [range, setRagnge] = useState();
}