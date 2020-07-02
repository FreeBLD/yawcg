const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const util = require('util');
const extract = require('extract-zip');
const httpGet = util.promisify(https.get);
const exxtract = util.callbackify(extract);

const REPOREDIRECTLINK = 'https://codeload.github.com/FreeBLD/lit-element-template/zip/master';
const REPOLINK = 'https://github.com/FreeBLD/lit-element-template/archive/master.zip';
const repoPath = `${__dirname}/repo.zip`;

/*
https.get(REPOLINK, (res) => {
	res.on('data', (payload) => {
		const payloadString = payload.toString();
		if (payloadString.includes('redirected')) {
			const link = new RegExp(/href="(?<url>.+?)"/, 'g').exec(payloadString).groups;
			downloadFile(link.url, repoPath, extractArchive);
			https.get(link.url, (res) => {
				res.on('data', (archive) => {
					saveAndExtractArchive(repoPath, archive);
				});
			});
		} else {
			saveAndExtractArchive(repoPath, payload);
		}
	});
	res.on('error', (e) => {
		console.log(e);
	});
});
*/

downloadFile(REPOREDIRECTLINK, repoPath, extractArchive);

function downloadFile(url, destination, callback) {
	const file = fs.createWriteStream(destination);
	https.get(url, (stream) => {
		stream.pipe(file);
		file.on("finish", () => {
			file.close(callback(destination));
		});
	});
}

function extractArchive(pathToFile) {
		console.log("Archive Saved!");
		extract(pathToFile, { dir: `${__dirname}/extract` }, (err, data) => {
			if (err) throw err;
			console.log("Archive Extracted!");
		});
}