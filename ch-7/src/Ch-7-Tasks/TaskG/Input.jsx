import React, { forwardRef } from 'react'

function Input(props,ref) {
    return (
        <>

            <input type="text" ref={ref} placeholder='Enter Text here!!' />
        </>
    )
}
export default forwardRef(Input);