class LitElementTemplate {
    constructor() {
    }

    renderTypescriptTemplate() {
        return `
            import { LitElement, html, css, property, customElement } from 'lit-element';

            @customElement('%%kebap-case%%-element')
            export class %%PascalCase%%Element extends LitElement {

                @property({ type: String })
                name: string;
                
                constructor() {
                    super();
                    this.name = "%%PascalCase%%Element";
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
    }
}

export default LitElementTemplate;