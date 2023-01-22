/*
Given two strings, write a function to determine if the second string
is an anagram of the first. An anagram is a word, phrase, or name 
formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function valid_anagram_sort(a, b) {
    aSorted = a.split('').sort().join('')
    //console.log(aSorted)
    bSorted = b.split('').sort().join('')
    //console.log(bSorted)
    if (aSorted == bSorted) return true
    return false 
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