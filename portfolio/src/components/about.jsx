import { useState, useEffect, useRef } from "react";

export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const aboutRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			});
		}, { threshold: 0.3 });

		const currentRef = aboutRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	const experiences = [
		{
			position: "Full Stack Developer",
			company: "Tech Solutions Inc.",
			period: "2023 - Present",
			description: "Developing scalable web applications using React, Node.js, and cloud technologies."
		},
		{
			position: "Frontend Developer",
			company: "Digital Agency",
			period: "2022 - 2023",
			description: "Created responsive user interfaces and improved user experience for various clients."
		},
		{
			position: "Software Engineering Student",
			company: "University",
			period: "2020 - 2024",
			description: "Studied computer science fundamentals and modern software development practices."
		}
	];

	return (
		<>
			<section id="about" className="max-w-full px-4 sm:px-8 md:px-16 lg:px-40 pb-8 md:pb-4 mt-12 md:mt-20 relative overflow-hidden" ref={aboutRef}>
				{/* Header */}
				<div className="mb-8 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl mb-4">
						<span className="text-gray-50"># </span>
						<span className="text-green-500">about-me</span>
					</h1>
					<p className="text-gray-500 text-base sm:text-lg">
						{">"} Who am I and what drives my passion for coding
					</p>
					<div className="mt-4 w-32 h-px bg-green-500 mx-auto md:mx-0"></div>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
					{/* Personal Info */}
					<div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
						{/* Bio Terminal */}
						<div className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300">
							{/* Terminal Header */}
							<div className="bg-green-500/10 border-b border-green-500/30 px-3 sm:px-4 py-2 flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-red-500 rounded-full"></div>
										<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-xs text-green-500 font-mono">about_me.txt</span>
								</div>
								<span className="text-xs text-green-500/70 font-mono">reading...</span>
							</div>

							{/* Content */}
							<div className="p-4 sm:p-6">
								<div className="text-green-500 font-mono text-sm mb-4">{">"} cat about_me.txt</div>
								<div className="text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base">
									<p>
										Hello! I'm <span className="text-green-500 font-mono">Mahmoud Abdel-Malek</span>, 
										a passionate full-stack software engineer who loves crafting digital experiences 
										that make a difference.
									</p>
									<p>
										My journey into programming started with curiosity and has evolved into a deep 
										passion for solving complex problems through clean, efficient code. I enjoy 
										working across the entire development stack, from designing intuitive user 
										interfaces to building robust backend systems.
									</p>
									<p>
										When I'm not coding, you'll find me exploring new technologies, contributing 
										to open-source projects, or sharing knowledge with the developer community.
									</p>
								</div>
								
								{/* Terminal command */}
								<div className="mt-6 text-xs text-green-500/50 font-mono">
									{">"} grep -i "passion" about_me.txt | wc -l
									<br />
									<span className="text-green-500">2</span>
								</div>
							</div>
						</div>

						{/* Quick Facts */}
						<div className="bg-black border border-green-500/30 p-6">
							<div className="text-green-500 font-mono text-sm mb-4">{">"} ./quick_facts.sh</div>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-400">Location:</span>
									<span className="text-green-500 font-mono">Egypt</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Experience:</span>
									<span className="text-green-500 font-mono">3+ years</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Focus:</span>
									<span className="text-green-500 font-mono">Full-Stack Development</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Status:</span>
									<span className="text-green-500 font-mono animate-pulse">Available for hire</span>
								</div>
							</div>
						</div>
					</div>

					{/* Experience Timeline */}
					<div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
						<div className="bg-black border border-green-500/30 p-6">
							<div className="text-green-500 font-mono text-sm mb-6">{">"} git log --oneline --graph</div>
							
							<div className="space-y-6">
								{experiences.map((exp, index) => (
									<div key={index} className="relative pl-8">
										{/* Timeline line */}
										<div className="absolute left-0 top-0 w-px h-full bg-green-500/30"></div>
										{/* Timeline dot */}
										<div className="absolute -left-1.5 top-2 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
										
										<div className="space-y-2">
											<div className="text-green-500 font-mono text-sm">{exp.position}</div>
											<div className="text-gray-400 text-sm">
											<span className="text-green-500/70">{exp.company}</span> • {exp.period}
											</div>
											<p className="text-gray-300 text-sm leading-relaxed">
												{exp.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom decoration */}
				<div className="mt-16 text-center">
					<div className="inline-block bg-green-500/10 border border-green-500/30 px-6 py-4">
						<div className="text-green-500 font-mono mb-2">{">"} whoami</div>
						<p className="text-gray-400 text-sm">
							A developer who believes that great software is built with passion, 
							precision, and a commitment to continuous learning.
						</p>
					</div>
				</div>

				{/* Decorative code elements */}
				<div className="absolute right-8 top-1/4 w-16 h-12 bg-green-500/5 border border-green-500/20 transform rotate-12 hidden lg:block">
					<div className="text-xs text-green-500/50 p-2 font-mono leading-tight">
						while<br/>(learning)<br/>{"{ grow() }"}
					</div>
				</div>
			</section>
		</>
	);
}
