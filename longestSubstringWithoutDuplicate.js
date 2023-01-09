const longestSubstringWithoutDuplicate = (string) => {
    let maxSubstring = '';
    let windowString = '';
    let i = 0;
    let k = 1;

    while(k < string.length) {
        windowString = string.slice(i, k + 1)
        // check windowString for duplicate.
        // if there is no duplicate, check if there is a new record and increase k
        // if there is a duplicate, increase i;
        if(!windowString.slice(0, windowString.length - 1).includes(windowString[windowString.length - 1 ])) {
            if(windowString.length > maxSubstring.length) {
                maxSubstring = windowString;
            }
            k++;
        } else {
            i++;
        }
    }   
    return maxSubstring;
}

console.log(longestSubstringWithoutDuplicate('öajökjehröhhjadkjfökjjhwöjaföödiewwnhq'));
console.log(longestSubstringWithoutDuplicate('Harm Intemann'));
console.log(longestSubstringWithoutDuplicate('kkkkkkk6kkkkk'));