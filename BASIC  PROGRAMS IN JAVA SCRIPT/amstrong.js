

function Amstrong(N)
{
    sum=0;
    no=N;
    while(N>0)
    {
      r=N%10;
      sum=sum+(r*r*r);
      N=Math.floor(N/10);
    }
    if(sum==no)
    {
       return 1;
    }
    else{
        return 0;
    }
}

function main() {
    const testSuite = [
    {
        input1: 2,
        result: 0
    },
    {
        input1: 371,
        result: 1
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Amstrong(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    