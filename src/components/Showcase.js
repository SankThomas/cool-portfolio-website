import React from "react"
import ReactTypingEffect from "react-typing-effect"
import heroImage from "../assets/hero.jpeg"

const Showcase = () => {
  return (
    <>
      <section id="home">
        <div>
          <img src={heroImage} alt="" className="h-72 w-full md:h-96" />
        </div>
      </section>

      <div className="text-center text-white text-xl font-bold pt-2 pb-5 md:text-3xl lg:text-5xl xl:text-6xl">
        <ReactTypingEffect
          text={["Hi, my name is Sankara", "I am a Web Developer"]}
          speed={50}
          eraseSpeed={15}
          typingDelay={1500}
          cursorRenderer={(cursor) => <h2>{cursor}</h2>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`
                  return <span key={key}>{char}</span>
                })}
              </h1>
            )
          }}
        />
        <div className="bg-indigo-900 h-1 w-16 mx-auto mt-2"></div>
      </div>
    </>
  )
}

export default Showcase
