import Image from "next/image";
import React, { useState } from "react";
import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
	FaArrowCircleRight,
} from "react-icons/fa";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div id="gallery" className="max-w-[1240px] mx-auto">
			<h1 className="text-2xl font-bold text-center p-4">About</h1>

			<div className="relative flex justify-center p-4">
				{slides.map((slide, i) => {
					return (
						<div
							key={slide.ima}
							className={
								i === current
									? "opacity-1 ease-in duration-1000"
									: "opacity-0"
							}
						>
							<FaArrowAltCircleLeft
								onClick={prevSlide}
								className="absolute top-[50%] left-[32px] text-white/70 cursor-pointer select-none z-[2]"
								size={48}
							/>
							{i === current && (
								<Image
									src={slide.image}
									width={1440}
									height={600}
									// style={{ objectFit: "cover" }}
									alt="/"
								/>
							)}
							<FaArrowAltCircleRight
								onClick={nextSlide}
								className="absolute top-[50%] right-[32px] text-white/70 cursor-pointer select-none z-[2]"
								size={48}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
