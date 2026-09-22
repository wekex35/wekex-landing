/**
 * Right-side hero visual — soft left→right fade into the page wash.
 */
export default function HomeHeroGraphic() {
  return (
    <div className="relative h-full min-h-[42svh] w-full overflow-hidden lg:min-h-full">
      <img
        src="/assets/img/wekex-hero-right.png"
        alt="Clinic and property enquiry systems"
        width={1152}
        height={864}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_45%] opacity-0 animate-hero-zoom"
        style={{ animationDelay: "80ms" }}
      />
      {/* Wide soft blend: paper → transparent (left → right) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #f7f8fa 0%, #f7f8fa 8%, rgba(247,248,250,0.92) 22%, rgba(247,248,250,0.55) 38%, rgba(247,248,250,0.18) 55%, transparent 72%)",
        }}
      />
      {/* Extra feather at the seam on large screens */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] lg:block"
        style={{
          background:
            "linear-gradient(90deg, #f7f8fa 0%, rgba(247,248,250,0.7) 35%, transparent 100%)",
        }}
      />
      {/* Mobile: soft top + bottom so it doesn't hard-cut against copy */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, #f7f8fa 0%, rgba(247,248,250,0.7) 40%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 lg:hidden"
        style={{
          background: "linear-gradient(0deg, #f7f8fa 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
