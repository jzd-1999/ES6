function* gen() {
    yield "Java"
    yield "Script"
    yield "or"
    yield "ECMA"
    yield "Script"
}

let iterators = gen();
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
