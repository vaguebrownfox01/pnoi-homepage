import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxLink1 as LinkIcon } from "react-icons/rx";
import SectionContainer from "./SectionContainer";

const people = [
	{
		id: "1",
		name: "Dr. Prasanta Kumar Ghosh",
		position: "Associate Professor",
		place: "EE Dept., IISc, Bangalore",
		link: "",
		image: "/pfp.png",
		type: "CO-PI",
		when: "present",
	},
	{
		id: "2",
		name: "Dr. Uma Maheshwari",
		position: "HOD & Professor",
		place: "Pulmonary Medicine Dept., St.John's Medical College, Bangalore",
		link: "",
		image: "/pfp.png",
		type: "CO-PI",
		when: "present",
	},
	{
		id: "22",
		name: "Dr. Dipanjan Gope",
		position: "Associate Professor",
		place: "EE Dept., IISc, Bangalore",
		link: "",
		image: "/pfp.png",
		type: "CO-PI",
		when: "present",
	},
	{
		id: "3",
		name: "Jeevan Kylash",
		position: "Junior Research Fellow",
		place: "SPIRE Lab, IISc, Bangalore",
		link: "",
		image: "/pfp.png",
		type: "Core Team",
		when: "present",
	},
	{
		id: "4",
		name: "Shaique Solanki",
		position: "Junior Research Fellow",
		place: "SPIRE Lab, IISc, Bangalore",
		link: "",
		image: "/pfp.png",
		type: "Core Team",
		when: "present",
	},

	// {
	// 	id: "5",
	// 	name: "Dr. Veerababu Dharanalakota",
	// 	position: "Postdoctoral Fellow",
	// 	place: "SPIRE Lab, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "present",
	// },
	// {
	// 	id: "6",
	// 	name: "Dr. Priya Ramachandran",
	// 	position: "Professor and HOD",
	// 	place: "Pulmonary Medicine SJMCH, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "present",
	// },
	// {
	// 	id: "6",
	// 	name: "Sai Keerthana Arun",
	// 	position: "UI/UX Designer & App developer",
	// 	place: "SPIRE Lab, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "present",
	// },
	// {
	// 	id: "66",
	// 	name: "Dr. Shivani Yadav",
	// 	position: "PhD EE Dept., IISc, Bangalore",
	// 	place: "Pulmonary Medicine SJMCH, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "core",
	// 	when: "2020",
	// },
	// {
	// 	id: "7",
	// 	name: "Komal Nikhil Shah",
	// 	position: "Product Designer",
	// 	place: "CPDM, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "2021",
	// },
	// {
	// 	id: "8",
	// 	name: "Syed Fahad",
	// 	position: "Intern (Embedded System)",
	// 	place: "SPIRE Lab, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "2022",
	// },
	// {
	// 	id: "9",
	// 	name: "Prateek Narasimha",
	// 	position: "Intern (Embedded System)",
	// 	place: "SPIRE Lab, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "2022",
	// },
	// {
	// 	id: "10",
	// 	name: "Akansh Mayura",
	// 	position: "Intern (Machine Learning)",
	// 	place: "SPIRE Lab, IISc, Bangalore",
	// 	link: "",
	// 	image: "/pfp.png",
	// 	type: "support",
	// 	when: "2021",
	// },
];

const support = [];

const People = () => {
	return (
		<>
			<SectionContainer heading={"People"}>
				<div className="flex flex-wrap justify-around">
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
			<span className="flex flex-grow justify-between items-end pt-8 px-2">
				<p className="text-xs font-semibold text-blue-900">{when}</p>
				<Link href={link} about="_blank">
					<LinkIcon className="text-blue-800" size={16} />
				</Link>
			</span>
		</div>
	);
};

export default People;
