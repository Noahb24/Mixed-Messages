const adjective = ['abundant','slow','skinny','grim','hot','soft']
const noun = ['lettuce','cow','dog','deck','door','stake']
const typeOfBird = ['goose','duck','crow','sparrow','dodo']
const roomInAHouse = ['office','kitchen','bedroom','bathroom']
const verbPastTense = ['golfed','hid','clung','tripped','screamed','opended']
const verb = ['run','scare','tease','fall','shovel','look']

const findWord = type => {
    const rand = Math.floor(Math.random()*(type.length - 1))
    return type[rand]
}

const madLib = 
    `It was a ${findWord(adjective)}, cold November day. I woke up to the 
    ${findWord(adjective)} smell of ${findWord(typeOfBird)} roasting in 
    the ${findWord(roomInAHouse)} downstairs. I ${findWord(verbPastTense)} down the 
    stairs to see if i could help ${findWord(verb)} the dinner.`

console.log(madLib)