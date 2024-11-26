# **Employee Management System**

This **Employee Management System** is a frontend application built with **React** and **Next.js**, utilizing **Material-UI (MUI)** for styling. The project displays employee data in a structured, user-friendly UI with role-based access control. The data is fetched from a mocked API and allows for various interactions, including filtering, sorting, and editing (admin only).

## **Table of Contents**

- [Features](#features)
- [Requirements](#requirements)
- [Tech Stack](#tech-stack)

---

## **Features**

### **UI and Data Display**

- Displays employee information in a readable format, including name, contact details, department, role, food preferences, and more.
- Organizes data using cards, tables, or other UI components for a clean and accessible layout.
- Implements a "sort by" feature to arrange employees alphabetically by name, role, or department.
- Provides a pop-up window with a chatbot feature for user assistance.

### **Search, Filter, and Sort Options**

- Users can filter employee data based on criteria like name or department.
- Sorting options allow users to order employees by name, role, or department, improving data discoverability.

### **Role-Based Access Control**

- **Admin**: Full access to view and edit all employee details.
- **Manager**: View-only access to all employee details, with no edit permissions.
- **Employee**: Restricted to viewing only their own information.

---

## **Requirements**

The following requirements have been implemented:

1. **UI Implementation**: The UI is designed to present employee information in an organized, easy-to-navigate way.
2. **Employee Information Display**:
   - Key employee details, including basic info, are fetched from a mocked API file with 43 employees.
   - Data is displayed in a structured layout with options to filter, search, and sort the information.
3. **Role-Based Login**:
   - **Role-based access control** with login functionality, restricting or granting permissions based on the user's role.
   - User roles and corresponding login credentials:
     - **Admin**: Email - `john.dudley@example.com`, Password - `john.dudley@example.com`
     - **Manager**: Email - `jane.smith@example.com`, Password - `jane.smith@example.com`
     - **Employee**: Email - `alice.johnson@example.com`, Password - `alice.johnson@example.com`

---

## **Tech Stack**

- **React**
- **Next.js**
- **Material-UI (MUI)**
- **Local Storage** (to simulate CRUD operations for the admin role)

---
