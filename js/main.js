var definition = {
    "Aries": "Today you might find yourself meeting with a group of people in your community who are particularly concerned about the arts, or about the appearance of the neighborhood. You might also attend a social event of some kind, perhaps with some of the same people. You should be feeling especially congenial towards others, and could well make some new friends in the course of these activities. Have some fun, and enjoy your day! <a href=\"https://horoscopes-and-astrology.com/Aries\" alt=\"Aries\" target=\"_blank\"> <i>Read more...</i></a>",
    "Taurus": "Family members might host a social event at your house today, perhaps inviting some people you particularly like. You might not say much - you're more likely to want to listen than to talk today - but you'll certainly enjoy the company of others and feel very warm and congenial towards them. Someone could be especially solicitous of you - probably someone whom you've helped at one time or another. <a href=\"https://horoscopes-and-astrology.com/Taurus\" alt=\"Taurus\" target=\"_blank\"> <i>Read more...</i></a>",
    "Gemini": "A talent for a new field that you might never have even tried before might come to light. This could involve modern technology in some way, or it might concern writing, drawing, or both! Communication with others should be warm, congenial, open and honest, so you can expect to gain a lot of pleasure from relationships of all kinds. Expect at least one of your conversations to turn to the fine arts, or to metaphysics. <a href=\"https://horoscopes-and-astrology.com/Gemini\" alt=\"Gemini\" target=\"_blank\"> <i>Read more...</i></a>",
    "Cancer": "Churches, meditation centers, and other places of spiritual retreat could be especially appealing today, as your mind is likely to want to turn within. You could draw artistic inspiration from the insights that come to you through meditation or reflection. Some vivid and revealing dreams could also come to you tonight, as your unconscious is very active. Write down whatever you feel may be significant so that you can analyze it later. <a href=\"https://horoscopes-and-astrology.com/Cancer\" alt=\"Cancer\" target=\"_blank\"> <i>Read more...</i></a>",
    "Leo": "You could strike up an unusual friendship today. Maybe you will find yourself talking to a stranger during the day. You could find that you have much in common. Perhaps this person comes from a different cultural or ethnic background. In spite of some obvious differences, the two of you might discover a special connection. Don't be afraid to take this friendship further and get to know this person better! <a href=\"https://horoscopes-and-astrology.com/Leo\" alt=\"Leo\" target=\"_blank\"> <i>Read more...</i></a>",
    "Virgo": "This is the sort of day when details will be important. If you are preparing a proposal or a report, you'll need to be extra careful with the numbers you are using. You should double-check your typing to make sure that you have entered the right data. It could be easy to overlook something simple, like a dollar amount that is too high or a quotation that is inaccurate. <a href=\"https://horoscopes-and-astrology.com/Virgo\" alt=\"Virgo\" target=\"_blank\"> <i>Read more...</i></a>",
    "Libra": "A number of exciting people could come to attend a party or group meeting at your home. You're in just the right space to be a great hostess, and you're likely to meet some interesting new people. Much of the conversation could focus on computers and other forms of modern technology, or perhaps on astrology or other occult subjects. You should have a good time and learn a lot as well. Go to it! <a href=\"https://horoscopes-and-astrology.com/Libra\" alt=\"Libra\" target=\"_blank\"> <i>Read more...</i></a>",
    "Scorpio": "Today you might spend a lot of time on the phone with friends, some of them senior to yourself. Your conversations will be loving, informative, and somewhat revealing. As a result of these conversations you might decide to attend some group events in your community. A letter, check, or delivery - which has been delayed for a few days - might finally arrive. This is going to release a lot of tension, as you may have feared it gone astray. <a href=\"https://horoscopes-and-astrology.com/Scorpio\" alt=\"Scorpio\" target=\"_blank\"> <i>Read more...</i></a>",
    "Sagittarius": "Intellect combines with intuition today to produce a particularly enlightening day on all subjects that interest you, whether they be intellectual, practical, or metaphysical. Group activities dedicated to these subjects could prove extremely rewarding, especially if you go with a friend. You could meet some new people whom you are almost certain you recognize, perhaps from a past life, and you might want to explore this possibility. <a href=\"https://horoscopes-and-astrology.com/Sagittarius\" alt=\"Sagittatius\" target=\"_blank\"> <i>Read more...</i></a>",
    "Capricorn": "Today you might decide to put yourself in charge of something. If you are a member of a church group, perhaps you will decide to become the head of a charity drive. You could collect donations from people and organize other volunteers. You'll enjoy being in a command of a worthy project. Try to find a positive way of using your leadership talents. You have many gifts that you can share with others. <a href=\"https://horoscopes-and-astrology.com/Capricorn\" alt=\"Capricon\" target=\"_blank\"> <i>Read more...</i></a>",
    "Aquarius": "Social events are likely to put you in touch with some attractive and exciting people. Stimulating discussions could take place, which set your mind whirling even more than it usually does. Some interesting books could be recommended. You'll want to take the names and phone numbers of some of those whom you meet today, so make sure you have a notebook with you when you go out. Have a great day! <a href=\"https://horoscopes-and-astrology.com/Aquarius\" alt=\"Aquarius\" target=\"_blank\"> <i>Read more...</i></a>",
    "Pisces": "Right now you could be thinking about spiritual matters. Maybe you will be inspired by something that you hear at a church service. Or you could be doing some reading that provokes some deep thought. You might even be triggered into analyzing a relationship with a family member. This is a good day for you to sort some things out and do your best to heal a challenging personal situation. <a href=\"https://horoscopes-and-astrology.com/Pisces\" alt=\"Pisces\" target=\"_blank\"> <i>Read more...</i></a>",
    "Error": "",
    "Birthday": "Happy Birthday! Today you can expect good luck and fortune. Try to connect with others and appreciate your anniversary of your birth on Earth!"
};

function signs() {
    var name = document.getElementById("name").value;
    var day = document.getElementById("birthday").value;
    var month = document.getElementById("birthmonth").value;
    var symbol = day + month;
    var dateObj = new Date();
    var birthmonth = dateObj.getUTCMonth() + 1; //months from 1-12
    var birthday = dateObj.getUTCDate();

    var h3 = document.querySelector('h3');
    var h4 = document.querySelector('h4');


    h3.innerHTML = "Your Birthday: " + month + "/" + day;
    if (month == 2 && day > 28 || ((month == 9 || month == 4 || month == 6 || month == 11) && day == 31)) {
        h4.innerHTML = "Hello, unfortunately this is not a valid date of birth. Please try again."
        x = definition.Error;
        alert("Error: Incorrect Birthday");
        return false;
    } else if (month == 0 || day == 0 || name == '') {
        alert("Error: All fields must be filled out. Please try again.");
        h3.innerHTML = "";
        x = definition.Error;
        return false;
    } else if (month == birthmonth && day == birthday) {
        symbol = "Birthday";
        document.getElementById("symbol").src = "img/birthday.png";
        x = definition.Birthday;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        symbol = "Aquarius";
        document.getElementById("symbol").src = "img/aquarius.png";
        x = definition.Aquarius;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 2 && day > 28) {
        x = definition.Error;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 2 && day >= 19 || month == 3 && day <= 20) {
        symbol = "Pisces";
        document.getElementById("symbol").src = "img/pisces.png";
        x = definition.Pisces;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
        symbol = "Aries";
        document.getElementById("symbol").src = "img/aries.png";
        x = definition.Aries;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        symbol = "Taurus";
        document.getElementById("symbol").src = "img/taurus.png";
        x = definition.Taurus;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 5 && day >= 21 || month == 6 && day <= 21) {
        symbol = "Gemini";
        document.getElementById("symbol").src = "img/gemini.png";
        x = definition.Gemini;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 6 && day >= 22 || month == 7 && day <= 22) {
        symbol = "Cancer";
        document.getElementById("symbol").src = "img/cancer.png";
        x = definition.Cancer;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        symbol = "Leo";
        document.getElementById("symbol").src = "img/leo.png";
        x = definition.Leo;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        symbol = "Virgo";
        document.getElementById("symbol").src = "img/virgo.png";
        x = definition.Virgo;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        symbol = "Libra";
        document.getElementById("symbol").src = "img/libra.png";
        x = definition.Libra;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 10 && day >= 23 || month == 11 && day <= 21) {
        symbol = "Scorpio";
        document.getElementById("symbol").src = "img/scorpio.png";
        x = definition.Scorpio;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        symbol = "Sagittarius";
        document.getElementById("symbol").src = "img/sagittarius.png";
        x = definition.Sagittarius;
        document.getElementById("horoscope").innerHTML = x;
    } else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
        symbol = "Capricorn";
        document.getElementById("symbol").src = "img/capricorn.png";
        x = definition.Capricorn;
        document.getElementById("horoscope").innerHTML = x;
    }

    console.log(symbol);

    if (month == birthmonth && day == birthday) {
        h4.innerHTML = "Happy Birthday " + name + "!";
    } else {
        h4.innerHTML = "Hello " + name + ", your sign is " + symbol + ".";
    }
}
