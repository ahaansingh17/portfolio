import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Production GenAI & RAG Pipelines | Ahaan Singh",
  description:
    "Case study: RAG workflows, LLM pipeline optimization, and fine-tuned generative models shipped to production at PwC and Digiiq.",
};

export default function Page() {
  return (
    <CaseStudy
      data={{
        category: "AI / LLM Systems",
        title: "Production GenAI & RAG Pipelines",
        subtitle:
          "Building retrieval-augmented generation workflows, optimizing LLM pipelines for a client deployment, and fine-tuning generative models — across PwC and Digiiq.",
        facts: [
          { label: "Where", value: "PwC · Digiiq" },
          { label: "Timeline", value: "Dec 2024 – Jul 2025" },
          { label: "Stack", value: "LangChain · LLaMA · Mistral" },
          { label: "Impact", value: "+40% pipeline perf." },
        ],
        sections: [
          {
            heading: "Context",
            body: [
              "At PwC, internal teams needed AI tooling that could answer questions over large document sets reliably enough for client-facing work. Separately, at Digiiq, a digital agency needed to scale creative production without scaling headcount.",
            ],
          },
          {
            heading: "My role",
            body: [
              "At PwC I worked as a Data Analyst & Cloud Intern building RAG infrastructure and leading the LLM optimization workstream on the client-facing Nokia Project. At Digiiq I owned the generative AI implementation end to end — model selection, fine-tuning, and dataset construction.",
            ],
          },
          {
            heading: "Approach",
            body: [
              "At PwC, I built modular RAG workflows with LangChain and OpenAI APIs — designed so the same retrieval and orchestration components could be redeployed across tools rather than rebuilt for each one. They shipped across 4 internal tools. On the Nokia Project, I benchmarked and tuned open-weight models (LLaMA, Mistral) against the existing pipeline, optimizing for both latency and response accuracy in production tests.",
              "At Digiiq, I fine-tuned Stable Diffusion for brand-consistent image generation and built a 40K+ entry prompt dataset to fine-tune LLaMA — the dataset work mattered more than the model work, improving content originality while minimizing plagiarism.",
            ],
          },
          {
            heading: "Outcome",
            body: [
              "PwC: 30% improvement in average response efficiency across the 4 internal tools; the Nokia Project pipeline improved 40% in performance with 20% lower latency and higher accuracy in production tests.",
              "Digiiq: the generative pipeline automated roughly 80% of the creative production workload, and the fine-tuned models shipped in a live product (pulsar.digiiq.ai).",
            ],
          },
          {
            heading: "What I learned",
            body: [
              "Production LLM work is 20% model choice and 80% everything around it — retrieval quality, dataset construction, evaluation, and latency budgets. The teams that win treat prompts and datasets as engineering artifacts with the same rigor as code.",
            ],
          },
        ],
        links: [{ label: "Live product — pulsar.digiiq.ai", href: "https://pulsar.digiiq.ai" }],
      }}
    />
  );
}
