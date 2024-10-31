"use client";
import React from "react";
import DashboardLayout from "../dashboardLayout";
import EmployeeCard from "./businessCardComponents/EmployeeCard";
import { useEmployeeContext } from "@/context/EmployeeContext";

export default function BusinessCardPage() {
  const { user, handleLogout } = useEmployeeContext();

  return (
    <DashboardLayout user={user} onLogout={handleLogout} isGrid={false}>
      {user && <EmployeeCard employee={user} />}
    </DashboardLayout>
  );
}
