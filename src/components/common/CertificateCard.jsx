import { motion } from "framer-motion";
import GlassCard from "./Glasscard";

function CertificateCard({ certificate }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <GlassCard className="group h-full overflow-hidden">
        {/* Certificate Content */}
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
          <h3
            className="
              text-lg
              sm:text-xl
              lg:text-2xl
              font-semibold
              text-center
              text-slate-900
              dark:text-white
              break-words
              leading-snug
            "
          >
            {certificate.title}
          </h3>
        </div>

        {/* Certificate Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-t-2xl bg-white p-2">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="
              w-full
              h-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default CertificateCard;
