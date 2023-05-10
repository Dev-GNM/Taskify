import React from 'react'

const InputField = () => {
  return (
    <form className="form">
        <input type="input" placeholder="Enter task name" className='input_box'/>
        <button className='input_submit' type='submit'>Submit</button>
    </form>
  )
}


export default InputField;