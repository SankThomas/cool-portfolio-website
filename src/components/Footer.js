import React, { useState } from "react"
import { footer } from "../data/footer"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(footer)

  return (
    <>
      <footer className="flex items-center justify-center" id="contacts">
        <ul className="flex flex-wrap items-center mb-10">
          {links.map((link) => {
            const { id, icon } = link
            return (
              <li key={id} className="text-xl mx-2 md:text-3xl">
                {icon}
              </li>
            )
          })}
        </ul>
      </footer>
    </>
  )
}

export default Footer
