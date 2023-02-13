import Image from "next/image";
import React from "react";
import SectionContainer from "./SectionContainer";

const Funding = () => {
	const img_size = 128;
	return (
		<div>
			<SectionContainer heading={"Support and Funding"}>
				<div className="flex flex-wrap justify-center items-center p-4">
					<Image
						className="mx-4"
						src={"/iisc-logo.png"}
						width={img_size * 1.8}
						height={img_size * 1.8}
						alt={"iisc-logo"}
					/>
					<Image
						className="mx-4"
						src={"/dst-logo.png"}
						width={img_size}
						height={img_size}
						alt={"dst-logo"}
					/>
				</div>
			</SectionContainer>
		</div>
	);
};

export default Funding;
