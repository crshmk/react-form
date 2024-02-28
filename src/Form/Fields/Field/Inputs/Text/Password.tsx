import { useState } from 'react'

import useTextInputProps from './useTextInputProps'

import EyeFilled from '../../../../../assets/icons/EyeFilled'
import EyeSlash from '../../../../../assets/icons/EyeSlash'

const Password = () => { 
  const [inputType, setInputType] = useState('password')
  const inputProps = useTextInputProps()

  const onToggleViewPassword = (e: OnClickEvent) => {
    e.preventDefault()
    setInputType(prev => prev === 'password' ? 'text' : 'password')
  }

  return (
    <>
     <input {...inputProps} type={inputType} />
     <div className="show-password-button" onClick={onToggleViewPassword}>
      {inputType === 'password' && <EyeFilled />}
      {inputType !== 'password' && <EyeSlash />}
    </div>
    </>
  )
}

export default Password 


type OnClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>