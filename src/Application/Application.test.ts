import  { Application } from "./Application";
import * as assert from "assert";

let application: Application;

describe("Test Case for the Application Class", () => {
    beforeEach(() => {
        application = new Application("Application");
    });

    afterEach(() => {
        application = null;
    });

    it("firstToLowerCase() should return first 'Test' as 'test'", () => {
        assert.equal(Application.firstToLowerCase("Test"), 'test');
    });

    it("firstToUppercase() should return first letter in 'test as 'Test'", () => {
        assert.equal(Application.firstToUpperCase('test'), 'Test');
    });
});