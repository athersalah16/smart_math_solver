import { NextResponse } from "next/server";
import {
  checkAnswerPrompt,
  solveEquationPrompt,
} from "@/app/helper_funcs/prompts";
export async function POST(req) {
  try {
    const { mode, question, studentAnswer } = await req.json();
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            {
              role: "user",
              content:
                mode === "check"
                  ? checkAnswerPrompt(question, studentAnswer)
                  : solveEquationPrompt(question),
            },
          ],
        }),
      },
    );
    const responseData = await response.json();
    const result = JSON.parse(responseData.choices[0].message.content);
    console.log(result)
    return NextResponse.json(result);
  } catch (err) {
          console.log(err)

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
