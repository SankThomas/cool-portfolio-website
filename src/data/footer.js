import React from "react"
import { v4 as uuidv4 } from "uuid"
import { GrFacebook } from "react-icons/gr"
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaDev,
} from "react-icons/fa"

export const footer = [
  {
    id: uuidv4(),
    icon: <GrFacebook />,
  },
  {
    id: uuidv4(),
    icon: <FaTwitter />,
  },
  {
    id: uuidv4(),
    icon: <FaInstagram />,
  },
  {
    id: uuidv4(),
    icon: <FaLinkedin />,
  },
  {
    id: uuidv4(),
    icon: <FaYoutube />,
  },
  {
    id: uuidv4(),
    icon: <FaDev />,
  },
  {
    id: uuidv4(),
    icon: <FaGithub />,
  },
]
