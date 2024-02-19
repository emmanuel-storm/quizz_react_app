/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7WSwJw2dk7j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
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
                <div className="font-semibold">What is the capital of France?</div>
                <div className="grid gap-4">
                    <Button className="w-full justify-start" variant="outline">
            <span className="grid gap-1">
              <span>A. Berlin</span>
            </span>
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
            <span className="grid gap-1">
              <span>B. Paris</span>
            </span>
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
            <span className="grid gap-1">
              <span>C. Rome</span>
            </span>
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
            <span className="grid gap-1">
              <span>D. Madrid</span>
            </span>
                    </Button>
                </div>
                <Button className="w-full">Submit</Button>
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
