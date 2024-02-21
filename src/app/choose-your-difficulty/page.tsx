"use client"

import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import Link from "next/link";
import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');

export default function Page() {
    const handleStartQuiz = (difficulty: string) => {
        // Emit the selected difficulty to the server
        socket.emit('startQuiz', {difficulty, room: 'public'});
    };

    React.useEffect(() => {
        // Join a game room when the component mounts
        socket.emit('joinGameRoom', {room: 'public'});

        // Listen for other players joining
        socket.on('playerJoined', (data) => {
            console.log(`Player ${data.player} joined the game.`);
        });

        // Cleanup on unmount
        return () => {
            // Leave the game room when the component unmounts
            socket.emit('leaveGameRoom', {room: 'public'});
        };
    }, []);

    return (
        <section className="px-4 py-12 md:py-24">
            <div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center">Level of difficulty</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Choose your level, be smart.</p>

                    <div className="grid gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Easy</CardTitle>
                                <CardDescription>Some simple questions.</CardDescription>
                            </CardHeader>
                            <Link href="quiz">
                                <CardContent className="grid gap-2">
                                    <Button size="sm" onClick={() => handleStartQuiz('easy')}>Start the easy
                                        quiz</Button>
                                </CardContent>
                            </Link>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Medium</CardTitle>
                                <CardDescription>A mix of questions.</CardDescription>
                            </CardHeader>
                            <Link href="/quiz">
                                <CardContent className="grid gap-2">
                                    <Button size="sm" onClick={() => handleStartQuiz('medium')}>Start the medium
                                        quiz</Button>
                                </CardContent>
                            </Link>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Hard</CardTitle>
                                <CardDescription>Pretty hard quizzes.</CardDescription>
                            </CardHeader>
                            <Link href="/quiz">
                                <CardContent className="grid gap-2">
                                    <Button size="sm" onClick={() => handleStartQuiz('hard')}>Start the hard
                                        quiz</Button>
                                </CardContent>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

