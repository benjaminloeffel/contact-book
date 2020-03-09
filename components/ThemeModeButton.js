import { useColorMode } from "theme-ui";

const ThemeModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeModeButton;
