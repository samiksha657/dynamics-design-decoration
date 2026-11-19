import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-page px-6 pb-10 pt-16 lg:px-10 lg:pt-24">
          <p className="eyebrow">Portfolio</p>
          <h1 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">Problems found. Solutions delivered.</h1>
        </div>
      </section>
      <ProjectsExplorer />
      <CtaBand title="Your project could be next." label="Get a Proposal" />
    </>
  );
}
