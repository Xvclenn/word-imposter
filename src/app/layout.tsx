"use client"; // ⚠️ client annotation зөвхөн client component-д хэрэгтэй
import { Balsamiq_Sans } from "next/font/google";
import { ReactNode } from "react";
import { GameProvider } from "@/context/GameContext";
import "./globals.css";
import { Footer } from "@/components/Footer";

const balsamiq = Balsamiq_Sans({
    subsets: ["latin"], // Монгол үсэг ашиглахгүй бол latin хангалттай
    weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={balsamiq.className}>
            <head>
                <title>Word Imposter</title>
            </head>
            <body>
                <GameProvider>
                    {children}
                    <Footer />
                </GameProvider>
            </body>
        </html>
    );
}
