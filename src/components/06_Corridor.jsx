import Gallery from "./07_Gallery"

export default function Corridor({question,answer,handleAnswer,pokemonImage,answerInput}){
    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-300 w-[90%]">
        <h1>Corridor</h1>
        <Gallery question={question} answer={answer} handleAnswer={handleAnswer} pokemonImage = {pokemonImage} answerInput={answerInput}/>
        
    </div>
    );
}