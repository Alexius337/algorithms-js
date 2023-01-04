// my own solution before studying the concept

function same(first, second) { 
    first.sort((a,b) => a-b)
    console.log(first)

    second.sort((a,b) => a-b)
    console.log(second)

    let third = first.map((a) => a**2)
    console.log(third)

    if (JSON.stringify(second) === JSON.stringify(third)) return true
    else return false
}

let a1 = [1, 2, 3]
let a2 = [1, 4, 9]
console.log(same(a1, a2))

