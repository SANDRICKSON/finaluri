const translations = {
    en: {
        "main": "Home",
        "history": "History",
        "culture": "Culture",
        "tourism": "Tourism",
        "gallery": "Gallery",
        "timetable": "Timetable",
        "news": "News",
        "project": "About the Project",
        "videos": "Videos",
        "contact": "Contact",
        "books": "Books",
        "log-in": "Log In",
        "register": "Register",
        "gallery-title": "Gallery",
        "gallery-text": "See the beautiful views and important places of the city.",
        "upload-btn": "Upload",
        "urlsoon": "A link upload will be added soon"
    },
    ka: {
        "main": "მთავარი",
        "history": "ისტორია",
        "culture": "კულტურა",
        "tourism": "ტურიზმი",
        "gallery": "გალერეა",
        "timetable": "განრიგი",
        "news": "სიახლეები",
        "project": "პროექტის შესახებ",
        "videos": "ვიდეოები",
        "contact": "კონტაქტი",
        "books": "წიგნები",
        "log-in": "შესვლა",
        "register": "რეგისტრაცია",
        "gallery-title": "გალერეა",
        "gallery-text": "იხილეთ ქალაქის ულამაზესი ხედები და მნიშვნელოვანი ადგილები.",
        "upload-btn": "ატვირთვა",
        "urlsoon": "მალე ბმულით ატვირთვაც დაემატება"
    }
};


function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
    
    document.getElementById("uploadButton").textContent = translations[lang]["upload-btn"];
    document.getElementById("uploadButton").setAttribute("data-alert", translations[lang]["upload-alert"]);
}


document.getElementById("uploadButton").addEventListener("click", function () {
    const fileInput = document.getElementById("imageUpload");
    const galleryContainer = document.getElementById("galleryContainer");

    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "Uploaded Image";
            img.classList.add("gallery-img");

            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.appendChild(img);

            galleryContainer.appendChild(galleryItem);
        };

        reader.readAsDataURL(file);
    } else {
        alert(document.getElementById("uploadButton").getAttribute("data-alert"));
    }
});
