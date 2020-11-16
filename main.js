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



console.log(findWord(adjective))