import { Employee } from "@/shared/types";

/**
 * Filter employees based on the search term (by name or department or role)
 * @param employees Array of Employee objects
 * @param searchTerm The term to filter by (searches by name and department)
 * @returns Filtered array of Employee objects
 */
export const handleSearch = (
  employees: Employee[],
  searchTerm: string
): Employee[] => {
  if (!searchTerm) return employees; // If search term is empty, return all employees

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      employee.role.toLowerCase().includes(lowerCaseSearchTerm) ||
      employee.department.toLowerCase().includes(lowerCaseSearchTerm)
  );
};
