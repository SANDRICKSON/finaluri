const translations = {
    en: {
        "title":"Main - Chiatura",
        "subscription":"Subscribe the news",
        "write":"Input here your mail and get news systematically",
        "mail":"Input here your email",
        "subscribe":"Subscribe",
        "like":"You may also like",
        "medea":"Chatbot Medea",
        "page":"Like Facebook page",
        "scan":"Scan or click to download",
        "testapp":"Explore Chiatura - an app is working in test mode",
        "app":"Download the same app",
        "click":"Click the image for talking with chatbot",
        "eka":"GuideBot Eka",
        "testmode":"Chatbot in test mode",
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
        "title":"მთავარი",
        "subscription":"გამოიწერეთ სიახლეები",
        "write":"ჩაწერეთ თქვენი მეილი და მიიღეთ უახლესი ინფორმაციები სისტემატიურად",
        "mail":"ჩაწერეთ მეილი",
        "subscribe":"გამოწერა",
        "like":"შეიძლება ასევე მოგეწონოთ",
        "medea":"ჩეთბოტი მედეა",
        "page":"მოიწონე Facebook გვერდი",
        "scan":"დაასკანერე ან დააკლიკე ჩამოსატვირთად",
        "testapp":"Explore Chiatura სატესტო რეჟიმში მომუშავე აპი",
        "app":"ჩამოტვირთეთ შესაბამისი აპლიკაცია",
        "click":"დააჭირეთ სურათს რათა ილაპარაკოთ",
        "eka":"გიდბოტი ეკა",
        "testmode":" სატესტო რეჟიმში მომუშავე ჩეთბოტი",
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
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
