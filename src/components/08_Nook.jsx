import SecretRoom from "./09_SecretRoom"

export default function Nook({question,answer,handleAnswer,pokemonImage,answerInput}){

    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-800 w-[90%]">
        <h1>Nook</h1>
        <SecretRoom question={question} answer={answer} handleAnswer={handleAnswer} pokemonImage = {pokemonImage} answerInput={answerInput}/>
        
    </div>
    );
}