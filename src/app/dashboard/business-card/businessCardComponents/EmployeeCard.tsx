// EmployeeCard.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Employee } from "@/shared/types";
import { splitName } from "@/shared/utils/stringUtils";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import {
  CardContainer,
  BackgroundCircleTop,
  BackgroundCircleBottom,
  ContentWrapper,
  HeaderSection,
  DepartmentDivider,
  ContactInfo,
} from "./EmployeeCardStyles";
import ImageComponent from "@/app/components/ImageComponent";

type EmployeeCardProps = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const { firstName, lastName } = splitName(employee.name);

  return (
    <CardContainer>
      <BackgroundCircleTop />
      <BackgroundCircleBottom />

      <ContentWrapper>
        <HeaderSection>
          <ImageComponent src="Icon_company.svg" width={35} />

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
            {firstName.toUpperCase()}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {lastName.toUpperCase()}
          </Typography>
          <DepartmentDivider />
          <Typography color="secondary" fontWeight="bold">
            {employee.department.toUpperCase()}
          </Typography>
        </HeaderSection>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ContactInfo>
            <PhoneIcon fontSize="small" color="action" />
            <Typography variant="body2">+1234-5678</Typography>
          </ContactInfo>
          <ContactInfo>
            <EmailIcon fontSize="small" color="action" />
            <Typography variant="body2">{employee.email}</Typography>
          </ContactInfo>
          <ContactInfo>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2">Street, City</Typography>
          </ContactInfo>
          <ContactInfo>
            <LanguageIcon fontSize="small" color="action" />
            <Typography variant="body2">website.com</Typography>
          </ContactInfo>
        </Box>
      </ContentWrapper>
    </CardContainer>
  );
}
