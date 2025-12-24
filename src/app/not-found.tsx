"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-linear-to-r text-white from-slate-800 to-violet-950 flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page not found</p>
            <Link href="/" className="text-blue-600 underline">
                <Button variant="secondary" className="cursor-pointer">
                    Go back home
                </Button>
            </Link>
        </main>
    );
}
