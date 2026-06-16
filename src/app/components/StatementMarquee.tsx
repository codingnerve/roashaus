const TEXT =
  "Newly launched. Deeply experienced. · Paid Social · Paid Search · UGC Creative · Email & SMS · CRO & Funnels · Built for e-commerce brands ready to grow · ";

export default function StatementMarquee() {
  return (
    <div className="bg-black overflow-hidden py-6">
      <div className="marquee-track" aria-hidden="true">
        <span
          className="text-white/90 whitespace-nowrap pr-0 shrink-0"
          style={{ fontSize: "clamp(28px,5vw,53px)", fontWeight: 400, letterSpacing: "-0.03em" }}
        >
          {TEXT}
        </span>
        <span
          className="text-white/90 whitespace-nowrap pr-0 shrink-0"
          style={{ fontSize: "clamp(28px,5vw,53px)", fontWeight: 400, letterSpacing: "-0.03em" }}
        >
          {TEXT}
        </span>
      </div>
      <p className="sr-only">{TEXT}</p>
    </div>
  );
}
