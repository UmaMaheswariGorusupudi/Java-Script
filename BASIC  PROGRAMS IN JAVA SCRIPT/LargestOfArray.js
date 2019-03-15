
function Largest(Arr)
{
    alen =Arr.length;
    la=Arr[0];
    for(i=1;i<alen;i++)
    {
        if(la<Arr[i])
         la=Arr[i];

    }
    
    return la;
}


function main() {
    const testSuite = [
    {
        input1: [1,2,3,4,5],
        result: 5
    },
    {
        input1: [2,4,3,5,7,4],
        result: 7
    },
    {
        input1: [0,2,4,62,23,5,23],
        result: 62
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Largest(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    