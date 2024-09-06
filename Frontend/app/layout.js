import "./globals.css";
import Navbar from "./components/nav-bar";

export const metadata = {
  title: "Hospital Management App",
  description: "Simple hospital management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
