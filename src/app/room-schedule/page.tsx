"use client";

import React, { useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { EventInput, EventClickArg } from "@fullcalendar/core";
import rooms from "@/Mock/Rooms";
import reservations from "@/Mock/Reservations";
import { Reservation } from "../../Mock/types";
import AddReservationModal from "@/components/AddReservationModal/AddReservationModal";
import employees from "@/Mock/Employees";
import styles from "./RoomSchedule.module.scss";

//TODO: Works on Mock data. Need to implement API calls to get data from server

const RoomScheduler: React.FC = () => {
  const [reservationsState, setReservationsState] =
    useState<Reservation[]>(reservations);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const employeesIdList = employees.map((employee) => employee.id);

  const roomsNameList = rooms.map((room) => "Room " + room.number);

  const handleEventClick = useCallback((info: EventClickArg) => {
    alert(`Event: ${info.event.title} Hello`);
  }, []);

  const openAddReservationModal = () => {
    setIsModalOpen(true);
  };

  const onCreate = (data: {
    employee: string;
    room: string;
    startDate: string;
    endDate: string;
  }) => {
    const currentReservations = reservationsState;
    const roomNumber = data.room.slice(-3);

    const startDatetoDate = new Date(data.startDate);

    const endDatetoDate = new Date(data.endDate);
    endDatetoDate.setDate(endDatetoDate.getDate() + 1);
    const newRoomId = roomNumber[0] + "_" + roomNumber;

    const reservationTitle = (id: string): string | undefined => {
      const employee = employees.find((emp) => emp.id === id);
      return employee ? `${employee.firstName} ${employee.surname}` : undefined;
    };

    const backgroundColor = employees.find(
      (emp) => emp.id === data.employee
    )?.color;

    const newReservation: Reservation = {
      id: (currentReservations.length + 1).toString(),
      roomId: newRoomId,
      resourceId: newRoomId,
      employeeId: data.employee,
      title: reservationTitle(data.employee) || "Error",
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
      start: startDatetoDate,
      end: endDatetoDate,
      allDay: true,
    };

    setReservationsState([...currentReservations, newReservation]);
  };

  return (
    <>
      <div className={styles.container}>
        <FullCalendar
          plugins={[resourceTimelinePlugin]}
          initialView="resourceTimelineWeek"
          resources={rooms.map((room) => ({
            id: room.id,
            title: "Room " + room.number,
          }))}
          events={reservationsState as EventInput[]}
          headerToolbar={{
            left: "addReservation prev,next today",
            center: "title",
            right: "resourceTimelineMonth,resourceTimelineWeek",
          }}
          customButtons={{
            addReservation: {
              text: "+",
              click: openAddReservationModal,
            },
          }}
          editable
          selectable
          eventClick={handleEventClick}
          height="auto"
          slotDuration={{ days: 1 }}
          slotLabelFormat={[{ day: "numeric" }, { weekday: "short" }]}
          firstDay={1}
          // allDaySlot={false} // Removes the "All Day" section
        />
      </div>
      {isModalOpen && (
        <AddReservationModal
          onCancel={() => setIsModalOpen(false)}
          onCreate={onCreate}
          employeesIdList={employeesIdList}
          rooms={roomsNameList}
        />
      )}
    </>
  );
};

export default RoomScheduler;
