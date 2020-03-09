import React from "react";
import { Styled } from "theme-ui";
import ThemeModeButton from "./ThemeModeButton";

export default function Header() {
  return (
    <header>
      <Styled.h1>My Contacts</Styled.h1>
      <Styled.p>Quickly search through the contact list</Styled.p>
      <ThemeModeButton />
    </header>
  );
}
