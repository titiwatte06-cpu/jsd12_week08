import Tower from "./02_Tower";
import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/messageContext";

export default function Castle(){

    const {question,handleQuestion,answerInput,pokemonList} = useContext(MessageContext)

    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
        <p className="text-purple-400">
        Message for JSD12:
        <span className="text-yellow-300">
          {/* question or waiting for a message */}
          {question ? question:"Waiting for a message...."}
        </span>

      </p>
      <textarea value={question} onChange={handleQuestion} className="bg-white" placeholder="Type your message here ..."/>
      <p className="text-green-300">Reply from Secret Room
        <span className="text-yellow-300">{/* answer for a waiting reply */}{answerInput ? answerInput:"waiting for a reply..."}</span>
      </p>

      <div className="flex gap-2">
          {pokemonList.map((pokemon, index) => (
              <div key={index}>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
              </div>
          ))}
      </div>
        <h1>Castle</h1>
        <Tower />
    </div>
    );
}

