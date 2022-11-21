import { sum, getData } from "./index"

// Before all tests run
beforeAll(() => {
    // pre test run setup
    // mock a service?
})

// After all tests run
afterAll(() => {
    // post test run setup
    // clean up
})

//Before each test runs
beforeEach(() => {})

//After each test runs
afterEach(() => {})

test('adds 3 to 5 and return 8', () => {
    expect(sum(3, 5)).toBe(8)
})

test('check object content', () => {
    const obj1 = {
        name: 'Jack',
        age: 23
    }
    expect(obj1).toEqual({name: 'Jack', age: 23})
})

test('test an async operation', async () => {
    const data = await getData(3, 5)
    expect(data).toBe(8)
})
