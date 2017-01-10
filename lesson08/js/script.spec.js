describe("Function add", function () {

    it("should exist", function () {
        expect(typeof add).toBe("function");
    });

    it("should add numbers", function () {
        expect(add(4, 5)).toBe(9);
    });

    it("should throw for non-numbers", function () {
        //expect(add('4', '5')).toThrow();
        expect(function () { add('4', '5') }).toThrow();
    });

    it("should handle small floats case", function () {
        expect(add(0.1, 0.2)).toBe(0.3);
    });

});

//describe("Test arrays", function () {
//    var arr;
//
//    beforeEach(function () {
//        arr = [];
//    });
//
//    it("should push value", function () {
//        arr.push(5);
//        expect(arr[0]).toBe(5);
//    });
//
//    it("should check length", function () {
//        expect(arr.length).toBe(0);
//        arr.push(5);
//        expect(arr.length).toBe(1);
//    });
//
//});

false &&
describe("Test async", function () {
    var time;

    beforeEach(function (done) {
        time = new Date();
        setTimeout(function () {
            done();
        }, 1000);
    });

    it("should fire after 1000ms", function (done) {
        expect(new Date() - time).toBeGreaterThan(999);
        expect(new Date() - time).not.toBeLessThan(1000);
        done();
    });

});

