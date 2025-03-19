import React from 'react'
import MouseTracker from './MouseTracker'

export default function TaskB() {
    return (
        <>
<div>
      <h1>Move your mouse </h1>
      <MouseTracker
        render={(mouse) => (
          <p>
            Mouse position: X: {mouse.x}, Y: {mouse.y}
          </p>
        )}
      />
    </div>
        </>
    )
}
