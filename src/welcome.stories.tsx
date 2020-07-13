import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome to pegasusui component library</h1>
       
        <code>
          npm install pegasusui --save
        </code>
      </>
    )
  }, { info : { disable: true }})