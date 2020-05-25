
(function(window) {
    var bye = new Object();
    var speakbye = "Good Bye";
    bye.speak = function speak(name) {
        console.log(speakbye + " " + name);
    };
    window.bye = bye;
})(window);