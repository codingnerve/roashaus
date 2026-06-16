"use client";

export function NewsletterForm() {
  return (
    <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Email Address"
        className="flex-1 bg-white/10 text-white placeholder-white/30 px-4 py-3 text-sm outline-none focus:bg-white/15 transition-colors"
        style={{ fontSize: "14px", letterSpacing: "0.05em", border: "0.8px solid rgba(255,255,255,0.2)", borderRight: "none" }}
      />
      <button
        type="submit"
        className="text-white uppercase px-5 py-3 shrink-0 hover:bg-white hover:text-black"
        style={{ fontSize: "13px", letterSpacing: "0.02em", border: "0.8px solid rgba(255,255,255,0.3)", transition: "background-color .1s linear, color .1s linear" }}
      >
        JOIN
      </button>
    </form>
  );
}
