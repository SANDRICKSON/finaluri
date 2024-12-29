const translations = {
    ka: {
        main: "მთავარი",
        history: "ისტორია",
        culture: "კულტურა",
        tourism: "ტურიზმი",
        gallery: "გალერეა",
        timetable: "განრიგი",
        news: "სიახლეები",
        project: "პროექტის შესახებ",
        videos: "ვიდეოები",
        contact: "კონტაქტი",
        books: "წიგნები",
        "log-in": "შესვლა",
        register: "რეგისტრაცია",
        name: "სახელი",
        mail: "ელფოსტა",
        message: "მესიჯი",
        send: "გაგზავნა"
    },
    en: {
        main: "Home",
        history: "History",
        culture: "Culture",
        tourism: "Tourism",
        gallery: "Gallery",
        timetable: "Timetable",
        news: "News",
        project: "About Project",
        videos: "Videos",
        contact: "Contact",
        books: "Books",
        "log-in": "Log In",
        register: "Register",
        name: "Name",
        mail: "Email",
        message: "Message",
        send: "Send"
    }
};



function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
