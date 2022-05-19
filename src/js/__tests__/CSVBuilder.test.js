const build = jest.fn()

import { CSVBuilder } from "../csvBuilders"
import * as papa from "papaparse"

let csvBuilder = undefined
let spyBuild = undefined

describe('CSVBuilder', () => {

  beforeEach(() => {
    csvBuilder = new CSVBuilder('', build)
    spyBuild = jest.spyOn(csvBuilder, 'build')
    csvBuilder.build()
  })

  afterEach(() => {
    jest.clearAllMocks
  })

  test('call build with papa parse methode without fileURL', async () => {
    expect(spyBuild).toThrow('Cannot read properties of undefined (reading \'fileURL\')');
  });

  test('should throw custom error by calling complete methode with undefined', async () => {
    const spyComplete = jest.spyOn(csvBuilder, 'complete')
    expect(() => csvBuilder.complete({ errors: [{ message: 'ERR' }] })).toThrowError("ERR")
    expect(spyComplete).toBeCalledTimes(1)
    spyComplete.mockClear()
  });

  test('should NOT throw custom error by calling complete methode with empty data', async () => {
    const spyComplete = jest.spyOn(csvBuilder, 'builder')
    expect(() => csvBuilder.complete({
      data: [],
      errors: []
    })).not.toThrowError("ERR")
    expect(spyComplete).toBeCalledTimes(1)
    spyComplete.mockClear()
  });

})
