import React from "react";

const SectionContainer = ({ heading, children }) => {
	return (
		<div>
			<h1
				id="people"
				className="text-2xl font-bold text-center p-4  text-slate-700"
			>
				{heading || "Insert section heading"}
			</h1>
			<div className="block mx-8 mb-8 rounded-xl border-b-[1px] border-grey-500/100">
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
