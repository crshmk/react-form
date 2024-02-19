import { useState } from 'react'
import EyeFilled from '../../../assets/icons/EyeFilled'
import EyeSlash from '../../../assets/icons/EyeSlash'

const Password = (props: Props) => { 
  const [inputType, setInputType] = useState('password')

  const onToggleViewPassword = () =>
    setInputType(prev => prev === 'password' ? 'text' : 'password')

  return (
    <>
     <input {...props} type={inputType} />
d    <div className="show-password-button" onClick={onToggleViewPassword}>
      {inputType === 'password' && <EyeFilled />}
      {inputType !== 'password' && <EyeSlash />}
    </div>
    </>
  )
}

export default Password 

type Props = {
  disabled: boolean
  name: FormField['name']
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: Fn
  placeholder: string
  type: FormField['inputType']
  value: string
}