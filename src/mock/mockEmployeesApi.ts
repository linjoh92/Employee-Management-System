import { employees } from "./employees";
import { Employee } from "@/shared/types";

// Simulate fetching all employees from an API
export async function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 500); // Simulate network latency
  });
}

// Simulate fetching a single employee by email and password from an API
export async function fetchUser(
  email: string,
  password: string
): Promise<Employee | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = employees.find(
        (emp) => emp.email === email && emp.email === password
      );
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500); // Simulate network latency
  });
}
