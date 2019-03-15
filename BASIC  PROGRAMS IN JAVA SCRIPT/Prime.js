
function primep(n)
{
    //prime[n+1]; 
    prime = []
    for(i=0;i<=n;i++)
    {
        prime[i]=true;
    }
    str="";
    for ( p=2; p*p<=n; p++) 
    { 
        // If prime[p] is not changed, then it is a prime 
        if (prime[p] == true) 
        { 
           
            for (i=p*p; i<=n; i += p) 
                prime[i] = false; 
        } 
    } 
  
    // Print all prime numbers 
    for ( p=2; p<=n; p++) 
       if (prime[p]) 
          str=str+p;

    return str;
}


function main() {
    const testSuite = [
    {
        input1: 2,
        result: "2"
    },
    {
        input1: 3,
        result: "23"
    },
    {
        input1: 10,
        result: "2357"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === primep(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
    