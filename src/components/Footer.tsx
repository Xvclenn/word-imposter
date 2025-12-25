"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <motion.footer
            className="w-full bg-accent border-t border-slate-300 shadow-lg text-center py-4 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-sm text-[#0f172b] mb-2 sm:mb-0">
                © {new Date().getFullYear()} Chikuso. ❤️
            </span>
        </motion.footer>
    );
}
