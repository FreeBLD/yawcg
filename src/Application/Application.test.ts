import  { Application } from "./Application";
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

let application: Application;

let foobarClassTemplate: string = `
    import { LitElement, html, css, property, customElement } from 'lit-element';

    @customElement('foobar-element')
    export class FoobarElement extends LitElement {
        private _name: string;

        @property({ type: String }) public get name() {
            return this._name;
        } 
        public set name(value: string) {
            const oldValue = this.name;
            this._name = value;
            this.requestUpdate('name', oldValue)
        }
        
        constructor() {
            super();
            this.name = "FoobarElement";
        }

        render() {
            return html\`
                <h1>\${this.name} <span class=".blink">Works!</span></h1>
            \`;
        }
        
        static get styles() {
            const style = css\`
                :host {
                    color: red;
                    // create a blink css property
                }
                @keyframes blink {
                    from { color: red; }
                    to { color: white; }
                }
                .blink {
                    animation-name: blink;
                    animation-duration: 2s;
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

    it("firstToLowerCase() should return first 'Test' as 'test'", () => {
        assert.strictEqual(Application.firstToLowerCase("Test"), 'test');
    });

    it("firstToUppercase() should return first letter in 'test as 'Test'", () => {
        assert.strictEqual(Application.firstToUpperCase('test'), 'Test');
    });

    it("trimComponentName() should strip any string containing 'component' token", () => {
        assert.strictEqual(Application.trimComponentName("ApplicationComponent"), "Application");
    });

    it("trimComponentName() should strip any string containing 'element' token", () => {
        assert.strictEqual(Application.trimComponentName("ApplicationElement"), "Application");
    });

    it("trimComponentName() should strip any string containing any number of 'element' token", () => {
        assert.strictEqual(Application.trimComponentName("ApplicationElementElement"), "Application");
    });

    it("convertToKebapCase() should return a 'PascalCase' string with a hyphen token", () => {
        assert.strictEqual(Application.convertToKebapCase('PascalCase'), 'pascal-case');
    });

    it("convertToKebapCase() should return a 'camelCase' string with a hyphen token", () => {
        assert.strictEqual(Application.convertToKebapCase('camelCase'), 'camel-case');
    });

    it("convertToSnakeCase() should return a 'camelCase' string with and an underscore separator token", () => {
        assert.strictEqual(Application.convertToSnakeCase('camelCase'), 'camel_case');
    });

    it("should return a new Template from a preset in-class template called 'foobar'", () => {
        console.log(Application.generateNewComponent('foobar'));
        const span: HTMLSpanElement = document.createElement('span');
        span.innerHTML = Application.generateNewComponent('foobar');
        document.body.appendChild(span);
        assert.deepStrictEqual(Application.generateNewComponent('foobar'), foobarClassTemplate.replace(/^(?:    ){3}/gm, ''));
    });

    xit("should create a folder with a new component in current working directory if path not supplied", () => {
        Application.createNewComponent('shit');
        const folderIsCreated: boolean = fs.existsSync(path.resolve(__dirname, 'shit'));
        assert.strictEqual(folderIsCreated, true);
    });
});