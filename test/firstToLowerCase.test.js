import  { Application } from "../Application";

let application;

describe("Test Case for the %%PascalCase%% Class", () => {
    beforeEach(() => {
        application = new Application();
    })

    afterEach(() => {
        application = null;
    });
})


test("firstToLowerCase() should return first 'Test' as 'test'", () => {
    expect(application.firstToLowerCase("Test")).toBe('test');
});