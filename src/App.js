import React from 'react'
import Chat from './Chat'
import Typed from "react-typed"

const App = () => {
  return (
    <>
    <div>
      <div className="flex justify-center  px-3">
        <span className="text-xl font-extrabold tracking-tight animate-pulse text-gray-100 sm:text-5xl ">
        <Typed 
                    className="typed-text"
                    strings={["React Chatbot","Node Chatbot"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
        </span>
      </div>
      <Chat />
    </div>
    </>
  )
}

export default App
