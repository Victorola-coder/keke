export default function Hero() {
  return (
    <section className="bg-[#212121]">
      <div className="flex flex-row items-start justify-between">
        <div>
          <h3 className="text-[72px] max-w-[581px] leading-[82.79px">
            Ride Smart, Ride Keke
          </h3>
        </div>

        {/* image */}
        <figure>
          <img src="/images/hero.svg" alt="hero_image" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
