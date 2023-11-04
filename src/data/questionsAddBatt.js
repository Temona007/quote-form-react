const QUESTIONS_ADD_BATT = [
    {
        questionText: 'What is your time frame for getting batteries? ',
        questionAnswer: [
            {id: 1, answerText: 'Immediately '},
            {id: 2, answerText: 'In the next 4 weeks '},
            {id: 3, answerText: 'In the next 3 months '},
            {id: 4, answerText: 'Over 3 months/Just looking for a ballpark price '},
        ],
    },
    {
        questionText: 'How would you like to talk with the installers before they quote? ',
        questionAnswer: [
            {id: 1, answerText: 'I want the installers to physically visit my property before quoting. '},
            {id: 2, answerText: 'I am happy to Zoom call with the installers before they quote. '},
            {id: 3, answerText: 'By phone and email only please. '},
        ],
    },
    {
        questionText: 'How many installers would you like to get quotes from? ',
        questionAnswer: [
            {id: 1, answerText: 'One '},
            {id: 2, answerText: 'Two '},
            {id: 3, answerText: 'Three '},
        ],
    },
    {
        questionText: 'How much is your quarterly electric bill? ',
        questionAnswer: [
            {id: 1, answerText: 'Less than $500 '},
            {id: 2, answerText: '$500-$1000 '},
            {id: 3, answerText: '$1000-$2000 '},
            {id: 4, answerText: 'Over $2000 '},
            {id: 5, answerText: "Don't know "},
        ],
    },
    {
        questionText: 'What is the most important to you? Backup power or minimising grid usage? ',
        questionAnswer: [
            {id: 1, answerText: 'Backup Power '},
            {id: 2, answerText: 'Minimising Grid usage '},
            {id: 3, answerText: 'Both. '},
        ],
    },
    {
        questionText: "Anything else you'd like to tell us?",
        questionAnswer: [
            {id: 2,       answerText: 'No '},
            {id: 1518999, answerText: 'Yes'},
        ],
    },
];

export default QUESTIONS_ADD_BATT;