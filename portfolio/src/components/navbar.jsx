import { useState, useEffect } from "react"

export default function Navbar() {
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth'
		});
		setIsMenuOpen(false);
	}

	// Track active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'projects', 'skills', 'about', 'contact'];
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial position
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isMenuOpen]);

	return (
		<>
			<section className="flex w-full">
				<div className="hidden md:flex flex-col items-center ml-8">
					<div className="border border-gray-400 h-40 w-px mb-5"></div>

					{/* Social Media Icons*/}
					<div className="flex flex-col space-y-4">
					    {/* GitHub */}
						<a href="https://github.com/mahmoud-malek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/mahmoud-abdul-malik" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>

                        {/* Email */}
                        <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                            </svg>
                        </a>
					</div>
				</div>

				<div className="flex flex-row justify-between w-full mr-6 mt-4">
					<div className="flex flex-row md:ml-30 ml-4">
						<h2 className="text-2xl">
							<span className="bg-green-500 text-black px-0.5 py-0.5 h-min animate-pulse">
							M
							</span>
							ahmoud</h2>
					</div>

					<nav className="hidden md:block ml-15">
						<ul className="flex flex-row space-x-4 ml-3 mr-6 text-2xl">
							<li><button onClick={() => scrollToSection('home')} className={`hover:text-green-400 transition-colors ${activeSection === 'home' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>home</button></li>
							<li><button onClick={() => scrollToSection('about')} className={`hover:text-green-400 transition-colors ${activeSection === 'about' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>about</button></li>
							<li><button onClick={() => scrollToSection('skills')} className={`hover:text-green-400 transition-colors ${activeSection === 'skills' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>skills</button></li>
							<li><button onClick={() => scrollToSection('projects')} className={`hover:text-green-400 transition-colors ${activeSection === 'projects' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>projects</button></li>
							<li><button onClick={() => scrollToSection('contact')} className={`hover:text-green-400 transition-colors ${activeSection === 'contact' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>contact-me</button></li>
						</ul>
					</nav>

					<button
						className="absolute md:hidden block right-0"
						onClick={toggleMenu}
						aria-label="Toggle menu">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
					</button>

					{/* Mobile Modal Menu */}
					{isMenuOpen && (
							<div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden backdrop-blur-sm">
								
							<div className="flex flex-col h-full justify-center items-center">
							{/* Close button */}
							<button 
								onClick={toggleMenu}
								className="absolute top-6 right-6 text-gray-400 hover:text-gray-200"
								aria-label="Close menu"
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
								</svg>
							</button>
							<nav className="px-4 py-2 text-center">
								<ul className="flex flex-col space-y-8 text-2xl">
									<li><button   onClick={() => scrollToSection('home')} className={`hover:text-green-500 transition-colors ${activeSection === 'home' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>home</button></li>
									<li><button   onClick={() => scrollToSection('about')} className={`hover:text-green-500 transition-colors ${activeSection === 'about' ? 'text-green-500': ''}`}> <span className="text-gray-200">#</span>about</button></li>
									<li><button   onClick={() => scrollToSection('skills')} className={`hover:text-green-500 transition-colors ${activeSection === 'skills' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>skills</button></li>
									<li><button   onClick={() => scrollToSection('projects')} className={`hover:text-green-500 transition-colors ${activeSection === 'projects' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>projects</button></li>
									<li><button   onClick={() => scrollToSection('contact')} className={`hover:text-green-500 transition-colors ${activeSection === 'contact' ? 'text-green-500': ''}`}><span className="text-gray-200">#</span>contact-me</button></li>
								</ul>

								 {/* Social Media Icons in Mobile Menu */}
								 <div className="flex flex-row space-x-6 mt-12 justify-center">
									<a href="https://github.com/mahmoud-malek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
									</a>
									<a href="https://linkedin.com/in/mahmoud-abdul-malik" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
										</svg>
									</a>
									<a href="mailto:your.email@example.com" className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
										</svg>
									</a>
								</div>
							</nav>
						</div>
					</div>
					)}
					</div>
			</section>
		</>
	)
};