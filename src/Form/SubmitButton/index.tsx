
const Submit = ({onSubmit, submitButtonLabel}: Props) => {
  return (
    <button 
      type="submit" 
      onClick={onSubmit}
    >
      {submitButtonLabel || 'Submit'}
    </button>
  )
}

export default Submit 

type Props = {
  onSubmit: () => void
  submitButtonLabel: string | undefined
}