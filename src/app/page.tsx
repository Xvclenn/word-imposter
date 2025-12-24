"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
    const router = useRouter();

    function handleClick() {
        console.log("Button clicked");
        router.push("/game/local");
    }

    return (
        <motion.main
            className="min-h-screen flex items-center justify-center bg-linear-to-r from-amber-400 via-yellow-400 to-red-400 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center max-w-md w-full"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4 text-amber-800">
                    🎉 Word Imposter Game
                </h1>
                <p className="text-slate-600 mb-6">
                    Найзуудаа цуглуулж, Imposter-г олох гайхалтай тоглоомыг
                    тоглоорой ❤️
                </p>
                <Button
                    onClick={handleClick}
                    className="cursor-pointer px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                >
                    Тоглох
                </Button>
            </motion.div>
        </motion.main>
    );
}
