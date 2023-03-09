import { Configuration, OpenAIApi } from "openai";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const OPENAI_API_KEY = "";
const configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function call(text) {
	try {
		return await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Tell me something about... ${text}`,
			temperature: 0.6,
			max_tokens: 50,
		});
	} catch (error) {
		// Consider adjusting the error handling logic for your use case
		if (error.response) {
			console.error(error.response.status, error.response.data);
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`);
		}
	}
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function promptUser() {
	const text = await rl.question("Ask me something: ");

	if (!text.toLowerCase() === "exit") {
		rl.close();
	}
	console.log(`You entered: ${text}`, "please wait....");
	const response = await call(text);
	console.log(10, response.data);
	// Process the data here
	// ...

	// Display the data here
	// ...

	promptUser(); // Call the function recursively to prompt the user again
}

promptUser();
