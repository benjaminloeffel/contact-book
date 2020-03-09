/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui";

const ThemeModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      sx={{
        position: "absolute",
        top: 16,
        right: 16
      }}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ThemeModeButton;
