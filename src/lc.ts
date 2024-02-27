import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import 'dotenv/config'

export function getJoke(topic: string) {
    const prompt = ChatPromptTemplate.fromMessages([
        ["human", "Tell me a short joke about {topic}"],
    ]);
    const model = new ChatOpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY
    });
    const outputParser = new StringOutputParser();

    const chain = prompt.pipe(model).pipe(outputParser);

    return chain.invoke({
        topic
    });
}