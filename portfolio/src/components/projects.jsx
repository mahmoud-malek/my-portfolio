import Navbar from "@/components/navbar";

export default function Projects() {
	
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
			technologies: ["React", "Node.js", "MongoDB", "Express"],
			githubUrl: "https://github.com/mahmoud-malek/ecommerce-app",
			liveUrl: "https://ecommerce-demo.com",
			status: "completed"
		},
		{
			id: 2,
			title: "Task Management System",
			description: "Real-time task management with drag-and-drop functionality",
			technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind"],
			githubUrl: "https://github.com/mahmoud-malek/task-manager",
			liveUrl: "https://task-manager-demo.com",
			status: "in-progress"
		},
		{
			id: 3,
			title: "Weather Dashboard",
			description: "Interactive weather dashboard with location-based forecasts",
			technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
			githubUrl: "https://github.com/mahmoud-malek/weather-dashboard",
			liveUrl: "https://weather-dashboard-demo.com",
			status: "completed"
		},
		{
			id: 4,
			title: "Chat Application",
			description: "Real-time chat application with rooms and file sharing",
			technologies: ["React", "Socket.io", "Node.js", "Redis"],
			githubUrl: "https://github.com/mahmoud-malek/chat-app",
			liveUrl: null,
			status: "in-progress"
		},
		{
			id: 5,
			title: "Portfolio Website",
			description: "Personal portfolio with hacker-themed design and animations",
			technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
			githubUrl: "https://github.com/mahmoud-malek/portfolio",
			liveUrl: "https://mahmoud-portfolio.com",
			status: "completed"
		},
		{
			id: 6,
			title: "API Gateway",
			description: "Microservices API gateway with authentication and rate limiting",
			technologies: ["Node.js", "Express", "JWT", "Docker"],
			githubUrl: "https://github.com/mahmoud-malek/api-gateway",
			liveUrl: null,
			status: "planning"
		}
	];

	const getStatusColor = (status) => {
		switch (status) {
			case "completed":
				return "text-green-500";
			case "in-progress":
				return "text-yellow-500";
			case "planning":
				return "text-blue-500";
			default:
				return "text-gray-500";
		}
	};

	const getStatusIcon = (status) => {
		switch (status) {
			case "completed":
				return "✓";
			case "in-progress":
				return "⟳";
			case "planning":
				return "◯";
			default:
				return "?";
		}
	};

	return (
		<>
			<section id="projects" className="max-w-full px-4 sm:px-8 md:px-16 lg:px-40 pb-8 md:pb-4 mt-12 md:mt-20 relative overflow-hidden">
				
				{/* Header */}
				<div className="mb-8 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl mb-4">
						<span className="text-gray-50"># </span>
						<span className="text-green-500">projects</span>
					</h1>
					<p className="text-gray-500 text-base sm:text-lg">
						{">"} List of my coding projects and contributions
					</p>
					<div className="mt-4 w-32 h-px bg-green-500 mx-auto md:mx-0"></div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
					{projects.map((project) => (
						<div key={project.id} className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300 group w-full">
							{/* Terminal Header */}
							<div className="bg-green-500/10 border-b border-green-500/30 px-3 sm:px-4 py-2 flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-red-500 rounded-full"></div>
										<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-xs text-green-500 font-mono truncate">project_{project.id}.exe</span>
								</div>
								<span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
									{getStatusIcon(project.status)} {project.status}
								</span>
							</div>

							{/* Project Content */}
							<div className="p-3 sm:p-4">
								<h3 className="text-lg sm:text-xl text-green-500 font-mono mb-3 group-hover:text-green-400 transition-colors">
									{project.title}
								</h3>
								
								<p className="text-gray-400 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="mb-4">
									<div className="text-xs text-green-500/70 mb-2 font-mono">{">"} Technologies:</div>
									<div className="flex flex-wrap gap-1 sm:gap-2">
										{project.technologies.map((tech, index) => (
											<span 
												key={index}
												className="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 text-green-500 font-mono"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links */}
								<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
									<a 
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors group/link"
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										<span className="text-xs font-mono group-hover/link:underline">code</span>
									</a>
									
									{project.liveUrl && (
										<a 
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors group/link"
										>
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
											</svg>
											<span className="text-xs font-mono group-hover/link:underline">live</span>
										</a>
									)}
								</div>

								{/* Terminal-style command line */}
								<div className="mt-4 text-xs text-green-500/50 font-mono">
									{">"} git clone {project.githubUrl}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div className="mt-12 sm:mt-16 text-center">
					<div className="inline-block bg-green-500/10 border border-green-500/30 px-4 sm:px-6 py-4 max-w-full">
						<div className="text-green-500 font-mono mb-2 text-sm sm:text-base">{">"} Want to collaborate?</div>
						<p className="text-gray-400 text-xs sm:text-sm mb-4">
							I'm always open to interesting projects and opportunities
						</p>
						<a 
							href="mailto:your.email@example.com"
							className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500 px-3 sm:px-4 py-2 text-green-500 hover:bg-green-500/30 transition-colors font-mono text-xs sm:text-sm"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
							</svg>
							<span>contact.me()</span>
						</a>
					</div>
				</div>

				{/* Hacker-style decorative elements - Hidden on mobile */}
				<div className="fixed bottom-8 right-8 text-green-500/20 font-mono text-xs pointer-events-none hidden md:block">
					<div className="animate-pulse">
						{">"} projects.length: {projects.length}
					</div>
				</div>
			</section>
		</>
	);
}
