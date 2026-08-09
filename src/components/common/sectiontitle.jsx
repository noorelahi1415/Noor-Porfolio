import { motion } from "framer-motion";

function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`text-center px-4 ${className || "mb-10 sm:mb-14 lg:mb-16"}`}
    >
      <p
        className="
          text-blue-600
          dark:text-blue-400
          uppercase
          font-semibold
          text-xs
          sm:text-sm
          tracking-[3px]
          sm:tracking-[5px]
        "
      >
        {subtitle}
      </p>

      <h2
        className="
          mt-3
          max-w-3xl
          mx-auto
          font-bold
          leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-5xl
          xl:text-6xl
          text-slate-900
          dark:text-white
          break-words
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;
