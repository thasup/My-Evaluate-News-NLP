// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing the checking functionality", () => {
    test("Testing the checkForURL() function", () => {
        expect(checkForURL).toBeDefined();
    })
});