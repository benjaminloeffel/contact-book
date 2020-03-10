import React from "react";
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import ThemeModeButton from "./ThemeModeButton";

export default function Header() {
  return (
    <header sx={{ textAlign: "center", position: "relative" }}>
      <Box bg="background" p={4}>
        <Styled.h1 sx={{ margin: 0 }}>My Contacts</Styled.h1>
        <Styled.p sx={{ color: "text" }}>
          Quickly search through the contact list
        </Styled.p>
        <ThemeModeButton />
      </Box>
    </header>
  );
}
