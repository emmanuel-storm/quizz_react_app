"use client"
import {Inter} from "next/font/google";
import "./globals.css";
import React from 'react';
import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    React.useEffect(() => {
        // Connect to the Socket.IO server
        socket.connect();

        // Cleanup on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
