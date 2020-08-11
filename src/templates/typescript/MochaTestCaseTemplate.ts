class MochaTestCaseTemplate {
    renderTestCaseTemplate() {
        return `
            import  { %%PascalCase%%Element } from "./%%kebap-case%%-element";
            import * as assert from 'assert';

            let %%camelCase%%: %%PascalCase%%Element;
            let shadow: ShadowRoot;

            describe("Test Case for the %%PascalCase%%Element Class", () => {
                beforeEach(() => {
                    %%camelCase%% = new %%PascalCase%%Element();
                    document.body.appendChild(%%camelCase%%);
                });

                afterEach(() => {
                    document.body.removeChild(%%camelCase%%);
                    %%camelCase%% = null;
                });

                it("%%camelCase%% has a property 'name' with value of '%%PascalCase%%'", function() {
                    assert.strictEqual(%%camelCase%%.name, '%%PascalCase%%Element');
                });

                it("%%camelCase%% should have a child Node 'h1' inside the shadow DOM after it is updated", function() {
                    %%camelCase%%.updateComplete.then(() => {
                        shadow = %%camelCase%%.shadowRoot; 
                        const h1 = shadow.querySelectorAll('h1');
                        assert.strictEqual(h1.length, 1);
                    });
                });
            });
        `;
    }
}

export default MochaTestCaseTemplate;