const SubmitButton = ({
  isSubmitButtonHidden, 
  onSubmit, 
  submitButtonLabel
}: Props) => {
  return isSubmitButtonHidden? null : (
    <button 
      type="submit" 
      onClick={onSubmit}
    >
      {submitButtonLabel || 'Submit'}
    </button>
  )
}

export default SubmitButton 

type Props = {
  isSubmitButtonHidden: boolean | undefined
  onSubmit: () => void
  submitButtonLabel: string | undefined
}