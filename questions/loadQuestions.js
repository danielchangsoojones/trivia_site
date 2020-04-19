function getQuestions() {
    return {
        "questions": [
            {
                "main_question": "Who was the starting point guard for the Chicago Bulls?",
                "answers": [
                    {
                        "text": "Steve Kerr",
                        "isCorrect": "true"
                    },
                    {
                        "text": "Michael Jordan",
                        "isCorrect": "false"
                    },
                    {
                        "text": "Lebron James",
                        "isCorrect": "false"
                    },
                    {
                        "text": "Kobe Bryant",
                        "isCorrect": "false"
                    }
                ]
            },
            {
                "main_question": "Where was Kid Rock born?",
                "answers": [
                    {
                        "text": "Detroit",
                        "isCorrect": "true"
                    },
                    {
                        "text": "Los Angeles",
                        "isCorrect": "false"
                    },
                    {
                        "text": "Boston",
                        "isCorrect": "false"
                    },
                    {
                        "text": "Miami",
                        "isCorrect": "false"
                    }
                ]
            }
        ]
    }
}

module.exports = {
    getQuestions: getQuestions
}