import Day from './Day';
import './Calendar.css';

const Week = ({day, week, tag}) => {
    return (
    <>
        <div className="week">
            {
                day.map((day) => 
                (
                    <Day day={day} week={week} tag={tag}/>
                ))
            }
        </div>
    </>);
}

export default Week;