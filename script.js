//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

//JavaScript Problem #1 Sleep In
function sleep_in(x, y) {
    var sleep_in = !x || y;
    return sleep_in;
}

//JavaScript Problem #2 Monkey Trouble
function monkey_trouble(a, b) {
    var a_smile = a && a;
    var b_smile = b && b;
    var trouble = (a_smile && b_smile) || (!a_smile && !b_smile);
    return trouble;
}

//JavaScript Problem #3 String Times
function string_times(string, repetitions) {
    var result = "";
    for (var i = 0; i < repetitions; ++i) {
        result = result + string;
    }
    return result;
}

//JavaScript Problem #4 Front Times
function front_times(m, n) {
    return string_times(m.substring(0, 3), n);
}

//JavaScript Problem #5 String Bits
function string_bits(string) {
    var result = "";
    for (var i = 0; i < string.length; i += 2) {
        result = result + string.substring(i, i + 1);
    }
    return result;
}

//JavaScript Problem #6 Caught Speeding
function caughtSpeeding(speed, isMyBirthday) {
    if (isMyBirthday) {
        speed -= 5;
    }
    if (speed <= 60) {
        return 0;
    }
    if (speed <= 80) {
        return 1;
    }
    return 2;
}

//JavaScript Problem #7 Fizz Buzz
function fizzBuzz(number) {
    if (number % 3 == 0) {
        if (number % 5 == 0) {
            number = "FizzBuzz"
        } else {
            number = "Fizz"
        }
    } else if (number % 5 == 0) {
        number = "Buzz"
    }
    return number + "!";
}

//JavaScript Problem #8 Tea Party
function teaParty(tea, candy) {
    if (tea >= candy * 2 || candy >= tea * 2) {
        return 2;
    }
    if (tea >= 5 && candy >= 5) {
        return 1;
    } else {
        return 0;
    }
}

//JavaScript Problem #9 Black Jack
function blackJack(x, y) {
    if (x > 21) {
        x = 0;
    }
    if (y > 21) {
        y = 0;
    }
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

//JavaScript Problem #10 Lone Sum
function loneSum(a, b, c) {
    if (a == b) {
        if (c == a) {
            return 0;
        }
        return c;
    }
    if (a == c) {
        return b;
    }
    if (b == c) {
        return a;
    } else {
        return a + b + c;
    }
}