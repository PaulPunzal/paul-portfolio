export default function StatusDot() {
  return (
    <div className="relative flex h-2.5 w-2.5 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40"></span>
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
    </div>
  );
}