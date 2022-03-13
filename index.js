function useState(initValue) {
    let _value = initValue
    const state = () => _value
    const setState = newValue => {
        _value = newValue
    }
    return [state, setState]
}

const [count, setCount] = useState(1)

console.log(count())
setCount(2)
console.log(count())
