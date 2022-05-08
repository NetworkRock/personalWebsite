import { CSVBuilder } from "../csvBuilders"


const build = jest.fn();

describe('CSVBuilder', () => {

  test('call build with papa parse methode with correct data', async () => {
    const csvBuilder = new CSVBuilder('someFile', build)
    const spy = jest.spyOn(csvBuilder, 'build');
    csvBuilder.build()
    expect(spy).toHaveBeenCalled();
  });

  test('call build with papa parse methode without fileURL', async () => {
    const csvBuilder = new CSVBuilder('', build)
    const spy = jest.spyOn(csvBuilder, 'build');
    csvBuilder.build()
    expect(spy).toThrow('Cannot read properties of undefined (reading \'fileURL\')');
  });

})
