import { weekdayCalculator } from './../src/weekday-calculator.js';

describe('weekdayCalculator', function(){
  it("should return the day of the week for a given date", function(){
    expect(weekdayCalculator(2019, 1, 9)).toEqual("Wednesday");
  });
});
