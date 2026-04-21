
export default function SecretRoom({question,answer,handleAnswer}){

    

    return(
    <div className="flex flex-col justify-center items-center pt-10 bg-black w-[90%] text-amber-50">
        <h1>SecretRoom</h1>
        <p>Message from outside
            <span> {question ? question:"Waiting for a message...."}</span>
        </p>
        <textarea value={answer} onChange={handleAnswer} handleAnswer={handleAnswer} className="bg-white text-black" placeholder="Type your message here ..."/>
        <p>
            Reply to The outside:
            <span className="text-yellow-300"> {answer ? answer:"Waiting for a message...."}</span>
        </p>
    </div>
    );
}