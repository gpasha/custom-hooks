import React from 'react';
import useInput from '../hooks/useInput';

export default function Inputs() {
  const userName = useInput()
  const passwordText = useInput()

  return (
    <>
      <input type='text' {...userName} placeholder='Please enter your name' />
      <input type='password' {...passwordText} placeholder='Please enter your password' />
      <button onClick={() => console.log(userName.value, passwordText.value)}>Show in console</button>
    </>
  )
}
