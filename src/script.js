
let selectedHouse = 0;

// This function runs when Apply Now is clicked
function applyHouse(houseNumber) {

    let count = document.getElementById("count" + houseNumber);

    // Check if applications are available
    if (Number(count.textContent) <= 0) {
        alert("Sorry! No applications are left.");
        return;
    }

    // Remember which house was selected
    selectedHouse = houseNumber;

    // Show the selected house
    let houseNames = [
        "Green Valley Apartment",
        "Sunrise Residency",
        "City Comfort Homes"
    ];

    document.getElementById("selectedHouse").textContent =
        "You selected: " + houseNames[houseNumber - 1];

    // Display the application form
    document.getElementById("applicationForm").style.display = "block";

    // Clear old messages
    document.getElementById("message").textContent = "";

    // Scroll down to the form
    document.getElementById("applicationForm").scrollIntoView();
}

// This function closes the form
function closeForm() {
    document.getElementById("applicationForm").style.display = "none";
}

// Run this when the form is submitted
document.getElementById("myForm").addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    let count = document.getElementById("count" + selectedHouse);

    // Reduce the application count
    count.textContent = Number(count.textContent) - 1;

    // Display a success message
    document.getElementById("message").textContent =
        "Demo application submitted successfully!";

    // Clear the form fields
    document.getElementById("myForm").reset();
});
