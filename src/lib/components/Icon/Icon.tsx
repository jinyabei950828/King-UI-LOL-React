import React from "react"
import './importAllIcons'
import './icon.scss'
import classes from "../helpers/classes"

interface IconProps extends React.SVGAttributes<SVGAElement>{
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({className,name,...restProps})=>{
  return (
    <svg
      className={classes('king-icon',className)}
      {...restProps}
    >
      <use xlinkHref={'#'+name}/>
    </svg>
  )
}

export default Icon
export type {IconProps}