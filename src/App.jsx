import { useState } from "react";
import Castle from "./components/01_Castle";
import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";


export default function App() {
  // creating state variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] =  useState("");
  const [pokemonImage, setPokemonImage] = useState("")
  const [answerInput, setAnswerInput] = useState("")  // ← ลืมเพิ่มอันนี้
  const [pokemonList, setPokemonList] = useState([])

  const handleQuestion = (event) => {
    console.log(event);
    setQuestion(event.target.value);

    
  }

  const handleAnswer = (event) => {
    const value = event.target.value
    setAnswerInput(value)  
    if (event.target.value === "help") {
            const randomId = Math.floor(Math.random() * 151) + 1 

            fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
                .then(res => res.json())
                .then(data => {
                    setAnswer(data.name)
                    setPokemonImage(data.sprites.front_default)  
                    setPokemonList(prev => [...prev, {
                        name: data.name,
                        image: data.sprites.front_default
                    }])
                })
        }
    
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

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} pokemonImage={pokemonImage} answerInput={answerInput}/>
      <SimpleAsyncAwait/>
    </div>
  ); 
}
