import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // creating state variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] =  useState("");

  const handleQuestion = (event) => {
    console.log(event);
    setQuestion(event.target.value);
  }

  const handleAnswer = (event) => {
    console.log(event);
    setAnswer(event.target.value);
  }

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-blue-300">
      <p className="text-purple-400">
        Message for JSD12:
        <span className="text-yellow-300">
          {/* question or waiting for a message */}
          {question ? question:"Waiting for a message...."}
        </span>

      </p>
      <textarea value={question} onChange={handleQuestion} className="bg-white" placeholder="Type your message here ..."/>
      <p className="text-green-300">Reply from Secret Room
        <span className="text-yellow-300">{/* answer for a waiting reply */}{answer ? answer:"waiting for a reply..."}</span>
      </p>
      <Castle question={question} answer={answer} handleAnswer={handleAnswer}/>

    </div>
  ); 
}
