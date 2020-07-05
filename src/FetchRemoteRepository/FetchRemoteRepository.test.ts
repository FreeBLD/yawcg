import { FetchRemoteRepository } from "./FetchRemoteRepository";

import assert from 'assert';
import fs from "fs";

let fetchRemoteRepository: FetchRemoteRepository;

describe('Test Case for FetchRemoteRepositoryClass', () => {
    const tempPath = './temp';

    beforeEach(() => {
        fetchRemoteRepository = new FetchRemoteRepository();
    });
    afterEach(() => {
        fetchRemoteRepository = null;
    });

    describe('FS operations', () => {
        beforeEach(() => {
        });
        afterEach(() => {
        });

        it('Should create a folder named "temp"', () => {
            fs.mkdirSync(tempPath);
            assert.strictEqual(fs.existsSync('./temp'), true);
            fs.rmdirSync('./temp');
        });

        it('Should rename "temp" folder to "tenp"', () => {
            fs.mkdirSync(tempPath);
            fs.renameSync(tempPath, './tenp');
            assert.strictEqual(fs.existsSync('./tenp'), true);
            fs.rmdirSync('./tenp');
        });
    });
});