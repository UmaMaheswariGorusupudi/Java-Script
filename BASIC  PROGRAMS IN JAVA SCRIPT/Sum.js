function sum(a, b) {
    return a + b
    }
    
    function main() {
    const testSuite = [
    {
    input1: 1,
    input2: 2,
    result: 3
    },
    {
    input1: 2,
    input2: 3,
    result: 5
    },
    {
    input1: 3,
    input2: 4,
    result: 7
    },
    {
    input1: 5,
    input2: 6,
    result: 11
    },
    ]
    
    return testSuite.every(testSet => testSet.result === sum(testSet.input1, testSet.input2))
    }
    
    const testsPassed = main()
    
    console.log(testsPassed)