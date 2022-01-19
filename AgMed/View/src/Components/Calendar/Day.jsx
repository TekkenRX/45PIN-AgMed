import './Calendar.css';

const Day = ({day, week, tag}) => {

    if(day.value === 1 && week.value === 1){
        return (
            <>
                <div className="day-dummy">
                    <div className="cnt"></div>
                </div>
                <div className="day-dummy">
                    <div className="cnt"></div>
                </div>
                <div className="day">
                    <div className="cnt">{day.value}</div>
                </div>
            </>
        );
    }

    if(week.value === 1){
        if (day.value <= tag && (day.value > 1 && day.value <= 5)){
            return (
                <>
                    <div className="day">
                        <div className="cnt">{day.value}</div>
                    </div>
                </>
            );
        }else{
            return <></>;
        }
    }

    if(week.value === 2){
        if (day.value <= tag && (day.value > 5 && day.value <= 12)){
            return (
                <>
                    <div className="day">
                        <div className="cnt">{day.value}</div>
                    </div>
                </>
            );
        }else{
            return <></>;
        }
    }    
    
    if(week.value === 3){
        if (day.value <= tag && (day.value > 12 && day.value <= 19)){
            return (
                <>
                    <div className="day">
                        <div className="cnt">{day.value}</div>
                    </div>
                </>
            );
        }else{
            return <></>;
        }
    }

    if(week.value === 4){
        if (day.value <= tag && (day.value > 19 && day.value <= 26)){
            return (
                <>
                    <div className="day">
                        <div className="cnt">{day.value}</div>
                    </div>
                </>
            );
        }else{
            return <></>;
        }
    } 

    if(week.value === 5){
        if (day.value <= tag && (day.value > 26 && day.value <= 31)){
            return (
                <>
                    <div className="day">
                        <div className="cnt">{day.value}</div>
                    </div>
                </>
            );
        }else{
            return <></>;
        }
    } 
    
}
 
export default Day;