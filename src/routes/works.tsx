import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MockBrowser, PageShell, SectionHeading } from "../components/aries";
export const Route = createFileRoute("/works")({ component: Works });
function Works() {
  return <PageShell><section className="page-hero"><SectionHeading label="Works" title="Explore Our Recent Projects" description="A curated portfolio of modern interfaces, brand systems and conversion-focused experiences." /></section><section className="section projects-page-grid">{["saas","creative","agency","saas","creative","agency"].map((x,i)=><article className="project-large" key={i}><MockBrowser variant={x}/><div><span>Featured project</span><h3>{["Nova SaaS Platform","Wanderly Experience","Arise Agency System"][i%3]}</h3><a href="#project">View project <ArrowRight size={15}/></a></div></article>)}</section></PageShell>;
}