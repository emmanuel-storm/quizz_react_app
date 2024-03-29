"use client"

import {CardHeader, CardContent, Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React, {JSX, SVGProps} from "react";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');


export default function Page() {
    const [question, setQuestion] = React.useState<string>('');
    const [hint, setHint] = React.useState<string>('');
    const [openHint, setOpenHint] = React.useState(false);
    const [answers, setAnswers] = React.useState<{ text: string; isTrue: boolean }[]>([]);
    const [selectedAnswer, setSelectedAnswer] = React.useState<string>('');
    const [resultMessage, setResultMessage] = React.useState<string>('');

    React.useEffect(() => {
        // Request a new question when the component mounts
        socket.emit('requestNewQuestion');


        // Listen for new questions in real-time
        socket.on('newQuestion', (data) => {
            setQuestion(data.question);
            setHint(data.hint);
            setOpenHint(false)
            setAnswers(data.answers);
            setSelectedAnswer('');
            setResultMessage('');
        });

        // Cleanup on unmount
        return () => {
            // Remove the event listener
            socket.off('newQuestion');
        };
    }, []);

    const handleNewQuestion = () => {
        socket.emit('requestNewQuestion');
    };

    const handleAnswerClick = (answer: string) => {
        if (!selectedAnswer) {
            setSelectedAnswer(answer);

            const selectedAnswerObject = answers.find((ans) => ans.text === answer);
            if (selectedAnswerObject) {
                setResultMessage(selectedAnswerObject.isTrue ? 'Correct!' : `Incorrect! The response was ${answers.find((ans) => ans.isTrue)?.text}`);
            }
        }
    };

    const renderAnswers = () => {
        return answers.map((answer, index) => (
            <Button
                key={index}
                className={`w-full justify-start ${selectedAnswer === answer.text ? 'bg-gray-300' : ''}`}
                variant="outline"
                onClick={() => handleAnswerClick(answer.text)}
                disabled={!!selectedAnswer}
            >
                <span className="grid gap-1">
                    <span>{answer.text}</span>
                </span>
            </Button>
        ));
    };

    return (
        <Card>
            <CardHeader className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2"/>
                <div>00:23</div>
                <div className="mx-2"/>
                <UsersIcon className="h-4 w-4 mr-2"/>
                <div>12</div>
            </CardHeader>

            <CardContent className="grid gap-4">
                <div className="font-semibold">{question}</div>

                <div className="grid gap-4">{renderAnswers()}</div>

                {resultMessage && <div
                    className={`text-center mt-4 ${resultMessage.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                    {resultMessage}
                </div>}

                <div className="flex w-full items-center space-x-2">
                    <Button onClick={handleNewQuestion} className="flex-1">Next question</Button>
                    <Button onClick={() => setOpenHint(true)}>Get hint</Button>
                </div>

                {openHint && (<div className="border rounded p-4">
                    <p className="text-sm font-light m-0">{hint}</p>
                </div>)}

            </CardContent>
        </Card>
    )
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>
    )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    )
}
