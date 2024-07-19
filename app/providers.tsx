"use client";

import { inputTheme } from "@/components/theming/input";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#fef6ee",
      "100": "#fcebd8",
      "200": "#f9d2af",
      "300": "#f4b27d",
      "400": "#ef8848",
      "500": "#ea6723",
      "600": "#dc501a",
      "700": "#b63b18",
      "800": "#91301b",
      "900": "#752a19",
      "950": "#3f120b",
    },
  },
  components: { Input: inputTheme }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
