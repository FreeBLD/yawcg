import {LitElement, html, css} from 'lit-element';

export class Test_test_component_testElement extends LitElement {

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
        this.name = "Test_test_component_test";
    }


    render() {
        return html`
            <h1>${this.name} Works!</h1>
        `;
    }
}
customElements.define('test_test_component_test-element', Test_test_component_testElement);