import { useState, useEffect, useRef } from "react";

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState("");
	const contactRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			});
		}, { threshold: 0.3 });

		const currentRef = contactRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("processing");

		// Simulate form submission (replace with actual form handling)
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
			
			// Reset status after 3 seconds
			setTimeout(() => {
				setSubmitStatus("");
			}, 3000);
		}, 2000);
	};

	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/mahmoud-malek",
			icon: (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
			),
			command: "git clone"
		},
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/mahmoud-malek",
			icon: (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
			),
			command: "connect --professional"
		},
		{
			name: "Email",
			url: "mailto:mahmoud.malek@example.com",
			icon: (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
				</svg>
			),
			command: "send --message"
		},
		{
			name: "Twitter",
			url: "https://twitter.com/mahmoud_malek",
			icon: (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
				</svg>
			),
			command: "follow --updates"
		}
	];

	return (
		<>
			<section id="contact" className="max-w-full px-4 sm:px-8 md:px-16 lg:px-40 pb-16 md:pb-8 mt-12 md:mt-20 relative overflow-hidden" ref={contactRef}>
				{/* Header */}
				<div className="mb-8 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl mb-4">
						<span className="text-gray-50"># </span>
						<span className="text-green-500">contact</span>
					</h1>
					<p className="text-gray-500 text-base sm:text-lg">
						{">"} Let's build something amazing together
					</p>
					<div className="mt-4 w-32 h-px bg-green-500 mx-auto md:mx-0"></div>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Contact Form */}
					<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
						<div className="bg-black border-2 border-green-500/30 hover:border-green-500/60 transition-all duration-300">
							{/* Terminal Header */}
							<div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2 flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-red-500 rounded-full"></div>
										<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-xs text-green-500 font-mono">contact_form.exe</span>
								</div>
								<span className={`text-xs font-mono ${
									submitStatus === "processing" ? "text-yellow-500" :
									submitStatus === "success" ? "text-green-500" : "text-green-500/70"
								}`}>
									{submitStatus === "processing" ? "sending..." :
									 submitStatus === "success" ? "sent ✓" : "ready"}
								</span>
							</div>

							{/* Form Content */}
							<div className="p-6">
								<div className="text-green-500 font-mono text-sm mb-4">{">"} ./send_message.sh</div>
								
								<form onSubmit={handleSubmit} className="space-y-4">
									{/* Name Input */}
									<div>
										<label className="block text-green-500 font-mono text-sm mb-2">
											{">"} name:
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full bg-black border border-green-500/30 focus:border-green-500 px-3 py-2 text-green-500 font-mono text-sm outline-none transition-colors"
											placeholder="Enter your name..."
										/>
									</div>

									{/* Email Input */}
									<div>
										<label className="block text-green-500 font-mono text-sm mb-2">
											{">"} email:
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full bg-black border border-green-500/30 focus:border-green-500 px-3 py-2 text-green-500 font-mono text-sm outline-none transition-colors"
											placeholder="your.email@domain.com"
										/>
									</div>

									{/* Message Input */}
									<div>
										<label className="block text-green-500 font-mono text-sm mb-2">
											{">"} message:
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows="6"
											className="w-full bg-black border border-green-500/30 focus:border-green-500 px-3 py-2 text-green-500 font-mono text-sm outline-none transition-colors resize-none"
											placeholder="Your message here..."
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										disabled={isSubmitting}
										className={`w-full py-3 px-4 border-2 font-mono text-sm transition-all duration-300 ${
											isSubmitting 
												? 'border-yellow-500/50 text-yellow-500/50 cursor-not-allowed' 
												: 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
										}`}
									>
										{isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
									</button>
								</form>

								{/* Success Message */}
								{submitStatus === "success" && (
									<div className="mt-4 text-xs text-green-500 font-mono animate-pulse">
										{">"} Message sent successfully! I'll get back to you soon.
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Contact Info & Social Links */}
					<div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
						{/* Direct Contact */}
						<div className="bg-black border border-green-500/30 p-6">
							<div className="text-green-500 font-mono text-sm mb-4">{">"} ls contact_methods/</div>
							<div className="space-y-4">
								<div className="flex items-center space-x-3 text-gray-300">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
									</svg>
									<div>
										<div className="text-green-500 font-mono text-sm">email</div>
										<div className="text-xs">mahmoud.malek@example.com</div>
									</div>
								</div>
								
								<div className="flex items-center space-x-3 text-gray-300">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.509.8 4.925 2.291 6.89l.033.04L.029 24l5.128-1.287c1.915 1.083 4.1 1.656 6.86 1.656 6.62 0 11.987-5.367 11.987-11.987C23.971 5.367 18.637.029 12.017.029zM17.53 16.847c-.295.829-1.477 1.5-2.662 1.5-.61 0-1.234-.2-2.045-.694-2.539-1.544-5.617-6.645-5.617-6.645s-.984-1.287-.984-2.462c0-1.175.625-1.75 1.422-1.75.231 0 .434.01.625.02.544.022.831.042 1.197.925.396.954 1.357 3.3 1.475 3.537.118.237.197.515.04.829-.158.314-.236.51-.472.788-.236.277-.496.621-.708.836-.236.236-.482.49-.207.965.275.474 1.22 2.01 2.621 3.258 1.803 1.606 3.324 2.107 3.795 2.344.472.236.748.197.984-.118.314-.394.748-1.022 1.142-1.65.354-.551.708-.472 1.063-.275.354.197 2.265 1.067 2.658 1.262.394.197.66.295.748.472.118.197.118 1.142-.276 1.97z"/>
									</svg>
									<div>
										<div className="text-green-500 font-mono text-sm">whatsapp</div>
										<div className="text-xs">+20 123 456 7890</div>
									</div>
								</div>

								<div className="flex items-center space-x-3 text-gray-300">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
									</svg>
									<div>
										<div className="text-green-500 font-mono text-sm">location</div>
										<div className="text-xs">Cairo, Egypt</div>
									</div>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="bg-black border border-green-500/30 p-6">
							<div className="text-green-500 font-mono text-sm mb-4">{">"} find . -name "social_*"</div>
							<div className="space-y-3">
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-3 border border-green-500/20 hover:border-green-500/60 hover:bg-green-500/10 transition-all duration-300 group"
									>
										<div className="flex items-center space-x-3">
											<div className="text-green-500 group-hover:text-green-400 transition-colors">
												{social.icon}
											</div>
											<div>
												<div className="text-green-500 font-mono text-sm group-hover:text-green-400 transition-colors">
													{social.name.toLowerCase()}
												</div>
												<div className="text-xs text-gray-400 font-mono">
													{social.command}
												</div>
											</div>
										</div>
										<svg 
											width="16" 
											height="16" 
											viewBox="0 0 24 24" 
											fill="none" 
											stroke="currentColor" 
											strokeWidth="2"
											className="text-green-500/50 group-hover:text-green-500 transition-colors"
										>
											<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
										</svg>
									</a>
								))}
							</div>
						</div>

						{/* Availability Status */}
						<div className="bg-green-500/10 border border-green-500/30 p-6">
							<div className="text-green-500 font-mono text-sm mb-2">{">"} status --availability</div>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span className="text-green-500 font-mono">Available for freelance projects</span>
							</div>
							<p className="text-gray-400 text-sm mt-2">
								Currently accepting new projects and collaborations. 
								Response time: 24-48 hours.
							</p>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-16 text-center">
					<div className="inline-block bg-green-500/10 border border-green-500/30 px-8 py-6">
						<div className="text-green-500 font-mono text-lg mb-2">{">"} Ready to start a project?</div>
						<p className="text-gray-400 mb-4">
							Let's discuss your ideas and turn them into reality
						</p>
						<a 
							href="mailto:mahmoud.malek@example.com"
							className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500 px-6 py-3 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 font-mono"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
							</svg>
							<span>GET IN TOUCH</span>
						</a>
					</div>
				</div>

				{/* Inline decorative element */}
				<div className="mt-8 flex justify-center lg:justify-end">
					<div className="w-20 h-16 bg-green-500/5 border border-green-500/20 transform -rotate-12">
						<div className="text-xs text-green-500/50 p-2 font-mono leading-tight">
							{"{"}<br/>
							&nbsp;&nbsp;"status": "online",<br/>
							&nbsp;&nbsp;"response": "fast"<br/>
							{"}"}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
