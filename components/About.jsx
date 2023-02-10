import Image from "next/image";
import React from "react";
import SectionContainer from "./SectionContainer";

const About = () => {
	const img_size = 420;
	return (
		<>
			<SectionContainer heading={"About"}>
				<div className="flex justify-start items-center mb-8 flex-wrap sm:flex-nowrap">
					<Image
						className="sm:mx-auto mb-2"
						src={"/pnoi-illust.png"}
						width={img_size}
						height={img_size}
						alt={"pnoi-illustration"}
					/>
					<p className="text-lg md:text-lg xl:text-2xl text-slate-700] md:px-8">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pnoi-phone
						is a device that records breath sounds from the mouth
						and chest and sends it to the Pnoi-phone app on a
						smartphone. The app uses AI to diagnose and monitor
						obstructive lung diseases by predicting spirometry
						variables. Traditional spirometry is difficult and
						time-consuming, making it unsuitable for kids and
						elderly people, resulting in inaccurate diagnoses. Using
						both mouth and chest sounds simultaneously is a novel
						approach, as previous attempts only used one or the
						other.
					</p>
				</div>
			</SectionContainer>
		</>
	);
};

export default About;
