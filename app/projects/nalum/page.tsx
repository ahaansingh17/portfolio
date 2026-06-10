import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "NALUM — NSUT Alumni Platform | Ahaan Singh",
  description:
    "Case study: co-founding NSUT's official alumni platform and growing it to 5,000+ registrations in six months.",
};

export default function Page() {
  return (
    <CaseStudy
      data={{
        category: "Product · Community",
        title: "NALUM — NSUT Alumni Platform",
        subtitle:
          "Co-founding the official alumni platform of Netaji Subhas University of Technology, and growing it into a community of 5,000+.",
        facts: [
          { label: "Role", value: "Co-Founder & Director" },
          { label: "Timeline", value: "2023 – Present" },
          { label: "Scale", value: "5,000+ registrations" },
          { label: "Impact", value: "+40% engagement" },
        ],
        sections: [
          {
            heading: "Context",
            body: [
              "NSUT — one of India's largest engineering universities — had no official channel connecting its tens of thousands of alumni back to the institution and its students. Mentorship, referrals, and institutional memory were scattered across informal WhatsApp groups and LinkedIn threads.",
            ],
          },
          {
            heading: "My role",
            body: [
              "I co-founded NALUM as the official alumni portal and directed its development and growth. That meant everything early-stage founders do: shaping the product, contributing to frontend development, recruiting and leading a team of developers, designers, and outreach specialists, and owning community operations.",
            ],
          },
          {
            heading: "Approach",
            body: [
              "We treated alumni onboarding as the single metric that mattered for the first six months. The team shipped UI/UX improvements in tight iterations based on direct user feedback, while a parallel outreach track ran alumni-focused events, webinars, and campaigns to give people a reason to come back after registering.",
              "Leading a cross-functional volunteer team taught me a lesson no internship could: when nobody is paid, clarity of purpose and ownership are the only management tools you have.",
            ],
          },
          {
            heading: "Outcome",
            body: [
              "5,000+ alumni registered within the first six months of launch. UI/UX enhancements drove a 40% improvement in user engagement, and the portal now operates as NSUT's official alumni channel — outliving the team that built it, which is the point.",
            ],
          },
          {
            heading: "What I learned",
            body: [
              "Products grow when distribution is designed alongside the product, not after it. The events and outreach campaigns weren't marketing for the portal — they were the portal's value, delivered in person. I carry that lesson into every system I build now: adoption is a feature.",
            ],
          },
        ],
      }}
    />
  );
}
