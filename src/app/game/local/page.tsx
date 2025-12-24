"use client"; // 🔹 must be client

import { useGame } from "@/context/GameContext";
import { PlayerSetup } from "@/components/PlayerSetup";
import { ShowWordScreen } from "@/components/ShowWordScreen";
import { ModeToggle } from "@/components/ModeToggle";
import { PlayPhaseControls } from "@/components/PlayPhaseControls";
import { Globe } from "lucide-react";
import { HowToPlayModal } from "@/components/ModalComp";
import { motion } from "framer-motion";

export default function LocalGamePage() {
    const { state } = useGame();

    return (
        <main className="h-screen relative bg-linear-to-r from-amber-400 to-red-400 flex flex-col items-center justify-center p-6">
            <motion.div
                className="border rounded-xl bg-accent-foreground shadow-lg w-full min-h-80 max-w-120 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="border rounded-xl bg-white shadow-lg w-full min-h-80 max-w-120 relative">
                    <div className="flex justify-between px-5 pt-2 items-center border-b border-slate-300 pb-2">
                        <span className="text-slate-500 text-sm">
                            Горим:{" "}
                            {state.mode === "LOCAL" ? "Нэг нэгээрээ" : "Онлайн"}
                        </span>
                        {/* <ModeToggle />
                        <div className="hidden sm:block">
                            <HowToPlayModal />
                        </div> */}
                        <div className="flex items-center">
                            <ModeToggle />

                            <div className="hidden sm:block">
                                <HowToPlayModal />
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pt-2 pb-5">
                        <motion.h1
                            className="text-xl mb-4 font-bold"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Imposter game
                        </motion.h1>

                        {state.mode === "LOCAL" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {state.phase === "SETUP" && <PlayerSetup />}
                                {state.phase === "SHOW_WORD" && (
                                    <ShowWordScreen />
                                )}
                                {state.phase === "PLAY" && (
                                    <>
                                        <div className="border min-h-35 p-6 rounded-lg bg-background text-center">
                                            {!state.revealedImposterId ? (
                                                <>
                                                    <h1 className="text-2xl mb-2 font-bold">
                                                        Бүх тоглогчид бэлэн үү?
                                                        Үнэнийг мэдэцгээе!
                                                    </h1>
                                                    <p className="text-slate-500 text-sm">
                                                        Зөвлөмж: Тоглогч бүр
                                                        нууц үгийн талаар 1
                                                        үгтэй мэдээлэл өгнө.
                                                        Хэтэрхий илэрхий байж
                                                        болохгүй... Imposter
                                                        сонсож байгаа шүү 👀.
                                                    </p>
                                                </>
                                            ) : (
                                                <div className="text-center flex flex-col justify-center">
                                                    <h1 className="text-red-700 mb-2 font-extrabold text-4xl">
                                                        {
                                                            state.players.find(
                                                                (p) =>
                                                                    p.id ===
                                                                    state.revealedImposterId
                                                            )?.name
                                                        }{" "}
                                                        бол IMPOSTER!
                                                    </h1>
                                                    <p className="text-slate-500 text-sm">
                                                        Сайн тоглолоо! Дахиад
                                                        тоглоход бэлэн үү?
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <PlayPhaseControls />
                                    </>
                                )}
                            </motion.div>
                        )}

                        {state.mode === "ONLINE" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center justify-center min-h-50 p-6 bg-linear-to-r from-amber-400 to-red-400 rounded-xl shadow-lg text-center"
                            >
                                <span className="text-6xl mb-4">
                                    <Globe size={100} color="white" />
                                </span>
                                <h1 className="text-2xl font-bold text-white mb-2">
                                    Онлайн горим удахгүй нэмэгдэх болно!
                                </h1>
                                <p className="text-white/90">
                                    Та одоогоор зөвхөн Local горим буюу нэг
                                    нэгээрээ харах горимыг ашиглах боломжтой.
                                </p>
                                <div className="mt-4">
                                    <span className="text-sm text-white/70">
                                        Тэвчээртэй хүлээнэ үү 😊
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
            <br />
            <div className="block sm:hidden mt-4">
                <HowToPlayModal />
            </div>
        </main>
    );
}
