import { Router } from "./router/Router";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router/>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
