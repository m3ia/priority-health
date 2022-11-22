import {format} from "date-fns";

const LogEntry = ({log, convFeeling}) => {
  return (
    <div className={`diet-entry ${log.feeling}-entry`}>
      <p className="feeling-icon">{convFeeling(log.feeling)}</p>
      <span className={`diet-entry-date ${log.feeling}-date`}>
        {format(new Date(log.date), "MM/dd/yyyy")}
      </span>
      <span>
        <strong>Meal:</strong> {log.meal}
      </span>
      <span className="diet-entry-notes">
        <strong>Notes:</strong> <span>{log.notes}</span>
      </span>
    </div>
  );
};

export default LogEntry;
