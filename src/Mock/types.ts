export type Room = {
  number: number;
  floor: number;
  capacity: number;
  id: string;
};

export type Employee = {
  firstName: string;
  surname: string;
  position: string;
  reservations?: string[];
  color?: string;
  textColor?: string;
  id: string;
};

export type Reservation = {
  id: string;
  roomId: string;
  resourceId: string;
  employeeId: string;
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  start: Date;
  end: Date;
  allDay: boolean;
};
