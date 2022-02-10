import "./Calendar.css";
let selectedoption;
let clicktype;

const Day = ({ day, week, tag, handleFormClick, month }) => {
  // Define qual botão foi clicado e passa as informações do clique
  function aux() {
    if (selectedoption !== day.value) {
      clicktype = "simple";
      selectedoption = day.value;
    } else {
      clicktype = "doubleclick";
      selectedoption = "none";
    }
    handleFormClick(day.value + "º de " + month.name, clicktype);
  }

  // posiciona os dias dummy e o primeiro dia
  if (day.value === 1 && week.value === 1) {
    return (
      <>
        <div className="day-dummy">
          <div className="cnt"></div>
        </div>
        <div className="day-dummy">
          <div className="cnt"></div>
        </div>
        <button className="day">
          <div
            className="cnt"
            onClick={() => {
              aux();
            }}
          >
            {day.value}
          </div>
        </button>
      </>
    );
  }

  // posiciona os dias da 1ª semana
  if (week.value === 1) {
    if (day.value <= tag && day.value > 1 && day.value <= 5) {
      return (
        <>
          <button className="day">
            <div
              className="cnt"
              onClick={() => {
                aux();
              }}
            >
              {day.value}
            </div>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }

  // posiciona os dias da 2ª semana
  if (week.value === 2) {
    if (day.value <= tag && day.value > 5 && day.value <= 12) {
      return (
        <>
          <button
            className="day"
            onClick={() => {
              aux();
            }}
          >
            <div className="cnt">{day.value}</div>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }

  // posiciona os dias da 3ª semana
  if (week.value === 3) {
    if (day.value <= tag && day.value > 12 && day.value <= 19) {
      return (
        <>
          <button
            className="day"
            onClick={() => {
              aux();
            }}
          >
            <div className="cnt">{day.value}</div>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }

  // posiciona os dias da 4ª semana
  if (week.value === 4) {
    if (day.value <= tag && day.value > 19 && day.value <= 26) {
      return (
        <>
          <button
            className="day"
            onClick={() => {
              aux();
            }}
          >
            <div className="cnt">{day.value}</div>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }

  // posiciona os dias da 5ª semana
  if (week.value === 5) {
    if (day.value <= tag && day.value > 26 && day.value <= 31) {
      return (
        <>
          <button className="day">
            <div
              className="cnt"
              onClick={() => {
                aux();
              }}
            >
              {day.value}
            </div>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }
};

export default Day;
