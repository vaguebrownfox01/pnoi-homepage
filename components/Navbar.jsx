import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navs = [
	{
		id: "about",
		label: "About",
		link: "/#about",
	},
	{
		id: "gallery",
		label: "Gallery",
		link: "/#gallery",
	},
	{
		id: "people",
		label: "People",
		link: "/#people",
	},
	{
		id: "contact",
		label: "Contact",
		link: "/#contact",
	},
];

const Navbar = ({ title }) => {
	const [nav, setNav] = useState(false);
	const [text, setText] = useState(title);

	const handleNav = () => {
		setNav((p) => !p);
	};

	function handleScroll() {
		window.scrollTo(this.link);
	}

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY <= 90) {
				setText(title);
			} else {
				setText("Pnoi");
			}
		};

		window.addEventListener("scroll", changeColor);

		return () => {};
	}, []);

	return (
		<div
			// style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-gradient-to-b from-slate-300 to-slate-200/0"
		>
			<div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-slate-700">
				<Link href="/">
					<h1 className="font-bold text-2xl hover:text-blue-400 ease-in duration-300">
						{text || "Title"}
					</h1>
				</Link>
				<ul className="hidden sm:flex">
					{navs.map((e) => {
						return (
							<li
								key={e.id}
								onClick={handleNav}
								className="p-4 hover:text-blue-400 ease-in duration-300"
							>
								<Link href={e.link}>{e.label}</Link>
							</li>
						);
					})}
				</ul>
				{/* Mobile button */}
				<div
					onClick={handleNav}
					className="block sm:hidden z-10 text-slate-700"
				>
					{!nav ? (
						<AiOutlineMenu style={{ color: "inherit" }} size={28} />
					) : (
						<AiOutlineClose
							style={{ color: "inherit" }}
							size={28}
						/>
					)}
				</div>
				{/* Mobile menu */}
				<div
					className={
						nav
							? "sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-200 text-center ease-in duration-300"
							: "sm:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-slate-200 text-center ease-in duration-300"
					}
				>
					<ul>
						{navs.map((e) => {
							return (
								<li
									key={e.id}
									onClick={handleNav}
									className="p-4 hover:text-blue-400 ease-in duration-300"
								>
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
