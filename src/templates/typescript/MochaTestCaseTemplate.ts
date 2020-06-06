class MochaTestCaseTemplate {
    renderTestCaseTemplate() {
        return `
            import  { %%PascalCase%%Element } from "./%%kebap-case%%-element";
            import * as assert from 'assert';

            let %%camelCase%%: %%PascalCase%%Element;
            let shadow: shadowRoot;

            describe("Test Case for the %%PascalCase%%Element Class", () => {
                beforeEach(() => {
                    %%camelCase%% = new %%PascalCase%%Element();
                    document.body.appendChild(%%camelCase%%);
                    shadow = %%camelCase%%.shadowRoot;
                });

                afterEach(() => {
                    document.body.removeChild(%%camelCase%%);
                    %%camelCase%% = null;
                });

                it("%%camelCase%% has a property 'name' with value of '%%PascalCase%%'", function() {
                    assert.equal(%%camelCase%%.name, '%%PascalCase%%');
                });

                it("%%camelCase%% has a 'color' red applied to its children", function() {
                    const host = window.getComputedStyle(%%camelCase%%, ':host');
                    const color = host.getPropertyValue('color');
                    assert.equal(%%camelCase%%, color);
                });
            })
        `;
    }
}

export default MochaTestCaseTemplate;