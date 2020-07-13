
import React from "react"
import styles from "./NeumorphicStyle.module.css"
import {Link} from 'gatsby'

const NeumorphicIcon = props => {
return (
<span className={styles.icon}>
    <Link to={props.url} target="__blank">
        <img src={props.src} alt={props.alt} />
    </Link>
    {props.tooltip && (
    <span className={styles.tooltip}>{props.tooltipText}</span>
    )}
</span>
)
}

export default NeumorphicIcon