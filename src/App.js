import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import FilteredList from './components/FilteredList';
import MyForm from './components/MyForm';
const information=[{
  id:1,
  name:'Sara Rahimi',
  date:new Date('2021,11,03'),
  number:'09134748846'
},
{
  id:2,
   name:'maryam Abedi',
   date:new Date('2022,02,08'),
   number:'09035565136'
},
{
  id:3,
   name:'mina akbari',
   date:new Date('2021,04,08'),
   number:'09112365136'
},
{
  id:4,
  name:'keyvan Mohammadi',
  date:new Date('2020,06,14'),
  number:'09013567758'
}]
function App() {
  const [filter,setFilter]=useState('2021');
  const[mylist,setmylist]=useState(information);
 const addtolisthandler=(data)=>{
  setmylist((prevlist) => {return [data , ...prevlist]
  } )
  // console.log(mylist);
}
const filterHandler=(selectYear)=>{
setFilter(selectYear);
}
const filteredItem=mylist.filter( (i)=>{ return(i.date.getFullYear().toString() === filter)} )   ;


  return (
    <div className="App">
          <MyForm onAddtolist={addtolisthandler}/>
          <Filter selectedyear={filter} onSelect={filterHandler} />
          <FilteredList items={filteredItem}/>          
           
    </div>
  )
}


export default App;
