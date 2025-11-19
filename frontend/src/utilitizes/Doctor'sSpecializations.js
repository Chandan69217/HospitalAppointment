import { FaStethoscope, FaTeeth, FaBrain, FaFemale, FaEye, FaBone, FaHeartbeat } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

 const services = [
  { icon: FaStethoscope, title: "Internal Medicine" },
  { icon: FaTeeth, title: "Dental Care" },
  { icon: GiKidneys, title: "Urology Care" },
  { icon: FaBrain, title: "Neurology Care" },
  { icon: FaFemale, title: "Gynecologists" },
  { icon: FaEye, title: "Ophthalmology" },
  { icon: FaBone, title: "Orthopedics" },
  { icon: FaHeartbeat, title: "Cardiology" },
];

const serviceIconsMap = services.reduce((acc, service) => {
  acc[service.title] = service.icon;
  return acc;
}, {});

export {services,serviceIconsMap}

// Result:
// {
//   "Internal Medicine": FaStethoscope,
//   "Dental Care": FaTeeth,
//   "Urology Care": GiKidneys,
//   ...
// }


// const apiMapping = {
//   "Internal Medicine": "Internal Medicine",
//   "Dental Care": "Dental",
//   "Urology Care": "Nephrology",
//   "Neurology Care": "Neurology",
//   "Gynecologists": "Gynecology",
//   "Ophthalmology": "Ophthalmology",
//   "Orthopedics": "Orthopedics",
//   "Cardiology": "Cardiology",
// };

