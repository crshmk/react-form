import { map, prop, zipObj } from 'ramda'

type GetNames = (fields: FormField[]) => string[]
const getNames: GetNames = map(prop('name'))

type SubmitPayload = {
  [x: string]: FormValue
}

type MakeSubmitPayload = (fields: FormField[], values: FormValue[]) => SubmitPayload
const makeSubmitPayload: MakeSubmitPayload = (fields, values) => {
  const names = getNames(fields)
  return zipObj(names, values)
}

export default makeSubmitPayload