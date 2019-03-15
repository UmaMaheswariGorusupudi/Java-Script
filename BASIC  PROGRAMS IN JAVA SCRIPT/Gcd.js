function gcd(a, b) {
    if (a == 0) 
        return b; 
    if (b == 0) 
        return a; 
  
    if (a == b) 
        return a; 
    if (a > b) 
        return gcd(a-b, b); 
    return gcd(a, b-a); 
    }
    
    function main() {
    const testSuite = [
    {
    input1: 98,
    input2: 56,
    result: 14
    },
    {
    input1: 36,
    input2: 60,
    result: 12
    },
   
    ]
    
    return testSuite.every(testSet => testSet.result === gcd(testSet.input1, testSet.input2))
    }
    
    const testsPassed = main()
    
    console.log(testsPassed)