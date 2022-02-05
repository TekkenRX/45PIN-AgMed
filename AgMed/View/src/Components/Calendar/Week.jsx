import Day from './Day';
import './Calendar.css';

const Week = ({day, week, tag, handleFormClick, month}) => {
    return (
    <>
        <div className="week">
            {
                day.map((day) => 
                (
                    <Day day={day} week={week} tag={tag} handleFormClick={handleFormClick} month={month}/>
                ))
            }
        </div>
    </>);
}

export default Week;