// import AuthProvider from "./providers";
// import NavBar from "@/components/NavBar";
// import "./globals.css";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <AuthProvider>
//           <NavBar />
//           {children}
//           <Footer />
//           </AuthProvider>
//       </body>
//     </html>
//   );
// }



// app/layout.js or app/layout.tsx

import AuthProvider from "./providers";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Products Hub",
  description: "Explore and manage products with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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