const checkAnswerPrompt = (question, studentAnswer) => {
return `You are a professional math teacher.

A student is solving the following equation:

Equation:
${question}

The student's answer is:
${studentAnswer}

Your task:

1. Solve the equation internally.
2. Determine the correct final answer.
3. Compare it with the student's answer.

IMPORTANT RULES:

* Do NOT return step-by-step explanation.
* Do NOT return long text.
* Return only a short "formula-style" solution that shows the key calculation.
* The formula must be concise (like: 12 × 12 = 144 → √144 = 12).
* Always return the formula whether the answer is correct or wrong.

Return ONLY this JSON format:

{
"correct": true or false,
"correct_answer": "string",
"formula": "string"
}`;
};



const solveEquationPrompt = (question) => {
    return `You are a professional math teacher.

            Solve the following equation step by step.

            Rules:
            - Show each step clearly.
            - Each step must include the mathematical operation performed.
            - Keep explanations simple and short.
            - Do NOT skip steps.
            - Final answer must be clearly written.

            Return ONLY a valid JSON object. Do not write anything outside JSON.

            JSON format:
            {
              "steps": [
                {
                  "step": "string",
                  "explanation": "string"
                }
              ],
              "final_answer": "string"
            }

            Equation:
            ${question}`
}
export { checkAnswerPrompt, solveEquationPrompt };