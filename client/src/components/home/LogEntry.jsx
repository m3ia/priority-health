import {format} from "date-fns";

const LogEntry = ({log, convFeeling, getLogEntries}) => {
  console.log("loggg: ", log);
  const deleteLog = async () => {
    await fetch(`/api/log/${log.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getLogEntries();
  };
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
      <div className="icon-section">
        <span className="material-symbols-outlined" onClick={() => deleteLog()}>
          delete
        </span>
      </div>
    </div>
  );
};

export default LogEntry;
