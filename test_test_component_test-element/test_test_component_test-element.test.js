import  { Test_test_component_test } from "./test_test_component_test-element";

let Test_test_component_test;

describe("Test Case for the Test_test_component_test Class", () => {
    beforeEach(() => {
        Test_test_component_test = new Test_test_component_test();
    })

    afterEach(() => {
        Test_test_component_test = null;
    });
})


test ("Test_test_component_test has a property 'name' with value of 'Test_test_component_test'", () => {
    const Test_test_component_test = new Test_test_component_test();
    expect(Test_test_component_test.name).toBe('Test_test_component_test');
});