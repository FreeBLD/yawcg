const fs = require('fs');
const path = require('path');

module.exports = class Application {

    constructor(name) {
        this._name = name;
    }

    static createNewApplication(name) {
        const templateName = 'my-element';
        fs.mkdirSync(`./${name}`);
        fs.mkdirSync(`./${name}/src/my-element/`, {recursive: true});
        fs.writeFileSync(path.resolve("./${name}/src/${templateName}/", templateName+".js"), this.createNewComponent(templateName));
    }

    static createNewComponent(name) {
        let regex = new RegExp('Component|Element|-element|-component|-', 'g');
        let trimmedName = name.replace(regex, "");
        fs.writeFileSync(path.resolve("./", trimmedName.toLowerCase())+'-element.js', this.generateNewComponent(trimmedName));
    }

    static compileComponent(pathToComponent) {
        console.log(pathToComponent);
    }

    static compilerApp() {
        console.log('wholeapp');
    }

    static generateNewComponent(name) {
        let pascalCase = name[0].toUpperCase() + name.substring(1, name.length);
        const litElementTemplate = fs.readFileSync(path.join(__dirname, '/templates/litElementComponent.txt'), {encoding: "utf-8"});
        const litElementComponent = litElementTemplate.replace(/%%PascalCase%%/g, pascalCase);
        return litElementComponent.replace(/%%allLowerCase%%/g, name.toLowerCase());
    }
}