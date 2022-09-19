import './MyItems.css';
import Date from './Date';
function MyItems(props){
return(
    <div className="Items">
                <Date datetime={props.date}/>
             <div className='name-box'>NAME: {props.name}</div>
             <div>NUM: {props.number}</div>
    </div>
)
}
export default MyItems;