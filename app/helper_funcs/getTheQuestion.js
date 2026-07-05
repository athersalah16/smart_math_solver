export const getTheQuestion = (practiceProblems, difficulty) => {

    const questionIndex = Math.floor(Math.random() * practiceProblems[difficulty].problems.length);

    return practiceProblems[difficulty].problems[questionIndex];
}