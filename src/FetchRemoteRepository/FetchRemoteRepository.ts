import fs from 'fs';
import https from 'https';
import extract from 'extract-zip';

// Needs unit tests :(
export class FetchRemoteRepository {
	private repoLink: string;

	constructor(repositoryLink?: string) {
		this.repoLink = repositoryLink;
	}

	set RepositoryLink(url: string) {
		const validURI = new RegExp(/^\w{,5}:\/\/\w+\.\w{,3}/, "i"); //Is this a valid URI parser? Non-functional
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

	getRepo(target?: string): Promise<string> {
		const currentISODate = new Date().toISOString();
		const archiveName = `repo${currentISODate}.zip`;
		if (target === undefined) {
			target = `${__dirname}/${archiveName}`;
		} else {
			target = `${target}/${archiveName}`;
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

	private saveStreamToFile(stream: any, destination: string): Promise<string> {
		const file = fs.createWriteStream(destination);
		stream.pipe(file);
		return new Promise((resolve, reject) => {
			file.on("finish", () => {
				file.close();
				resolve(destination);
			});
			file.on("error", (error: any) => {
				reject(error);
			});
		});
	}

	//Should this be spun out to a separate class?! Probably!
	extractArchive(pathToFile: string, destination: string): Promise<any> {
		return new Promise((resolve, reject) => {
			extract(pathToFile, { dir: `${destination}` })
				.then((data: any) => {
					console.log("Archive Extracted!");
					resolve(destination);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}

	deleteFile(filePath: string) {
		fs.unlink(filePath, () => {
			console.log(`Successfully deleted temp archive ${filePath}`)
		});
	}
}