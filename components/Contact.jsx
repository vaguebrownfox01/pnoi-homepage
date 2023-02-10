import Link from "next/link";
import React from "react";

const Contact = () => {
	return (
		<>
			<div
				id="contact"
				className="flex items-center h-[8rem] mt-12 bg-gray-100"
			>
				<h1>SPIRE Lab</h1>
			</div>
			<span className="flex justify-center items-center font-mono bg-black text-white font-bold text-xs">
				Made with&nbsp;
				<p className="text-red-500 text-xs">&hearts;&nbsp;</p>
				by&nbsp;
				<Link
					href={`${"https://github.com/vaguebrownfox01"}`}
					color="inherit"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"vrx"}
				</Link>
			</span>
		</>
	);
};

export default Contact;
