import React from 'react';
import './Agenda.css';

function Agenda() {
  return (
    <section className="agenda">
      <h2>Agenda</h2>
      <div className="calendar">
        <p>Septiembre</p>
        {/* Aquí se puede añadir un calendario más sofisticado */}
        <div className="calendar-days">
          <span>2</span>
          <span>3</span>
          <span className="highlighted">4</span>
          {/* más días */}
        </div>
      </div>
    </section>
  );
}

export default Agenda;

