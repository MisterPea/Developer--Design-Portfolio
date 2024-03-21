import { CircuitPeriod } from "./CircuitPeriod";

export default function CircuitPeriodGroup() {
  return (
    <figure className="circuit_period-group">
      <div className="circuit_period-entry">
        <CircuitPeriod.active />
        <p>Active Period</p>
      </div>
      <div className="circuit_period-entry">
        <CircuitPeriod.activeInProgress />
        <p>Active Period <span>— In Progress</span></p>
      </div>
      <div className="circuit_period-entry">
        <CircuitPeriod.rest />
        <p>Rest Period</p>
      </div>
      <div className="circuit_period-entry">
        <CircuitPeriod.restInProgress />
        <p>Rest Period <span>— In Progress</span></p>
      </div>
      <div className="circuit_period-entry">
        <CircuitPeriod.complete />
        <p>Period Complete</p>
      </div>
    </figure>
  );
}