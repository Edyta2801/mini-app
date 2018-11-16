const growJSskill = function () {
    this.JSskill = this.JSskill + 1
}

const makePerson = function (name, initalSkill) {
    return {
        name: name,
        JSskill: initalSkill,
        growJSskill: growJSskill
    }
}

const me = makePerson('Chomeusz', 100)
const myBother = makePerson('Jan', 10)

me.growJSskill()
myBother.growJSskill()
