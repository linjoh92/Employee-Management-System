"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/mock/mockEmployeesApi";
import LoginCard from "./LoginComponents/LoginCard";
import { handleInputChange } from "@/shared/utils/handleInputChange";
import { LoginSection, BackgroundSection } from "./LoginStyles";
import { Box } from "@mui/material";
import ImageComponent from "../components/ImageComponent";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await fetchUser(email, password);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setError(null);
      window.dispatchEvent(new Event("storage"));
      router.replace("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const handleEmailChange = handleInputChange(
    setEmail,
    password,
    error,
    setError
  );
  const handlePasswordChange = handleInputChange(
    setPassword,
    email,
    error,
    setError
  );

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", height: "100%" }}>
      <LoginSection>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <LoginCard
            handleLogin={handleLogin}
            email={email}
            setEmail={handleEmailChange}
            password={password}
            setPassword={handlePasswordChange}
            error={error}
          />
        </Box>
        <ImageComponent src="logoIcon_company.svg" width={100} />
      </LoginSection>
      <BackgroundSection>
        <ImageComponent
          src="Icon_company_white.svg"
          width={250}
          opacity={0.3}
        />
      </BackgroundSection>
    </Box>
  );
};

export default LoginPage;
