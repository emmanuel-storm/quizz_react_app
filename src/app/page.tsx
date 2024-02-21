"use client"

import Link from "next/link"
import React, {ChangeEvent, JSX, SVGProps} from "react"
import io from "socket.io-client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');


export default function Page() {
    const [personalTheme, setPersonalTheme] = React.useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPersonalTheme(event.target.value);
    };

    const handleQuizTheme = (theme: string) => {
        // Emit the selected difficulty to the server
        socket.emit('chooseTheme', {theme});
    };

    React.useEffect(() => {
        handleQuizTheme('')
    }, []);


    return (
        <div className="flex flex-col h-screen">
            <header className="relative z-10">
                <div className="container flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
                    <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">Quiz App</h1>
                </div>
            </header>
            <main className="flex-1 my-6">
                <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
                    <div className="space-y-3 text-center">
                        <h2 className="text-3xl font-bold">Choose a Theme</h2>
                        <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">Select a category to start
                            the quiz</p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                        <Link
                            className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="/choose-your-difficulty"
                            onClick={() => handleQuizTheme('Music')}
                        >
                            <MusicIcon className="w-6 h-6"/>
                            <div className="text-sm font-medium">Music</div>
                        </Link>
                        <Link
                            className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="/choose-your-difficulty"
                            onClick={() => handleQuizTheme('Science')}
                        >
                            <MicroscopeIcon className="w-6 h-6"/>
                            <div className="text-sm font-medium">Science</div>
                        </Link>
                        <Link
                            className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="/choose-your-difficulty"
                            onClick={() => handleQuizTheme('History')}
                        >
                            <CastleIcon className="w-6 h-6"/>
                            <div className="text-sm font-medium">History</div>
                        </Link>
                        <Link
                            className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="/choose-your-difficulty"
                            onClick={() => handleQuizTheme('Sports')}
                        >
                            <TrophyIcon className="w-6 h-6"/>
                            <div className="text-sm font-medium">Sports</div>
                        </Link>
                        <Link
                            className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="/choose-your-difficulty"
                            onClick={() => handleQuizTheme('Random')}
                        >
                            <ShuffleIcon className="w-6 h-6"/>
                            <div className="text-sm font-medium">Random</div>
                        </Link>
                        <Dialog>
                            <DialogTrigger
                                className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800">
                                <PenIcon className="w-6 h-6"/>
                                <div className="text-sm font-medium">Personal theme</div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Your theme</DialogTitle>
                                    <DialogDescription>
                                        Enter the quiz theme you want.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Theme
                                        </Label>
                                        <Input
                                            id="name"
                                            className="col-span-3"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Link onClick={() => handleQuizTheme(personalTheme)}
                                          href="/choose-your-difficulty"
                                    >Validate</Link>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

            </main>
        </div>
    )
}

function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
        </svg>
    )
}

function MicroscopeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 18h8"/>
            <path d="M3 22h18"/>
            <path d="M14 22a7 7 0 1 0 0-14h-1"/>
            <path d="M9 14h2"/>
            <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
        </svg>
    )
}

function CastleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/>
            <path d="M18 11V4H6v7"/>
            <path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"/>
            <path d="M22 11V9"/>
            <path d="M2 11V9"/>
            <path d="M6 4V2"/>
            <path d="M18 4V2"/>
            <path d="M10 4V2"/>
            <path d="M14 4V2"/>
        </svg>
    )
}

function TrophyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
    )
}

function ShuffleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/>
            <path d="m18 2 4 4-4 4"/>
            <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/>
            <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/>
            <path d="m18 14 4 4-4 4"/>
        </svg>
    )
}

function PenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        </svg>
    )
}