function Operations(a, b, Op) {
    switch(Op)
    {
        case "+" : return a+b ;
        case "-" : return a-b;
        case "*" : return a*b ;
        case "/" : return a/b;
    }
 }
     
     function main() {
     const testSuite = [
     {
         input1: 1,
         input2: 2,
         input3: "+",
         result: 3
     },
     {
        input1: 2,
        input2: 1,
        input3: "-",
        result: 1
    },
    {
        input1: 3,
        input2: 2,
        input3: "*",
        result: 6
    },
    {
        input1: 1,
        input2: 2,
        input3: "/",
        result: 0.5
    },
     ]
     
     return testSuite.every(testSet => testSet.result === Operations(testSet.input1, testSet.input2, testSet.input3))
     }
     
     const testsPassed = main()
     
     console.log(testsPassed)