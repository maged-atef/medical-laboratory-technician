const up = document.getElementById("up");
window.addEventListener("scroll",()=>{
    up.classList.remove("d-none")
})
up.addEventListener("click",()=>{
    window.scrollTo({
        top:0, behavior:"smooth"
    })
})



document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById('language-toggle');
    const languageText = document.getElementById('language-text');

    languageToggle.addEventListener('change', () => {
        const language = languageToggle.checked ? 'en' : 'ar';
        localStorage.setItem('preferredLanguage', language);
        languageText.textContent = language === 'en' ? 'English' : 'Arabic';
        loadLanguage(language);
    });

    function loadLanguage(language) {
        const translation = translations[language];
        if (translation) {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translation[key]) {
                    element.textContent = translation[key];
                }
            });
        }
    }

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ar';
    languageToggle.checked = (preferredLanguage === 'en');
    languageText.textContent = preferredLanguage === 'en' ? 'English' : 'Arabic';
    loadLanguage(preferredLanguage);
});

const lang = document.getElementById("language-toggle")
lang.addEventListener("click",(e)=>{
    console.log(e.target)
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html") {
        // Go to Arabic version
        window.location.href = "ar.html";
    } else {
        // Go to English version
        window.location.href = "index.html";
    }
})