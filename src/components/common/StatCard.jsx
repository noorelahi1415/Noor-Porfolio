import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
        w-full
        rounded-2xl
        border border-slate-200/80
        bg-white/75
        dark:border-white/10
        dark:bg-white/5
        backdrop-blur-lg
        shadow-lg shadow-slate-200/50
        dark:shadow-none
        hover:shadow-blue-500/20
        hover:border-blue-500/30
        transition-all
        duration-300
        p-4
        sm:p-5
        md:p-6
        text-center
        min-h-[140px]
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <h3
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-blue-600
          dark:text-blue-400
          leading-none
        "
      >
        {number}+
      </h3>

      <p
        className="
          mt-3
          text-sm
          sm:text-base
          text-slate-600
          dark:text-[#A0A0A0]
          leading-relaxed
        "
      >
        {label}
      </p>
    </motion.div>
  );
}

export default StatCard;
