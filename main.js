// 1

let i = 10;

while (i) {
    alert(i--);
}



// 2

let i = 0;
while (++i < 10) {
    alert(i);
}


let i = 0;
while (i++ < 10) {
    alert(i);
}

// Both loops will not alert the same number



// 3

Even:
    for (i = 2; i <= 30; i++) {
        if (i % 2 == 0) {
            alert(i);
        } else {
            continue Even;

        }
    }


// 4

let i = 0;

while (i < 10) {
    i++;
    alert('Number is ' + i);
}



// 5

var value = prompt("Input a number");

do {
    if (value < 500) {
        alert('Number is less than 500');
        prompt('Please input number again')

    } else {
        alert('Number is greater than 500');
        break;
    }


} while (value > 500);



// 6

startPrime:
    for (var n = 2; n < 20; n++) {
        for (var j = 2; j < n; j++) {
            if (n % j === 0)
                continue startPrime;
        }
        alert(n)
    }