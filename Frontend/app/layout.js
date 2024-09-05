import "./globals.css";

export const metadata = {
  title: "Hospital Management App",
  description: "Simple hospital management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
