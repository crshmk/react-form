
const Submit = (props: Props) => {
  return <button type="submit" onClick={props.onSubmit}>Submit</button>
}

export default Submit 

type Props = {
  onSubmit: () => void
}