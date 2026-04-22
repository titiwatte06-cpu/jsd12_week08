import Corridor from "./06_Corridor";

export default function Hall({question,answer,handleAnswer,pokemonImage,answerInput}){
    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-green-800 w-[90%]">
        <h1>Hall</h1>
        <Corridor question={question} answer={answer} handleAnswer={handleAnswer} pokemonImage = {pokemonImage} answerInput={answerInput} />
        
    </div>
    );
}