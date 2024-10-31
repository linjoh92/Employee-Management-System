import React, { ReactNode } from "react";
import Sidebar from "./dashboardComponents/sidebar/Sidebar";
import { Employee } from "@/shared/types";
import ChatbotPopup from "../components/ChatbotPopup";
import BreadcrumbsNavigation from "./dashboardComponents/BreadcrumbsNavigation";
import {
  BreadcrumbContainer,
  CenteredContent,
  LayoutContainer,
  MainContent,
} from "./styles/DashboardLayoutStyles";

type DashboardLayoutProps = {
  children: ReactNode;
  user: Employee | null;
  onLogout: () => void;
  isGrid: boolean;
};

export default function DashboardLayout({
  children,
  user,
  onLogout,
  isGrid,
}: DashboardLayoutProps) {
  const drawerWidth = 250;

  return (
    <LayoutContainer>
      <Sidebar user={user} onLogout={onLogout} drawerWidth={drawerWidth} />
      <MainContent>
        <BreadcrumbContainer>
          <BreadcrumbsNavigation />
        </BreadcrumbContainer>

        <CenteredContent>
          <ChatbotPopup isGrid={isGrid} />
          {children}
        </CenteredContent>
      </MainContent>
    </LayoutContainer>
  );
}
