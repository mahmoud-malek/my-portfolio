import Navbar from "@/components/navbar";
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
		<>
			<Navbar />
			<section className="max-w-full flex flex-row flex-wrap items-center justify-between px-16 md:-mt-20 mb-20"
			onMouseMove={handleMouse}>
				<div className="flex-1 md:ml-25 z-10">
					<h1 className="md:text-4xl text-2xl">
						<span className="typing">
							Hi, It's Mahmoud Abdel-Malek
							</span>
						<br />
						<span className="text-gray-50">I'm a </span>full stack software engineer
					</h1>
					<p className="text-gray-500">
						i'm currently learning new technologies <br />
						and deepen my skills in problem solving
					</p>

					<button 
						onClick={() => {
							document.getElementById('projects-section').scrollIntoView({ 
								behavior: 'smooth' 
							});
						}}
						className="mt-5 border-1 border-green-500 p-2 text-gray-200 hover:bg-green-500/20 cursor-pointer"
					>
						Scroll Down
						<svg width="24" height="24" className="inline animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17V7M12 17L16 13M12 17L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
					</button>
				</div>

				{/* Hacker-style background shapes container */}
				<div className="flex-1 relative h-96 flex items-center justify-center">
					{/* Main terminal window for photo */}
					<div className="w-80 h-80 bg-black border-2 border-green-500 relative overflow-hidden">
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
					
					{/* Hacker-style geometric shapes */}
					{/* Matrix-style code blocks */}
					<div 
						className="absolute top-4 left-4 w-12 h-16 bg-green-500/20 border border-green-500/40 transition-transform duration-300"
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
						className="absolute bottom-8 right-8 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-green-500/30 transition-transform duration-300"
						style={{
							transform: `rotate(${(MousePos.y / 10) + (Scroll.y / 15)}deg) scale(${1 + MousePos.x / 800 + Scroll.y / 2000})`
						}}
					></div>
					
					{/* Code terminal window */}
					<div 
						className="absolute top-16 right-4 w-20 h-12 bg-black border border-green-500/50 transition-transform duration-300"
						style={{
							transform: `translateX(${(MousePos.x / 40) + (Scroll.y / 25)}px) translateY(${(MousePos.y / 40) - (Scroll.y / 35)}px)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight">
							{">"} ls -la<br/>
							{">"} cd /
						</div>
					</div>
					
					{/* Hexagonal shape */}
					<div 
						className="absolute bottom-16 left-0 w-10 h-12 bg-green-500/20 border border-green-500/40 transition-transform duration-300"
						style={{
							transform: `rotate(${45 + (MousePos.x / 15) - (Scroll.y / 20)}deg) scale(${1 + MousePos.y / 1200 + Scroll.y / 3000})`
						}}
					></div>
					
					{/* Binary pattern block */}
					<div 
						className="absolute top-1/3 left-2 w-8 h-20 bg-black border border-green-500/40 transition-transform duration-300"
						style={{
							transform: `rotate(${90 + (MousePos.y / 25) + (Scroll.y / 40)}deg) translateY(${(MousePos.x / 60) + (Scroll.y / 80)}px)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono leading-tight opacity-70 origin-center">
							1010<br/>0101
						</div>
					</div>
					
					{/* Sharp triangle */}
					<div 
						className="absolute top-6 right-16 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-green-500/40 transition-transform duration-300"
						style={{
							transform: `rotate(${(MousePos.x / 8) - (Scroll.y / 12)}deg) translateX(${Scroll.y / 100}px)`
						}}
					></div>
					
					{/* ASCII art block */}
					<div 
						className="absolute bottom-4 left-12 w-16 h-8 bg-black border border-green-500/30 transition-transform duration-300"
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
						className="absolute top-1/2 right-0 w-12 h-6 bg-green-500/10 border border-green-500/40 transition-transform duration-300"
						style={{
							transform: `translateX(${MousePos.x / 80}px) rotate(${MousePos.y / 40}deg)`
						}}
					>
						<div className="text-xs text-green-500 p-1 font-mono animate-pulse">{"█"}</div>
					</div>

				</div>
				{/* Rectangle with terminal cursor*/}
				<div className="absolute -left-6 space-y-5">

				<div className=" w-18 h-9 border-2 border-green-500/40 bg-green-500/5 hover:bg-green-500 "></div>
				<div className=" w-18 h-9 border-2 border-green-500/40 bg-green-500/5  hover:bg-green-500 "></div>
				<div className=" w-18 h-9 border-2 border-green-500/40 bg-green-500/5  hover:bg-green-500 "></div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects-section" className="w-full px-16 py-16 border-t border-green-500/20">
				{/* Header */}
				<div className="mb-12">
					<h2 className="text-4xl mb-4">
						<span className="text-gray-50"># </span>
						<span className="text-green-500">projects</span>
					</h2>
					<p className="text-gray-500 text-lg">
						{">"} Some of my coding projects and contributions
					</p>
					<div className="mt-4 w-32 h-px bg-green-500"></div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{/* Project 1 */}
					<div className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
						{/* Terminal Header */}
						<div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2 flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-green-500 font-mono">project_1.exe</span>
							</div>
							<span className="text-xs font-mono text-green-500">✓ completed</span>
						</div>
						<div className="p-4">
							<h3 className="text-xl text-green-500 font-mono mb-3 group-hover:text-green-400 transition-colors">
								E-Commerce Platform
							</h3>
							<p className="text-gray-400 text-sm mb-4 leading-relaxed">
								Full-stack e-commerce solution with React, Node.js, and MongoDB
							</p>
							<div className="mb-4">
								<div className="text-xs text-green-500/70 mb-2 font-mono">{">"} Technologies:</div>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">React</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">Node.js</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">MongoDB</span>
								</div>
							</div>
						</div>
					</div>

					{/* Project 2 */}
					<div className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
						<div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2 flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-green-500 font-mono">project_2.exe</span>
							</div>
							<span className="text-xs font-mono text-yellow-500">⟳ in-progress</span>
						</div>
						<div className="p-4">
							<h3 className="text-xl text-green-500 font-mono mb-3 group-hover:text-green-400 transition-colors">
								Task Management System
							</h3>
							<p className="text-gray-400 text-sm mb-4 leading-relaxed">
								Real-time task management with drag-and-drop functionality
							</p>
							<div className="mb-4">
								<div className="text-xs text-green-500/70 mb-2 font-mono">{">"} Technologies:</div>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">React</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">Socket.io</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">PostgreSQL</span>
								</div>
							</div>
						</div>
					</div>

					{/* Project 3 */}
					<div className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
						<div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2 flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-green-500 font-mono">project_3.exe</span>
							</div>
							<span className="text-xs font-mono text-blue-500">◯ planning</span>
						</div>
						<div className="p-4">
							<h3 className="text-xl text-green-500 font-mono mb-3 group-hover:text-green-400 transition-colors">
								Weather Dashboard
							</h3>
							<p className="text-gray-400 text-sm mb-4 leading-relaxed">
								Interactive weather dashboard with location-based forecasts
							</p>
							<div className="mb-4">
								<div className="text-xs text-green-500/70 mb-2 font-mono">{">"} Technologies:</div>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">JavaScript</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">API</span>
									<span className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono">Chart.js</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* View All Projects Button */}
				<div className="text-center">
					<button 
						onClick={() => window.location.href = '/projects'}
						className="bg-green-500/10 border border-green-500 px-8 py-3 text-green-500 hover:bg-green-500/20 transition-colors font-mono text-sm"
					>
						{">"} view_all_projects()
					</button>
				</div>

				{/* Hacker-style decorative elements */}
				<div className="relative mt-16">
					{/* Code block decoration */}
					<div className="absolute top-0 right-0 w-24 h-16 bg-green-500/5 border border-green-500/20 transform rotate-12">
						<div className="text-xs text-green-500/50 p-2 font-mono leading-tight">
							const<br/>projects<br/>= [...]
						</div>
					</div>
					
					{/* Terminal cursor */}
					<div className="absolute bottom-0 left-8 w-16 h-6 bg-green-500/10 border border-green-500/30">
						<div className="text-xs text-green-500 p-1 font-mono animate-pulse">{"█"}</div>
					</div>
				</div>
			</section>
		</>
	)
}