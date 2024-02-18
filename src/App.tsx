import React from 'react'

import './style.css'

import Form from './Form'

const fields = [
  { name: 'one' },
  { name: 'two' }
]

const App = () => (
  <Form 
    fields={fields} 
    onSubmit={console.log} 
  />
)

export default App
