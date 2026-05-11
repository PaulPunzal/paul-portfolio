import BentoCard from "@/components/ui/BentoCard";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-syne text-3xl font-bold text-white mb-2 tracking-tight">About Me</h1>
          <p className="font-mono text-xs tracking-widest text-white/40 uppercase">System Architecture & UI</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Bio Container */}
        <BentoCard className="md:col-span-2 space-y-6">
          <p className="font-inter text-sm leading-relaxed text-white/50 font-light">
            I am an IT graduate with a deep focus on building scalable, real-world systems. My experience bridges the gap between hardware and software—from engineering IoT gate systems with Raspberry Pi and AI object detection, to architecting full-stack web platforms and cross-platform mobile utilities.
          </p>
          <p className="font-inter text-sm leading-relaxed text-white/50 font-light">
            I am passionate about simple, intuitive UI/UX design. I strongly prefer clean layouts that prioritize user experience and performance over overly complex or cluttered interfaces. 
          </p>
        </BentoCard>

        {/* Education Bento */}
        <BentoCard>
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-4">Education</div>
          <h3 className="font-syne font-bold text-lg text-white mb-2">BS Information Technology</h3>
          <p className="font-inter text-xs text-white/40 mb-4">Pambayang Dalubhasaan ng Marilao</p>
          <div className="mt-auto pt-4 border-t border-white/[0.07]">
            <span className="font-mono text-[10px] text-white/30">Expected Graduation: May 2026</span>
          </div>
        </BentoCard>

        {/* Philosophy Bento */}
        <BentoCard>
          <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-4">Approach</div>
          <h3 className="font-syne font-bold text-lg text-white mb-2">Clean Architecture</h3>
          <p className="font-inter text-xs text-white/40 leading-relaxed">
            Specializing in RESTful API design, database structuring, and hardware-software integration. Focused on writing modular, maintainable code whether handling local-storage mobile states or complex backend routing.
          </p>
        </BentoCard>
      </div>
    </div>
  );
}