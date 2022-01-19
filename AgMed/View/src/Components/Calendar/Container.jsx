import Week from './Week';
import Day from './Day';
import './Calendar.css';

const Calendar = ({week, day, tag}) => {

    return (
        <>
            <div className="calendar">
            {week.map((week) => (
                <Week day={day} week={week} tag={tag}/>))}      
            </div>
        </>
    );
}
 
export default Calendar;