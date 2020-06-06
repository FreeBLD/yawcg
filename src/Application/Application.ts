import * as path from 'path';
import * as fs from 'fs';
import LitElementTemplate from '../templates/typescript/LitElementTemplate';
import MochaTestCaseTemplate from '../templates/typescript/MochaTestCaseTemplate';

export class Application {

    _name: string;

    constructor(name:string) {
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

    static createNewComponent(name: string, pathToComponent: string) {
        let trimmedName = this.trimComponentName(name);
        console.log(trimmedName);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        const newFolderName = path.resolve(pathToComponent, newFileName);
        console.log(`Created New Folder ${newFolderName}`);
        fs.mkdirSync(newFolderName);
        console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.ts`, this.generateNewComponent(trimmedName));
        console.log(`Created New Test ${newFolderName}/${newFileName}.ts`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.test.ts`, this.generateNewTestCase(trimmedName));
    }

    static createNewComponentFromType(name: string, type: string) {
        let trimmedName = this.trimComponentName(name);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        const newFolderName = path.resolve("./", newFileName);
        try {
            fs.existsSync(newFolderName);
        } catch (error) {
            throw new Error(`Folder Already Exists ${error}`);
        }
        console.log(`Created New Folder ${newFolderName}`);
        fs.mkdirSync(newFolderName);
        switch(type) {
            case 'js':
                // Create a separate module
                console.log(`Created New Element ${newFolderName}/${newFileName}.js`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.js`,
                    this.generateNewComponentFromTemplate(trimmedName, '/src/templates/javascript/litElementComponent.txt'));
                console.log(`Created New Test ${newFolderName}/${newFileName}.js`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.test.js`,
                    this.generateNewTestCaseFromTemplate(trimmedName, '/src/templates/javascript/jestTestCase.txt'));
            break;
            case 'ts':
                // Create a separate module
                console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.ts`,
                    this.generateNewComponentFromTemplate(
                        trimmedName,
                        '/src/templates/typescript/litElementComponent.txt'
                    )
                );
                console.log(`Created New Test ${newFolderName}/${newFileName}.test.ts`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.test.ts`,
                    this.generateNewTestCaseFromTemplate(trimmedName, '/src/templates/typescript/jestTestCase.txt'));
            break;
        }
    }

    static generateNewComponent(name: string) {
        const elementTemplate = new LitElementTemplate().renderTypescriptTemplate().replace(/\s{4}/g, '');
        const pascalCase = this.firstToUpperCase(name);
        const camelCase = this.firstToLowerCase(name);
        let litElementComponent = elementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        litElementComponent = litElementComponent.replace(/%%camelCase%%/g, camelCase);
        litElementComponent = litElementComponent.replace(/\\/g, '');
        console.log(litElementComponent);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewTestCase(name:string) {
        let pascalCase = `${name[0].toUpperCase()}${name.substring(1, name.length)}`;
        const testCaseTemplate = new MochaTestCaseTemplate().renderTestCaseTemplate();
        const testBuffer = testCaseTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return testBuffer.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewTestCaseFromTemplate(name:string, templateURL:string) {
        let pascalCase = `${name[0].toUpperCase()}${name.substring(1, name.length)}`;
        const testTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const testBuffer = testTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return testBuffer.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewComponentFromTemplate(name:string, templateURL:string) {
        let pascalCase = name[0].toUpperCase() + name.substring(1, name.length);
        const litElementTemplate = fs.readFileSync(path.join(__dirname, templateURL), {encoding: "utf-8"});
        const litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static firstToUpperCase(stringToConvert:string) {
        return stringToConvert[0].toUpperCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static firstToLowerCase(stringToConvert:string) {
        return stringToConvert[0].toLowerCase() + stringToConvert.substring(1, stringToConvert.length);
    }

    static convertToKebapCase(stringToConvert:string) {
        const regexp = /_([a-z])/g;
        return regexp.exec(stringToConvert);
    }

    static trimComponentName(componentName:string) {
        let regex = new RegExp('Component|Element|-element|-component|-', 'g');
        return componentName.replace(regex, "");
    }
}