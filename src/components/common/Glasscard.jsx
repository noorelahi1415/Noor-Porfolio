function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white/75
        dark:border-white/10
        dark:bg-white/5
        backdrop-blur-lg
        shadow-lg
        shadow-slate-200/50
        dark:shadow-none
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-blue-500/20
        w-full
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;
