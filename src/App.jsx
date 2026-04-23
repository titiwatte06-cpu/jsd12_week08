import { useContext, useState } from "react";
import { MessageContext } from "./contexts/messageContext/messageContext";
import Castle from "./components/01_Castle";
import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";

import Header from "./components/Header";

export default function App() {

  
  const [currentRoom, setCurrentRoom] = useState("Home");

  return (
    
    
    <div className="py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-black text-amber-50">
      <div bg-white>
        <Header changeRoom={setCurrentRoom}/>
      </div>
      
      
      
      

      
      {currentRoom === "Castle" && (
      <>
        <Castle />
        
      </>
      )}      
      
      
    </div>
  ); 
}
