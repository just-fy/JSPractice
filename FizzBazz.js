const fizzBuzz = () => {
    console.log('text');
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else console.log(i);
    }
}
fizzBuzz();