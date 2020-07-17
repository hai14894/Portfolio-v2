
import React from "react"
import styles from "./NeumorphicStyle.module.css"
import {Link} from 'gatsby'

const NeumorphicIcon = props => {
return (
<span className={styles.icon}>
    <a href={props.url} target="__blank">
        <img src={props.src} alt={props.alt} />
    </a>
    {props.tooltip && (
    <span className={styles.tooltip}>{props.tooltipText}</span>
    )}
</span>
)
}

export default NeumorphicIcon