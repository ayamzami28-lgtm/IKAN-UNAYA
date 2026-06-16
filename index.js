function toggleMenu() {
    document
        .getElementById("menu")
        .classList.toggle("show");
}

function toggleDropdown(event) {

    event.stopPropagation();

    document
        .getElementById("dropdownMenu")
        .classList.toggle("show");
}

/* Menutup dropdown jika klik di luar */
window.addEventListener("click", function(e) {

    const dropdown =
        document.getElementById("dropdownMenu");

    const button =
        document.querySelector(".dropbtn");

    if (
        !dropdown.contains(e.target) &&
        !button.contains(e.target)
    ) {
        dropdown.classList.remove("show");
    }

});

function maintenancePopup() {
    alert("Maaf, Informasi belum tersedia. Silakan coba lain waktu.");
}