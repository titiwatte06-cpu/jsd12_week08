import { useState } from "react";
import { MessageContext } from "./messageContext"

export const MessageProvider = ({children}) => {

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
    return(
       
        <MessageContext.Provider value = {{question,answer,handleQuestion,handleAnswer,pokemonList}} >
            {children}

        </MessageContext.Provider>
    )

}