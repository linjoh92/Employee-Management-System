import BasicButton from "@/app/components/BasicButton";
import { Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import InputField from "./InputField";
import BasicTooltip from "@/app/components/BasicToolTip";

type LoginCardProps = {
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
};
export default function LoginCard({
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
  error,
}: LoginCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: {
            xs: "32px",
            md: "42px",
          },
        }}
      >
        Welcome!
      </Typography>
      <Box component="form" onSubmit={handleLogin}>
        <InputField
          id="email"
          placeholder="Type your username"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<EmailIcon sx={{ color: "action.active" }} />}
        />
        <InputField
          id="password"
          placeholder="Type your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<LockIcon sx={{ color: "action.active" }} />}
        />
        <Box sx={{ textAlign: "right", mb: 2 }}>
          <BasicTooltip title="Contact admin@example.com">
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Forgot password?
            </Typography>
          </BasicTooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BasicButton text="Login" type="submit" />
          {error && (
            <Typography
              color="error"
              variant="caption"
              sx={{
                mt: 5,
                position: "absolute",
              }}
            >
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
