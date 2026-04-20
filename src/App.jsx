import Castle from "./components/Castle";

export default function App() {
  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-blue-300">
      <p className="text-purple-400">
        Message for JSD12:

        <span className="text-yellow-300">
          {/* question or waiting for a message */}
        </span>

      </p>
      <textarea value="banana" onChange="" className="bg-white" placeholder="Type your message here ..."/>
      <p className="text-green-300">Reply from Secret Room
        <span className="text-yellow-300">{/* answer for a waiting reply */}</span>
      </p>
      <Castle />
    </div>
  ) 
}
