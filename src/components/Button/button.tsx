import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    classname?: string;
    /**Set the disabled button */
    disabled?: boolean;
    /**Set the size of button */
    size?: ButtonSize;
    /**Set the type of button */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AncherButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AncherButtonProps>
/**
 * This is the default button component
 * ## Button header
 * ~~~js
 * import { Button } from 'pegasusui'
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
    const { 
      btnType,
      className,
      disabled,
      size,
      children,
      href,
      ...restProps
    } = props
    
    const classes = classNames('btn', className, {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      'disabled': (btnType === 'link') && disabled
    })
    if (btnType === 'link' && href ) {
      return (
        <a
          className={classes}
          href={href}
          {...restProps}
        >
          {children}
        </a>
      )
    } else {
      return (
        <button
          className={classes}
          disabled={disabled}
          {...restProps}
        >
          {children}
        </button>
      )
    }
  }

  Button.defaultProps = {
    disabled: false,
    btnType: "default"
  }
  
  export default Button;