import Image from "next/image";
import React from "react";
import SectionContainer from "./SectionContainer";

const Funding = () => {
	const img_size = 128;
	return (
		<div>
			<SectionContainer heading={"Support and Funding"}>
				<div className="flex justify-center items-center p-4">
					<Image
						className="mx-4"
						src={"/spr-logo.png"}
						width={img_size * 0.8}
						height={img_size * 0.8}
						alt={"iisc-logo"}
					/>
					<Image
						className="mx-4"
						src={"/dst-logo.png"}
						width={img_size}
						height={img_size}
						alt={"dst-logo"}
					/>
					<Image
						className="mx-4"
						src={"/iisc-logo.png"}
						width={img_size * 1.4}
						height={img_size * 1.4}
						alt={"iisc-logo"}
					/>
				</div>
			</SectionContainer>
		</div>
	);
};

export default Funding;
