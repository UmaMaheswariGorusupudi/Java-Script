function StudentGrading(Score)
{
    if(Score>=75)
    {
        return "Distinction";
    }
    else if(Score>=65)
    {
        return "First Class";
    }
    else if(Score>=50)
    {
        return  "Second Class";
    }
    else if(Score >=40)
    {
        return "Pass";
    }
    else
    {
        return "Failed";
    }
}

function main() {
    const testSuite = [
    {
    input1: 30,
    result: "Failed"
    },
    {
    input1: 40,
    result: "Pass"
    },
    {
    input1: 55,
    result: "Second Class"
    },
    {
    input1: 80,
    result: "Distinction"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === StudentGrading(testSet.input1))
    }
    
    const testsPassed = main()
    
    console.log(testsPassed) 