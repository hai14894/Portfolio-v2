import React from "react"
import githubIcon from "../assets/github.png"
import linkedinIcon from "../assets/linkedin.png"
import mediumIcon from "../assets/medium.png"
import twitterIcon from "../assets/twitter.png"
import NeumorphicStyle from "./NeumorphicStyle"

const NeumorphicIcon = () => {
  return (
    <div>
      <NeumorphicStyle
        tooltip
        tooltipText="GitHub"
        src={githubIcon}
        alt="GitHub Logo"
        url="https://github.com/hai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="Twitter"
        src={twitterIcon}
        alt="Twitter Logo"
        url="https://twitter.com/hai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="Medium"
        src={mediumIcon}
        alt="Medium Logo"
        url="https://medium.com/@hohoanghai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="LinkedIn"
        src={linkedinIcon}
        alt="LinkedIn Logo"
        url="https://www.linkedin.com/in/hai14894/"
      />
    </div>
  )
}

export default NeumorphicIcon