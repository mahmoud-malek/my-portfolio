import { useRef, useEffect, useState } from "react";

export default function Skills() {

	const skills = [
		{
			name: "JavaScript",
			performance: "85%"
		},
		{
			name: "React",
			performance: "80%"
		},
		{
			name: "Node.js",
			performance: "75%"
		},
		{
			name: "Python",
			performance: "70%"
		},
		{
			name: "MySQL",
			performance: "70%"
		},
		{
			name: "Git",
			performance: "80%"
		},
	]
	const [visibleSkills, setVisibleSkills] = useState(new Set());
	const skillRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = skillRefs.current.indexOf(entry.target);
					if (index !== -1) {
						setVisibleSkills(prev => new Set([...prev, index]));
					}
				}
			})
		}, { threshold: 0.5 })
		
		const currentRefs = skillRefs.current;
		currentRefs.forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			currentRefs.forEach((ref) => {
				if (ref) {
					observer.unobserve(ref);
				}
			});
		}
	}, []);

	return (
		<>
			<section id="skills" className="max-w-full px-4 sm:px-8 md:px-16 lg:px-40 pb-8 md:pb-4 mt-12 md:mt-20 relative overflow-hidden">
				{/* Header */}
				<div className="mb-8 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl mb-4">
						<span className="text-gray-50"># </span>
						<span className="text-green-500">skills</span>
					</h1>
					<p className="text-gray-500 text-base sm:text-lg">
						{">"} Technologies and tools I work with
					</p>
					<div className="mt-4 w-32 h-px bg-green-500 mx-auto md:mx-0"></div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-6">
					{skills.map((skill, idx) => (
						<div className="bg-black border border-green-500/30 hover:border-green-500/60 transition-all duration-300 group w-full" key={idx}>
							{/* Terminal Header */}
							<div className="bg-green-500/10 border-b border-green-500/30 px-3 sm:px-4 py-2 flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-red-500 rounded-full"></div>
										<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-xs text-green-500 font-mono truncate">{skill.name.toLowerCase()}.exe</span>
								</div>
								<span className="text-xs text-green-500/70 font-mono">{skill.performance}</span>
							</div>

							{/* Skill Content */}
							<div className="p-3 sm:p-4">
								<div className="text-lg sm:text-xl text-green-500 font-mono mb-4 group-hover:text-green-400 transition-colors">
									{skill.name}
								</div>
								
								{/* Progress Bar Container */}
								<div className="mb-4">
									<div className="text-xs text-green-500/70 mb-2 font-mono">{">"} proficiency:</div>
									<div className="w-full h-5 sm:h-6 border border-green-500/50 bg-black relative overflow-hidden">
										<div
											ref={(el) => {
												skillRefs.current[idx] = el;
											}}
											className="bg-green-500 h-full transition-all duration-1000 ease-out"
											style={{
												width: visibleSkills.has(idx) ? skill.performance : "0%",
											}}
										></div>
										{/* Progress text overlay */}
										<div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-green-500">
											{visibleSkills.has(idx) ? skill.performance : "0%"}
										</div>
									</div>
								</div>

								{/* Terminal command */}
								<div className="text-xs text-green-500/50 font-mono break-all">
									{">"} skill --level {skill.name.toLowerCase()}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom section */}
				<div className="mt-8 sm:mt-12 text-center">
					<div className="inline-block bg-green-500/10 border border-green-500/30 px-4 sm:px-6 py-4 max-w-full">
						<div className="text-green-500 font-mono mb-2 text-sm sm:text-base">{">"} Always learning new technologies</div>
						<p className="text-gray-400 text-xs sm:text-sm">
							Passionate about staying current with the latest development trends and tools
						</p>
					</div>
				</div>

				{/* Decorative elements - Hidden on mobile */}
				<div className="absolute right-8 top-1/4 w-16 h-12 bg-green-500/5 border border-green-500/20 transform rotate-45 hidden lg:block">
					<div className="text-xs text-green-500/50 p-2 font-mono leading-tight">
						skills<br/>++
					</div>
				</div>
			</section>
		</>
	)
}