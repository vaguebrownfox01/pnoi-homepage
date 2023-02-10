import { people } from "@/data/people";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxLink1 as LinkIcon } from "react-icons/rx";
import SectionContainer from "./SectionContainer";

const People = () => {
	return (
		<>
			<SectionContainer heading={"People"}>
				<div className="flex flex-wrap justify-around pb-12">
					{people.map((p) => (
						<Card key={p.id + p.name} {...p} />
					))}
				</div>
			</SectionContainer>
		</>
	);
};

const Card = ({ name, image, position, type, place, when, link }) => {
	const img_size = 112;
	return (
		<div className="flex flex-col justify-start  m-2 p-2 py-4 w-[16rem] rounded-xl border-b-[1px] border-grey-500/100">
			<Image
				className="mx-auto rounded-full mb-2"
				src={image}
				width={img_size}
				height={img_size}
				alt={name}
			/>
			<div className="flex flex-col justify-center item-center mb-2 h-16">
				<p className="text-md font-semibold text-center ">{name}</p>
				<p className="text-sm text-center ">{type}</p>
			</div>
			<p className="text-xs font-semibold text-center">{position}</p>
			<p className="text-xs font-normal text-center">{place}</p>
			<span className="flex flex-grow justify-end items-end pt-8 px-2">
				{/* <p className="text-xs font-semibold text-blue-900">{when}</p> */}
				<Link href={link} target="_blank" rel="noopener noreferrer">
					<LinkIcon className="text-blue-800" size={16} />
				</Link>
			</span>
		</div>
	);
};

export default People;
