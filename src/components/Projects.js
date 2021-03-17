import React, { useState } from "react"
import { projects } from "../data/projects"

const Projects = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(projects)

  return (
    <>
      <div className="mt-20" id="projects">
        <h2 className="text-center text-4xl mb-4">Projects</h2>
        <div className="bg-indigo-900 h-1 w-16 mx-auto mt-2 mb-4"></div>
      </div>

      <section className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:px-32 2xl:grid-cols-4 pb-20">
        {cards.map((card) => {
          const { id, title, desc, tech, image } = card
          return (
            <article
              key={id}
              className="bg-white p-5 rounded-lg text-gray-900 shadow-lg transition-all duration-500 hover:shadow-sm"
            >
              <img src={image} alt={title} className="w-full h-72" />
              <h4 className="mt-2 mb-3 font-bold text-xl">{title}</h4>
              <p>{desc}</p>
              <ul>
                <p className="mt-2 font-bold">Tech used:</p>
                {tech.map((t) => {
                  return <li key={t}>{t}</li>
                })}
              </ul>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Projects
