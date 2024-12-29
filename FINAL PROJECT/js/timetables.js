const translations = {
    en: {
        "bus-schedule":"Bus schedule: Chilovani-Didi Katskhi",
        "price":"price 1 Lari",
        "chilovani":"Chilovani",
        "katskhi":"Didi Katskhi",
        "bus-timetable":"Bus schedule: Chavchavadze-Memoriali",
        "price1":"Price: 50 Tetri",
        "memoriali":"Memoriali",
        "chavchavadze":"Chavchavadze.str",
        "cablenaguti":"Cable car directions: Naguti-city, Lezhubani-city, Sanatorium-city, Mukhadze-city Schedule: The car goes down every five minutes from 08:00 to 22:00 Price: 50 tetri",
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
        "bus-schedule":"ავტობუსის განრიგი: ჭილოვანი - დიდი კაცხი",
        "price":"ფასი: 1 ლარი",
        "chilovani":"ჭილოვანი",
        "katskhi":"დიდი კაცხი",
        "bus-timetable":"ავტობუსის განრიგი: მემორიალი - ჭავჭავაძის ქუჩა",
        "price1":"ფასი: 50 თეთღი",
        "memoriali":"მემორიალი",
        "chavchavadze":"ჭავჭავაძის ქუჩა",
        "cablenaguti":"საბაგიროს მიმართულებები: ნაგუთი-ქალაქი, ლეჟუბანი-ქალაქი, სანატორიუმი-ქალაქი, მუხაძე-ქალაქი. განრიგი:ვაგონი ეშვება ყოველ ხუთ წუთში დილის 08:00-დან საღამოს 22:00-მდე. ფასი: 50 თეთრი",
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
