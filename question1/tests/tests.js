
  'use strict';
  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [2.2, 2.8] for [2.4, 2.66, 2.6, 2.44, 2.7, 2.78, 2.8, 2.68, 2.2]', function () {
        expect(myApp.findMinMax([2.4, 2.66, 2.6, 2.44, 2.7, 2.78, 2.8, 2.68, 2.2])).toEqual([2.2, 2.8]);
      });

      it('should return [2, 178] for [10, 41, 66, 90, 44, 70, 78, 178, 68, 2]', function () {
        expect(myApp.findMinMax([10, 41, 66, 90, 44, 70, 78, 178, 68, 2])).toEqual([2, 178]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [5] for [5, 5]', function () {
        expect(myApp.findMinMax([5, 5])).toEqual([5]);
      });
      it('should return [8] for [8, 8, 8, 8, 8, 8, 8, 8, 8]', function () {
        expect(myApp.findMinMax([8, 8, 8, 8, 8, 8, 8, 8, 8])).toEqual([8]);
      });
      it('should return [2.5] for [2.5, 2.5]', function () {
        expect(myApp.findMinMax([2.5, 2.5])).toEqual([2.5]);
      });
      it('should return [5.9] for [5.9, 5.9, 5.9]', function () {
        expect(myApp.findMinMax([5.9, 5.9, 5.9])).toEqual([5.9]);
      });

    });

  });

