// TS cannot handle the curried update cb; the real typing is this
// type SetValues = React.Dispatch<React.SetStateAction<FormValue[]>>

type SetValues = React.Dispatch<React.SetStateAction<(any)>>
