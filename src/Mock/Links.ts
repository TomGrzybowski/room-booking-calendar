import { FaUsers, FaCalendarAlt, FaHome } from "react-icons/fa";

const Links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "Employees",
    path: "/employees",
    icon: FaUsers,
  },
  {
    id: 3,
    name: "Room Schedule",
    path: "/room-schedule",
    icon: FaCalendarAlt,
  },
];

export default Links;
