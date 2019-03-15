function Roots(a, b, c) {
   if(b*b-4*a*c>0)
   {
       str=""+(((-1*b-Math.sqrt(b*b-4*a*c))/(2*a)))+" "+(((-1*b+Math.sqrt(b*b-4*a*c))/(2*a)));
   }
   else if(b*b-4*a*c==0)
   {
    str= ""+(-1*b)/(2*a);
   }
   else
   {
    str= "No Roots";
   }
   console.log(str);
   return str
}
    
    function main() {
    const testSuite = [
    {
        input1: 1,
        input2: -3,
        input3: 4,
        result: "No Roots"
    },
    {
        input1: 1,
        input2: -2,
        input3: 1,
        result: "1"
    },
    {
        input1: 1,
        input2: -3,
        input3: 2,
        result: "1 2"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Roots(testSet.input1, testSet.input2, testSet.input3))
    }
    
    const testsPassed = main()
    
    console.log(testsPassed)