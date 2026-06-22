import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import { Stack } from "./sections/Stack";
import { BlogPreview } from "./sections/BlogPreview";
import { Contact } from "./sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Stack />
      <BlogPreview />
      <Contact />
    </>
  );
}
