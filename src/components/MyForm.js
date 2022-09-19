import React, { useState } from "react";
import './MyForm.css'
function MyForm(props){
    const [enteredName,setEnteredNAme]=useState('');
    const[enteredNumber,setEnteredNumber]= useState('');
    const[enteredDate,setEnteredDate]=useState('');

      
       
        const nameHandler=(event)=>{
            setEnteredNAme(event.target.value)

          
        }
        const numberHandler=(event)=> {
            setEnteredNumber(event.target.value);
        }
        const dateHandler=(event)=>{
            setEnteredDate(event.target.value);
        }
        const submithandler=(event)=>
        {
            event.preventDefault();
            const studentsdata={
                id:Math.random().toString(),
                name:enteredName,
                number:enteredNumber,
                date:new Date(enteredDate)
            }

            props.onAddtolist(studentsdata);
            setEnteredDate('');
            setEnteredNAme('');
            setEnteredNumber('');
        }
    return(
        <form className="form-box" onSubmit={submithandler}>
            <label>enter your name:</label>
            <input type='text' value={enteredName} onChange={nameHandler}/>
            <label>enter your birthday</label>
            <input type='date'value={enteredDate} onChange={dateHandler}/>
            <label>enter your number</label>
            <input type='number'value={enteredNumber} onChange={numberHandler}/>
            <button type="submit"> SAVE</button>

        </form>
    )
}
export default MyForm;
