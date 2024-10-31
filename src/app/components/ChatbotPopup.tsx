"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Fab,
  List,
  ListItem,
  Box,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

type ChatbotPopupProps = {
  isGrid: boolean;
};

export default function ChatbotPopup({ isGrid }: ChatbotPopupProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <Box>
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: isGrid ? 80 : 24,
          right: 25,
        }}
      >
        <ChatIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          position: "fixed",
          bottom: isGrid ? 80 : 24,
          right: 16,
        }}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            backgroundColor: "#fff",
            padding: 2,
          },
        }}
      >
        <DialogTitle>
          Chat with Us
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index}>{message}</ListItem>
            ))}
          </List>
        </DialogContent>

        <Box
          display="flex"
          alignItems="center"
          p={2}
          sx={{ borderTop: "1px solid #ccc" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            sx={{ ml: 1 }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
}
