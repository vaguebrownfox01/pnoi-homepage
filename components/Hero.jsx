import Signal from "./Signal";

const Hero = ({ heading, message }) => {
	return (
		<div className="relative flex items-center justify-center h-[70vh] pt-24 mb-12 bg-fixed bg-center bg-cover ">
			<div className="absolute top-0 left-0 right-0 bottom-[-32px] bg-gradient-to-b from-blue-100/100 to-white/0 z-[2]" />
			<Signal />
			<div className="p-5 text-slate-700 z-[2] mt-[-10rem]">
				<h2 className="text-2xl md:text-5xl font-bold">{heading}</h2>
				<p className="text-lg md:text-xl py-5 hover:text-blue-800 ease-in duration-300">
					{message}
				</p>
				<button className="px-8 py-2 border">About</button>
			</div>
		</div>
	);
};

export default Hero;
