const languageData = {

    en: {
        title: "Matrimony Website",
        welcome_msg: "Welcome to our Matrimony Service",
        home_description: "Find your perfect life partner with our trusted matrimonial service.",
        gallery_title: "Our Successful Matches",
        gallery_subtitle: "Our Successful Clients"
    },

    hi: {
        title: "मैट्रिमोनी वेबसाइट",
        welcome_msg: "हमारी वैवाहिक सेवा में आपका स्वागत है",
        home_description: "हमारी विश्वसनीय वैवाहिक सेवा के साथ अपना जीवन साथी खोजें।",
        gallery_title: "हमारी सफल जोड़ियाँ",
        gallery_subtitle: "हमारे सफल ग्राहक"
    },

    mr: {
        title: "मॅट्रिमोनी वेबसाईट",
        welcome_msg: "आमच्या विवाहसेवेत आपले स्वागत आहे",
        home_description: "आमच्या विश्वासार्ह सेवेद्वारे तुमचा जीवनसाथी शोधा.",
        gallery_title: "आमच्या यशस्वी जोड्या",
        gallery_subtitle: "आमचे यशस्वी ग्राहक"
    }
};


function changeLanguage(){
    const lang = document.getElementById("languageSelect").value;

    const data = languageData[lang];

    for(let key in data){
        const el = document.getElementById(key);
        if(el){
            el.innerText = data[key];
        }
    }
}
