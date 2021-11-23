// Import the js file to test
import { handleURL } from "../src/client/js/submitHandler";

describe("Testing the fetching functionality", () => {
    test("Testing the handleURL() function", () => {
        expect(handleURL).toBeDefined();
    })
});