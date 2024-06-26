import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { auth } from "@clerk/nextjs/server";

// npm install openai@3

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const messages = body;

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAPI Key not configured ", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Mesages are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal_Error", { status: 500 });
  }
}
