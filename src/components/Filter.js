import React, {usestate} from "react";
import './Filter.css'
function Filter(props){
const dropDownHandler=(event)=>{
        props.onSelect(event.target.value);
}
    return(
        <select defaultValue={'none'} className="selection" onChange={dropDownHandler}>
            <option value='none' disabled hidden >select a year</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>

        </select>
    )

}
export default Filter;