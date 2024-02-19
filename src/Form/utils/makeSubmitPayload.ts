type MakeSubmitPayload = (values: FormValue[]) => void
const makeSubmitPayload: MakeSubmitPayload = values => {
  console.log('vals', values)
}

export default makeSubmitPayload