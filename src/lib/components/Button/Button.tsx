import React from "react";
import classNames from 'classnames'
import {Icon} from '../Icon/Icon'

interface BaseButtonProps{
  className?:string;
  disabled?:boolean;
  size?:'lg'|'sm',
  href?:string;
  types?:'icon'|'default'|'primary'|'danger'|'link'|'glory'
  name:string
}

//如果不同属性直接合并，相关属性取交集
type NativeButtonProps = BaseButtonProps&React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps&React.AnchorHTMLAttributes<HTMLElement>
//Partial:把属性变成可选属性
export type ButtonProps = Partial<NativeButtonProps&AnchorButtonProps>

const Button:React.FC<ButtonProps> = (props)=>{
  const {name,disabled,size,href,types,children,className,...restProps} = props

  const btnClass = classNames('king-button',className,{
    [`king-button-${types}`]:types,
    [`king-button-${size}`]:size,
    'disabled':disabled
  })

  if(types==='link'&&href){
    return (
      <a className={btnClass} href={href} {...restProps}>
        {children}
      </a>
    )
  }else if(types==='icon'&&name){
    return (
      <button className={btnClass} disabled={disabled} {...restProps}>
        <Icon name={name} />
      </button>
    )
  }else{
    return (
      <button className={btnClass} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled:false,
  types:"default"
}

export { Button }
export type {BaseButtonProps}