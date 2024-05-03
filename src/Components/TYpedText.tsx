import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TYpedText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Amit Lok',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: 'black' }}
      repeat={Infinity}
    />
  )
}

export default TYpedText