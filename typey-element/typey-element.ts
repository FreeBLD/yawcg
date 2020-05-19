import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('typey-element')
export class TypeyElement extends LitElement {
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
        this.name = "TypeyElement";
    }

    render() {
        return html`
            <h1>${this.name} Works!</h1>
        `;
    }
    
    static get styles() {
        const style = css`
            :host {
                color: red;
                // create a blink css property
            }
        `;
        return [style];
    }
}