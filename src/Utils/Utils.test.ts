import Utils from "./Utils";
import assert from 'assert';

describe('Test Case for the Utils Class', () => {
    it("firstToLowerCase() should return first 'Test' as 'test'", () => {
        assert.strictEqual(Utils.firstToLowerCase("Test"), 'test');
    });

    it("firstToUppercase() should return first letter in 'test as 'Test'", () => {
        assert.strictEqual(Utils.firstToUpperCase('test'), 'Test');
    });

    it("trimComponentName() should strip any string containing 'component' token", () => {
        assert.strictEqual(Utils.trimComponentName("UtilsComponent"), "Utils");
    });

    it("trimComponentName() should strip any string containing 'element' token", () => {
        assert.strictEqual(Utils.trimComponentName("UtilsElement"), "Utils");
    });

    it("trimComponentName() should strip any string containing any number of 'element' token", () => {
        assert.strictEqual(Utils.trimComponentName("UtilsElementElement"), "Utils");
    });

    it("convertToKebapCase() should return a 'PascalCase' string with a hyphen token", () => {
        assert.strictEqual(Utils.convertToKebapCase('PascalCase'), 'pascal-case');
    });

    it("convertToKebapCase() should return a 'camelCase' string with a hyphen token", () => {
        assert.strictEqual(Utils.convertToKebapCase('camelCase'), 'camel-case');
    });

    it("convertToSnakeCase() should return a 'camelCase' string with and an underscore separator token", () => {
        assert.strictEqual(Utils.convertToSnakeCase('camelCase'), 'camel_case');
    });
});