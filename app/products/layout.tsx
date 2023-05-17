// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";
import Navigation from "@/components/Navigation";

const inter = Inter({
    variable: "--font-inter",
});

export default async function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <Toaster />
                <Navigation >
                    {children}
                </Navigation>
            </body>
        </html>
    );
}
