import  { TypeyElement } from "./typey-element";

let Typey;

describe("Test Case for the TypeyElement Class", () => {
    beforeEach(() => {
        Typey = new TypeyElement();
    })

    afterEach(() => {
        Typey = null;
    });
})


test ("TypeyElement has a property 'name' with value of 'Typey'", () => {
    expect(Typey.name).toBe('Typey');
});