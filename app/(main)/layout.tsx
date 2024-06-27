import "@/app/_ui/global.css";
import { inter } from '@/app/_ui/fonts';
import LeftNavBar from "@/app/_ui/invoices/LeftNavBar";
import RightFooter from "@/app/_ui/RightFooter";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        <main className="flex min-h-screen flex-col">
            <LeftNavBar className="fixed top-0 left-0 min-h-screen min-w-[50px]"/>
            <div className="ml-[50px] min-w-[calc(100vw-50px)] flex flex-col">
                {children}
            </div>
            <RightFooter/>
        </main>
        </body>
        </html>
    );
}
