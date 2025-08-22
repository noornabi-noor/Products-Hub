import AuthProvider from "./providers";
import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <NavBar />
          {children}
          </AuthProvider>
      </body>
    </html>
  );
}