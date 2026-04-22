import Nook from "./08_Nook"

export default function Gallery({question,answer,handleAnswer,pokemonImage,answerInput}){

    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-500 w-[90%]">
        <h1>Gallery</h1>
        <Nook question={question} answer={answer} handleAnswer={handleAnswer} pokemonImage = {pokemonImage} answerInput={answerInput}/>
        
    </div>
    );
}