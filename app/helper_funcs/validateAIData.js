 const validateAIData = (aiData, solution) => {

    const  correctAnswer = Number(aiData.correct_answer);
    const studentSolution = Number(solution)
    const isCorrect = correctAnswer === studentSolution;
   

    return {...aiData, correct:isCorrect };

}
export default validateAIData