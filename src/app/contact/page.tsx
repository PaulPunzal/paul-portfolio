import BentoCard from "@/components/ui/BentoCard";
import StatusDot from "@/components/ui/StatusDot";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-syne text-3xl font-bold text-white mb-2 tracking-tight">Connect</h1>
          <p className="font-mono text-xs tracking-widest text-white/40 uppercase">Initiate Contact</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <BentoCard href="mailto:punzalpauljohn@gmail.com" className="group">
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-4">Direct Line</div>
          <div className="font-syne font-bold text-lg text-white mb-1 group-hover:text-accent transition-colors">punzalpauljohn@gmail.com</div>
          <p className="font-inter text-xs text-white/40">Response time: ~24 hours</p>
        </BentoCard>

        {/* Location */}
        <BentoCard>
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-4">Base of Operations</div>
          <div className="font-syne font-bold text-lg text-white mb-1">Marilao, Bulacan</div>
          <p className="font-inter text-xs text-white/40">Philippines (GMT+8)</p>
        </BentoCard>

        {/* GitHub */}
        <BentoCard href="https://github.com/PaulPunzal" className="group">
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-4">Code Repository</div>
          <div className="font-syne font-bold text-lg text-white mb-1 group-hover:text-accent transition-colors">github.com/PaulPunzal</div>
          <p className="font-inter text-xs text-white/40">View source code & contributions</p>
        </BentoCard>

        {/* Status */}
        <BentoCard className="border border-[rgba(125,249,166,0.12)] bg-gradient-to-br from-[rgba(125,249,166,0.06)] to-[rgba(0,212,170,0.03)]">
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-3">Status</div>
          <div className="flex items-center gap-2 mb-2">
            <StatusDot />
            <span className="font-syne font-bold text-sm text-white">Available for Work</span>
          </div>
          <p className="font-inter text-xs text-white/50 leading-relaxed font-light">
            Graduating May 2026 · Open to entry-level and mid-level positions in web, mobile, or full-stack engineering.
          </p>
        </BentoCard>
      </div>
    </div>
  );
}