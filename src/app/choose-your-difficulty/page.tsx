/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tsjspBnvr1r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
    return (
        <section className="px-4 py-12 md:py-24">
            <div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center">Niveau de difficulté</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Choisissez le niveau de difficulté pour le quiz à
                        venir.</p>

                    <div className="grid gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Facile</CardTitle>
                                <CardDescription>Quelques questions simples.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                <Button size="sm">Commencer le quiz</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Moyen</CardTitle>
                                <CardDescription>Un mélange de questions.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                <Button size="sm">Commencer le quiz</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Difficile</CardTitle>
                                <CardDescription>Des questions difficiles.</CardDescription>
                            </CardHeader>
                            <Link href="/Quizz/Music">
                                <CardContent className="grid gap-2">
                                    <Button size="sm">Commencer le quiz</Button>
                                </CardContent>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

