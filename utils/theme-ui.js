export default {
  useCustomProperties: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#609",
    modes: {
      dark: {
        text: "#a7a9be",
        background: "#0f0e17",
        primary: "#ff8906",
        secondary: "#f25f4c"
      }
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit"
  },
  button: {
    color: "text",
    background: "background"
  },
  cards: {
    primary: {
      border: "2px solid",
      borderColor: "secondary",
      padding: "16px",
      borderRadius: "5px",
      textAlign: "center"
    }
  },
  images: {
    avatar: {
      borderRadius: "50%"
    }
  },
  forms: {
    input: {
      width: "300px",
      "&:focus": {
        outline: "2px solid #07c"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    }
  }
};
