function educationClicked() {
    var educationContainer = document.getElementById("educationContainer");
    var coordinates = educationContainer.getBoundingClientRect();
    var targetPosition = coordinates.y - 5;
    scrollTo(targetPosition);
}

function experienceClicked() {
    var experienceContainer = document.getElementById("experienceContainer");
    var coordinates = experienceContainer.getBoundingClientRect();
    var targetPosition = coordinates.y - 5;
    scrollTo(targetPosition);
}

function skillsClicked() {
    var skillsContainer = document.getElementById("skillsContainer");
    var coordinates = skillsContainer.getBoundingClientRect();
    var targetPosition = coordinates.y - 5;
    scrollTo(targetPosition);
}

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSectionID);
    });

}

function scrollTo(targetPosition) {
    var currentPosition = 0;
    var scrollInterval = setInterval(function () {
        if (currentPosition >= targetPosition) {
            clearInterval();
            return;
        }
        currentPosition = currentPosition + 50;
        window.scrollBy(0, 50);
    }, 10)
}


//Handle scroll event on window
//Check if skill container is visible or not
//Start animation on every skill -> Increase skill width from 0 to skill level
// Store skill levels for each skills->HTML with the help of data attribute
//Ensure initial width of colred skills div is 0 width value.

