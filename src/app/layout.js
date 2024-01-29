import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"], weights: [300, 400, 500] });

export const metadata = {
  title: "Portfolio - Dev Rael",
  description: "Portfolio pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
