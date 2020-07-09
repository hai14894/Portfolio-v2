import React from "react"
import emailIcon from "../assets/Mail-icon.png"
import githubIcon from "../assets/github.png"
import linkedinIcon from "../assets/linkedIn.svg"
import mediumIcon from "../assets/medium.png"
import twitterIcon from "../assets/twitter.png"
import NeumorphicStyle from "./NeumorphicStyle"

const NeumorphicIcon = () => {
  return (
    <div>
      <NeumorphicStyle
        tooltip
        tooltipText="GitHub"
        imgSrc={githubIcon}
        altText="GitHub Logo"
        linkUrl="https://github.com/hai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="Twitter"
        imgSrc={twitterIcon}
        altText="Twitter Logo"
        linkUrl="https://twitter.com/hai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="Medium"
        imgSrc={mediumIcon}
        altText="Medium Logo"
        linkUrl="https://medium.com/@hohoanghai14894"
      />
      <NeumorphicStyle
        tooltip
        tooltipText="LinkedIn"
        imgSrc={linkedinIcon}
        altText="LinkedIn Logo"
        linkUrl="https://www.linkedin.com/in/hai14894/"
      />
    </div>
  )
}

export default NeumorphicIcon