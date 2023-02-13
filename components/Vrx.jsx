import Link from "next/link";

const Vrx = () => {
	return (
		<span className="flex justify-center items-center font-mono bg-black text-white font-bold text-xs">
			Made with&nbsp;
			<p className="text-red-500 text-xs">&hearts;&nbsp;</p>
			by&nbsp;
			<Link
				href={`${"https://github.com/vaguebrownfox01"}`}
				color="inherit"
				target="_blank"
				rel="noopener noreferrer"
			>
				{"vrx"}
			</Link>
		</span>
	);
};

export default Vrx;
