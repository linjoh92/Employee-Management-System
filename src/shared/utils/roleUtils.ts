export const hasEditPermission = (role: string) => {
  return role === "Admin";
};

export const hasViewPermission = (role: string) => {
  return role === "Admin" || role === "Manager";
};

export const hasViewOwnInfoPermission = (role: string) => {
  return role === "Admin" || role === "Manager" || role === "Employee";
};
