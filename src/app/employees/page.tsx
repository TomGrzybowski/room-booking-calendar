import employees from "@/Mock/Employees";
import styles from "./employees.module.scss";

const EmployeesPage = () => {
  return (
    <div className={styles.container}>
      <h1>Employees Page Placeholder</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <h3>
              {employee.firstName} {employee.surname}
            </h3>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesPage;
