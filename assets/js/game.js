var ship = document.getElementById("ship");

function game() {
    window.addEventListener("mousemove", function(e) {
        ship.style.display = "block";
        var x = e.clientX;
        var y = e.clientY;
        ship.style.top = (y - (ship.offsetHeight / 2)) + "px";
        ship.style.left = (x - (ship.offsetWidth / 2)) + "px";
        document.body.style.cursor = 'none';
    })
    window.addEventListener("mousedown", function(e) {
        // clone div called bullet
        var bullet = document.getElementById("bullet").cloneNode(true);
        bullet.style.display = "block";
        document.body.appendChild(bullet);
        // set position of bullet
        var x = e.clientX;
        var y = e.clientY;
        bullet.style.top = (y - (bullet.offsetHeight / 2)) + "px";
        bullet.style.left = (x - (bullet.offsetWidth / 2)) + "px";
        // set animation for bullet
        bullet.animate([{
            transform: "translateY(0px)"
        }, {
            transform: "translateY(-1000px)"
        }], {
            duration: 1000,
            iterations: 1
        })
        // remove bullet after animation
        setTimeout(function() {
            bullet.remove();
        }, 1000)
    })
    function spawnAstroid() {
        var astroid = document.getElementById("astroid").cloneNode(true);
        astroid.style.display = "block";
        document.body.appendChild(astroid);
        // set position of astroid
        var x = '20px';
        var y = Math.floor(Math.random() * (window.innerHeight / 2));
        astroid.style.top = (y - (astroid.offsetHeight / 2)) + "px";
        astroid.style.left = (x - (astroid.offsetWidth / 2)) + "px";
        // set animation for astroid
        astroid.animate([{
            transform: "translateX(-" + astroid.offsetWidth + "px)"
        }, {
            transform: "translateX(" + window.innerWidth + "px)"
        }], {
            duration: 3000,
            iterations: 1
        })
        // remove astroid after animation
        setTimeout(function() {
            astroid.remove();
        }, 3000)
        // check if astroid is hit by bullet
        setInterval(function() {
            var bullets = document.getElementsByClassName("bullet");
            for (var i = 0; i < bullets.length; i++) {
                var bullet = bullets[i];
                if (bullet.getBoundingClientRect().right >= astroid.getBoundingClientRect().left && bullet.getBoundingClientRect().left <= astroid.getBoundingClientRect().right && bullet.getBoundingClientRect().top <= astroid.getBoundingClientRect().bottom && bullet.getBoundingClientRect().bottom >= astroid.getBoundingClientRect().top) {
                    astroid.remove();
                }
            }
        }, 1)
    }
    setInterval(spawnAstroid, 400);
}