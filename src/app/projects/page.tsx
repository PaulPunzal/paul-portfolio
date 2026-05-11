import BentoCard from "@/components/ui/BentoCard";
import ProjectArrow from "@/components/ui/ProjectArrow";

export default function ProjectsPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-8">
        <h1 className="font-syne text-3xl font-bold text-white mb-2 tracking-tight">System Archive</h1>
        <p className="font-mono text-xs tracking-widest text-white/40 uppercase">Featured Engineering Work</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* MotorPass */}
        <BentoCard className="group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-2">Capstone · IoT + AI</div>
              <h2 className="font-syne font-bold text-2xl text-white">MotorPass</h2>
            </div>
            <ProjectArrow />
          </div>
          <p className="font-inter text-sm text-white/50 font-light leading-relaxed mb-6">
            An IoT-based automated campus entry system engineered on a Raspberry Pi 4. Integrated hardware components with AI-powered YOLO object detection to identify motorcycle helmets. Features include OCR for instant license plate scanning and a real-time synchronized Firebase dashboard.
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
            {["Python", "Raspberry Pi 4", "YOLO/ONNX", "OCR", "Firebase", "SQLite"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/30 font-mono text-[9px] tracking-[0.3px]">{tech}</span>
            ))}
          </div>
        </BentoCard>

        {/* Felamo E-Learning */}
        <BentoCard className="group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-2">Mobile & Full-Stack</div>
              <h2 className="font-syne font-bold text-2xl text-white">Felamo / Segreduino Ecosystem</h2>
            </div>
            <ProjectArrow />
          </div>
          <p className="font-inter text-sm text-white/50 font-light leading-relaxed mb-4">
            A self-contained educational platform featuring a Flutter/Dart mobile frontend paired with a custom Vanilla PHP/MySQL backend. Engineered a dynamic quiz engine that utilizes balanced difficulty distribution logic—fetching specific percentages of easy, medium, and hard questions rather than relying on pure randomization.
          </p>
          <p className="font-inter text-sm text-white/50 font-light leading-relaxed mb-6">
            Architected and executed major backend refactoring, standardizing database table nomenclature (e.g., standardizing tables to <span className="text-white/70 bg-white/5 px-1 rounded">student_aralin_progress</span>) and clarifying the role hierarchy to strictly separate super administrator and teacher account capabilities.
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
            {["Flutter", "Dart", "PHP (Vanilla)", "MySQL", "REST API"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/30 font-mono text-[9px] tracking-[0.3px]">{tech}</span>
            ))}
          </div>
        </BentoCard>

        {/* Offline Grocery List */}
        <BentoCard className="group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-2">Mobile Utility</div>
              <h2 className="font-syne font-bold text-2xl text-white">Offline Grocery OCR</h2>
            </div>
            <ProjectArrow />
          </div>
          <p className="font-inter text-sm text-white/50 font-light leading-relaxed mb-6">
            An offline-first productivity application built in TypeScript. Designed to function entirely without internet connectivity leveraging on-device local storage APIs. Integrated device-native camera access with AI-powered OCR to instantly capture and parse product packaging.
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
            {["React Native (Expo)", "TypeScript", "Local Storage API", "OCR"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/30 font-mono text-[9px] tracking-[0.3px]">{tech}</span>
            ))}
          </div>
        </BentoCard>
      </div>
    </div>
  );
}