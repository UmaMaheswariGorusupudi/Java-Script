

function Factorial(N)
{
    fact=1;
    while(N>1)
    {
      fact=fact*N;
      N--;
    }
   return fact;
}

function main() {
    const testSuite = [
    {
        input1: 0,
        result: 1
    },
    {
        input1: 1,
        result: 1
    },
    {
        input1: 3,
        result: 6
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Factorial(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    