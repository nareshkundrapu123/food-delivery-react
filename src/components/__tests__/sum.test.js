const { sum } = require("../sum")


    test("sum function calculate the sum of 2 numbers",()=>{

        const result=sum(3,4);

        //Assertion
        expect(result).toBe(7);
    });