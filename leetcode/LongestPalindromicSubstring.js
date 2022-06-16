/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function(s) {
    const memo = {};
    let result = "";
    for(let i = 0; i < s.length; i++){
        for(let j = s.length; j > i; j--){
            const substring = s.slice(i, j);
            if(!memo[substring]){
                memo[substring] = true;
                if(isPalindromic(substring)){
                    result = result.length < substring.length ? substring : result;
                    break;
                }
            } else {
                break;
            }
        }
    }
    return result;
};


// Time Complexity = O(n/2);
const isPalindromic = function(s){
    let j = s.length - 1;
    let i = 0;
    
    while(j > i){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const myString = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

console.log(longestPalindrome(myString));