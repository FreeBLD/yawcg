import  { Application } from "./Application";
import { assert, expect } from "chai";
import fs from "fs";
import path from "path";

let application: Application;

let foobarClassTemplate: string = `
    import { LitElement, html, css, property, customElement } from 'lit-element';

    @customElement('foobar-element')
    export class FoobarElement extends LitElement {

        @property({ type: String })
        name: string;
        
        constructor() {
            super();
            this.name = "FoobarElement";
        }

        render() {
            return html\`
                <h1>\${this.name} Works!</h1>
            \`;
        }
        
        static get styles() {
            const style = css\`
                :host {
                    display: block;
                }
            \`;
            return [style];
        }
    }
`;


describe("Test Case for the Application Class", () => {
    beforeEach(() => {
        application = new Application("Application");
    });

    afterEach(() => {
        application = null;
    });

    it("should return a new Template from a preset in-class template called 'foobar'", () => {
        let trimmedComponent = Application.generateNewComponent('foobar');
        trimmedComponent = trimmedComponent.replace(/\s/gm, '');
        const testingTemplate = foobarClassTemplate.replace(/\s/gm, '');
        assert.strictEqual(trimmedComponent, testingTemplate);
    });

    // Dealing whith whitespace (line indentation) is a bitch!
    xit("should remove indented lines", () => {
        const indentedString = `
                    a
                a
        `;
        const testString = `
            a
        a
        `;
        const replacedString = indentedString.replace(/^(?:    ){3}/gm, '');
        expect(replacedString).equals(testString);
    });

    it("should create a folder with a new component named 'baz' in current working directory if path not supplied", () => {
        Application.createNewComponent('baz');
        console.log(__dirname);
        console.log(process.cwd());
        const folderIsCreated: boolean = fs.existsSync(path.resolve(process.cwd(), 'baz-element'));
        assert.strictEqual(folderIsCreated, true);
        fs.rmdirSync(path.resolve(process.cwd(), 'baz-element'), {recursive: true});
    });

    it("should create a folder with a new component called 'AboutUs' saved as 'about-us-element'", () => {
        Application.createNewComponent('AboutUs');
        const folderIsCreated: boolean = fs.existsSync(path.resolve(process.cwd(), 'about-us-element'));
        assert.strictEqual(folderIsCreated, true);
        fs.rmdirSync(path.resolve(process.cwd(), 'about-us-element'), {recursive: true});
    });

    xit('should fetch the template repo from upstream', async() => {
        const repo = await Application.fetchTemplateProjectFromRepo('Test');
        assert.notStrictEqual(repo, null);
    });
});