"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function UnavailablePopup({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .9, opacity: 0 }}
            className="w-[92%] max-w-md rounded-3xl bg-[#F7F3EC] p-10 text-center shadow-2xl"
          >
            <h2 className="font-serif text-4xl italic">
              Currently Unavailable in Your Region
            </h2>

            <p className="mt-5 text-neutral-600 leading-8">
              Online ordering is currently unavailable.
              <br />
              Please contact us directly.
            </p>

            <button
              onClick={onClose}
              className="mt-8 rounded-full bg-black px-8 py-3 text-white hover:bg-[#A67C32] transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}