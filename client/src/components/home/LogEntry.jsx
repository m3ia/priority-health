import {format} from "date-fns";

const LogEntry = ({log, convFeeling}) => {
  return (
    <div className={`diet-entry ${log.feeling}-entry`}>
      <p>Date: {format(new Date(log.date), "MM/dd/yyyy")}</p>
      <p>Feeling: {convFeeling(log.feeling)}</p>

      <p>Meal: {log.meal}</p>
      <p className="diet-entry-notes">Notes: {log.notes}</p>
    </div>
  );
};

export default LogEntry;
