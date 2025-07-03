import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import dotenv from 'dotenv';

dotenv.config();

// Setup client
const client = new ModelClient(
  process.env.AZURE_INFERENCE_SDK_ENDPOINT ?? "endpoint",
  new AzureKeyCredential(process.env.AZURE_INFERENCE_SDK_KEY ?? "your_api_key")
);

// Message prompt
const messages = [
  { role: "system", content: "You are a helpful assistant" },
  { role: "user", content: "What are things to see in Seattle" }
];

// Send request to the model
const result = await client.path("/chat/completions").post({
  body: {
    messages: messages,
    model: "gpt-4o", // Replace with your actual model name
  }
});

// ✅ Extract result body
const response = result.body;

// ✅ Check and print safely
if (response?.choices?.length > 0) {
  console.log(response.choices[0].message.content);
} else {
  console.error("No choices returned in response:", response);
}
