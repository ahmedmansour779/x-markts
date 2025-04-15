import React from "react";
import Link from "next/link";

export default function SectionTitle({ text }) {
	return (
		<>
		<div className="flat-title flex-row justify-content-between mb-3 px-0 ">
				<span
					className="title wow fadeInUp"
					data-wow-delay="0s"
					style={{ visibility: "visible", animationDelay: "0s" }}
				>
					{text}
				</span>
			
			</div>
		</>
	);
}
