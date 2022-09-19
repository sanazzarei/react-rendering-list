import './Date.css'
function Date(props){
 let day= props.datetime.toLocaleDateString('en-us', { day:"numeric"});
 let month=props.datetime.toLocaleDateString('en-us', {  month:"long"});
 let year=props.datetime.getFullYear();

    return(
        <div className="date-box">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}
export default Date;
