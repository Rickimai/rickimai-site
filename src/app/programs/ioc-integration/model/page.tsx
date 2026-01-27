import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
	title: "IOC Integration Cost Model | Rick Imai",
	description:
		"Cost model and assumptions for IOC integration: operational costs, recurring query impact, and baseline estimates.",
};

export default function IOCIntegrationModelPage() {
	return (
		<>
			<section className="pt-28 pb-10">
				<div className="container-custom">
					<Breadcrumbs
						items={[
							{ label: "Programs", href: "/programs" },
							{ label: "IOC Integration", href: "/programs/ioc-integration" },
							{ label: "Cost model" },
						]}
					/>

					<div className="mt-6 max-w-4xl">
						<h1 className="heading-1 mt-4 text-neutral-900">Cost model</h1>

						<p className="mt-4 text-lg text-neutral-700 leading-relaxed">
							This page outlines high-level cost assumptions and the expected
							operational impact of recurring queries, storage, and query
							execution patterns for IOC Integration.
						</p>

						<div className="mt-6">
							<Link
								href="/programs/ioc-integration/architecture"
								className="inline-flex items-center text-sm font-medium text-primary-600"
							>
								View architecture <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

