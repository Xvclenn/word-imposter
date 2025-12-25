"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeQuestionMark } from "lucide-react";
import { motion } from "framer-motion";

export function HowToPlayModal() {
    const [isOpen, setIsOpen] = useState(false);

    const cards = [
        {
            emoji: "👥",
            title: "1. Найзуудаа цуглуул",
            desc: "3-10 тоглогчид тоглоно, олуулаа тоглох тусам илүү зугаатай!",
        },
        {
            emoji: "💭",
            title: "2. Нууц үг авах",
            desc: "Хүн бүр үг авна, гэхдээ нэг нь Imposter!",
        },
        {
            emoji: "🕵️",
            title: "3. Imposter-ийг ол",
            desc: "Сэрэмжтэй байж, Imposter-г олохын тулд саналаа өгч, хас!",
        },
    ];

    return (
        <div className={`sm:absolute sm:top-0 sm:-right-15`}>
            {/* Button to open modal */}
            {/* <Button
                className={`cursor-pointer rounded-full w-11.5 h-11.5`}
                onClick={() => setIsOpen(true)}
                variant="secondary"
            >
                <BadgeQuestionMark strokeWidth={3} />
            </Button> */}
            <Button
                onClick={() => setIsOpen(true)}
                variant="secondary"
                className="
                    cursor-pointer
                    rounded-full
                    flex items-center gap-2
                    px-5 py-3
                    sm:w-11.5 sm:h-11.5 sm:p-0
                    text-sm sm:text-base"
            >
                <BadgeQuestionMark strokeWidth={3} />

                <span className="sm:hidden font-medium">Тоглоомын тухай</span>
            </Button>

            {/* Modal overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    onClick={() => setIsOpen(false)} // overlay дээр дарахад хаагдана
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="bg-white border border-amber-400 rounded-xl shadow-lg w-full sm:min-w-30 md:min-w-50 max-w-3xl p-6 relative"
                            onClick={(e) => e.stopPropagation()} // content дээр дарахад хаахгүй
                        >
                            {/* Close button */}
                            <button
                                className="absolute cursor-pointer top-4 right-6 text-gray-500 hover:text-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>

                            {/* Modal content */}
                            <h2 className="text-2xl sm:text-4xl text-left font-bold mb-8 sm:text-center pl-5 sm:p-0">
                                🎯 Тоглоомын тухай
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 h-100 overflow-x-hidden sm:overflow-hidden sm:max-h-70">
                                {cards.map((card, index) => (
                                    <motion.div
                                        key={index}
                                        className="border border-amber-400 p-6 rounded-xl flex flex-col bg-gray-50 text-center cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <h3 className="font-semibold text-5xl mb-4">
                                            {card.emoji}
                                        </h3>
                                        <h3 className="font-semibold text-2xl mb-2 h-16">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-slate-700">
                                            {card.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
