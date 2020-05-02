function say(text) {
    responsiveVoice.speak(text, "UK English Male")
}

function listen() {
    var recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.onresult = function (event) {
        if (event.results.length > 0) {
            $("#text").text(event.results[0][0].transcript)
        }
    }
    recognition.onend = function (event) {
        postVoice($("#text").text());
    }
    recognition.start();
}

function postVoice(message) {
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/voice",
        data: {
            message: message
        },
        success: function(data) {
            $("text").text(data.message);
            say(data.message);
        }
    });
}