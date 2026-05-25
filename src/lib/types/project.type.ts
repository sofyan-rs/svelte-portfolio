export interface IProject {
	title: string;
	type: 'Mobile Application' | 'Web Development' | 'Backend Development' | 'Website Development';
	description: string;
	image: string;
	link: string | null;
	git: string | null;
	techUsed: string[];
}
