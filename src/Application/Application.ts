//TODO: Convert to Typescript
import * as path from 'path';
import * as fs from 'fs';

export class Application {

    _name: string;

    constructor(name:string) {
        this._name = name;
    }

    static createNewApplication(name: string) {
        const templateName = 'my-element';
        fs.mkdirSync(`./${name}/src/my-element/`, {recursive: true});
        console.log(`Creating App Folder on Path ${__dirname}/${name}`)
        console.log(`Creating Folder ${__dirname}/${name}/src`);
        console.log(`Creating Folder ${__dirname}/${name}/src/my-element`);
        fs.writeFileSync(path.resolve("./${name}/src/${templateName}/", templateName+".js"), this.createNewComponent(templateName));
    }

    static createNewComponent(name: string) {
        let trimmedName = this.trimComponentName(name);
        console.log(trimmedName);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        const newFolderName = `${path.resolve("./", newFileName)}`;
        console.log(`Created New Folder ${newFolderName}`);
        fs.mkdirSync(newFolderName);
        console.log(`Created New Element ${newFolderName}/${newFileName}.js`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.js`, this.generateNewComponent(trimmedName));
        console.log(`Created New Test ${newFolderName}/${newFileName}.js`);
        fs.writeFileSync(`${newFolderName}/${newFileName}.test.js`, this.generateNewTestCase(trimmedName));
    }

    static createNewComponentFromType(name: string, type: string) {
        let trimmedName = this.trimComponentName(name);
        const newFileName = `${trimmedName.toLowerCase()}-element`;
        const newFolderName = `${path.resolve("./", newFileName)}`;
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
                    this.generateNewComponentFromTemplate(trimmedName, '/templates/javascript/litElementComponent.txt'));
                console.log(`Created New Test ${newFolderName}/${newFileName}.js`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.test.js`,
                    this.generateNewTestCaseFromTemplate(trimmedName, '/templates/javascript/jestTestCase.txt'));
            break;
            case 'ts':
                // Create a separate module
                console.log(`Created New Element ${newFolderName}/${newFileName}.ts`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.ts`,
                    this.generateNewComponentFromTemplate(
                        trimmedName,
                        '/templates/typescript/litElementComponent.txt'
                    )
                );
                console.log(`Created New Test ${newFolderName}/${newFileName}.test.ts`);
                fs.writeFileSync(
                    `${newFolderName}/${newFileName}.test.ts`,
                    this.generateNewTestCaseFromTemplate(trimmedName, '/templates/typescript/jestTestCase.txt'));
            break;
        }
    }

    static compileComponent(pathToComponent: string) {
        console.log(pathToComponent);
        console.log("Not Yet Implemented");
    }

    static compileApp() {
        console.log('Not Yet Implemented');
    }

    static generateNewComponent(name: string) {
        const litElementTemplate = fs.readFileSync(path.join(__dirname, '/templates/litElementComponent.txt'), {encoding: "utf-8"});
        const pascalCase = this.firstToUpperCase(name);
        const camelCase = this.firstToLowerCase(name);
        let litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        litElementComponent = litElementComponent.replace(/%%camelCase%%/g, camelCase);
        return litElementComponent.replace(/%%kebap-case%%/g, name.toLowerCase());
    }

    static generateNewTestCase(name:string) {
        let pascalCase = `${name[0].toUpperCase()}${name.substring(1, name.length)}`;
        const testTemplate = fs.readFileSync(path.join(__dirname, '/templates/jestTestCase.txt'), {encoding: "utf-8"});
        const testBuffer = testTemplate.replace(/%%PascalCase%%/g, pascalCase);
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
        return stringToConvert[0].toLowerCase();
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