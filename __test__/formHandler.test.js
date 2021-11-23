// Import the js file to test
import { updateUI } from "../src/client/js/formHandler";

describe("Testing the updating data functionality", () => {
    test("Testing the updateUI() function", () => {
        expect(updateUI).toBeDefined();
    })
});