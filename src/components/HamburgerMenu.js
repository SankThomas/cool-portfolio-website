import React from "react"
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="block text-4xl">
        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  )
}

export default HamburgerMenu
