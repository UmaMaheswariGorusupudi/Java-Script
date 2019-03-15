

function SumOfDigits(N)
{
    sum=0;
    while(N>0)
    {
      r=N%10;
      sum=sum+r;
      N=Math.floor(N/10);
    }
   return sum;
}

function main() {
    const testSuite = [
    {
        input1: 253,
        result: 10
    },
    {
        input1: 101001,
        result: 3
    },
    ]
    
    return testSuite.every(testSet => testSet.result === SumOfDigits(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    