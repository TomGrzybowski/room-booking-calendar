import React, { useState } from "react";
import employees from "@/Mock/Employees";
import styles from "./AddReservationModal.module.scss";

interface AddReservationModalProps {
  onCancel: () => void;
  onCreate: (data: {
    employee: string;
    room: string;
    startDate: string;
    endDate: string;
  }) => void;
  employeesIdList: string[];
  rooms: string[];
}

const AddReservationModal: React.FC<AddReservationModalProps> = ({
  onCancel,
  onCreate,
  employeesIdList,
  rooms,
}) => {
  const [employee, setEmployee] = useState("");
  const [room, setRoom] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    if (employee && room && startDate && endDate) {
      onCreate({ employee, room, startDate, endDate });
      setEmployee("");
      setRoom("");
      setStartDate("");
      setEndDate("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add a new reservation</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Employee</label>
            <select
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            >
              <option value="" disabled>
                Select an employee
              </option>
              {employeesIdList.map((emp) => (
                <option key={emp} value={emp}>
                  {employees.find((e) => e.id === emp)?.firstName}{" "}
                  {employees.find((e) => e.id === emp)?.surname}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Room</label>
            <select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option value="" disabled>
                Select a room
              </option>
              {rooms.map((rm) => (
                <option key={rm} value={rm}>
                  {rm}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </form>
        <div className={styles.modalActions}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddReservationModal;
