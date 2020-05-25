(function(window) {
    var hello = new Object();
    var speak = "Hello";
    hello.speak = function(name) {
        console.log(speak + " " + name);
    };
    window.hello = hello;
})(window);