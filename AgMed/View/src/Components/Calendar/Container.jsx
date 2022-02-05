import Week from "./Week";
import "./Calendar.css";

const Calendar = ({ week, day, month, tag, handleFormClick}) => {
  return (
    <>
      <div className="calendar">
        <p className="label">{month.name}</p>
        {week.map((week) => (
          <Week day={day} week={week} tag={tag} handleFormClick={handleFormClick} month={month}/>
        ))}
      </div>
    </>
  );
};

export default Calendar;
