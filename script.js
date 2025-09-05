
    // Dark Mode
    document.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".toggle-btn").textContent = "☀️ " + translations[localStorage.getItem("lang") || "en"].lightMode;
      }
      const savedLang = localStorage.getItem("lang") || "en";
      document.getElementById("languageSwitcher").value = savedLang;
      changeLanguage(savedLang);
      
      // Back to top button
      const backToTopButton = document.querySelector('.back-to-top');
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      });
      
      backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      const btn = document.querySelector(".toggle-btn");
      const lang = localStorage.getItem("lang") || "en";
      if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ " + translations[lang].lightMode;
        localStorage.setItem("theme", "dark");
      } else {
        btn.innerHTML = "🌙 " + translations[lang].darkMode;
        localStorage.setItem("theme", "light");
      }
    }

    // Translation
    const translations = {
      en: {
        title: "📘 Math Info L1 Courses",
        subtitle: "Welcome dear students in Mathematics and Computer Science",
        home: "Home",
        about: "About",
        modulesTable: "📑 Table of Modules",
        modulesS1: "MODULES S1",
        modulesS2: "MODULES S2",
        coefficients: "COEFFICIENTS",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        algo1: "ALGORITHM1",
        algo2: "ALGORITHM2",
        analyse1: "ANALYSIS1",
        analyse2: "ANALYSIS2",
        algebre1: "ALGEBRA1",
        algebre2: "ALGEBRA2",
        strm1: "STRM1",
        strm2: "STRM2",
        physique1: "PHYSICS1",
        physique2: "PHYSICS2",
        le: "LE",
        opm: "OPM",
        bureautique: "OFFICE AUTOMATION",
        probaStat: "PROBABILITY/STATISTICS",
        tce: "TCE",
        histoireMath: "HISTORY OF MATH",
        tic: "ICT",
        algorithme: "ALGORITHM",
        algoCourse: "ALGORITHM1&2 COURSE BY PROF BESSAA - USTHB PDF&PPSX format",
        serieTD: "TD SERIES",
        solution: "SOLUTION",
        algoBook: "EXERCISE BOOK BY PROF BESSAA - USTHB PDF format",
        tpProgramming1: "TP - PROGRAMMING BASICS 1",
        tpProgramming2: "TP - PROGRAMMING BASICS 2",
        installDevCpp: "HOW TO INSTALL DEV-C++",
        examS2WithSolution: "S2 EXAM PAPERS WITH SOLUTIONS (usthb)",
        algoNote: "All resources are provided by Prof. Bessaa - USTHB for educational purposes.",
        analyse: "ANALYSIS",
        chapter1: "CHAPTER 1:",
        realNumbers: "Real numbers",
        analyseNote: "Comprehensive collection of mathematical analysis resources including chapters, exercises, and solutions."
        // More translations would be added here for all content
        ,
        title: "About Me", 
        home: "Home", 
        about: "About",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        studentTitle: "USTHB Student",
        bioText: "I am an <span class='highlight'>Algerian student</span> at <span class='highlight'>USTHB University</span>. My goal is to support <span class='highlight'>L1 Mathematics</span> and <span class='highlight'>Computer Science</span> students by creating helpful resources.",
        connectTitle: "Connect with Me"
      },
      fr: {
        title: "📘 Cours Math Info L1",
        subtitle: "Bienvenue chers étudiants en Mathématiques et Informatique",
        home: "Accueil",
        about: "À propos",
        modulesTable: "📑 Tableau des Modules",
        modulesS1: "MODULES S1",
        modulesS2: "MODULES S2",
        coefficients: "COEFFICIENTS",
        darkMode: "Mode Sombre",
        lightMode: "Mode Clair",
        algo1: "ALGORITHME1",
        algo2: "ALGORITHME2",
        analyse1: "ANALYSE1",
        analyse2: "ANALYSE2",
        algebre1: "ALGÈBRE1",
        algebre2: "ALGÈBRE2",
        strm1: "STRM1",
        strm2: "STRM2",
        physique1: "PHYSIQUE1",
        physique2: "PHYSIQUE2",
        le: "LE",
        opm: "OPM",
        bureautique: "BUREAUTIQUE",
        probaStat: "PROBA/STAT",
        tce: "TCE",
        histoireMath: "HISTOIRE DES MATHS",
        tic: "TIC",
        algorithme: "ALGORITHME",
        algoCourse: "COURS ALGORITHME1&2 PROF BESSAA -USTHB mode PDF&PPSX",
        serieTD: "SÉRIE TD",
        solution: "SOLUTION",
        algoBook: "LIVRE D'EXERCICES DU PROF BESSAA -USTHB mode PDF",
        tpProgramming1: "TP - BASES DE PROGRAMMATION 1",
        tpProgramming2: "TP - BASES DE PROGRAMMATION 2",
        installDevCpp: "COMMENT INSTALLER DEV-C++",
        examS2WithSolution: "SUJETS S2 AVEC SOLUTION (usthb)",
        algoNote: "Toutes les ressources sont fournies par le professeur Bessaa - USTHB à des fins éducatives.",
        analyse: "ANALYSE",
        chapter1: "CHAPITRE 1:",
        realNumbers: "Nombres réels",
        analyseNote: "Collection complète de ressources d'analyse mathématique incluant des chapitres, exercices et solutions."
        // More French translations
        ,
        title: "À Propos", 
        home: "Accueil", 
        about: "À propos",
        darkMode: "Mode Sombre",
        lightMode: "Mode Clair",
        studentTitle: "Étudiant USTHB",
        bioText: "Je suis un <span class='highlight'>étudiant algérien</span> à l'<span class='highlight'>Universitée USTHB</span>. Mon objectif est de soutenir les étudiants de <span class='highlight'>L1 Mathématiques</span> et <span class='highlight'>Informatique</span> en créant des ressources utiles.",
        connectTitle: "Connectez-vous avec Moi"
      },
      ar: {
        title: "📘 دروس الرياضيات والإعلام الآلي السنة الأولى",
        subtitle: "مرحبا بكم أيها الطلبة في الرياضيات والإعلام الآلي",
        home: "الرئيسية",
        about: "حول",
        modulesTable: "📑 جدول الوحدات",
        modulesS1: "الوحدات الفصل الأول",
        modulesS2: "الوحدات الفصل الثاني",
        coefficients: "المعاملات",
        darkMode: "الوضع الليلي",
        lightMode: "الوضع النهاري",
        algo1: "الخوارزميات 1",
        algo2: "الخوارزميات 2",
        analyse1: "التحليل 1",
        analyse2: "التحليل 2",
        algebre1: "الجبر 1",
        algebre2: "الجبر 2",
        strm1: "STRM1",
        strm2: "STRM2",
        physique1: "الفيزياء 1",
        physique2: "الفيزياء 2",
        le: "لغة أجنبية",
        opm: "OPM",
        bureautique: "المعلوماتية",
        probaStat: "الإحتمالات والإحصاء",
        tce: "TCE",
        histoireMath: "تاريخ الرياضيات",
        tic: "تكنولوجيا الإعلام والاتصال",
        algorithme: "الخوارزميات",
        algoCourse: "مقرر الخوارزميات 1 و2 للأستاذ بسة - USTHB بصيغة PDF وPPSX",
        serieTD: "سلسلة تمارين",
        solution: "الحل",
        algoBook: "كتاب تمارين للأستاذ بسة - USTHB بصيغة PDF",
        tpProgramming1: "عمل تطبيقي - أساسيات البرمجة 1",
        tpProgramming2: "عمل تطبيقي - أساسيات البرمجة 2",
        installDevCpp: "كيفية تثبيت DEV-C++",
        examS2WithSolution: "مواضيع امتحانات الفصل الثاني مع الحلول (usthb)",
        algoNote: "جميع الموارد مقدمة من الأستاذ بسة - USTHB لأغراض تعليمية.",
        analyse: "التحليل",
        chapter1: "الفصل 1:",
        realNumbers: "الأعداد الحقيقية",
        analyseNote: "مجموعة شاملة من موارد التحليل الرياضي تشمل فصولًا وتمارين وحلولاً."
        // More Arabic translations
        ,
        title: "حول", 
        home: "الرئيسية", 
        about: "حول",
        darkMode: "الوضع الليلي",
        lightMode: "الوضع النهاري",
        studentTitle: "طالب USTHB",
        bioText: "أنا <span class='highlight'>طالب جزائري</span> في <span class='highlight'>جامعة USTHB</span>. هدفي هو دعم طلاب <span class='highlight'>السنة الأولى رياضيات</span> و<span class='highlight'>إعلام آلي</span> من خلال إنشاء موارد مفيدة.",
        connectTitle: "تواصل معي"
      }
    };

    
    
    function changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      
      // Update dark mode button text if needed
      const darkModeBtn = document.querySelector(".toggle-btn");
      if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️ " + translations[lang].lightMode;
      } else {
        darkModeBtn.innerHTML = "🌙 " + translations[lang].darkMode;
      }
      
      document.body.dir = (lang === "ar") ? "rtl" : "ltr";
    }
  





























// Load settings when page opens
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedLang = localStorage.getItem("lang") || "en";

  // Apply theme
  document.body.classList.toggle("dark", savedTheme === "dark");

  // Apply language
  document.getElementById("languageSwitcher").value = savedLang;
  updateLanguage(savedLang);
};

// Save theme when toggled
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Save language when changed
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  updateLanguage(lang);
});

// Function to update texts
function updateLanguage(lang) {
  document.querySelectorAll("[data-lang-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-lang-${lang}`);
  });
}
