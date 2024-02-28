import { createContext, ReactNode, useContext } from 'react'
import { FieldContext as FieldContextType } from './MemoizedField'

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37023#issuecomment-1520700419
const FieldContext = createContext<FieldProps>({} as FieldProps)

const useField = () => useContext(FieldContext)

export const FieldProvider = (props: FieldProps) => (
  <FieldContext.Provider value={{...props}}>
    {props.children}
  </FieldContext.Provider>
)

export default useField 

type FieldProps = FieldContextType & {
  children: ReactNode
}