import React from "react";
import MyItems from "./MyItems";
import './FilteredList.css'
function FilteredList(props){
    let filterContent=<p> no student found</p>;
    if(props.items.length==0){
      return filterContent;
      }
      return(
        <ul>
            {
                props.items.map(e=>
                    <MyItems name={e.name} number={e.number} date={e.date} key={e.id} />)
            }
        </ul>
      )
}
export default FilteredList;