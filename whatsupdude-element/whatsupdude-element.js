import {LitElement, html, css} from 'lit-element';

export class WhatsupDudeElement extends LitElement {

    static get styles() {
        const style = css`
            :host {
                color: red;
                // create a blink css property
            }
        `;
        return [style];
    }
    
    static get properties() {
        return {
            name: { type: String }
        }
    }
    
    constructor() {
        super();
        this.name = "WhatsupDude";
    }


    render() {
        return html`
            <h1>${this.name} Works!</h1>
        `;
    }
}
customElements.define('whatsupdude-element', WhatsupDudeElement);