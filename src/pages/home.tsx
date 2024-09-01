// import { SEO } from "../components";

import { Hero } from "../components/elements";
import { Navbar } from "../components/molecules";

export default function Home() {
  return (
    <>
      <main className="mx-[80px]">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
