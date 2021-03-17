import React, { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Navbar from "./Navbar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full flex items-center justify-end px-2 py-4 shadow-lg bg-green-500 md:px-5">
        <div className="absolute left-2 md:left-5">
          {isOpen ? "" : <Logo />}
        </div>
        {isOpen && <Navbar />}
        <div>
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header
