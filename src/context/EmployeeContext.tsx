/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { Employee } from "@/shared/types";
import { fetchEmployees } from "@/mock/mockEmployeesApi";

type EmployeeContextType = {
  user: Employee | null;
  employees: Employee[];
  filteredEmployees: Employee[];
  setSearchTerm: (term: string) => void;
  handleLogout: () => void;
};

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Employee | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const initializeData = async () => {
      const userData = localStorage.getItem("loggedInUser");
      if (userData) {
        const parsedUser = JSON.parse(userData) as Employee;
        setUser(parsedUser);
      } else {
        router.replace("/login");
        return;
      }

      const savedEmployees = localStorage.getItem("employeesData");
      if (savedEmployees) {
        const employeesData = JSON.parse(savedEmployees) as Employee[];
        setEmployees(employeesData);
        filterEmployees(employeesData);
      } else {
        const data = await fetchEmployees();
        setEmployees(data);
        localStorage.setItem("employeesData", JSON.stringify(data));
        filterEmployees(data);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (user) {
      const savedEmployees = localStorage.getItem("employeesData");
      if (savedEmployees) {
        setEmployees(JSON.parse(savedEmployees));
      }
    }
  }, [user]);

  const filterEmployees = (employeeData: Employee[]) => {
    const filtered = searchTerm
      ? employeeData.filter((emp) =>
          emp.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : employeeData;
    setFilteredEmployees(filtered);
  };

  useEffect(() => {
    filterEmployees(employees);
  }, [searchTerm, employees]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    router.replace("/login");
  };

  return (
    <EmployeeContext.Provider
      value={{
        user,
        employees,
        filteredEmployees,
        setSearchTerm,
        handleLogout,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};
