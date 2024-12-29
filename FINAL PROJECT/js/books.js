const translations = {
    en: {
        "warning":"An article is only in Georgian",
        "article":"An Interesting Article: Vazha-Pshavela in Chiatura",
        "blackgold":"A book published on the occasion of the centennial of Chiatura, which reflects the development, history, industry, and culture of Chiatura.",
        "galaqtioni":"A poem by the King of Poets, Galaktion, about the city of black gold. An interesting fact is that Galaktion's wife, Mrs. Olya Okujava, was appointed a teacher in the city of Chiatura. So you will definitely see the steps of the great Galaktion at the railway station",
        "turashvili":"A book about the city of Chiatura by the legendary Georgian writer Dato Turashvili",
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
        "culture-header": "Culture",
        "culture-text": "The city has cultural institutions such as the Akaki Tsereteli Drama Theatre, a cinema-theatre, the Palace of Rituals, the House of the Artist, the Chiatura Regional Museum, and the Cultural Palace. The cultural education of students in Chiatura is supported by the 'Actors' School' at the Culture Center, the State Ensemble of Dance and Song 'Changi,' folk dance ensembles: 'Merchkhali,' 'Pesevi,' and 'Ensemble-XXI,' the Georgian Folk Song Ensemble 'Imereti,' the School of Pop Music 'Natvrishvalli,' and the Ballroom Dance Studios 'Dance Forum,' 'Gracia,' and 'Elegance.' Every year on September 29, the population celebrates the traditional folk festival 'Chiaturoba,' dedicated to the city of Chiatura."
    },
    ka: {
        "warning":"",
        "article":"საინტერესო სტატია: ვაჟა-ფშაველა ჭიათურაში",
        "blackgold":"ჭიათურის ასი წლისთავთან დაკავშირებით გამოცემული წიგნი, რომელიც ასახავს ჭიათურის განვითარებს ისტორიას, მრეწველობასა და კულტურას.",
        "galaqtioni":"პოეტთა მეფის გალაკტიონის ლექსი შავ ოქროს ქალაქზე. საინტერესოა ის ფაქტი რომ გალაკტიონის მეუღლე ქალბატონი ოლია ოკუჯავა სწორედ ქალაქ ჭიათურაში განამწესეს პედაგოგად. ასე რომ რკინიგზის სადგურზე აუცილებლად ნახავთ დიდი გალაკტიონის ნაფეხურებს",
        "turashvili":"ლეგენდარული ქართველი მწერლის დათო ტურაშვილის წიგნი ქალაქ ჭიათურაზე",
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
        "culture-header": "კულტურა",
        "culture-text": "ქალაქში არის კულტურის დაწესებულებები: აკაკი წერეთლის სახელობის ჭიათურის დრამატული თეატრი, კინო-თეატრი, რიტუალების სასახლე, მხატვრის სახლი, ჭიათურის მხარეთმცოდნეობის მუზეუმი და კულტურის სასახლე. ჭიათურაში მოსწავლეთა კულტურულ აღზრდას ემსახურება კულტურის ცენტრთან არსებული „მსახიობთა სკოლა“, ცეკვისა და სიმღერის სახელმწიფო ანსამბლი „ჩანგი“, ხალხური ცეკვის ანსამბლები: „მერცხალი“, „ფესვები“ და „ანსამბლი-XXI“, ქართული ხალხური სიმღერის ანსამბლი „იმერეთი“, საესტრადო სიმღერის შემსწავლელი სკოლა „ნატვრისთვალი“, სამეჯლისო-სპოტრული ცეკვების სტუდიები: „დანს-ფორუმი“, „გრაცია“ და „ელეგანტი“. ყოველწლიურად 29 სექტემბერს მოსახლეობა აღნიშნავს ტრადიციულ folk დღესასწაულს „ჭიათურობას“, რომელიც ეძღვნება ქალაქ ჭიათურის დღეს."
    }
};



function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}
