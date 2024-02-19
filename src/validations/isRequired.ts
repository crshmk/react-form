import { complement, isEmpty } from 'ramda'

export const isRequired: Validation = complement(isEmpty)