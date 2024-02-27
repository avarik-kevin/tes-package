import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

export function getJoke(topic: string) {
    const prompt = ChatPromptTemplate.fromMessages([
        ["human", "Tell me a short joke about {topic}"],
    ]);
    const model = new ChatOpenAI({});
    const outputParser = new StringOutputParser();

    const chain = prompt.pipe(model).pipe(outputParser);

    return chain.invoke({
        topic
    });
}