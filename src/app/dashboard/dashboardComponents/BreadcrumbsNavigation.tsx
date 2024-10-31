import React from "react";
import { Breadcrumbs, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbsNavigation = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathArray = pathname.split("/").filter((p) => p);
    const paths = [];

    if (pathArray.length > 1) {
      paths.push({ name: "Dashboard", link: "/dashboard" });
    }

    pathArray.forEach((path) => {
      if (path === "employees") {
        paths.push({ name: "Employee System", link: "/dashboard/employees" });
      } else if (path === "business-card") {
        paths.push({ name: "Business Card", link: "/dashboard/business-card" });
      }
    });

    return paths;
  };

  const breadcrumbs = generateBreadcrumbs();

  return breadcrumbs.length > 0 ? (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <MuiLink
          key={index}
          component={Link}
          href={breadcrumb.link}
          underline={index === breadcrumbs.length - 1 ? "none" : "hover"}
          color={index === breadcrumbs.length - 1 ? "text.primary" : "inherit"}
        >
          {breadcrumb.name}
        </MuiLink>
      ))}
    </Breadcrumbs>
  ) : null;
};

export default BreadcrumbsNavigation;
