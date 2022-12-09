const code = require ("./code")

test("Returns splitted input 777777", () => {
    expect(code.splitInput('777777')).toStrictEqual(["7777", "77"])
})

test("Returns translated message 'sq' for input '777777'", () => {
    expect(code.translateInputToMessage(["7777", "77"])).toStrictEqual('sq')
})

test("Returns splitted input 999999", () => {
    expect(code.splitInput('999999')).toStrictEqual(["9999", "99"])
})

test("Returns splitted input 7717777", () => {
    expect(code.splitInput('7717777')).toStrictEqual(["77", "1", "7777"])
})

test("Returns translated message 'qs' for input '7717777'", () => {
    expect(code.translateInputToMessage(["77", "1", "7777"])).toStrictEqual('qs')
})

test("Returns splitted input 9919999", () => {
    expect(code.splitInput('9919999')).toStrictEqual(["99", "1", "9999"])
})

test("Returns splitted empty string", () => {
    expect(code.splitInput('')).toStrictEqual([])
})

test("Returns translated empty string", () => {
    expect(code.translateInputToMessage([])).toStrictEqual('')
})

test("Returns splitted input 443355555566604466690277733099966688", () => {
    expect(code.splitInput('443355555566604466690277733099966688')).toStrictEqual(['44',  '33', '555', '555','666', '0',  '44',  '666','9',   '0',  '2',   '777','33',  '0',  '999', '666','88'])
})

test("Returns translated message for input 443355555566604466690277733099966688", () => {
    expect(code.translateInputToMessage(['44',  '33', '555', '555','666', '0',  '44',  '666','9',   '0',  '2',   '777','33',  '0',  '999', '666','88'])).toStrictEqual('hello how are you')
})

test("checkIfCurrentElementEqualsNextElement returns true", () => {
    expect(code.checkIfCurrentElementEqualsNextElement('5', '5')).toStrictEqual(true)
})

test("checkIfCurrentElementEqualsNextElement returns false", () => {
    expect(code.checkIfCurrentElementEqualsNextElement('4', '5')).toStrictEqual(false)
})

test("checkIfCurrentElementEquals1 returns true", () => {
    expect(code.checkIfCurrentElementEquals1('1')).toStrictEqual(true)
})

test("checkIfCurrentElementEquals1 returns false", () => {
    expect(code.checkIfCurrentElementEquals1('2')).toStrictEqual(false)
})

test("checkIfArraySliceSizeEquals2 returns true", () => {
    expect(code.checkIfArraySliceSizeEquals2('2', '0')).toStrictEqual(true)
})

test("checkIfArraySliceSizeEquals2 returns false", () => {
    expect(code.checkIfArraySliceSizeEquals2('3', '2')).toStrictEqual(false)
})

test("checkIfArraySliceSizeEquals3 returns true", () => {
    expect(code.checkIfArraySliceSizeEquals3('3', '0')).toStrictEqual(true)
})

test("checkIfArraySliceSizeEquals3 returns false", () => {
    expect(code.checkIfArraySliceSizeEquals3('4', '3')).toStrictEqual(false)
})

test("checkIfCurrentElementIs7 returns true", () => {
    expect(code.checkIfCurrentElementIs7('7')).toStrictEqual(true)
})

test("checkIfCurrentElementIs7 returns false", () => {
    expect(code.checkIfCurrentElementIs7('4')).toStrictEqual(false)
})

test("checkIfCurrentElementIs9 returns true", () => {
    expect(code.checkIfCurrentElementIs9('9')).toStrictEqual(true)
})

test("checkIfCurrentElementIs9 returns false", () => {
    expect(code.checkIfCurrentElementIs9('4')).toStrictEqual(false)
})

test("Slice grouping equal elements correctly", () => {
    expect(code.sliceInputGroupingEqualElements('8923759833333333892374', 8, 16)).toStrictEqual('33333333')
})

test("Get slicing indexes correctly", () => {
    expect(code.getSlicingIndexes(5)).toStrictEqual(6)
})

test("Sends message and returns correct translated message", () => {
    expect(code.completeExecution('443355555566604466690277733099966688')).toStrictEqual('hello how are you')
})