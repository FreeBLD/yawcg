import * as path from 'path';
import * as fs from 'fs';
import LitElementTemplate from '../templates/typescript/LitElementTemplate';
import MochaTestCaseTemplate from '../templates/typescript/MochaTestCaseTemplate';
import Utils from '../Utils/Utils';
import ConfigTemplates from '../templates/config/ConfigTemplates';
import https from 'https';
import { FetchRemoteRepository } from '../FetchRemoteRepository/FetchRemoteRepository';

export class Application {

    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    static createNewApplication(name: string) {
        const templateName = 'my-element';
        console.log(__dirname);
        const pathToComponent = path.resolve('./', `${name}`, `src/`);
        console.log(pathToComponent);
        fs.mkdirSync(pathToComponent, {recursive: true});
        console.log(`Creating App Folder on Path ${__dirname}/${name}`);
        console.log(`Creating Folder ${__dirname}/${name}/src`);
        console.log(`Creating Folder ${__dirname}/${name}/src/my-element`);
        this.createNewComponent(templateName, pathToComponent);
        console.log(`Creating Folder ${__dirname}/${name}/test`);
        const testFolderPath = path.resolve('./', `${name}`, `test/`);
        this.createConfigurationFiles(testFolderPath);
    }

    static createNewApplicationFromRepo() {
        this.fetchTemplateProjectFromRepo();
    }

    static fetchTemplateProjectFromRepo() {
        const REPOREDIRECTLINK = 'https://codeload.github.com/FreeBLD/lit-element-template/zip/master';
        const repoFetcher = new FetchRemoteRepository(REPOREDIRECTLINK);
        repoFetcher.getRepo().then((path: string) => {
            console.log(path);
            if(path.includes('.zip')) repoFetcher.extractArchive(path);
        });
    }

    static createConfigurationFiles(path: string): void {
        fs.mkdirSync(path, {recursive: true});
        const config = new ConfigTemplates();
        let bundler = config.getDefaultWebpackTemplate();
        fs.writeFileSync(`${path}/webpack.config.js`, bundler);
        let compiler = config.getDefaultWebpackTemplate();
        fs.writeFileSync(`${path}/tsconfig.json`, compiler);
    }

    static createNewComponent(name: string, pathToComponent?: string) {
        let trimmedName = Utils.trimComponentName(name);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        pathToComponent = !!pathToComponent ? pathToComponent : process.cwd();
        const newFolderName = path.resolve(pathToComponent, newFileName);
        console.log(`Created New Folder ${newFolderName}`);
        fs.mkdirSync(newFolderName, {recursive: true});
        console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.ts`, this.generateNewComponent(trimmedName));
        console.log(`Created New Test ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.test.ts`, this.generateNewTestCase(trimmedName));
    }

    static generateNewComponent(name: string) {
        let elementTemplate = new LitElementTemplate().renderTypescriptTemplate();
        elementTemplate = elementTemplate.replace(/^(?:    ){3}/gm, '');
        elementTemplate = elementTemplate.replace(/\n/, '');
        const pascalCase = Utils.firstToUpperCase(name);
        const camelCase = Utils.firstToLowerCase(name);
        const kebapCase = Utils.convertToKebapCase(name);
        let litElementComponent = elementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        litElementComponent = litElementComponent.replace(/%%camelCase%%/g, camelCase);
        litElementComponent = litElementComponent.replace(/\\/g, '');
        return litElementComponent.replace(/%%kebap-case%%/g, kebapCase);
    }

    static generateNewTestCase(name: string) {
        const pascalCase = Utils.firstToUpperCase(name);
        const camelCase = Utils.firstToLowerCase(name);
        const kebapCase = Utils.convertToKebapCase(name);
        let testCaseTemplate = new MochaTestCaseTemplate().renderTestCaseTemplate();
        testCaseTemplate = testCaseTemplate.replace(/^(?:    ){3}/gm, '');
        testCaseTemplate = testCaseTemplate.replace(/\n/, '');
        testCaseTemplate = testCaseTemplate.replace(/%%PascalCase%%/g, pascalCase);
        testCaseTemplate = testCaseTemplate.replace(/%%camelCase%%/g, camelCase);
        return testCaseTemplate.replace(/%%kebap-case%%/g, kebapCase);
    }

    static generateNewTestCaseFromTemplate(name: string, templateURL: string) {
        let pascalCase = Utils.firstToUpperCase(name);
        const testTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const testBuffer = testTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return testBuffer.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewComponentFromTemplate(name: string, templateURL: string) {
        let pascalCase = Utils.firstToUpperCase(name);
        const litElementTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }
}