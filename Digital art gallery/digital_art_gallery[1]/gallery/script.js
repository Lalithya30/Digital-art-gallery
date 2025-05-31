function toggleForm() {
    const formSection = document.getElementById("uploadForm");
    formSection.classList.toggle("hidden");
}

function handleUpload(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const description = document.getElementById("description").value;
    const imageInput = document.getElementById("image");

    if (!imageInput.files || !imageInput.files[0]) {
        alert("Please select an image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const gallery = document.getElementById("gallery");
        const artwork = document.createElement("div");
        artwork.innerHTML = `
            <img src="${e.target.result}" alt="${title}">
            <h3>${title}</h3>
            <p><strong>By:</strong> ${artist}</p>
            <p>${description}</p>
        `;
        gallery.appendChild(artwork);
        document.querySelector("form").reset();
        toggleForm();
    };
    reader.readAsDataURL(imageInput.files[0]);
}
