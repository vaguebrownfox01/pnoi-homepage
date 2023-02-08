import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navs = [
	{
		id: "about",
		label: "About",
		link: "/",
	},
	{
		id: "gallery",
		label: "Gallery",
		link: "/",
	},
	{
		id: "team",
		label: "Team",
		link: "/",
	},
	{
		id: "contact",
		label: "Contact",
		link: "/",
	},
];

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");

	const handleNav = () => {
		setNav((p) => !p);
	};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("#eefa");
				setTextColor("#000");
			} else {
				setColor("transparent");
				setTextColor("#fff");
			}
		};

		window.addEventListener("scroll", changeColor);

		return () => {};
	}, []);

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
		>
			<div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
				<Link href="/">
					<h1
						style={{ color: `${textColor}` }}
						className="font-bold text-4xl"
					>
						Pnoi
					</h1>
				</Link>
				<ul
					style={{ color: `${textColor}` }}
					className="hidden sm:flex"
				>
					{navs.map((e) => {
						return (
							<li key={e.id} className="p-4">
								<Link href={e.link}>{e.label}</Link>
							</li>
						);
					})}
				</ul>
				{/* Mobile button */}
				<div
					onClick={handleNav}
					className="block sm:hidden z-10"
					style={{ color: `${textColor}` }}
				>
					{!nav ? (
						<AiOutlineMenu style={{ color: "inherit" }} size={28} />
					) : (
						<AiOutlineClose style={{ color: "#fff" }} size={28} />
					)}
				</div>
				{/* Mobile menu */}
				<div
					className={
						nav
							? "sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
							: "sm:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
					}
				>
					<ul>
						{navs.map((e) => {
							return (
								<li key={e.id} className="p-4">
									<Link href={e.link}>{e.label}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
