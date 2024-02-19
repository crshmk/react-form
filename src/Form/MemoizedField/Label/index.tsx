import { ReactNode } from 'react'

// import { isRequired } from '../validations'
import makeLabel from './makeLabel'

const Label = (props: Props) => {
  const label: string = makeLabel(props.field)
 // const isRadioOption = !!props.checkboxLabel
  //const formattedLabel = (!props.checkboxLabel && props.field.hideLabel) ? '' : camelToLabel(label)
 // const requiredLabel = isRadioOption ? '' : (props.field?.validations || []).includes(isRequired) ? ' *' : ''
 // return <label className={isRadioOption ? 'option-label' : 'group-label'}>{props.children} <span>{label} {requiredLabel}</span></label>
 return (
  <label>
    {label}
    {props.children}
  </label>
 )
}

type Props = {
  children: ReactNode
  field: FormField
}

export default Label