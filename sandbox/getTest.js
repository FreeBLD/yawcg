const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const util = require('util');
const extract = require('extract-zip');
const httpGet = util.promisify(https.get);
const exxtract = util.callbackify(extract);

const REPOREDIRECTLINK = 'https://codeload.github.com/FreeBLD/lit-element-template/zip/master';
const REPOLINK = 'https://github.com/FreeBLD/lit-element-template/archive/master.zip';

https.get(REPOLINK, (res) => {
	res.on('data', (payload) => {
		console.log(payload);
		const payloadString = payload.toString();
		console.log(payload.includes('redirected'));
		const repoPath = `${__dirname}/repo.zip`;
		if (payloadString.includes('redirected')) {
			const link = new RegExp(/href="(?<url>.+?)"/, 'g').exec(payloadString).groups;
			console.log(link);
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

function saveAndExtractArchive(targetPath, archive) {
	fs.writeFile(targetPath, archive, () => {
		exxtract(targetPath, { dir: `${__dirname}/extract` }, (err, data) => {
			if (err) throw err;
			console.log(data);
		});
	});
}

/*
httpGet(REPOREDIRECTLINK).then((error, payload) => {
		const payloadString = payload.toString();
		console.log(payload.includes('redirected'));
}).catch(error => {console.log(error)});


async function unarchive(source, dest) {
	try {
		await extract(source, { dir: dest })
	} catch (e) {
		console.log(e);
	}
}

async function main() {
	try {
		const response = await httpGet(REPOREDIRECTLINK);
		console.log(response);
	} catch (error) {
		throw error;
	}
}
*/