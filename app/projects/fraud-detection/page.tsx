import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Real-Time Fraud Detection | Ahaan Singh",
  description:
    "Case study: a computer-vision fraud detection system deployed across 50+ POS endpoints at Americana Foods.",
};

export default function Page() {
  return (
    <CaseStudy
      data={{
        category: "ML System · Computer Vision",
        title: "Real-Time Fraud Detection",
        subtitle:
          "An integrated computer-vision system at Americana Foods that catches fraudulent point-of-sale transactions as they happen.",
        facts: [
          { label: "Role", value: "Junior Developer" },
          { label: "Timeline", value: "May – Aug 2024" },
          { label: "Scale", value: "50+ POS endpoints" },
          { label: "Impact", value: "95% fraud blocked" },
        ],
        sections: [
          {
            heading: "Context",
            body: [
              "Americana Foods — operator of major food brands across the region — was losing revenue to point-of-sale fraud that manual review processes caught too slowly, if at all. Transaction logs and surveillance footage existed in separate systems, so investigators had to reconcile them by hand.",
            ],
          },
          {
            heading: "My role",
            body: [
              "I developed the fraud detection system as a junior developer: the computer-vision pipeline, the API integrations connecting transaction data to surveillance feeds, and the matching algorithms between the two.",
            ],
          },
          {
            heading: "Approach",
            body: [
              "The core idea was correlation: a transaction record alone can look legitimate, and footage alone is just video — but mapped together with timestamps and register positions, anomalies become visible. I built OpenCV-based processing over surveillance streams and engineered algorithms to parse and map transaction data onto them, flagging mismatches in real time rather than in post-hoc review.",
            ],
          },
          {
            heading: "Outcome",
            body: [
              "The system identified and blocked 95% of fraudulent transactions in real time across 50+ POS endpoints during production deployment. Fraud traceability improved by 30%, and investigation review time dropped by 40% because evidence arrived pre-correlated.",
            ],
          },
          {
            heading: "What I learned",
            body: [
              "The most valuable ML systems often aren't novel models — they're well-engineered joins between data sources nobody had connected. This project also sharpened my instinct for responsible AI: when software blocks transactions in real time, the cost of a false positive is a human problem, not just an engineering one.",
            ],
          },
        ],
      }}
    />
  );
}
