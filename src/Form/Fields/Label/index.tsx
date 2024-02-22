import { ReactNode } from 'react'

import makeLabel from './makeLabel'

const Label = (props: Props) => {
  const label: string = makeLabel(props.field)
 return (
  <label className="item-label">
    <span className="field-label">{label}</span>
    {props.children}
  </label>
 )
}

type Props = {
  children: ReactNode
  field: FormField
}

export default Label