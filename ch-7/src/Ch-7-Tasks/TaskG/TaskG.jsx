import React, { useRef } from 'react'
import Input from './Input'


export default function TaskG() {
    const inputRef = useRef(null);
    // console.log(inputRef);

    function handleBtnClick() {
        inputRef.current.value = "jaydeep"
        inputRef.current.focus()

    }
    return (
        <>
            <div className="container mt-5">
                <h1>Forward Ref </h1>
                <ul>
                <li>It is a FocusableInput component that forwards its ref to the underlying input element, allowing parents to directly focus the input when Button is clicked.
                </li>
                <li>It set a autofocus and set a value of a input field</li>
                </ul>
                <Input ref={inputRef} /><br />
                <button onClick={handleBtnClick}>Click Here</button>
            </div>
        </>
    )
}
