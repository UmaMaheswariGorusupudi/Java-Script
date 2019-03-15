
function Pascal(rows)
{
    coef = 1;
    str="";
    
    for(i=0; i<rows; i++)
    {
        for(space=1; space <= rows-i-1; space++)
            str=str+" ";

        for(j=0; j <= i; j++)
        {
            if (j==0 || i==0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            str=str+" "+coef;
        }
        str=str+"\n";
    }
    console.log(str);
    return str;
}


function main() {
    const testSuite = [
    {
        input1: 5,
        result: "     1\n    1 1\n   1 2 1\n  1 3 3 1\n 1 4 6 4 1\n"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Pascal(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
