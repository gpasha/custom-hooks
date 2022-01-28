import React, { useRef } from 'react';
import useHover from '../hooks/useHover';
import useInput from '../hooks/useInput';

export default function Hover() {
  const ref = useRef()
  const ref2 = useRef()
  const isHover = useHover(ref)
  const isHover2 = useHover(ref2)

  return (
    <>
      <div ref={ref} style={{ width: 300, height: 300, backgroundColor: isHover ? 'red' : 'green' }}></div>
      <div ref={ref2} style={{ width: 500, height: 500, backgroundColor: isHover2 ? 'orange' : 'blue' }}></div>
    </>
  )
}
