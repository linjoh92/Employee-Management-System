export const getInitials = (name: string): string => {
  const nameParts = name.split(" ");
  return nameParts.map((part) => part[0].toUpperCase()).join("");
};

export const splitName = (
  name: string
): { firstName: string; lastName: string } => {
  const nameParts = name.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
  return { firstName, lastName };
};
