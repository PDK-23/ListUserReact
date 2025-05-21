import React from "react";
import 'tailwindcss/tailwind.css';
import UserList from "./Partial/UserList";
import DevToolDetector from "./components/DevToolDetector";

export default function App() {
  return (
    <DevToolDetector>
      <UserList />
    </DevToolDetector>
  );
}