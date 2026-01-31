// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other" | "graphics";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "PsyGoose-blog",
		title: "PsyGoose Blog",
		description:
			"一个基于Astro框架，Mizuki主题的现代化静态博客，主要记录作为TA技术美术的道路上所学习的技能与分享。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "in-progress",
		// liveDemo: "https://psygooseblog.vercel.app/",
		sourceCode: "https://github.com/LewisZhao97/Mizuki_PsyGoose_Blog", // 更改为GitHub链接
		visitUrl: "https://psygooseblog.vercel.app/", // 添加前往项目链接
		startDate: "2025-12-25",
		featured: true,
		tags: ["Blog", "Technical Artist", "Sharing"],
	},
	{
		id: "Unity GooseRP",
		title: "Unity Goose Render Pipeline",
		description: "基于Unity Universal Render Pipeline的自定义卡通渲染管线",
		image: "",
		category: "graphics",
		techStack: ["Unity", "C#", "HLSL", "Shader"],
		status: "planned",
		startDate: "2026-03-01",
		tags: ["Universal RP", "Custom RP", "Toon Rendering", "Shader"],
	},
	{
		id: "UE5 Toon RP",
		title: "UE5 Custom Render Pipeline",
		description:
			"基于Unreal Engine 5.7源码的自定义卡通光照模型渲染管线的开发",
		image: "",
		category: "graphics",
		techStack: ["Unreal Engine", "C++", "HLSL", "Shader"],
		status: "planned",
		startDate: "2026-05-01",
		tags: ["Unreal Engine", "Source Code", "Toon Rendering", "Shader"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
