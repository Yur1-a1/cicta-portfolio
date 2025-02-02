import { Poppins } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

// Componentes da Página
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

// Definição de Fontes
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["101", "201", "301", "401", "500", "600", "700", "800"], 
  variable: '--font-poppins'
});

export const metadata = {
  title: "Can i call this a portfolio?",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
      <Header />
      <StairEffect/>
      <PageTransition>
        {children}
      </PageTransition>

      
      </body>
    </html>
  );
}
