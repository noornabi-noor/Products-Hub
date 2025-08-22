import AuthProvider from "./providers";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
          </AuthProvider>
      </body>
    </html>
  );
}