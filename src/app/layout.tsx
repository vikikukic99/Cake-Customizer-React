'use client';

import { CakeProvider } from "@/context/CakeContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <CakeProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </CakeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
