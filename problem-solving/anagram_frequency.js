/*
Given two strings, write a function to determine if the second string
is an anagram of the first. An anagram is a word, phrase, or name 
formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function valid_anagram_sort(a, b) {
    if(a.length !== b.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of a){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of b){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }

    return true
}

a1 = ''
b1 = ''
console.log(valid_anagram_sort(a1, b1))

a2 = 'aaz'
b2 = 'zza'
console.log(valid_anagram_sort(a2, b2))

a3 = 'anagram'
b3 = 'nagaram'
console.log(valid_anagram_sort(a3, b3))