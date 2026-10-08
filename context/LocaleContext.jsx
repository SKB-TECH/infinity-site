"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LocaleContext = createContext(null);
const STORAGE_KEY = "infinity-locale";

const messages = {
  en: {
    common: {
      home: "Home",
      about: "About",
      services: "Services",
      leadership: "Leadership",
      contact: "Contact",
      faq: "FAQ",
      requestDemo: "Request a demo",
      contactUs: "Contact us",
      discoverServices: "Discover our services",
      talkToTeam: "Talk to our team",
      startDiscussion: "Start a business discussion",
      followUs: "Follow us:",
      getInTouch: "Get In Touch",
      requestUpdates: "Request updates",
      businessEmail: "Business email",
      contactOurTeam: "Contact our team",
      company: "Company",
      businessFocus: "Business Focus",
      terms: "Terms & Condition",
      privacy: "Privacy Policy",
      allRights: "All Copyright",
      by: "by",
      readMore: "Read More",
      learnMore: "Learn more",
      scroll: "Scroll",
      sendInquiry: "Send inquiry",
      language: "Language",
      english: "EN",
      french: "FR",
    },
    headerTop: {
      followUs: "Follow us:",
    },
    siteMenu: {
      description:
        "Infinity Innovation designs and delivers digital solutions that help organizations modernize workflows, scale operations, and accelerate business performance.",
      getInTouch: "Get In Touch",
      requestUpdates: "Request updates",
      businessEmail: "Business email",
      sentSuccess: "Message sent successfully!",
      sentError: "Oops, message not sent!",
      addressLine1: "789 Inner Lane, Holy park,",
      addressLine2: "Kinshasa, DRC",
    },
    footer: {
      about:
        "Infinity Innovation is a trusted technology company delivering software, SaaS, and digital transformation solutions for organizations.",
      company: "Company",
      focus: "Business Focus",
      focusItems: [
        "Custom software delivery",
        "Enterprise digitalization",
        "AI-powered productivity tools",
        "Long-term product support",
      ],
      contact: "Contact",
      contactTeam: "Contact our team",
      terms: "Terms & Condition",
      privacy: "Privacy Policy",
      allRights: "All Copyright",
      by: "by",
    },
    cta: {
      title: "Ready to launch your next digital initiative?",
      button: "Start a business discussion",
    },
    home: {
      about: {
        subtitle: "About Infinity Innovation",
        title:
          "We build trusted digital solutions for organizations that want to scale",
        text:
          "Infinity Innovation is a technology company focused on software products, digital transformation, and operational innovation. Our mission is to help businesses and institutions modernize critical processes with reliable, secure, and user-centered platforms.",
        enterpriseFocus: "Enterprise Focus",
        enterpriseSupport: "Strategy, Delivery, Support",
        projectsDelivered: "Projects Delivered",
      },
      services: {
        subtitle: "Core Services",
        title: "End-to-end digital services for business transformation",
      },
      services2: {
        subtitle: "Solutions & Products",
        title: "Technology solutions built for modern organizations",
      },
      offering: {
        subtitle: "Industries served",
        title: "Sector-specific solutions for complex business environments",
      },
      process: {
        subtitle: "Why choose us",
        title: "Built for reliability, growth, and long-term impact",
      },
      facts: {},
      hero2: {
        subtitle: "Digital innovation partner",
        cta: "Explore more",
      },
      servicesSecondary: {
        subtitle: "Our featured services",
        title: "How can we help you?",
        details: "More details",
      },
      contactSecondary: {
        title: "Feel free to contact us",
        fullName: "Full name*",
        email: "Email address*",
        serviceType: "Type of service*",
        select: "Select",
        selectDate: "Select date*",
        message: "Message*",
        messagePlaceholder: "Write message",
        submit: "Submit now",
        services: {
          consulting: "Digital consulting",
          web: "Web platforms",
          security: "Cybersecurity",
        },
      },
    },
    pages: {
      about: {
        title: "About Infinity Innovation",
        breadcrumb: "About Infinity Innovation",
      },
      contact: {
        title: "Contact",
        breadcrumb: "Contact",
      },
      services: {
        title: "Services & Solutions",
        breadcrumb: "Scalable digital capabilities for growing organizations",
      },
      leadership: {
        title: "Leadership Team",
        breadcrumb:
          "Experienced profiles focused on delivery excellence and digital impact.",
      },
      faq: {
        title: "FAQ",
        breadcrumb: "FAQ",
        sectionTitle: "Frequently Asked Questions",
      },
      service2: {
        title: "Our Services",
        breadcrumb: "Quality and client satisfaction guide every delivery",
      },
      pricing: {
        title: "Pricing",
        breadcrumb: "Pricing",
      },
      project: {
        title: "Projects",
        breadcrumb: "Projects",
      },
      blogGrid: {
        title: "Blog",
        breadcrumb: "Blog",
      },
      notFound: {
        title: "Page Not Found",
        breadcrumb: "Page Not Found",
      },
      blogStandard: {
        title: "Blog",
        breadcrumb: "Blog",
      },
      blogDetails: {
        title: "Blog Details",
        breadcrumb: "Blog details",
      },
      serviceDetails: {
        title: "Service Details",
        breadcrumb: "Service details",
      },
      projectDetails: {
        title: "Project Details",
        breadcrumb: "Project details",
      },
    },
    contactPage: {
      businessLine: "Business line",
      emailUs: "Email us",
      headOffice: "Head office",
      officeLocation: "Kinshasa, Democratic Republic of the Congo",
      subtitle: "Contact Infinity Innovation",
      title: "Let’s discuss your digital project",
      description:
        "Share your objectives and constraints. Our team will help you define the right strategy, scope, and implementation roadmap for sustainable business impact.",
      fullName: "Full name*",
      fullNamePlaceholder: "Your full name",
      email: "Business email*",
      emailPlaceholder: "name@company.com",
      projectDetails: "Project details*",
      projectPlaceholder:
        "Tell us about your project, timeline, and expected outcomes",
      sendInquiry: "Send inquiry",
      sentSuccess: "Message sent successfully!",
      sentError: "Oops, message not sent!",
    },
    pricingSection: {
      subtitle: "Our pricing",
      title: "Our popular pricing packages",
      description:
        "Flexible packages designed to support growing teams and digital transformation initiatives.",
      button: "Get the plan now",
    },
    blogSection: {
      authorPrefix: "By",
      search: "Search",
      searchPlaceholder: "Search here",
      categories: "Categories",
      recentPost: "Recent Posts",
      tags: "Tags",
      commentsLabel: "Comments",
      tagsLabel: "Tags",
      shareLabel: "Share",
      leaveComment: "Leave a comment",
      reply: "Reply",
      postComment: "Post a comment",
      yourName: "Your name",
      yourEmail: "Your email",
      yourMessage: "Write message",
    },
    notFoundPage: {
      title: "Oops! Page not found",
      description: "The page you are looking for does not exist.",
      button: "Go back home",
    },
    serviceDetailsPage: {
      allServices: "All services",
      openingHours: "Opening hours",
      needHelp: "Need help? Call here",
      intro1:
        "We design service delivery models that are secure, scalable, and aligned with your business priorities.",
      intro2:
        "From architecture to operations, our teams help you reduce complexity and accelerate measurable outcomes.",
      benefitsTitle: "Benefits with our service",
      benefitsText: "Structured delivery, expert guidance, and reliable long-term support.",
      benefit1: "Brand identity and product consistency",
      benefit2: "Digital platform and growth enablement",
      benefit3: "Continuous optimization and monitoring",
      outro:
        "Every engagement is managed with clear milestones, transparent communication, and measurable value creation.",
      faqTitle: "Most common questions",
      faqText:
        "Our teams answer planning, delivery, and support questions to help you move faster with confidence.",
    },
    projectDetailsPage: {
      info: "Project info",
      client: "Client",
      category: "Category",
      location: "Location",
      share: "Share",
      challenge: "Our challenge",
      challengeText:
        "Complex operations required a more connected digital backbone, better visibility, and faster decision cycles.",
      result: "Project outcome",
      resultText:
        "The delivered platform improved workflow speed, collaboration quality, and service reliability across teams.",
      preview: "Preview",
      next: "Next",
      locationValue: "Kinshasa",
      clientValue: "Infinity Innovation Client",
    },
    faqService: {
      q1: "Where should I start my digital transformation?",
      q2: "How long does a delivery plan usually take?",
      q3: "What is included in your services?",
      q4: "What type of organization do you support?",
      a1:
        "Start with a short diagnostic of your processes, systems, and priorities to define realistic quick wins and long-term targets.",
      a2:
        "It depends on scope, but most initiatives begin with a discovery and roadmap phase before full execution.",
      a3:
        "Our services cover strategy, product design, software delivery, integration, and continuous support.",
      a4:
        "We support startups, SMEs, public institutions, and enterprise teams with tailored implementation models.",
    },
  },
  fr: {
    common: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      leadership: "Leadership",
      contact: "Contact",
      faq: "FAQ",
      requestDemo: "Demander une démo",
      contactUs: "Nous contacter",
      discoverServices: "Découvrir nos services",
      talkToTeam: "Parler à notre équipe",
      startDiscussion: "Lancer une discussion business",
      followUs: "Suivez-nous :",
      getInTouch: "Contactez-nous",
      requestUpdates: "Recevoir des actualités",
      businessEmail: "Email professionnel",
      contactOurTeam: "Contacter notre équipe",
      company: "Entreprise",
      businessFocus: "Axes d’intervention",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité",
      allRights: "Tous droits réservés",
      by: "par",
      readMore: "Lire plus",
      learnMore: "En savoir plus",
      scroll: "Défiler",
      sendInquiry: "Envoyer la demande",
      language: "Langue",
      english: "EN",
      french: "FR",
    },
    headerTop: {
      followUs: "Suivez-nous :",
    },
    siteMenu: {
      description:
        "Infinity Innovation conçoit et déploie des solutions numériques qui aident les organisations à moderniser leurs processus, faire évoluer leurs opérations et accélérer leur performance.",
      getInTouch: "Contactez-nous",
      requestUpdates: "Recevoir des actualités",
      businessEmail: "Email professionnel",
      sentSuccess: "Message envoyé avec succès !",
      sentError: "Oups, le message n’a pas été envoyé !",
      addressLine1: "789 Inner Lane, Holy park,",
      addressLine2: "Kinshasa, RDC",
    },
    footer: {
      about:
        "Infinity Innovation est une entreprise technologique de confiance qui fournit des solutions logicielles, SaaS et de transformation digitale aux organisations.",
      company: "Entreprise",
      focus: "Axes d’intervention",
      focusItems: [
        "Développement logiciel sur mesure",
        "Digitalisation d’entreprise",
        "Outils de productivité basés sur l’IA",
        "Support produit long terme",
      ],
      contact: "Contact",
      contactTeam: "Contacter notre équipe",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité",
      allRights: "Tous droits réservés",
      by: "par",
    },
    cta: {
      title: "Prêt à lancer votre prochaine initiative digitale ?",
      button: "Lancer une discussion business",
    },
    home: {
      about: {
        subtitle: "À propos d’Infinity Innovation",
        title:
          "Nous créons des solutions digitales fiables pour les organisations qui veulent grandir",
        text:
          "Infinity Innovation est une entreprise technologique spécialisée dans les produits logiciels, la transformation digitale et l’innovation opérationnelle. Notre mission est d’aider les entreprises et institutions à moderniser leurs processus critiques avec des plateformes fiables, sécurisées et centrées utilisateur.",
        enterpriseFocus: "Orientation Entreprise",
        enterpriseSupport: "Stratégie, Delivery, Support",
        projectsDelivered: "Projets livrés",
      },
      services: {
        subtitle: "Services clés",
        title: "Des services digitaux de bout en bout pour transformer votre activité",
      },
      services2: {
        subtitle: "Solutions & Produits",
        title: "Des solutions technologiques conçues pour les organisations modernes",
      },
      offering: {
        subtitle: "Secteurs servis",
        title: "Des solutions sectorielles pour des environnements métiers complexes",
      },
      process: {
        subtitle: "Pourquoi nous choisir",
        title: "Pensé pour la fiabilité, la croissance et l’impact durable",
      },
      facts: {},
      hero2: {
        subtitle: "Partenaire en innovation digitale",
        cta: "Découvrir plus",
      },
      servicesSecondary: {
        subtitle: "Nos services phares",
        title: "Comment pouvons-nous vous aider ?",
        details: "Plus de détails",
      },
      contactSecondary: {
        title: "N’hésitez pas à nous contacter",
        fullName: "Nom complet*",
        email: "Adresse email*",
        serviceType: "Type de service*",
        select: "Sélectionner",
        selectDate: "Choisir la date*",
        message: "Message*",
        messagePlaceholder: "Écrivez votre message",
        submit: "Envoyer maintenant",
        services: {
          consulting: "Conseil digital",
          web: "Plateformes web",
          security: "Cybersécurité",
        },
      },
    },
    pages: {
      about: {
        title: "À propos d’Infinity Innovation",
        breadcrumb: "À propos d’Infinity Innovation",
      },
      contact: {
        title: "Contact",
        breadcrumb: "Contact",
      },
      services: {
        title: "Services & Solutions",
        breadcrumb: "Des capacités digitales évolutives pour les organisations en croissance",
      },
      leadership: {
        title: "Équipe dirigeante",
        breadcrumb:
          "Des profils expérimentés focalisés sur l’excellence d’exécution et l’impact digital.",
      },
      faq: {
        title: "FAQ",
        breadcrumb: "FAQ",
        sectionTitle: "Questions fréquentes",
      },
      service2: {
        title: "Nos services",
        breadcrumb: "La qualité et la satisfaction client guident chacune de nos livraisons",
      },
      pricing: {
        title: "Tarification",
        breadcrumb: "Tarification",
      },
      project: {
        title: "Projets",
        breadcrumb: "Projets",
      },
      blogGrid: {
        title: "Blog",
        breadcrumb: "Blog",
      },
      notFound: {
        title: "Page introuvable",
        breadcrumb: "Page introuvable",
      },
      blogStandard: {
        title: "Blog",
        breadcrumb: "Blog",
      },
      blogDetails: {
        title: "Détail de l’article",
        breadcrumb: "Détail de l’article",
      },
      serviceDetails: {
        title: "Détail du service",
        breadcrumb: "Détail du service",
      },
      projectDetails: {
        title: "Détail du projet",
        breadcrumb: "Détail du projet",
      },
    },
    contactPage: {
      businessLine: "Ligne business",
      emailUs: "Écrivez-nous",
      headOffice: "Siège",
      officeLocation: "Kinshasa, République démocratique du Congo",
      subtitle: "Contacter Infinity Innovation",
      title: "Parlons de votre projet digital",
      description:
        "Partagez vos objectifs et vos contraintes. Notre équipe vous aidera à définir la bonne stratégie, le bon périmètre et la feuille de route d’implémentation pour un impact durable.",
      fullName: "Nom complet*",
      fullNamePlaceholder: "Votre nom complet",
      email: "Email professionnel*",
      emailPlaceholder: "nom@entreprise.com",
      projectDetails: "Détails du projet*",
      projectPlaceholder:
        "Parlez-nous de votre projet, du calendrier et des résultats attendus",
      sendInquiry: "Envoyer la demande",
      sentSuccess: "Message envoyé avec succès !",
      sentError: "Oups, le message n’a pas été envoyé !",
    },
    pricingSection: {
      subtitle: "Nos tarifs",
      title: "Nos formules les plus populaires",
      description:
        "Des offres flexibles conçues pour accompagner les équipes en croissance et les initiatives de transformation digitale.",
      button: "Choisir cette offre",
    },
    blogSection: {
      authorPrefix: "Par",
      search: "Recherche",
      searchPlaceholder: "Rechercher ici",
      categories: "Catégories",
      recentPost: "Articles récents",
      tags: "Tags",
      commentsLabel: "Commentaires",
      tagsLabel: "Tags",
      shareLabel: "Partager",
      leaveComment: "Laisser un commentaire",
      reply: "Répondre",
      postComment: "Publier un commentaire",
      yourName: "Votre nom",
      yourEmail: "Votre email",
      yourMessage: "Écrire un message",
    },
    notFoundPage: {
      title: "Oups ! Page introuvable",
      description: "La page que vous recherchez n’existe pas.",
      button: "Retour à l’accueil",
    },
    serviceDetailsPage: {
      allServices: "Tous les services",
      openingHours: "Heures d’ouverture",
      needHelp: "Besoin d’aide ? Appelez ici",
      intro1:
        "Nous concevons des modèles de delivery sécurisés, évolutifs et alignés avec vos priorités métier.",
      intro2:
        "De l’architecture aux opérations, nos équipes vous aident à réduire la complexité et accélérer les résultats mesurables.",
      benefitsTitle: "Bénéfices de notre service",
      benefitsText: "Un delivery structuré, un accompagnement expert et un support fiable sur le long terme.",
      benefit1: "Identité de marque et cohérence produit",
      benefit2: "Plateforme digitale et accélération de croissance",
      benefit3: "Optimisation continue et supervision",
      outro:
        "Chaque mission est pilotée avec des jalons clairs, une communication transparente et une création de valeur mesurable.",
      faqTitle: "Questions les plus fréquentes",
      faqText:
        "Nos équipes répondent aux questions de cadrage, delivery et support pour vous faire avancer plus vite en confiance.",
    },
    projectDetailsPage: {
      info: "Infos projet",
      client: "Client",
      category: "Catégorie",
      location: "Localisation",
      share: "Partager",
      challenge: "Notre défi",
      challengeText:
        "Des opérations complexes nécessitaient une base digitale mieux connectée, plus de visibilité et des cycles de décision plus rapides.",
      result: "Résultat du projet",
      resultText:
        "La plateforme livrée a amélioré la vitesse des workflows, la collaboration et la fiabilité de service entre les équipes.",
      preview: "Aperçu",
      next: "Suivant",
      locationValue: "Kinshasa",
      clientValue: "Client Infinity Innovation",
    },
    faqService: {
      q1: "Par où commencer une transformation digitale ?",
      q2: "Combien de temps prend un plan de delivery ?",
      q3: "Que couvrent vos services ?",
      q4: "Quel type d’organisation accompagnez-vous ?",
      a1:
        "Commencez par un diagnostic rapide de vos processus, systèmes et priorités pour définir des gains rapides et des objectifs long terme.",
      a2:
        "Cela dépend du périmètre, mais la plupart des initiatives démarrent par une phase de cadrage et de roadmap avant l’exécution complète.",
      a3:
        "Nos services couvrent la stratégie, le design produit, le développement logiciel, l’intégration et le support continu.",
      a4:
        "Nous accompagnons startups, PME, institutions publiques et équipes enterprise avec des modèles d’implémentation adaptés.",
    },
  },
};

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (storedLocale === "fr" || storedLocale === "en") {
      setLocale(storedLocale);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [hydrated, locale]);

  const toggleLocale = useCallback(() => {
    setLocale((currentLocale) => (currentLocale === "en" ? "fr" : "en"));
  }, []);

  const tr = useCallback(
    (value) => {
      if (value == null) {
        return value;
      }
      if (typeof value === "string") {
        return value;
      }
      if (typeof value === "object") {
        return value[locale] ?? value.en ?? value.fr ?? "";
      }
      return value;
    },
    [locale]
  );

  const t = useCallback(
    (path) => {
      const segments = path.split(".");
      let currentValue = messages[locale];
      for (const segment of segments) {
        currentValue = currentValue?.[segment];
      }
      return currentValue ?? path;
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, tr, t, hydrated }),
    [hydrated, locale, setLocale, t, toggleLocale, tr]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
