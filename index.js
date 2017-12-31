'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.7324f5e7-86d9-4e68-8b1b-e485e6b392eb';

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Game Boy was the first video game console to be played in space.',
                'Nintendo began as a playing card company in 1889',
                'In real life, Mario\'s jump would be over 25 feet high.',
                'Wii Sports is the best-selling Nintendo game ever',
                'The Legend of Zelda was the first console game that allowed you to save your game.',
                'PS1 games were sold until 2006.',
                'Playstation 2 has sold over 157 million units',
                'The original Xbox lost Microsoft $4 billion in the first 4 years.',
                '54% of all Xbox 360s got the Red Ring Of Death.',
                'It takes at least 3 million presses per button to wear out an Xbox One controller.',
                'Madden NFL 09 was the last game to release on the original Xbox',
                'The Sega Dreamcast was the first 128-bit console in the market.',
                'The Dreamcast was also the first console which allowed real-time online play feature.',
                'Shenmue and Shenmue 2 were the two most expensive games ever made for the Dreamcast. The first costing $47 million to make, and the second in the squeal costing a whooping $70 million!',
                'Shigeru Miyamoto is the creator of Super Mario',
                'Super Mario Bros. 2 actually started as Doki Doki Panic',
                'Resident Evil definded the survival horror genre.',
                'John Mayer secretly played on the Halo 2 soundtrack',
                'The sound for elites speaking in Halo: Combat Evolved was reversed english',
                'Halo 2 drastically changed during development, the cliffhanger was never planned',
                'Halo 3 had more than 35,000 lines Of dialogue',
                'Zelda started as a dungeon building sim',
                'Breath of the Wild was the first-ever Nintendo-released Zelda title to include voice acting',
                'Madden NFL has existed longer than more than half the NFL has been alive',
                'Madden NFL has sold 100 million lifetime copies',
                'The Fallout franchise began in 1997 with a story about a person who was born and raised inside a fallout shelter in the distant future',
                ' It\'s psossible to beat Grand Theft Auto Vice City in 57 minutes',
                'The Grand Theft Auto series has sold close to 200 million copies',
                'In the Witcher 3, Geralt\'s beard grows in real-time',
                'The Witcher 3\'s whole map is 20% bigger than Skyrim\'s map',
                'The last official GameCube game released in Japan was The Legend of Zelda: Twilight Princess',
                'Super Smash Bros. Melee on the GameCube was the system\'s best selling game, it sold more than 7.1 million copies worldwide',
                'Out of the top 25 best selling games for the GameCube, 19 of them were published by Nintendo.',
                'Destiny was actually teased in Halo 3: ODST',
                'During the development of the Wii, console developers were told to make the Wii no thicker than two DVD cases.',
            ],
            SKILL_NAME: 'Video Game Facts',
            GET_FACT_MESSAGE: "Here's a sweet game fact: ",
            HELP_MESSAGE: 'You can say give me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random game fact from the game facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
