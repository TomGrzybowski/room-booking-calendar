import { Reservation } from "./types";

const reservations: Reservation[] = [
  {
    id: "1",
    roomId: "1_101",
    resourceId: "1_101",
    employeeId: "1",
    title: "John Doe",
    backgroundColor: "#2317AA",
    borderColor: "#2317AA",

    start: new Date(2025, 1, 18),
    end: new Date(2025, 1, 21),
    allDay: true,
  },
  {
    id: "2",
    roomId: "2_201",
    resourceId: "2_201",
    employeeId: "2",
    title: "Jane Smith",
    backgroundColor: "#B7CECE",
    borderColor: "#B7CECE",
    start: new Date(2025, 1, 15),
    end: new Date(2025, 1, 17),
    allDay: true,
  },
];

export default reservations;
