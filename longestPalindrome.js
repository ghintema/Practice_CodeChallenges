// const reverseString = (string) => {
//     let reversedString = [];
//     for (let i = 0; i < string.length; i++) {
//         reversedString.unshift(string[i]);
//     }
//     return reversedString.join('')
// }
// a Palindrome is a string wich is the same read from the front as from the back. Example: 'aabaa' or 'jklöölkj' or 'jklölkj'
// 'racecar', 'civic', 'level', 'mom', 'noon'
const longestPalindrome = (s) => {
    let result = s[0];

    const dp = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(0);
        dp[i][i] = 1;
    }
    dp[0][0] = 1;

    for (let k = 1; k <= s.length; k++ ) {
        let i = 0;
        let j = k;
        while(i < s.length && j < s.length) {
           
            // two neighboured characters are a palindrome, if they are equal.
            if  ( (j - i) === 1 ) {
                if (s[i] === s[j] ) {
                    dp[i][j] = 1;    
                    if ((j - i) >= result.length) {
                        result = s.slice(i,j+1);
                    }
                } else {
                    dp[i][j] = 0;
                }
            }
            // two none neighboured characters i, j make a palindrome, if they are equal AND all characters between them form a palindrome itself
            // the information about the characters between is stored in dp[i+1][j-1]. 
            else {
                if ( s[i] === s[j] && dp[i+1][j-1] === 1 ) {
                    dp[i][j] = 1;    
                    if ((j - i) >= result.length) {
                        result = s.slice(i,j+1);
                    }
                } else {
                    dp[i][j] = 0;
                }
            }
            j++;
            i++;
        }

    }
    
    return result;
}

// console.log(longestPalindrome('qweerttreewqz'))


console.log(longestPalindrome('dfffg'))
console.log(longestPalindrome('dffffg'))
console.log(longestPalindrome('dfffffg'))
console.log(longestPalindrome('dffffffg'))
console.log(longestPalindrome('dfgfg'))
console.log(longestPalindrome('löksadhcivicfjpüojömwejlsdnkaxclevellevelyljhkn'))
