// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                                                                            ║
// ║  🌐 WEBSITE INHALT - Alle Texte und Inhalte an einem Ort                   ║
// ║                                                                            ║
// ║  Diese Datei enthält ALLE bearbeitbaren Inhalte der Website.               ║
// ║  Ändern Sie nur die Texte zwischen den Anführungszeichen "..."             ║
// ║                                                                            ║
// ║  📝 ANLEITUNG:                                                             ║
// ║  - Texte ändern: Ersetzen Sie Text zwischen "..." mit Ihrem neuen Text     ║
// ║  - Bilder ändern: Ersetzen Sie die URL zwischen "..." mit der neuen URL    ║
// ║  - Listen erweitern: Kopieren Sie einen Block { ... }, und fügen Sie ihn   ║
// ║    am Ende der Liste ein (vor der letzten ] Klammer)                       ║
// ║  - Einträge löschen: Entfernen Sie den ganzen Block von { bis },           ║
// ║                                                                            ║
// ║  ⚠️  WICHTIG: Ändern Sie NICHT die Struktur der Datei!                     ║
// ║                                                                            ║
// ╚════════════════════════════════════════════════════════════════════════════╝


// ============================================================================
// 🏠 NAVIGATION & HEADER
// ============================================================================
// Die Navigation erscheint oben auf jeder Seite

export const navigation = {
  // Der alternative Text für das Logo-Bild (für Barrierefreiheit)
  logoAltText: "Röllinger",

  // Der Firmenname neben dem Logo
  companyName: "Röllinger GmbH",

  // -----------------------------------------------------------------------------
  // 📍 NAVIGATIONS-MENÜ
  // -----------------------------------------------------------------------------
  // Die Menüpunkte in der Navigation
  // - "name": Der angezeigte Text im Menü
  // - "href": Der Bereich der Seite (nicht ändern, ausser Sie wissen was Sie tun)
  //
  // ➕ NEUEN MENÜPUNKT HINZUFÜGEN:
  //    Kopieren Sie eine Zeile { name: "...", href: "..." }, und fügen Sie sie ein
  // ❌ MENÜPUNKT ENTFERNEN:
  //    Löschen Sie die ganze Zeile { name: "...", href: "..." },
  links: [
    { name: "Start", href: "home" },
    { name: "Über Uns", href: "about" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Kontakt", href: "contact" },
  ],

  // Der Text auf dem "Kontakt"-Button (Desktop, rechts oben)
  ctaButtonText: "Anfrage",

  // Der Text auf dem "Kontakt"-Button im mobilen Menü
  mobileCtaButtonText: "Anfrage starten",
};


// ============================================================================
// 🎯 HERO BEREICH (Startseite oben)
// ============================================================================
// Der grosse Bereich ganz oben auf der Startseite mit Bild und Haupttext

export const hero = {
  // -----------------------------------------------------------------------------
  // 🖼️ HINTERGRUNDBILD
  // -----------------------------------------------------------------------------

  // Das grosse Bild im Hintergrund der Startseite
  // Ersetzen Sie die URL mit einem Link zu Ihrem Bild
  backgroundImage: "/hero.avif",

  // Beschreibung des Bildes (für Barrierefreiheit / Screenreader)
  imageDescription: "Moderne Schweizer Architektur",

  // -----------------------------------------------------------------------------
  // 📍 STANDORT-BADGE
  // -----------------------------------------------------------------------------

  // Der kleine Text oben (zeigt Ihren Standort)
  locationBadge: "Baar, Zug — Zentralschweiz",

  // -----------------------------------------------------------------------------
  // 📝 HAUPTTEXTE
  // -----------------------------------------------------------------------------

  // Die grosse Überschrift (wird in 2 Zeilen angezeigt)
  taglinePart1: "Wir packen",
  taglinePart2: "einfach an.",

  // Der Slogan unter der Überschrift (kursiv)
  subtitle: "Für alles, was Ihr Zuhause braucht.",

  // Die Beschreibung darunter
  description: "Ihr junges Macher-Team für Hauswartung, Garten und Bau. Persönlich, zuverlässig und direkt aus Baar.",

  // -----------------------------------------------------------------------------
  // 🔽 SCROLL-HINWEIS
  // -----------------------------------------------------------------------------

  // Der Text beim Pfeil zum Runterscrollen
  scrollHint: "Entdecken",
};


// ============================================================================
// 👥 ÜBER UNS (About Section)
// ============================================================================
// Der "Über Uns" Bereich mit Team-Info und Philosophie

export const about = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Label oben links
  sectionLabel: "Über Uns",

  // Die grosse Hauptüberschrift (Zeile 1)
  mainHeadingLine1: "Nicht nur verwalten.",

  // Die grosse Hauptüberschrift (Zeile 2, wird grün/farbig dargestellt)
  mainHeadingLine2: "Gestalten.",

  // Der Beschreibungstext unter der Hauptüberschrift
  mainDescription: "Wir sind die neue Generation von Facility Services. Schneller, direkter und mit dem Blick für das Wesentliche.",

  // -----------------------------------------------------------------------------
  // 📊 STATISTIKEN / KENNZAHLEN
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE STATISTIK HINZUFÜGEN:
  //    Kopieren Sie einen Block { value: "...", label: "..." }, und fügen Sie ihn ein
  // ❌ STATISTIK ENTFERNEN:
  //    Löschen Sie den ganzen Block { value: "...", label: "..." },
  statistics: [
    {
      value: "20+",
      label: "Jahre Erfahrung",
    },
    {
      value: "100%",
      label: "Inhabergeführt",
    },
  ],

  // -----------------------------------------------------------------------------
  // 👥 TEAM-KARTE
  // -----------------------------------------------------------------------------

  // Titel der Team-Karte
  teamCardTitle: "Die Köpfe dahinter",

  // Beschreibungstext in der Team-Karte
  teamCardDescription: "Wir sind keine klassische Verwaltung, die vom Schreibtisch aus delegiert. Wir sind Macher. Wir glauben an direkte Kommunikation, Handschlagqualität und daran, dass man Qualität sehen muss.",

  // -----------------------------------------------------------------------------
  // 👤 GRÜNDER / TEAM-MITGLIEDER
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUES TEAM-MITGLIED HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  // ❌ TEAM-MITGLIED ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   name: "Max Mustermann",       ← Name der Person
  //   role: "Geschäftsleitung",     ← Rolle/Position
  //   image: "https://...",         ← Link zum Profilbild
  //   description: "Kurze Bio...",  ← Kurze Beschreibung
  // },
  founders: [
    {
      name: "Besim Mani",
      role: "Geschäftsleitung",
      image: "/besim.jpeg",
      description: "Der Stratege mit dem Blick für das grosse Ganze.",
    },
    {
      name: "Altin Mani",
      role: "Geschäftsleitung",
      image: "/altin.jpeg",
      description: "Der Macher mit Fokus auf Perfektion und Details.",
    },
  ],

  // -----------------------------------------------------------------------------
  // 🎯 PHILOSOPHIE-KARTEN (Scroll-Bereich)
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE PHILOSOPHIE-KARTE HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ PHILOSOPHIE-KARTE ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   id: 1,                        ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Titel",               ← Überschrift der Karte
  //   description: "Beschreibung",  ← Ausführliche Beschreibung
  //   image: "https://...",         ← Link zum Bild
  // },
  features: [
    {
      id: 1,
      title: "Service & Vertrauen",
      description: "Als Familienunternehmen stehen wir für direkte Kommunikation. Facility Management bedeutet für uns: Wir kümmern uns, als wäre es unser eigenes Zuhause.",
      image: "/vertrauen.jpeg",
    },
    {
      id: 2,
      title: "Handwerk & Präzision",
      description: "Unsere Wurzeln liegen im soliden Schweizer Handwerk. Bei Renovationen und Umbauten setzen wir auf langlebige Materialien und Detailgenauigkeit, die man spüren kann.",
      image: "/handwerk.jpeg",
    },
    {
      id: 3,
      title: "Natur & Umgebung",
      description: "Ein Garten ist mehr als Grünfläche. Er ist Rückzugsort. Wir pflegen und gestalten Aussenbereiche so, dass sie sich harmonisch in die Umgebung einfügen.",
      image: "/natur.jpeg",
    },
  ],

  // Das kleine Label auf jeder Karte (z.B. "01 — Philosophie")
  cardCategoryLabel: "Philosophie",

  // Der Text auf dem "Mehr erfahren" Button
  cardButtonText: "Mehr erfahren",
};


// ============================================================================
// 🛠️ DIENSTLEISTUNGEN (Services)
// ============================================================================
// Die Übersicht aller angebotenen Dienstleistungen

export const services = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Wort oben (Kategorie-Label)
  sectionLabel: "Unsere Expertise",

  // Die grosse Überschrift (Zeile 1)
  sectionTitleLine1: "Kompetenz in",

  // Die grosse Überschrift (Zeile 2, wird grau dargestellt)
  sectionTitleLine2: "jedem Bereich.",

  // Der Text auf dem "Details ansehen" Link bei jedem Service
  detailsButtonText: "Details ansehen",

  // -----------------------------------------------------------------------------
  // 🛠️ DIENSTLEISTUNGEN-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE DIENSTLEISTUNG HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ DIENSTLEISTUNG ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // 🎨 VERFÜGBARE ICONS:
  //    "home"       → Haus-Symbol
  //    "leaf"       → Blatt-Symbol (Natur/Garten)
  //    "hammer"     → Hammer-Symbol (Bau/Renovation)
  //    "trash"      → Papierkorb-Symbol (Entsorgung)
  //    "building"   → Gebäude-Symbol (Facility)
  //    "shovel"     → Schaufel-Symbol (Gartenarbeit)
  //    "wrench"     → Schraubenschlüssel (Reparatur)
  //    "paintbrush" → Pinsel-Symbol (Malerarbeiten)
  //    "shield"     → Schild-Symbol (Sicherheit)
  //    "truck"      → Lastwagen-Symbol (Transport)
  //    "users"      → Personen-Symbol (Team/Beratung)
  //    "settings"   → Zahnrad-Symbol (Technik)
  //    "sparkles"   → Sterne-Symbol (Reinigung)
  //    "tree"       → Baum-Symbol (Garten)
  //
  // STRUKTUR:
  // {
  //   id: 1,                         ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Titel",                ← Name der Dienstleistung
  //   label: "Kurzbeschreibung",     ← Kleines Label (z.B. "24/7 Service")
  //   description: "Beschreibung...",← Ausführliche Beschreibung
  //   icon: "home",                  ← Symbol (siehe Liste oben)
  //   image: "https://...",          ← Link zum Bild
  // },
  items: [
    
    {
      id: 1,
      title: "Gartenpflege",
      label: "Grünflächen",
      description: "Kreative Gestaltung und nachhaltiger Unterhalt Ihrer Gartenanlagen. Wir verwandeln Aussenbereiche in lebendige Oasen, die zu jeder Jahreszeit Freude bereiten.",
      icon: "leaf",
      image: "/gartenpflege_2.jpeg",
    },
    {
      id: 2,
      title: "Umbauten",
      label: "Renovation",
      description: "Fachgerechte Planung und Ausführung von Umbau- und Renovationsprojekten. Wir begleiten Sie von der ersten Idee bis zur schlüsselfertigen Übergabe.",
      icon: "hammer",
      image: "/umbauten.jpeg",
    },
    {
      id: 3,
      title: "Rückbau",
      label: "Entsorgung",
      description: "Sicherer Rückbau und umweltgerechte Entsorgung. Wir schaffen Platz für Neues und garantieren eine saubere, vorschriftsgemässe Trennung aller Materialien.",
      icon: "trash",
      image: "/rueckbau.jpeg",
    },
    {
      id: 4,
      title: "Hauswartung",
      label: "24/7 Service",
      description: "Umfassende Betreuung Ihrer Liegenschaften mit höchster Sorgfalt. Von der technischen Überwachung bis zur Reinigung sorgen wir für Werterhalt und gepflegte Atmosphäre – rund um die Uhr.",
      icon: "home",
      image: "/hauswartung.jpg",
    },
  ],
};


// ============================================================================
// 🏗️ PORTFOLIO (Projekte)
// ============================================================================
// Die Übersicht der abgeschlossenen Projekte

export const portfolio = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Wort oben (Kategorie-Label)
  sectionLabel: "Portfolio",

  // Die grosse Überschrift des Abschnitts
  sectionTitle: "Ausgewählte Arbeiten.",

  // Der Text auf dem "Case Study" Button
  caseStudyButtonText: "Case Study ansehen",

  // -----------------------------------------------------------------------------
  // 🔄 VORHER/NACHHER-VERGLEICH
  // -----------------------------------------------------------------------------

  // Der Text für das "Vorher"-Label im Slider
  beforeLabel: "Vorher",

  // Der Text für das "Nachher"-Label im Slider
  afterLabel: "Nachher",

  // -----------------------------------------------------------------------------
  // 🏗️ PROJEKTE-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUES PROJEKT HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ PROJEKT ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   id: 1,                    ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Projekttitel",    ← Name des Projekts
  //   category: "Kategorie",    ← Art des Projekts (z.B. "Renovation", "Gartenbau")
  //   location: "Ort",          ← Standort des Projekts
  //   description: "Text...",   ← Kurze Beschreibung
  //   beforeImage: "https://...",← Link zum Vorher-Bild (optional, für Vergleich)
  //   image: "https://...",     ← Link zum Nachher-Bild
  // },
  projects: [
    {
      id: 1,
      title: "Balkonsanierung & Neubelag",
      category: "Aussenbereich / Renovation",
      location: "Zug",
      description: "Erneuerung des Balkonbodens: Rückbau des Altbestands und Verlegung neuer, witterungsbeständiger WPC-Dielen auf neuer Unterkonstruktion.",
      beforeImage: "/balkon_vorher.jpeg",
      image: "/balkon_nachher.jpeg",
    },
    {
      id: 2,
      title: "Heckenschnitt & Gartenunterhalt",
      category: "Gartenpflege",
      location: "Zug",
      description: "Fachgerechter Rückschnitt einer stark gewachsenen Hecke entlang des Gehwegs. Wiederherstellung einer sauberen Form und Pflege der angrenzenden Rasenfläche für ein gepflegtes Erscheinungsbild.",
      beforeImage: "/hecke_vorher.jpeg",
      image: "/hecke_nachher.jpeg",
    },
    {
      id: 3,
      title: "Rodung & Hangpflege",
      category: "Landschaftspflege",
      location: "Oberwil",
      description: "Komplette Freilegung eines steilen Hanges. Entfernung von dichtem Brombeergestrüpp und Wildwuchs zur Rückgewinnung der Nutzfläche und Aussicht auf den See.",
      beforeImage: "/garten_vorher.jpeg",
      image: "/garten_nachher.jpeg",
    },
  ],
};


// ============================================================================
// 💬 KUNDENSTIMMEN (Testimonials)
// ============================================================================
// Bewertungen und Zitate von zufriedenen Kunden

export const testimonials = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITT-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Die kleine Überschrift über dem Haupttitel
  sectionLabel: "Referenzen",

  // Die Hauptüberschrift des Testimonials-Bereichs
  sectionTitle: "Was unsere Kunden sagen",

  // -----------------------------------------------------------------------------
  // 💬 KUNDENSTIMMEN-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE KUNDENSTIMME HINZUFÜGEN:
  //    Kopieren Sie einen Block { quote: "...", author: "..." }, und fügen Sie ihn ein
  // ❌ KUNDENSTIMME ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   quote: "Das Zitat des Kunden...",  ← Die Bewertung/das Zitat
  //   author: "Kundenname",              ← Name des Kunden oder der Firma
  // },
  items: [
    {
      quote: "Eine unglaubliche Transformation unseres Gartens. Das Team war professionell und pünktlich.",
      author: "Familie Müller",
    },
    {
      quote: "Die Renovation wurde genau nach unseren Vorstellungen umgesetzt. Sehr empfehlenswert.",
      author: "Thomas Huber",
    },
    {
      quote: "Zuverlässiges Facility Management. Wir müssen uns um nichts mehr kümmern.",
      author: "Liegenschaften AG",
    },
    {
      quote: "Die Zusammenarbeit war hervorragend. Sehr professionell und effizient.",
      author: "Sarah Weber",
    },
    {
      quote: "Endlich ein Partner, auf den man sich verlassen kann. Top Service!",
      author: "Michael Schmid",
    },
    {
      quote: "Wir arbeiten seit Jahren mit der Röllinger GmbH zusammen und sind sehr zufrieden.",
      author: "Immobilien Zürich",
    },
  ],
};


// ============================================================================
// 📧 KONTAKT (Contact Form)
// ============================================================================
// Das Kontaktformular und dessen Beschriftungen

export const contact = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITT-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Die Hauptüberschrift des Kontakt-Bereichs
  sectionTitle: "Starten wir ein Projekt.",

  // Der Beschreibungstext unter der Überschrift
  sectionSubtitle: "Wir freuen uns auf Ihre Anfrage. Egal ob Renovation oder Unterhalt.",

  // -----------------------------------------------------------------------------
  // 📝 FORMULAR-BESCHRIFTUNGEN
  // -----------------------------------------------------------------------------

  // Die Beschriftung für das Namensfeld
  nameLabel: "Name",

  // Der Platzhaltertext im Namensfeld
  namePlaceholder: "Ihr Name",

  // Die Beschriftung für das E-Mail-Feld
  emailLabel: "Email",

  // Der Platzhaltertext im E-Mail-Feld
  emailPlaceholder: "ihre@email.ch",

  // Die Beschriftung für das Nachrichtenfeld
  messageLabel: "Nachricht",

  // Der Platzhaltertext im Nachrichtenfeld
  messagePlaceholder: "Wie können wir helfen?",

  // Der Text auf dem Absenden-Button
  submitButtonText: "Absenden",
};


// ============================================================================
// 🦶 FOOTER (Fusszeile)
// ============================================================================
// Der Fussbereich der Website mit Kontaktdaten und Links

export const footer = {
  // -----------------------------------------------------------------------------
  // 🏢 FIRMEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Firmenname (erscheint gross im Footer)
  companyName: "Röllinger GmbH",

  // Der Slogan unter dem Firmennamen (kursiv)
  tagline: "Für alles, was Ihr Zuhause braucht.",

  // Die Beschreibung der Firma
  description: "Ihr Partner für Immobilien, Garten und Unterhalt in der Zentralschweiz.",

  // -----------------------------------------------------------------------------
  // 📞 KONTAKT-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Die Überschrift für den Kontakt-Bereich
  contactLabel: "Kontakt",

  // Die Adresse der Firma
  address: "Pilatusstrasse 4, 6340 Baar",

  // Die E-Mail-Adresse
  email: "info@roellinger.ch",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // -----------------------------------------------------------------------------
  // ⚖️ RECHTLICHE LINKS
  // -----------------------------------------------------------------------------

  // Die Überschrift für den Rechtliches-Bereich
  legalLabel: "Rechtliches",

  // Der Text für den Impressum-Link
  impressumText: "Impressum",

  // Der Text für den Datenschutz-Link
  datenschutzText: "Datenschutz",

  // -----------------------------------------------------------------------------
  // 📝 FUSSZEILE
  // -----------------------------------------------------------------------------

  // Der Design-Hinweis am Seitenende
  designCredit: "Designed with Organic Modernity",
};


// ============================================================================
// 📜 IMPRESSUM (Rechtliche Angaben)
// ============================================================================
// Alle Inhalte der Impressum-Seite

export const impressum = {
  // -----------------------------------------------------------------------------
  // 📄 SEITEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Text für den "Zurück"-Link
  backLinkText: "Zurück zur Startseite",

  // Die kleine Beschriftung über dem Titel
  sectionLabel: "Rechtliches",

  // Der Haupttitel der Seite
  pageTitle: "Impressum",

  // Der Untertitel unter dem Haupttitel
  pageSubtitle: "Angaben gemäss Art. 3 des Bundesgesetzes gegen den unlauteren Wettbewerb (UWG)",

  // Das Datum der letzten Aktualisierung (unten auf der Seite)
  lastUpdated: "Stand: Dezember 2025",

  // -----------------------------------------------------------------------------
  // 🏢 FIRMENANGABEN
  // -----------------------------------------------------------------------------

  // Der Titel der Firmenangaben-Karte
  companyCardTitle: "Firmenangaben",

  // Der Firmenname
  companyName: "Röllinger GmbH",

  // Die Strasse und Hausnummer
  companyStreet: "Pilatusstrasse 4",

  // Die PLZ und Stadt
  companyCity: "6340 Baar",

  // Das Land
  companyCountry: "Schweiz",

  // -----------------------------------------------------------------------------
  // 📞 KONTAKT
  // -----------------------------------------------------------------------------

  // Der Titel der Kontakt-Karte
  contactCardTitle: "Kontakt",

  // Die Beschriftung über der Telefonnummer
  phoneLabel: "Telefon",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // Die Beschriftung über der E-Mail
  emailLabel: "E-Mail",

  // Die E-Mail-Adresse
  emailAddress: "info@roellinger.ch",

  // -----------------------------------------------------------------------------
  // 📋 HANDELSREGISTEREINTRAG
  // -----------------------------------------------------------------------------

  // Der Titel der Handelsregister-Karte
  registerCardTitle: "Handelsregistereintrag",

  // Die Handelsregister-Einträge (Beschriftung und Wert)
  //
  // ➕ NEUEN EINTRAG HINZUFÜGEN:
  //    Kopieren Sie eine Zeile { label: "...", value: "..." }, und fügen Sie sie ein
  // ❌ EINTRAG ENTFERNEN:
  //    Löschen Sie die ganze Zeile { label: "...", value: "..." },
  registerEntries: [
    { label: "Eingetragener Firmenname", value: "Röllinger GmbH" },
    { label: "Rechtsform", value: "Gesellschaft mit beschränkter Haftung (GmbH)" },
    { label: "Rechtssitz", value: "Baar, Kanton Zug" },
    { label: "Handelsregisteramt", value: "Kanton Zug" },
    { label: "Handelsregister-Nummer", value: "CH-170.4.023.391-4" },
    { label: "UID/MWST", value: "CHE-339.307.273" },
  ],

  // Die Beschriftung für das Eintragungsdatum
  registrationDateLabel: "Eintragungsdatum",

  // Das Eintragungsdatum
  registrationDateValue: "24.06.2025",

  // -----------------------------------------------------------------------------
  // 📜 FIRMENZWECK
  // -----------------------------------------------------------------------------

  // Der Titel der Firmenzweck-Karte
  purposeCardTitle: "Firmenzweck",

  // Die Absätze des Firmenzwecks
  purposeParagraph1: "Die Gesellschaft bezweckt die Erbringung von Dienstleistungen in den Bereichen Hauswartung, Gartenpflege, Umbauten, Renovationen und Abbrucharbeiten. Sie bezweckt zudem den Handel mit Immobilien, insbesondere den Erwerb, die Verwaltung, Vermittlung, Vermietung und Veräusserung von Liegenschaften in der Schweiz.",

  purposeParagraph2: "Die Gesellschaft kann zudem Tätigkeiten im Bereich Facility Management, Bauplanung sowie den Handel mit Waren und Materialien aller Art ausüben, insbesondere im Zusammenhang mit Bau-, Unterhalts- und Renovationsprojekten.",

  // -----------------------------------------------------------------------------
  // ⚠️ HAFTUNGSAUSSCHLUSS
  // -----------------------------------------------------------------------------

  // Der Titel der Haftungsausschluss-Karte
  disclaimerCardTitle: "Haftungsausschluss",

  // Haftung für Inhalte
  disclaimerContentTitle: "Haftung für Inhalte",
  disclaimerContentText: "Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",

  // Haftung für Links
  disclaimerLinksTitle: "Haftung für Links",
  disclaimerLinksText: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",

  // -----------------------------------------------------------------------------
  // ©️ URHEBERRECHT
  // -----------------------------------------------------------------------------

  // Der Titel der Urheberrecht-Karte
  copyrightCardTitle: "Urheberrecht",

  // Der Urheberrecht-Text
  copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
};


// ============================================================================
// 🔒 DATENSCHUTZ (Privacy Policy)
// ============================================================================
// Alle Inhalte der Datenschutz-Seite

export const datenschutz = {
  // -----------------------------------------------------------------------------
  // 📄 SEITEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Text für den "Zurück"-Link
  backLinkText: "Zurück zur Startseite",

  // Die kleine Beschriftung über dem Titel
  sectionLabel: "Rechtliches",

  // Der Haupttitel der Seite
  pageTitle: "Datenschutz",

  // Der Untertitel unter dem Haupttitel
  pageSubtitle: "Informationen zum Schutz Ihrer persönlichen Daten gemäss DSG und DSGVO",

  // Das Datum der letzten Aktualisierung (unten auf der Seite)
  lastUpdated: "Stand: Dezember 2025",

  // Die Beschriftung für das Inhaltsverzeichnis (links am Bildschirmrand)
  tableOfContentsLabel: "Inhalt",

  // -----------------------------------------------------------------------------
  // 📊 STATISTIKEN IM HERO-BEREICH
  // -----------------------------------------------------------------------------

  // Die Beschriftung unter der Anzahl Abschnitte
  sectionsStatLabel: "Abschnitte",

  // DSG Konformität Label
  dsgLabel: "DSG",
  dsgSubLabel: "Konform",

  // DSGVO Konformität Label
  dsgvoLabel: "DSGVO",
  dsgvoSubLabel: "Konform",

  // -----------------------------------------------------------------------------
  // 🏢 VERANTWORTLICHER
  // -----------------------------------------------------------------------------

  // Der Firmenname
  companyName: "Röllinger GmbH",

  // Die Strasse und Hausnummer
  companyStreet: "Pilatusstrasse 4",

  // Die PLZ und Stadt
  companyCity: "6340 Baar",

  // Das Land
  companyCountry: "Schweiz",

  // Die E-Mail-Adresse
  emailAddress: "info@roellinger.ch",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // Die Beschriftung für E-Mail
  emailLabel: "E-Mail:",

  // Die Beschriftung für Telefon
  phoneLabel: "Telefon:",

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 01 - ALLGEMEINE HINWEISE
  // -----------------------------------------------------------------------------

  section01: {
    id: "allgemein",
    number: "01",
    title: "Allgemeine Hinweise",
    paragraph1: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie darüber, welche Personendaten wir im Zusammenhang mit unseren Tätigkeiten, einschliesslich unserer Website, bearbeiten.",
    paragraph2: "Diese Datenschutzerklärung richtet sich nach dem Schweizerischen Datenschutzgesetz (DSG) und, soweit anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 02 - VERANTWORTLICHER
  // -----------------------------------------------------------------------------

  section02: {
    id: "verantwortlicher",
    number: "02",
    title: "Verantwortlicher",
    intro: "Verantwortlich für die Datenbearbeitung ist:",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 03 - ERHEBUNG UND BEARBEITUNG
  // -----------------------------------------------------------------------------

  section03: {
    id: "erhebung",
    number: "03",
    title: "Erhebung und Bearbeitung von Personendaten",
    sub1Title: "3.1 Kontaktaufnahme",
    sub1Text: "Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, erheben wir die von Ihnen mitgeteilten Daten (z.B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt). Diese Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen.",
    sub2Title: "3.2 Nutzung unserer Website",
    sub2Text: "Beim Besuch unserer Website werden automatisch technische Daten erfasst, die Ihr Browser an unseren Server übermittelt. Dies können sein: IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 04 - ZWECK DER DATENBEARBEITUNG
  // -----------------------------------------------------------------------------

  section04: {
    id: "zweck",
    number: "04",
    title: "Zweck der Datenbearbeitung",
    intro: "Wir bearbeiten Ihre Personendaten zu folgenden Zwecken:",
    purposes: [
      "Beantwortung von Anfragen und Kommunikation mit Ihnen",
      "Erstellung von Offerten und Abwicklung von Aufträgen",
      "Erbringung unserer Dienstleistungen im Bereich Hauswartung, Gartenpflege und Bau",
      "Gewährleistung des technischen Betriebs unserer Website",
      "Erfüllung gesetzlicher Pflichten",
    ],
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 05 - RECHTSGRUNDLAGE
  // -----------------------------------------------------------------------------

  section05: {
    id: "rechtsgrundlage",
    number: "05",
    title: "Rechtsgrundlage",
    intro: "Die Bearbeitung Ihrer Daten erfolgt auf folgenden Rechtsgrundlagen:",
    legalBases: [
      { title: "Einwilligung", desc: "Wenn Sie uns Ihre Daten freiwillig mitteilen (z.B. über das Kontaktformular)" },
      { title: "Vertragserfüllung", desc: "Zur Durchführung vorvertraglicher Massnahmen oder Erfüllung eines Vertrags" },
      { title: "Berechtigte Interessen", desc: "Zur Wahrung unserer berechtigten Geschäftsinteressen" },
      { title: "Gesetzliche Pflichten", desc: "Zur Erfüllung rechtlicher Verpflichtungen" },
    ],
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 06 - SPEICHERDAUER
  // -----------------------------------------------------------------------------

  section06: {
    id: "speicherdauer",
    number: "06",
    title: "Speicherdauer",
    text: "Wir speichern Ihre Personendaten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es gesetzliche Aufbewahrungspflichten vorsehen. Anfragen über das Kontaktformular werden nach Abschluss der Bearbeitung und nach Ablauf allfälliger Aufbewahrungsfristen gelöscht.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 07 - WEITERGABE VON DATEN
  // -----------------------------------------------------------------------------

  section07: {
    id: "weitergabe",
    number: "07",
    title: "Weitergabe von Daten",
    intro: "Wir geben Ihre Personendaten nur weiter, wenn:",
    conditions: [
      "Sie ausdrücklich eingewilligt haben",
      "Es für die Vertragserfüllung erforderlich ist",
      "Eine gesetzliche Verpflichtung besteht",
      "Es zur Wahrung berechtigter Interessen erforderlich und zulässig ist",
    ],
    noteLabel: "Hinweis:",
    noteText: "Unsere Website wird auf GitHub Pages gehostet. Dabei können technische Daten auf Servern von GitHub, Inc. (USA) verarbeitet werden.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 08 - COOKIES
  // -----------------------------------------------------------------------------

  section08: {
    id: "cookies",
    number: "08",
    title: "Cookies",
    highlightedText: "keine Tracking-Cookies",
    text: "Unsere Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden lediglich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 09 - IHRE RECHTE
  // -----------------------------------------------------------------------------

  section09: {
    id: "rechte",
    number: "09",
    title: "Ihre Rechte",
    intro: "Sie haben folgende Rechte in Bezug auf Ihre Personendaten:",
    rights: [
      { title: "Auskunftsrecht", desc: "Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen" },
      { title: "Berichtigungsrecht", desc: "Sie können die Berichtigung unrichtiger Daten verlangen" },
      { title: "Löschungsrecht", desc: "Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen" },
      { title: "Einschränkung", desc: "Sie können unter bestimmten Umständen die Einschränkung der Datenbearbeitung verlangen" },
      { title: "Widerspruchsrecht", desc: "Sie können der Bearbeitung Ihrer Daten widersprechen" },
      { title: "Datenübertragbarkeit", desc: "Sie können die Herausgabe Ihrer Daten in einem gängigen Format verlangen" },
    ],
    contactText: "Um diese Rechte auszuüben, wenden Sie sich bitte an:",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 10 - DATENSICHERHEIT
  // -----------------------------------------------------------------------------

  section10: {
    id: "sicherheit",
    number: "10",
    title: "Datensicherheit",
    highlightedText: "HTTPS-Verschlüsselung",
    text: "Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website verwendet HTTPS-Verschlüsselung für eine sichere Datenübertragung.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 11 - ÄNDERUNGEN
  // -----------------------------------------------------------------------------

  section11: {
    id: "aenderungen",
    number: "11",
    title: "Änderungen dieser Datenschutzerklärung",
    text: "Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die aktuelle Version ist auf unserer Website verfügbar. Bei wesentlichen Änderungen werden wir Sie in geeigneter Weise informieren.",
  },
};