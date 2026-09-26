import { createFileRoute } from "@tanstack/react-router";
import { Check, Circle } from "lucide-react";
import { PageShell, SectionHeading } from "../components/aries";
export const Route = createFileRoute("/timeline")({ component: Timeline });
const steps=[["Discovery","Understand goals, audience and positioning."],["Strategy","Turn insights into a clear content and interaction plan."],["Design","Build the visual direction, responsive layouts and motion."],["Development","Craft a fast, accessible and maintainable experience."],["Launch","Polish, test and prepare the final experience for release."]];
function Timeline(){return <PageShell><section className="page-hero"><SectionHeading label="Timeline" title="From First Idea to Final Launch" description="A clear project rhythm keeps every decision visible and every milestone purposeful."/></section><section className="section timeline-list">{steps.map(([title,desc],i)=><article key={title}><div className="timeline-number">{i<4?<Check size={18}/>:<Circle size={18}/>}</div><div><span>Phase 0{i+1}</span><h3>{title}</h3><p>{desc}</p></div></article>)}</section></PageShell>}
