class SimpleCalculator {


    Addition(string1, string2) {
        //finding index of '.' in string1 and string2
        var stringOneDotIndex = string1.indexOf(".");
        var stringTwoDotIndex = string2.indexOf(".");
        //if the two numbers are not float
        if (stringOneDotIndex != -1 && stringTwoDotIndex != -1) {
            //finding no. of digits after '.'
            var Onecount = string1.length - 1 - stringOneDotIndex;
            var Twocount = string2.length - 1 - stringTwoDotIndex;
            //if no. of digits after '.'is more in string1,append required no. of 0's to string2
            if (Onecount > Twocount) {
                var count = Onecount - Twocount;
                for (var iter = 1; iter <= count; iter++) {
                    string2 = string2 + 0;
                }
            }
            //if no. of digits after '.'is more in string2,append required no. of 0's to string1
            else {
                var count = Twocount - Onecount;
                for (var iter = 1; iter <= count; iter++) {
                    string1 = string1 + 0;
                }
            }
        }
        //if string2 is not float number
        else if (stringOneDotIndex != -1) {
            var count = string1.length - 1 - stringOneDotIndex;
            //append '.' to non float string i.e.,string2
            string2 = string2 + ".";
            //appending 0's after '.' in string2
            for (var iter = 1; iter <= count; iter++) {
                string2 = string2 + 0;
            }
        }
        //if string1 is not float number
        else if (stringTwoDotIndex != -1) {
            var count = string2.length - 1 - stringTwoDotIndex;
            //append '.' to non float string i.e.,string1
            string1 = string1 + ".";
            //appending 0's after '.' in string1
            for (var iter = 1; iter <= count; iter++) {
                string1 = string1 + 0;
            }
        }

        // console.log(string1);
        // console.log(string2);

        var ans = ""; //ans is the variable to store final result
        //if the two strings are negative numbers then perform addition i.e., -a+(-b)=-(a+b) 
        if (string1[0] == '-' && string2[0] == '-') {
            ans = this.additionAction(string1, string2);
        }
        //if string1 is negative number do subtraction i.e., -a+b=b-a
        else if (string1[0] == '-') {
            
            string1 = string1.substr(1);//remove '-' from string1 and pass it to subtraction function as second argument along with string2 as first argument
            ans = this.SubtractionAction(string2, string1);
        }
        //if string2 is negative number do subtraction i.e., a+(-b)=a-b
        else if (string2[0] == '-') {
            string2 = string2.substr(1);//remove '-' from string2 and pass it to subtraction function as second argument along with string1 as first argument
            ans = this.SubtractionAction(string1, string2);
        }
        //if both strings are positive numbers i.e.,a+b
        else {
            ans = this.additionAction(string1, string2);
        }

        console.log(ans);
    }

    Subtraction(string1, string2) {
        //as explained above in addition
        var stringOneDotIndex = string1.indexOf(".");
        var stringTwoDotIndex = string2.indexOf(".");
        if (stringOneDotIndex != -1 && stringTwoDotIndex != -1) {
            var Onecount = string1.length - 1 - stringOneDotIndex;
            var Twocount = string2.length - 1 - stringTwoDotIndex;
            if (Onecount > Twocount) {
                var count = Onecount - Twocount;
                for (var iter = 1; iter <= count; iter++) {
                    string2 = string2 + 0;
                }
            }
            else {
                var count = Twocount - Onecount;
                for (var iter = 1; iter <= count; iter++) {
                    string1 = string1 + 0;
                }
            }
        }

        else if (stringOneDotIndex != -1) {
            var count = string1.length - 1 - stringOneDotIndex;
            string2 = string2 + ".";
            for (var iter = 1; iter <= count; iter++) {
                string2 = string2 + 0;
            }
        }
        else if (stringTwoDotIndex != -1) {
            var count = string2.length - 1 - stringTwoDotIndex;
            string1 = string1 + ".";
            for (var iter = 1; iter <= count; iter++) {
                string1 = string1 + 0;
            }
        }


        var ans = "";
         //if the two strings are negative numbers then perform subtraction i.e., -a-(-b) =-a+b =b-a  
        if (string1[0] == '-' && string2[0] == '-') {
            //remove '-' from both the strings
            string2 = string2.substr(1);
            string1 = string1.substr(1);
            ans = this.SubtractionAction(string2, string1);
        }
        //if string1 is negative number do addition i.e., -a-b=-(a+b)
        else if (string1[0] == '-') {
    
            string2 = "-" + string2
            ans = this.additionAction(string2, string1);
        }
        //if string2 is negative number do addition i.e., a-(-b)= a+b
        else if (string2[0] == '-') {
            string2 = string2.substr(1);
            ans = this.additionAction(string1, string2);
        }
        // if two strings are positive do subtraction i.e., a-b
        else {
            ans = this.SubtractionAction(string1, string2);
        }
        console.log(ans);
    }

    multiply(string1, string2) {
        var ans = "";
        //if two strings are negative
        if (string1[0] == '-' && string2[0] == '-') {
            string2 = string2.substr(1);
            string1 = string1.substr(1);
            ans = this.multiplyAction(string1, string2);//result is positive
        }
        //if string1 is negative
        else if (string1[0] == '-') {
            string1 = string1.substr(1);
            ans = this.multiplyAction(string1, string2);
            ans = "-" + ans;//as result is negative append '-' 
        }
        //if string2 is negative
        else if (string2[0] == '-') {
            string2 = string2.substr(1);
            ans = this.multiplyAction(string1, string2);
            ans = "-" + ans;//as result is negative append '-'
        }
        //if two strings are positive
        else {
            ans = this.multiplyAction(string1, string2);//result is positive
        }

        console.log(ans);

    }


    division(string1, string2) {
        //finding the index of '.'
        var stringOneDotIndex = string1.indexOf(".");
        var stringTwoDotIndex = string2.indexOf(".");
        //if two strings are float
        if (stringOneDotIndex != -1 && stringTwoDotIndex != -1) {
            //finding no.of digits after '.'
            var Onecount = string1.length - 1 - stringOneDotIndex;
            var Twocount = string2.length - 1 - stringTwoDotIndex;
            if (Onecount > Twocount) {
                var count = Onecount - Twocount;
                //appending 0's to make them integers
                for (var iter = 1; iter <= count; iter++) {
                    string2 = string2 + 0;
                }
                string2 = string2.slice(0, stringTwoDotIndex) + string2.slice(stringTwoDotIndex + 1, string2.length);
                string1 = string1.slice(0, stringOneDotIndex) + string1.slice(stringOneDotIndex + 1, string1.length);
            }
            else {
                var count = Twocount - Onecount;
                for (var iter = 1; iter <= count; iter++) {
                    string1 = string1 + 0;
                }
                string1 = string1.slice(0, stringOneDotIndex) + string1.slice(stringOneDotIndex + 1, string1.length);
                string2 = string2.slice(0, stringTwoDotIndex) + string2.slice(stringTwoDotIndex + 1, string2.length);
            }
        }

        else if (stringOneDotIndex != -1) {

            var count = string1.length - 1 - stringOneDotIndex;
            string1 = string1.slice(0, stringOneDotIndex) + string1.slice(stringOneDotIndex + 1, string1.length);
            for (var iter = 1; iter <= count; iter++) {
                string2 = string2 + 0;
            }
        }
        else if (stringTwoDotIndex != -1) {
            var count = string2.length - 1 - stringTwoDotIndex;
            string2 = string2.slice(0, stringTwoDotIndex) + string2.slice(stringTwoDotIndex + 1, string2.length);
            for (var iter = 1; iter <= count; iter++) {
                string1 = string1 + 0;
            }
        }
    
        var ans = "";
        if (string1[0] == '-' && string2[0] == '-') {
            string2 = string2.substr(1);
            string1 = string1.substr(1);
            ans = this.divisionAction(string1, string2);
        }
        else if (string1[0] == '-') {
            string1 = string1.substr(1);
            ans = this.divisionAction(string1, string2);
            ans = "-" + ans;
        }
        else if (string2[0] == '-') {
            string2 = string2.substr(1);
            ans = this.multiplyAction(string1, string2);
            ans = "-" + ans;
        }
        else {
            ans = this.divisionAction(string1, string2);
        }

        console.log(ans);

    }




    SubtractionAction(string1, string2) {
        var IsAnsNeg = false;
        var strOneLength = string1.length;
        var strTwoLength = string2.length;
        var ans = "";
        // if string2 length is greater than string1 length then swap the strings and their lengths so that larger no is taken first then smaller 
        if (strOneLength < strTwoLength) {
            IsAnsNeg = true;
            var temp = string1;
            string1 = string2;
            string2 = temp;
            strOneLength = string1.length;
            strTwoLength = string2.length;
        }
        else if (strOneLength == strTwoLength) {
            for (var iter = 0; iter <= strOneLength; iter++) {
                if (string1.charCodeAt(0) < string2.charCodeAt(0)) {
                    IsAnsNeg = true;
                    var temp = string1;
                    string1 = string2;
                    string2 = temp;
                    break;
                }
                else if (string1.charCodeAt(0) > string2.charCodeAt(0)) {
                    break;
                }
            }
        }

        var barrow = 0, i, j;
        for (i = strOneLength - 1, j = strTwoLength - 1; j >= 0; i-- , j--) {
            if (string1[i] != '.') {
                var char = string1.charCodeAt(i) - 48 - (string2.charCodeAt(j) - 48) + barrow;
                if (char < 0) {
                    char = char + 10;
                    barrow = -1;
                }
                else {
                    barrow = 0
                }
                ans = "" + char + ans;
            }
            else {
                ans = "." + ans;
            }
        }

        for (; i >= 0; i--) {
            var char = string1.charCodeAt(i) - 48 + barrow;
            if (char < 0) {
                char = char + 10;
                barrow = -1;
            }
            else {
                barrow = 0
            }
            ans = "" + char + ans;
        }
        var iter =0 ;
        for(iter = 0;iter<ans.length-1;iter++)
        {
            if(ans[iter]!='0')
               break;
        }
        ans = ans.substr(iter);

        if (IsAnsNeg)
            ans = "-" + ans;
        return ans;
    }

    additionAction(string1, string2) {

        var strOneLength = string1.length;
        var strTwoLength = string2.length;
        var ans = "";
        //string1 < string2 then swap 
        if (strOneLength < strTwoLength) {
            var temp = string1;
            string1 = string2;
            string2 = temp;
            strOneLength = string1.length;
            strTwoLength = string2.length;
        }
        //initially carry set to 0
        var Carry = 0, i, j;
        //for loop ends when second string  has no elements
        for (i = strOneLength - 1, j = strTwoLength - 1; j >= 0; i-- , j--) {
  //          
            if (string1[i] != '-' && string2[j] != '-') {
                //if the element in string is not '.'
                if (string1[i] != '.') {
                    //perform addition along with carry
                    var char = string1.charCodeAt(i) - 48 + string2.charCodeAt(j) - 48 + Carry;
                    //if output is greater 9 take unit digit and set 1 as carry
                    if (char > 9) {
                        char = char % 10
                        Carry = 1;
                    }
                    //set carry 0
                    else {
                        Carry = 0
                    }
                    ans = "" + char + ans;
                }
                else {
                    ans = "." + ans;
                }
            }
            else {
                break;
            }
        }
        //for remaining digits in string1
        for (; i >= 0; i--) {
            if (string1[i] != '-') {
                var char = string1.charCodeAt(i) - 48 + Carry;
                if (char > 9) {
                    char = char % 10
                    Carry = 1;
                }
                else {
                    Carry = 0
                }
                ans = "" + char + ans;
            }
        }
        //if carry occur at last append it in the beginning
        if (Carry == 1) {
            ans = "" + 1 + ans;
        }
        //append '-'
        if (string1[0] == '-')
            ans = '-' + ans;

        return ans;

    }
    // if       233 * 222 
    //  =  (3*2)    466
    //  = (3*20)   4660
    //  = (3*200) 46600 
    //  =         51726
    multiplyAction(string1, string2) {
        // identify the largest string  in  both to reduce the iteration
        var ans = "";
        var strOneLength = string1.length;
        var strTwoLength = string2.length;
        if (strOneLength < strTwoLength) {
            var temp = string1;
            string1 = string2;
            string2 = temp;
            strOneLength = string1.length;
            strTwoLength = string2.length;
        }
        //basic multiplication
        var carry = 0, i, j, pos = 0;
        for (j = strTwoLength - 1; j >= 0; j--) {
            var st = "";
            carry = 0;
            if (string2[j] != ".") {
                for (i = strOneLength - 1; i >= 0; i--) {
                    if (string1[i] != ".") {
                        var char = (string1.charCodeAt(i) - 48) * (string2.charCodeAt(j) - 48) + carry;
                        if (char > 9) {
                            carry = parseInt(char / 10);
                            char = char % 10;
                        }
                        else {
                            carry = 0;
                        }
                        st = "" + char + st;
                    }
                }
                if (carry > 0)
                    st = "" + carry + st;
                for (var iter = 1; iter <= pos; iter++) {
                    st = st + "" + 0;
                }
                pos++;
                ans = this.additionAction(ans, st);
            }
        }

        // placing the "." if float pointer
        var stringOneDotIndex = string1.indexOf(".");
        var stringTwoDotIndex = string2.indexOf(".");
        var Onecount = 0;
        var Twocount = 0;
        var ansLength = ans.length;
        if (stringOneDotIndex >= 0)
            Onecount = string1.length - 1 - stringOneDotIndex;
        if (stringTwoDotIndex >= 0)
            Twocount = string2.length - 1 - stringTwoDotIndex;
        var count = Onecount + Twocount;
        if (stringOneDotIndex != -1 || stringTwoDotIndex != -1) {
            var CutOff = 0;
            ans = ans.slice(0, ansLength - count) + "." + ans.slice(ansLength - count, ansLength);
            for (var iter = ansLength; iter >= 0; iter--) {
                if (ans[iter] == '0')
                    CutOff++;
            }
            ans = ans.substr(0, ansLength - CutOff + 2);
        }
        return ans;
    }

    divisionAction(string1, string2) {

        var ans = ""; // ans string quotient
        var divident = "";
        var check = "";
        //common division
        for (var iter = 0; iter < string1.length; iter++) {
            divident = divident+string1[iter];
            if (divident.length >= string2.length ) {
                check = this.SubtractionAction(divident, string2);
                 if (check[0] == '-')
                     break;
                 else {
                     //get the mulpyler for next step in a division
                    for (var iter2 = 2; iter2 <= 9; iter2++) {
                        var multiplex = "" + iter2;
                        var check2 = "";
                        check2 = this.SubtractionAction(divident, this.multiplyAction(string2, multiplex));
                        if (check2[0] == '-') {
                            ans = ans + (iter2 - 1);
                            break;
                        }
                        check = check2;
                    }
                }
                divident = check;
                if(divident[0]=='0')
                   divident =divident.substr(1);
            }
        }
        return ans;

    }
}

var sc = new SimpleCalculator();
// sc.Addition("-127", "-1227");
// sc.Addition("-122227", "-1227");
//sc.Addition("111111111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111111111");
// sc.Addition("132327", "34431227");
// sc.Addition("99", "99");
// sc.Addition("-999", "-999");
// sc.Subtraction("-127","127");z
//sc.Subtraction("1227","-127");
// sc.Subtraction("1227","127");
// sc.Subtraction("127","1227");
// sc.Subtraction("-127","-1227");
// sc.Subtraction("-1227","-127");
// sc.Addition("127","-1227");
// sc.Addition("-127","1227");
//sc.multiply("99","2");
//sc.multiply("1235421415454545454545454544","1714546546546545454544548544544545"); //2118187521397235888154583183918321221520083884298838480662480
//sc.Addition("222.93", "-111111.100000000000000");
// sc.Addition("-122227", "-1227");
// sc.Addition("111111111111111111111111111111111111111111111111111111111111", "111111111111111111111111111111111111111111111111111111111111");
// sc.Addition("132327", "34431227");
// sc.Addition("99", "99");
// sc.Addition("-999", "-999");
//sc.multiply("111111.02", "1.1");
//sc.division("22.0", "1.0");






