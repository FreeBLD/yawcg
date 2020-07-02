const https = require('https');
const fs = require('fs');
const extract = require('extract-zip');

const REPOLINK = 'https://github.com/FreeBLD/lit-element-template/archive/master.zip';

// Needs unit tests :(
export class FetchRemoteRepository {
	private repoLink: string;

	constructor(repositoryLink?: string) {
		this.repoLink = repositoryLink;
	}

	set RepositoryLink(url: string) {
		this.repoLink = url;
	}

	getFileFromURL(url: string, target: string) {
		if (target === null) {
			const currentISODate = new Date().toISOString();
			target = `${__dirname}/repo${currentISODate}.zip`
		}
		return new Promise((resolve, reject) => {
			https.get(url, (stream: any) => {
				this.saveStreamToFile(stream, target).then((path: string) => {
					console.log(`File Successfully Saved on ${path}`);
					resolve(path);
				});
			});
		});
	}

	getRepo(target?: string) {
		if (target === undefined) {
			const currentISODate = new Date().toISOString();
			target = `${__dirname}/repo${currentISODate}.zip`
		}
		return new Promise((resolve, reject) => {
			https.get(this.repoLink, (stream: any) => {
				this.saveStreamToFile(stream, target).then((path: string) => {
					console.log(`File Successfully Saved on ${path}`);
					resolve(path);
				});
			});
		});
	}

	private saveStreamToFile(stream: any, destination: string) {
		const file = fs.createWriteStream(destination);
		stream.pipe(file);
		return new Promise((resolve, reject) => {
			file.on("finish", () => {
				console.log(destination);
				file.close(resolve(destination));
			});
			file.on("error", (error: any) => {
				reject(error);
			});
		});
	}

	extractArchive(pathToFile: string) {
		extract(pathToFile, { dir: `${__dirname}/repo` })
			.then((err: any, data: any) => {
				console.log("Archive Extracted!");
			})
			.catch((error: any) => {
				throw new Error(`Error ${error}`);
			});
	}
}