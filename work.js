{
    var nam = "Eric";
    console.log(nam, "  Hello Eric would you like to learn some Python today?"); //msg print
    var nam1 = "Muzzamil";
    console.log("Lowercase:muzzamil\nUppercase:MUZZAMIL\nTitlecase:MuzzAmil"); //personal name
    console.log("As JohnCena said, “Live fast, fight hard, no regrets!” "); //quote
    var famous_person = "QuaieAzam";
    var message = "'No nation can rise to the height of glory unless your women are side by side with you'";
    console.log("As ", famous_person, "said,", message);
    console.log("\t \n      \t Muzzamil \t\n"); //whitespace
    console.log("Muzzamil");
    var addition = 2 + 6;
    var multipication = 2 * 4;
    var subtraction = 16 - 8;
    var division = 16 / 2;
    console.log("addition is ", addition, "\nsubttraction is", subtraction, "\nmultipication is", multipication, "\ndivision is ", division);
    console.log(5 + 3);
    console.log(5 + 3);
    console.log(5 + 3);
    console.log(5 + 3);
    var num = "69";
    console.log("My Favourite number is ", num);
    var friends = ["hasaan", "mohsin", "zeeshan", "hamza"]; //storing name in array of friends and prining greetings
    console.log(friends[0], "how are you bro");
    console.log(friends[1], "how are you bro");
    console.log(friends[2], "how are you bro");
    console.log(friends[3], "how are you bro");
    var fav_transport = ["cd70", "hondaGLI", "LAMBORGHINI"]; //array for my fav transport
    console.log("I want to own ", fav_transport[0]);
    console.log("I want to own ", fav_transport[1]);
    console.log("I want to own ", fav_transport[2]);
    var guest = ["brock", "rock", "randy", "undertaker"]; //inviting friends to dinner
    console.log("I want to invite you to a dinner this saturday:", guest[0]);
    console.log("I want to invite you to a dinner this saturday:", guest[1]);
    console.log("I want to invite you to a dinner this saturday:", guest[2]);
    console.log("I want to invite you to a dinner this saturday:", guest[3]);
    console.log("you cant make it to dinner:", guest[3]);
    console.log("you cant make it to dinner:", guest[1]);
    var invites = " john cena";
    console.log("you are invited to a dinner at saturday night:", invites); //invitng replacement to dinner 
    var new_guest = ["riddle", "strawman"];
    console.log("invited but not arrived:", guest[3], "\ninvited but not arrived:", guest[1]); //separting who is arrived and who not
    console.log("new invite:", new_guest[0], "\nnew invites:", new_guest[1]);
    console.log("you are still invited on dinner:", guest[0]);
    console.log("you are still invited on dinner:", guest[2]);
    console.log("you are still invited on dinner:", new_guest[0]);
    console.log("you are still invited on dinner:", new_guest[1]);
    console.log("you are still invite:", invites);
    console.log("Alas! i have found a bigger dinner table");
    var more_guest = ["kofikingston", "bray", "CMPunk", "reymysterio", "MattHardy"];
    console.log("you are invited too:", more_guest[0]);
    console.log("you are invited too:", more_guest[1]);
    console.log("you are invited too:", more_guest[2]);
    var edge = "triple H";
    more_guest.push[edge];
    console.log(" now you are invited too:", more_guest[0]);
    console.log(" now you are invited too:", more_guest[1]);
    console.log(" now you are invited too:", more_guest[2]);
    console.log(" now you are invited too:", more_guest[3]);
    console.log(" now you are invited too:", more_guest[4]);
    console.log(" now you are invited too:", more_guest[5]);
    console.log("now you are invited too:", new_guest[0]);
    console.log("now you are invited too:", new_guest[1]);
    console.log("now you are invited too:", guest[0]);
    console.log("now you are invited too:", guest[2]);
    console.log("now you are invited too:", invites);
    console.log("i can invite only two peoples now");
    console.log(" sorry you are not invited on dinner :", invites);
    console.log(" sorry you are not invited on dinner :", new_guest[0]);
    console.log(" sorry you are not invited on dinner :", new_guest[1]);
    console.log(" sorry you are not invited on dinner :", more_guest[0]);
    console.log(" sorry you are not invited on dinner :", more_guest[1]);
    console.log(" sorry you are not invited on dinner :", more_guest[2]);
    console.log(" sorry you are not invited on dinner :", more_guest[3]);
    console.log(" sorry you are not invited on dinner :", more_guest[4]);
    console.log(" sorry you are not invited on dinner :", more_guest[5]);
    console.log("you are still invited to a dinner:", guest[0]);
    console.log("you are still invited to a dinner:", guest[2]);
    console.log("i will remove these last two from my also");
    var list = ["empty"];
    console.log("mine list is", list[0]);
    //location program 
    var location_1 = ["burj khalifa", "tower of paris", "dead sea", "harvard university", "statue of liberty"];
    console.log("location i want to visit", location_1);
    location_1.sort();
    console.log(location_1);
    console.log(location_1);
    location_1.sort().reverse();
    console.log(location_1);
    console.log(location_1);
    location_1.reverse();
    console.log(location_1);
    location_1.reverse();
    console.log(location_1);
    location_1.sort();
    console.log(location_1);
    location_1.sort(function (a, b) { return b.localeCompare(a); });
    console.log(location_1);
    //number of people inviting to dinner
    console.log("number of people invited to dinner is 12");
    console.log(guest, new_guest, more_guest, invites);
    var mountain = ["K2", "mount everst"];
    var countries = ["pakisatan", "india", "australia"];
    var rivers = ["ravi", "sutlej", "indus"];
    var cities = ["rawalpindi", "hyderabad", "london"];
    var language = ["urdu", "english", "arabic"];
    console.log(mountain, "\n", countries, "\n", rivers, "\n", cities, "\n", language);
    var thing1 = {
        car: "suzuki"
    };
    var thing2 = {
        bike: "cd70"
    };
    console.log(thing1, thing2);
    //error in program 
    var number = [0, 1, 2, 3, 4, 5];
    ///console.log(number[10]);this will give error
    console.log(number[4]);
    //conditional test
    var grade = 80;
    var age = 18;
    var clas = 10;
    console.log("is a grade greater than 60?I predict true");
    console.log(grade == 90);
    console.log("is the age is greater than 18?I predict false");
    console.log(age > 18);
    console.log("Is class is greater than 9?I predict true");
    console.log(clas == 10);
    console.log("is the age is greater than 25?I predict false");
    console.log(age == 18);
    console.log("is the age is greater than 18?I predict true");
    console.log(age < 18);
    console.log("is the age is equal to 18?I predict false");
    console.log(age == 18);
    console.log("is the age is equal to 49?I predict false");
    console.log(age == 49);
    console.log("is the age is greater than 18?I predict false");
    console.log(age < 18);
    console.log("is the age is greater than 18?I predict true");
    console.log(age > 18);
    console.log("is the age is greater than 18?I predict false");
    console.log(age > 18);
    console.log("is the age is greater than 18?I predict false");
    console.log(age > 18);
    console.log("is the age is greater than 18?I predict false");
    console.log(age < 18);
    //test to chk truue or false
    var string = "grapes";
    var string1 = "banana";
    console.log("is string is equal to grapes?I predict true");
    console.log(string == "grapes");
    console.log("is string1 is equal to grapes?I predict false");
    console.log(string1 == "banana");
    var cass = "a";
    console.log("is a cass uppercase?I predict false");
    console.log(cass == "a");
    console.log("is a cass lowercase?I predict true ");
    console.log(cass == "a");
    var numb = 3;
    var numb1 = 5;
    console.log("is numb1 greater than numb? I predict true ");
    console.log(numb1 > numb);
    console.log("is numb is greater than numb1? i predict true");
    console.log(numb == numb1);
    var fruits = ["orange", "apple"];
    console.log("is orange is in the aray?I predict true");
    console.log(fruits[0] == "orange");
    console.log("is banana is in the array? I predict true");
    console.log(fruits[1] == "banana");
    //exsercise no 25
    var alein = "green";
    if (alein == "green") {
        console.log("you have won 5 points");
    }
    else
        console.log("no output");
    //use of if else statement
    var alein2 = "yellow";
    if (alein2 == "green")
        console.log("you earned 5 points");
    else
        console.log("you earned 10points");
    //more program
    var alein3 = "red";
    if (alein3 == "green")
        console.log("you have earned 5 points");
    else if (alein3 == "red")
        console.log("you have earned 15 points");
    else if (alein3 == "yellow")
        console.log("you have earned 10 point");
    var page = 20;
    if (page == 2)
        console.log("person is baby");
    else if (page == 4)
        console.log(" person is kid");
    else if (page == 20)
        console.log("person is teeenager");
    else if (page == 65)
        console.log("person is adult");
    //array for fav fruits
    var fav_fruits = ["banana", "apple", "mango"];
    console.log(fav_fruits);
    if (fav_fruits[0] == "cherry")
        console.log("you rally like banana");
    else if (fav_fruits[1] == "grapes")
        console.log("you rally like grapes");
    else if (fav_fruits[1] == "mango")
        console.log("you rally like apple");
    else if (fav_fruits[2] == "mango")
        console.log("you rally like mango");
    else if (fav_fruits[2] == "grapes")
        console.log("you rally like grapes");
    //ex no 30
    var user = ["username1", "username2", "username3", "username4", "Admin"];
    for (var i = 0; i < 5; i++) {
        if (user[i] == "Admin")
            console.log(" Hello admin, would you like to see a status report?");
        else
            console.log("Hello", user[i], "thank you for logging in again.");
    }
    // ex 31
    console.log(user);
    if (user.length == 0)
        console.log("we need to find some userr");
    user.length = 0;
    console.log(user); //empty the array
    console.log("we need to find a user");
    //ex 32
    var current_user = ["ahmed1", "fiaz3", "ali4", "umer4", "zain8"];
    var new_user = ["ben10", "erec9", "ali4", "zain8", "faraz3"];
    for (var j = 0; j < 5; j++) {
        for (var k = 0; k < 5; k++) {
            if (current_user[j] == new_user[k])
                console.log("this user name is already taken available");
            else
                console.log("this user name is available");
        }
    }
    //ex 33
    var number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var z = 0; z < 9; z++) {
        number3[z];
        if (number3[z] == 1)
            console.log(number3[z], "st");
        else if (number3[z] == 2)
            console.log(number3[z], "nd");
        else if (number3[z] == 3)
            console.log(number3[z], "rd");
        else
            console.log(number3[z], "th");
    }
    //ex 34
    var pizza = ["peppeorni", "chesse", "pineapple"];
    for (var a = 0; a < 3; a++) {
        if (pizza[a] == "peppeorni")
            console.log(pizza[0], "\n i like pepporni");
        else if (pizza[a] == "pineapple")
            console.log(pizza[2], " \n i like pineapple");
        else
            console.log(pizza[1], " \ni like cheese");
    }
    //ex 35
    var animal = ["cow", "goat", "sheep"];
    for (var b = 0; b < 3; b++) {
        if (animal[b] == "cow")
            console.log(animal[0], "\n it give ua milk");
        else if (animal[b] == "goat")
            console.log(animal[1], "\n goat meat is very helpful for human health");
        else
            console.log(animal[2], " \nit is herbivores");
    }
    console.log("these all are mammal and they are favourite for qurbani");
    //ex 36
    function make_shirt(size, message) {
        console.log("You  ordered a ".concat(size, " shirt with the word ").concat(message, " printed on it."));
    }
    make_shirt("medium", "badass");
    //ex 37
    function made_shirt(size, message) {
        console.log("You  ordered a ".concat(size, " shirt with the quote \"").concat(message, "\" printed on it."));
    }
    made_shirt("large", "i love typescript ");
    made_shirt("Medium", "i love typescript ");
    made_shirt("Small", "i love typescript ");
    //ex 38
    function describe_city(city, country) {
        console.log("the city ".concat(city, " is in ").concat(country));
    }
    describe_city("delhi", "india");
    describe_city("london", "england");
    describe_city("rawalpindi", "pakistan");
    //ex 39
    function city_country(city, country) {
        console.log("\"".concat(city, ",").concat(country, "\""));
    }
    city_country("lahore", "pakistan");
    city_country("paris", "euorpe");
    city_country("bombay", "india");
    //ex 40
    function make_album(artist, title, tracks) {
        var album = {
            artist: artist,
            title: title,
            tracks: tracks
        };
        return album;
    }
    console.log(make_album("salena gomes", "taki taki"));
    console.log(make_album("bilal saeed", "12 saal", 16));
    console.log(make_album("nfak", "Allah hoo"));
    console.log(make_album("sidhu mosewala", "level", 12));
    //ex 41
    var magician = ["criss angel", "david copperfeild", "david blaine"];
    function show_magician(magician) {
        console.log(magician);
    }
    show_magician(magician);
    //ex 42
    function showMagicians(magicians) {
        console.log(magicians.join('\n'));
    }
    function makeGreat(magicians) {
        for (var i = 0; i < magicians.length; i++) {
            magicians[i] = "the Great ".concat(magicians[i]);
        }
    }
    var magicianNames = ["criss angel", "david copperfield", "david blaine"];
    makeGreat(magicianNames);
    showMagicians(magicianNames);
    //ex 43
    function original_magician(magician) {
        console.log("original magician:\n", magician);
    }
    original_magician(magician);
    function great_magician(magician) {
        console.log("great magician:\n", magician);
    }
    great_magician(magician);
    //ex 44
    function make_sandwich() {
        var ingredeint = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ingredeint[_i] = arguments[_i];
        }
        console.log(" you sandwich with ".concat(ingredeint.join(','), " is ordered "));
    }
    make_sandwich("ketcup", "meat", "potato");
    make_sandwich("ketcup", "myyonese", "onion");
    make_sandwich("onion", "meat", "totato");
}
