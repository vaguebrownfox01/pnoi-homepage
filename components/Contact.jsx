import Image from "next/image";
import Link from "next/link";
import React from "react";
import Vrx from "./Vrx";

const Contact = () => {
	const img_size = 128;
	return (
		<>
			<div
				id="contact"
				className="flex flex-col justify-center items-center  mt-12 p-8 bg-gray-100"
			>
				<Image
					className="mx-4"
					src={"/spr-logo.png"}
					width={img_size * 0.8}
					height={img_size * 0.8}
					alt={"iisc-logo"}
				/>
				<h1 className="font-bold text-lg pt-0 mt-0">SPIRE Lab</h1>
			</div>
			<Vrx />
		</>
	);
};

export default Contact;
