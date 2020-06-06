class LitElementTemplate {
    constructor() {
    }

    renderTypescriptTemplate() {
        return `
            import { LitElement, html, css, property, customElement } from 'lit-element';

            @customElement('%%kebap-case%%-element')
            export class %%PascalCase%%Element extends LitElement {
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
                    this.name = "%%PascalCase%%Element";
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
        `
    }
}

export default LitElementTemplate;