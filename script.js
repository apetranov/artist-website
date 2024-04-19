document.addEventListener("DOMContentLoaded", function() {
    function toggleVisibility() {
        var moon = document.getElementById("moon");
        var sun = document.getElementById("sun");
        

        // Add event listener to moon
        moon.addEventListener("click", function() {
            moon.style.display = "none";
            sun.style.display = "block";
            // document.body.style.backgroundColor = "black";
            // document.body.style.color = "white";
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        });

        // Add event listener to sun
        sun.addEventListener("click", function() {
            sun.style.display = "none";
            moon.style.display = "block";
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        });
    }

    toggleVisibility();
});
