import React, { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <ul className="flex flex-wrap md:mr-5">
        {links.map((link) => {
          const { id, title, url } = link
          return (
            <li
              key={id}
              className="mx-1 text-sm sm:text-base font-bold lg:text-lg"
            >
              <a href={url}>{title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
