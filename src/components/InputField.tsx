import React from 'react'
import "./styles.css";

const InputField = () => {
  return (
    <form className="form">
        <input type="input" placeholder="Enter task name" className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}


export default InputField;