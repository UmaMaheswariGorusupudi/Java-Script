
function transpose(Arr)
{ 
    b=[];
    for (i = 0; i < Arr[0].length; i++) {
        b.push([0])
        for(j = 0; j < Arr.length; j++) {
            b[i][j] = Arr[j][i];
        }
}

return b;
}


function main() {
    const testSuite = [
    {
        input1: [ [ 1, 2, 3], [3 , 4, 5] ],
        result: [ [ 1, 3 ], [ 2, 4 ], [ 3, 5 ] ]
    },
]
    
    return testSuite.every(testSet => testSet.result === transpose(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)