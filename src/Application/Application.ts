import * as path from 'path';
import * as fs from 'fs';
import LitElementTemplate from '../templates/typescript/LitElementTemplate';
import MochaTestCaseTemplate from '../templates/typescript/MochaTestCaseTemplate';

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
        console.log(`Creating App Folder on Path ${__dirname}/${name}`)
        console.log(`Creating Folder ${__dirname}/${name}/src`);
        console.log(`Creating Folder ${__dirname}/${name}/src/my-element`);
        this.createNewComponent(templateName, pathToComponent);
    }

    static createNewComponent(name: string, pathToComponent?: string) {
        let trimmedName = this.trimComponentName(name);
        console.log(trimmedName);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        pathToComponent = !!pathToComponent ? pathToComponent : process.cwd();
        const newFolderName = path.resolve(pathToComponent, newFileName);
        console.log(`Created New Folder ${newFolderName}`);
        console.log(pathToComponent);
        console.log(process.cwd());
        fs.mkdirSync(newFolderName, {recursive: true});
        console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.ts`, this.generateNewComponent(trimmedName));
        console.log(`Created New Test ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.test.ts`, this.generateNewTestCase(trimmedName));
    }

    static generateNewComponent(name: string) {
        let elementTemplate = new LitElementTemplate().renderTypescriptTemplate()
        elementTemplate = elementTemplate.replace(/^(?:    ){3}/gm, '');
        elementTemplate = elementTemplate.replace(/\n/, '');
        const pascalCase = this.firstToUpperCase(name);
        const camelCase = this.firstToLowerCase(name);
        const kebapCase = this.convertToKebapCase(name);
        let litElementComponent = elementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        litElementComponent = litElementComponent.replace(/%%camelCase%%/g, camelCase);
        litElementComponent = litElementComponent.replace(/\\/g, '');
        return litElementComponent.replace(/%%kebap-case%%/g, kebapCase);
    }

    static generateNewTestCase(name: string) {
        const pascalCase = this.firstToUpperCase(name);
        const camelCase = this.firstToLowerCase(name);
        const kebapCase = this.convertToKebapCase(name);
        let testCaseTemplate = new MochaTestCaseTemplate().renderTestCaseTemplate();
        testCaseTemplate = testCaseTemplate.replace(/^(?:    ){3}/gm, '');
        testCaseTemplate = testCaseTemplate.replace(/\n/, '');
        testCaseTemplate = testCaseTemplate.replace(/%%PascalCase%%/g, pascalCase);
        testCaseTemplate = testCaseTemplate.replace(/%%camelCase%%/g, camelCase)
        return testCaseTemplate.replace(/%%kebap-case%%/g, kebapCase);
    }

    static generateNewTestCaseFromTemplate(name: string, templateURL: string) {
        let pascalCase = `${name[0].toUpperCase()}${name.substring(1, name.length)}`;
        const testTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const testBuffer = testTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return testBuffer.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewComponentFromTemplate(name: string, templateURL: string) {
        let pascalCase = name[0].toUpperCase() + name.substring(1, name.length);
        const litElementTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static firstToUpperCase(stringToConvert: string) {
        return stringToConvert[0].toUpperCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static firstToLowerCase(stringToConvert: string) {
        return stringToConvert[0].toLowerCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static convertToKebapCase(stringToConvert: string) {
        const result: string = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment: string) => {
            return `-${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }

    static convertToSnakeCase(stringToConvert: string) {
        const result: string = stringToConvert.replace(/[A-Za-z][a-z]+/g, (fragment: string) => {
            return `_${fragment.toLowerCase()}`;
        });
        return result.slice(1, result.length);
    }

    static trimComponentName(componentName: string) {
        let regex = new RegExp('Component|Element|-element|-component|-', 'g');
        return componentName.replace(regex, "");
    }
}