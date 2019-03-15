
function PrintN(N)
{
    a=0;
    b=1;
    str = ""+b;
    for(i=2;i<=N;i++)
    {
        c=a+b;
        a=b;
        b=c;
        str=str+" "+b;
    }
    console.log(str);
    return str;
}


function main() {
    const testSuite = [
    {
        input1: 2,
        result: "1 1"
    },
    {
        input1: 3,
        result: "1 1 2"
    },
    {
        input1: 10,
        result: "1 1 2 3 5 8 13 21 34 55"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === PrintN(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    