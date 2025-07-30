import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import { useState, useEffect } from "react"

export default function Home() {
	const [MousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [Scroll, setScroll] = useState({ x: 0, y: 0 })
	
	const handleMouse = (MouseEvent) => {
		setMousePos({ x: MouseEvent.clientX, y: MouseEvent.clientY });
	}

	const handleScroll = () => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			{/*Hero Section*/}
			<section id="home" className=" w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-48 md:-mt-20 mb-20 relative overflow-hidden"
			onMouseMove={handleMouse}>
				<div className="flex-1 w-full lg:w-auto text-center lg:text-left z-10 mb-8 lg:mb-0">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
						<span className="typing mb-2">
							Hi, It's Mahmoud Abdel-Malek
						</span>
						<span className="text-gray-50">I'm a </span>
						<span className="text-green-500">full stack software engineer</span>
					</h1>
					<p className="text-gray-500 text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
						I'm currently learning new technologies and deepening my skills in problem solving
					</p>

					<button 
						onClick={() => {
							document.getElementById('about').scrollIntoView({ 
								behavior: 'smooth' 
							});
						}}
						className="mt-6 border border-green-500 px-4 py-2 sm:px-6 sm:py-3 text-gray-200 hover:bg-green-500/20 cursor-pointer transition-all duration-300 text-sm"
					>
						Scroll Down
						<svg width="20" height="20" className="inline ml-2 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17V7M12 17L16 13M12 17L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
					</button>
				</div>

				{/* Hacker-style background shapes container */}
				<div className="flex-1 relative h-64 sm:h-80 md:h-96 flex items-center justify-center w-full lg:w-auto">
					{/* Main terminal window for photo */}
					<div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-black border-2 border-green-500 relative overflow-hidden mx-auto">
						{/* Terminal header */}
						<div className="w-full h-6 bg-green-500 flex items-center px-2">
							<div className="flex space-x-1 ">
								<div className="w-2 h-2 bg-black rounded-full"></div>
								<div className="w-2 h-2 bg-black rounded-full"></div>
								<div className="w-2 h-2 bg-black rounded-full"></div>
							</div>
							<div className="ml-2 text-xs text-black font-mono">photo.exe</div>
						</div>
						{/* Photo placeholder */}
						<div className="w-full h-full relative bg-black flex items-center justify-center text-green-500 font-mono border-t border-green-500/30">
							<div className="w-full h-full">
								<video src="/video1.webm"
									autoPlay
									loop
									muted
									className="w-full h-full object-cover"
									onError={(e) => {
										console.error("Video failed to load:", e)
										e.target.style.display = 'none'; // Hide video element on error
									 }}
								/>
							</div>
						</div>
					</div>
					
					{/* Hacker-style geometric shapes - Hidden on mobile and tablet */}
					{/* Matrix-style code blocks */}
					<div 
						className="absolute top-4 left-4 w-8 h-12 sm:w-12 sm:h-16 bg-green-500/20 border border-green-500/40 transition-transform duration-300 hidden lg:block"
						style={{
							transform: `rotate(${12 + (MousePos.x / 20) + (Scroll.y / 30)}deg) translateY(${Scroll.y / 50}px)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight opacity-60">
							01<br/>10<br/>11<br/>00
						</div>
					</div>
					
					{/* Sharp diamond */}
					<div 
						className="absolute bottom-8 right-8 w-0 h-0 border-l-6 border-r-6 border-b-12 sm:border-l-8 sm:border-r-8 sm:border-b-16 border-l-transparent border-r-transparent border-b-green-500/30 transition-transform duration-300 hidden lg:block"
						style={{
							transform: `rotate(${(MousePos.y / 10) + (Scroll.y / 15)}deg) scale(${1 + MousePos.x / 800 + Scroll.y / 2000})`
						}}
					></div>
					
					{/* Code terminal window */}
					<div 
						className="absolute top-16 right-4 w-16 h-10 sm:w-20 sm:h-12 bg-black border border-green-500/50 transition-transform duration-300 hidden xl:block"
						style={{
							transform: `translateX(${Math.min((MousePos.x / 40) + (Scroll.y / 25), 15)}px) translateY(${Math.max(Math.min((MousePos.y / 40) - (Scroll.y / 35), 10), -10)}px)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight">
							{">"} ls -la<br/>
							{">"} cd /
						</div>
					</div>
					
					{/* Hexagonal shape */}
					<div 
						className="absolute bottom-16 left-0 w-8 h-10 sm:w-10 sm:h-12 bg-green-500/20 border border-green-500/40 transition-transform duration-300 hidden lg:block"
						style={{
							transform: `rotate(${45 + (MousePos.x / 15) - (Scroll.y / 20)}deg) scale(${1 + MousePos.y / 1200 + Scroll.y / 3000})`
						}}
					></div>
					
					{/* Binary pattern block */}
					<div 
						className="absolute top-1/3 left-2 w-6 h-16 sm:w-8 sm:h-20 bg-black border border-green-500/40 transition-transform duration-300 hidden xl:block"
						style={{
							transform: `rotate(${90 + (MousePos.y / 25) + (Scroll.y / 40)}deg) translateY(${Math.max(Math.min((MousePos.x / 60) + (Scroll.y / 80), 20), -20)}px)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight opacity-70 origin-center">
							1010<br/>0101
						</div>
					</div>
					
					{/* Sharp triangle */}
					<div 
						className="absolute top-6 right-4 w-0 h-0 border-l-4 border-r-4 border-b-8 sm:border-l-6 sm:border-r-6 sm:border-b-12 border-l-transparent border-r-transparent border-b-green-500/40 transition-transform duration-300 hidden xl:block"
						style={{
							transform: `rotate(${(MousePos.x / 8) - (Scroll.y / 12)}deg) translateX(${Math.max(Math.min(Scroll.y / 100, 10), -10)}px)`
						}}
					></div>
					
					{/* ASCII art block */}
					<div 
						className="absolute bottom-4 left-4 w-12 h-6 sm:w-16 sm:h-8 bg-black border border-green-500/30 transition-transform duration-300 hidden xl:block"
						style={{
							transform: `rotate(${-12 + (MousePos.y / 20) + (Scroll.y / 25)}deg) skew(${(MousePos.x / 80) + (Scroll.y / 150)}deg)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight opacity-50">
							{"</>"}
						</div>
					</div>
					
					{/* Rectangle with terminal cursor */}
					<div 
						className="absolute top-1/2 right-2 w-10 h-5 sm:w-12 sm:h-6 bg-green-500/10 border border-green-500/40 transition-transform duration-300 hidden lg:block"
						style={{
							transform: `translateX(${Math.min(MousePos.x / 80, 20)}px) rotate(${MousePos.y / 40}deg)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono animate-pulse">{"█"}</div>
					</div>

				</div>
				
				{/* Side decorative elements - Hidden on mobile and tablet */}
				<div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-1/2 space-y-5 hidden 2xl:block">
					<div className="w-16 h-8 border-2 border-green-500/40 bg-green-500/5 hover:bg-green-500/20 transition-colors duration-300"></div>
					<div className="w-16 h-8 border-2 border-green-500/40 bg-green-500/5 hover:bg-green-500/20 transition-colors duration-300"></div>
					<div className="w-16 h-8 border-2 border-green-500/40 bg-green-500/5 hover:bg-green-500/20 transition-colors duration-300"></div>
				</div>
			</section>

			{/* Projects Section */}
			<Projects />
			
			{/* Skills Section */}
			<Skills />

			{/* About Section */}
			<About />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	)
}