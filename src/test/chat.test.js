import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MainChatbox from "../components/Chat/chatbox";
import MainMessage from "../components/Chat/message";
import { MainColors } from "../config";

test("Message Component: render", () => {
  render(<MainMessage />);
});

test("Message Component: Show date", () => {
  var date = "date";
  render(<MainMessage date={date} />);
  const datee = screen.getByText(date);

  expect(datee).toBeInTheDocument;
});

test("Message Component: Show message", () => {
  var message = "message";
  render(<MainMessage message={message} />);
  const messagee = screen.getByText(message);

  expect(messagee).toBeInTheDocument;
});

test("Message Component: Is Sender", () => {
  render(<MainMessage sender />);

  var messageTextElement = screen.getByTestId("message-text");

  expect(messageTextElement.style.backgroundColor).toBe(
    MainColors.ContrastedPurple
  );
});

test("Message Component: Is Reciever", () => {
  render(<MainMessage />);

  var messageTextElement = screen.getByTestId("message-text");

  expect(messageTextElement.style.backgroundColor).toBe(MainColors.Gray);
});

test("Message Component: Seen and not Seen in sender's messages", () => {
  render(<MainMessage sender seen />);

  var seenIcon = screen.getByTestId("double-check-icon");

  expect(seenIcon).toBeInTheDocument;

  render(<MainMessage sender />);

  var notSeenIcon = screen.getByTestId("check-icon");

  expect(notSeenIcon).toBeInTheDocument;
});

test("ChatBox Component: render", () => {
  render(<MainChatbox />);
});

test("ChatBox Component: show username", () => {
  render(<MainChatbox username="rahmani" />);

  screen.findByText("rahmani");
});

test("ChatBox Component: show avatar", () => {
  render(<MainChatbox username="rahmani" />);

  screen.findByTestId("avatar");
});

test("ChatBox Component: show send button", () => {
  render(<MainChatbox username="rahmani" />);

  screen.findByTestId("send-btn");
});

test("ChatBox Component: show text input", () => {
  render(<MainChatbox username="rahmani" />);

  screen.findByTestId("message-input");
});

test("ChatBox Component: scrollable div for messages", () => {
  render(<MainChatbox username="rahmani" />);

  screen.findByTestId("messages");
});

test("ChatBox Component: send picture", () => {
  render(<MainChatbox username="rahmani" />);

  screen.getByTestId("send-picture");
});

test("ChatBox Component: send file", () => {
  render(<MainChatbox username="rahmani" />);

  screen.getByTestId("send-file");
});
