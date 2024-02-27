"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJoke = void 0;
const openai_1 = require("@langchain/openai");
const prompts_1 = require("@langchain/core/prompts");
const output_parsers_1 = require("@langchain/core/output_parsers");
require("dotenv/config");
function getJoke(topic) {
    const prompt = prompts_1.ChatPromptTemplate.fromMessages([
        ["human", "Tell me a short joke about {topic}"],
    ]);
    const model = new openai_1.ChatOpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY
    });
    const outputParser = new output_parsers_1.StringOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);
    return chain.invoke({
        topic
    });
}
exports.getJoke = getJoke;
