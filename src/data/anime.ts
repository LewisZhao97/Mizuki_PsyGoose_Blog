// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	// description: string;
	episodes: string;
	year: string;
	season: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "Frieren: Beyond Journey's End",
		status: "completed",
		rating: 9.9,
		cover: "/assets/anime/zsdfll.webp",
		episodes: "28 episodes",
		year: "2023",
		season: "1",
		genre: ["Adventure", "Fantasy", "Magic"],
		studio: "MADHOUSE",
		link: "https://www.bilibili.com/bangumi/media/md21087073",
		progress: 28,
		totalEpisodes: 28,
		startDate: "2023-10",
		endDate: "2024-03",
	},
	{
		title: "Spy × Family Season 1",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/jdgjj1.webp",
		episodes: "25 episodes",
		year: "2022",
		season: "1",
		genre: ["Adventure", "Battle", "Daily", "Funny"],
		studio: "WIT STUDIO × CloverWorks",
		link: "https://www.bilibili.com/bangumi/media/md27709925",
		progress: 25,
		totalEpisodes: 25,
		startDate: "2022-05",
		endDate: "2022-12",
	},
	{
		title: "Spy × Family Season 2",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/jdgjj2.webp",
		episodes: "37 episodes",
		year: "2023",
		season: "2",
		genre: ["Adventure", "Battle", "Daily", "Funny"],
		studio: "WIT STUDIO × CloverWorks",
		link: "https://www.bilibili.com/bangumi/media/md21086686",
		progress: 37,
		totalEpisodes: 37,
		startDate: "2023-10",
		endDate: "2023-12",
	},
	{
		title: "Spy × Family Season 3",
		status: "watching",
		rating: 8.8,
		cover: "/assets/anime/jdgjj3.webp",
		episodes: "14 episodes",
		year: "2025",
		season: "3",
		genre: ["Adventure", "Action", "Daily", "Funny"],
		studio: "WIT STUDIO × CloverWorks",
		link: "https://www.bilibili.com/bangumi/media/md27709925",
		progress: 1,
		totalEpisodes: 13,
		startDate: "2025-10",
		endDate: "2025-12",
	},
];

export default localAnimeList;
