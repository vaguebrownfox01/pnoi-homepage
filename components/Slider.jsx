import Image from "next/image";
import React from "react";

const Slider = ({ slides }) => {
	return (
		<div id="gallery">
			<h1>About</h1>
			<div>
				{slides.map((slide, i) => {
					return (
						<Image
							key={slide.ima}
							src={slide.image}
							width={1440}
							height={600}
							style={{ objectFit: "cover" }}
							alt="/"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
