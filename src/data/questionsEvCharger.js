const QUESTIONS_EV_CHARGER = [
    {
        questionText: 'Do you have a home battery?',
        questionAnswer: [
            {id: 1, answerText: 'Do you have a home battery?'},
            {id: 2, answerText: 'No '},
            {id: 3, answerText: 'No, but I would like a home battery quote, too '},
        ],
    },
    {
        questionText: 'Do you have solar?',
        questionAnswer: [
            {id: 1, answerText: 'Yes '},
            {id: 2, answerText: 'No '},
        ],
    },
    {
        questionText: 'Driving an EV could increase your electric bill by 50% or more*. Would you like a quote for solar too?',
        questionAnswer: [
            {id: 1, answerText: 'No, just the EV charger'},
            {id: 2, answerText: 'Yes'},
        ],
    },
    {
        questionText: 'Do you already have the charger unit?',
        questionAnswer: [
            {id: 1, answerText: 'I already have the charger, I just need installation'},
            {id: 2, answerText: 'I need quotes for an EV charger plus its installation '},
        ],
    },
    {
        questionText: "What's the approximate distance between your switchboard and where you want your charger?",
        questionAnswer: [
            {id: 1, answerText: 'No idea '},
            {id: 2, answerText: '0-5m '},
            {id: 3, answerText: '5-10m '},
            {id: 4, answerText: '10-20m '},
            {id: 4, answerText: 'Over 20m '},
        ],
    },
    {
        questionText: 'How many storeys is your home?',
        questionAnswer: [
            {id: 1, answerText: '1 '},
            {id: 2, answerText: '2 '},
            {id: 3, answerText: '3 '},
            {id: 4, answerText: '4+ '},
        ],
    },
    {
        questionText: 'How many installers would you like to get quotes from?',
        questionAnswer: [
            {id: 1, answerText: 'One '},
            {id: 2, answerText: 'Two '},
            {id: 3, answerText: 'Three '},
        ],
    },
    {
        questionText: "Anything else you'd like to tell us?",
        questionAnswer: [
            {id: 2, answerText: 'No '},
            {id: 1518999, answerText: 'Yes'},
        ],
    },
];

export default QUESTIONS_EV_CHARGER;