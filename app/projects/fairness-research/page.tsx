import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Fairness in Real-Money Online Gaming | Ahaan Singh",
  description:
    "Case study: co-authored research on AI fairness in real-money gaming, cited in 3 legal journals and 2 regulatory white papers.",
};

export default function Page() {
  return (
    <CaseStudy
      data={{
        category: "Research · Responsible AI",
        title: "Fairness in Real-Money Online Gaming",
        subtitle:
          "Co-authored research developing neural-network-based fairness metrics for gaming platforms where real money is at stake — interdisciplinary work cited well beyond computer science.",
        facts: [
          { label: "Role", value: "Co-Author" },
          { label: "Timeline", value: "Feb 2024 – Present" },
          { label: "Citations", value: "3 legal journals" },
          { label: "Impact", value: "2 regulatory papers" },
        ],
        sections: [
          {
            heading: "Context",
            body: [
              "India's real-money gaming industry serves hundreds of millions of users, but the algorithms that match players, set odds, and shape outcomes operate with little transparency. The industry had no rigorous way to answer a basic question: how do you even measure whether these systems are fair?",
            ],
          },
          {
            heading: "My role",
            body: [
              "I co-authored the research, contributing to the design of neural-network-based fairness metrics and to the framework that makes those technical measures usable by practitioners outside machine learning. The work was developed with guidance from leading domain experts.",
            ],
          },
          {
            heading: "Approach",
            body: [
              "We approached fairness as a measurable property rather than a slogan: training neural networks to model expected outcome distributions, then defining metrics that flag systematic deviation — the kind of evidence that holds up to scrutiny outside an ML paper.",
              "The harder half of the work was translation. A fairness metric only matters if people beyond machine learning engineers can understand and apply it, so the framework was written to bridge disciplines.",
            ],
          },
          {
            heading: "Outcome",
            body: [
              "The study has been cited in 3 legal journals and 2 regulatory white papers — evidence the work resonates well beyond computer science. It stands as an applied example of responsible AI for platforms with real-currency stakes.",
            ],
          },
          {
            heading: "What I learned",
            body: [
              "This project taught me the value of interdisciplinary work: the hardest problems in AI aren't purely technical, and the most useful research is the kind other fields can pick up and apply. That's the kind of problem-solver I want to be.",
            ],
          },
        ],
      }}
    />
  );
}
