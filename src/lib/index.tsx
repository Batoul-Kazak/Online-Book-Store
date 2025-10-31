import book1 from "@/app/assets/books/Stories/book1.jpg";
import book2 from "@/app/assets/books/Stories/book2.jpg";
import book3 from "@/app/assets/books/Stories/book3.jpg";
import book4 from "@/app/assets/books/Stories/german_stories.png";
import book5 from "@/app/assets/books/physics/physics.png";
import book6 from "@/app/assets/books/math/all_of_statistics.png";
import book7 from "@/app/assets/books/math/calculus.png";
import book8 from "@/app/assets/books/math/integral_calculus.png";
import book9 from "@/app/assets/books/math/linear_algebra.png";
import book10 from "@/app/assets/books/math/numerical_analysis.png";
import book11 from "@/app/assets/books/computer science/operating_system_concepts.png";
import book12 from "@/app/assets/books/computer science/Java Network Programming ( PDFDrive ).png";
import book13 from "@/app/assets/books/computer science/machine_learning_step_by_step_guide.png";
import book14 from "@/app/assets/books/computer science/computer_architecture.png";

import book15 from "@/app/assets/books/computer science/introduction to algorithms cover.png";
import book16 from "@/app/assets/books/Stories/karamaza brothers cover.png";
import book17 from "@/app/assets/books/math/linear algebra done right.png";
import book18 from "@/app/assets/books/Stories/Anna Karina Cover.png";

import profileImg1 from "@/app/assets/website/dolphine.png";
import profileImg2 from "@/app/assets/website/horse.jpeg";
import profileImg3 from "@/app/assets/website/horses.png";
import profileImg4 from "@/app/assets/website/mountain.png";
import profileImg5 from "@/app/assets/website/thumbnail (3).jpg";
import profileImg6 from "@/app/assets/website/thumbnail (15).jpg";
import profileImg7 from "@/app/assets/website/thumbnail (16).jpg";
import profileImg8 from "@/app/assets/website/thumbnail (17).jpg";
import profileImg9 from "@/app/assets/website/thumbnail (18).jpg";

import { Book } from "@/types";

export const appLinks = [
  { id: 1, key: "free_books", link: "/free-books" },
  { id: 2, key: "all_books", link: "/all-books" },
  { id: 3, key: "about_us", link: "/about" },
  { id: 4, key: "contact_us", link: "/contact-us" },
  { id: 5, key: "rate_us", link: "/rate-us" },
  { id: 6, key: "get_help", link: "/get-help" },
  { id: 7, key: "write_notes", link: "/rich-text-editor" },
];

export const allBooks: Book[] = [
  {
    id: "book_1",
    img: book1,
    title: {
      en: "Who Is There?",
      de: "Wer ist da?",
      ar: "من هناك؟",
      ru: "Кто там?"
    },
    type: "story",
    age: ">12",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Anonymous",
      de: "Anonym",
      ar: "مجهول",
      ru: "Аноним"
    },
    language: "english",
    rating: 3.8,
    price: 18,
    downloadURL: "/books/who-is-there.pdf",
    description: {
      en: "A mysterious tale of identity and belonging, where a young protagonist discovers hidden messages in an old house that challenge everything they thought they knew about their family. Perfect for readers who love psychological suspense with emotional depth.",
      de: "Eine mysteriöse Geschichte über Identität und Zugehörigkeit, in der eine junge Protagonistin verborgene Botschaften in einem alten Haus entdeckt, die alles infrage stellen, was sie über ihre Familie zu wissen glaubte. Perfekt für Leser, die psychologischen Suspense mit emotionaler Tiefe lieben.",
      ar: "حكاية غامضة عن الهوية والانتماء، حيث تكتشف بطلة شابة رسائل مخفية في منزل قديم تتحدى كل ما كانت تظنه عن عائلتها. مثالية للقراء الذين يحبون التشويق النفسي مع عمق عاطفي.",
      ru: "Таинственная история о поиске себя и принадлежности, в которой юная героиня находит скрытые послания в старом доме, ставящие под сомнение всё, что она знала о своей семье. Идеально для любителей психологического триллера с эмоциональной глубиной."
    },
    depthDescription: {
      en: "Set in the fog-drenched coastal town of Blackwater Cove, 'Who Is There?' unfolds through a mosaic of found objects: water-damaged letters sealed in a wall, a child’s diary written in cipher, and a series of Polaroids showing the same room across decades. The protagonist, 16-year-old Elise, begins to suspect her parents are not who they claim to be after uncovering a birth certificate with a different name. As she deciphers clues left by a previous occupant—a woman who vanished in the 1970s—the narrative blurs the line between inherited memory and constructed reality. The house itself becomes a character, its creaking floors and shifting shadows reflecting Elise’s psychological unraveling. Themes of adoption, erasure, and the fragility of familial bonds are explored with lyrical precision. The climax reveals a government witness protection program gone awry, forcing Elise to choose between truth and the only home she’s ever known. Haunting and introspective, this novel lingers like a half-remembered dream, challenging readers to question how much of their own identity is truly their own.",
      de: "Die Handlung spielt in der nebelverhangenen Küstenstadt Blackwater Cove. 'Wer ist da?' entfaltet sich durch ein Mosaik gefundener Gegenstände: wassergeschädigte Briefe in einer Wand, ein Kinder-Tagebuch in Geheimschrift und eine Serie Polaroids, die denselben Raum über Jahrzehnte zeigen. Die 16-jährige Protagonistin Elise beginnt zu ahnen, dass ihre Eltern nicht sind, wer sie vorgeben zu sein, nachdem sie eine Geburtsurkunde mit einem anderen Namen findet. Während sie Hinweise einer früheren Bewohnerin – einer Frau, die in den 1970ern verschwand – entschlüsselt, verwischt die Erzählung die Grenze zwischen vererbter Erinnerung und konstruierter Realität. Das Haus selbst wird zur Figur, dessen knarrende Dielen und wandelnde Schatten Elises psychischen Zusammenbruch widerspiegeln. Themen wie Adoption, Auslöschung und die Zerbrechlichkeit familiärer Bindungen werden mit lyrischer Präzision erforscht. Der Höhepunkt enthüllt ein missglücktes Zeugenschutzprogramm der Regierung und zwingt Elise, zwischen Wahrheit und dem einzigen Zuhause, das sie je kannte, zu wählen. Diese eindringliche, introspektive Erzählung bleibt wie ein halb vergessener Traum haften und fordert Leser auf, zu hinterfragen, wie viel ihrer eigenen Identität wirklich ihnen gehört.",
      ar: "تدور أحداث الرواية في بلدة بلاكواتر كوف الساحلية المغطاة بالضباب. تتكشف حكاية \"من هناك؟\" من خلال فسيفساء من الأشياء المكتشفة: رسائل تالفة من الماء مختومة داخل جدار، ومذكرة طفل مكتوبة بشفرة، وسلسلة صور بولارويد تُظهر نفس الغرفة عبر عقود. تبدأ البطلة إيليس (16 عامًا) في الشك بأن والديها ليسا كما يدّعيان بعد العثور على شهادة ميلاد باسم مختلف. بينما تفك رموز الأدلة التي تركتها ساكنة سابقة — امرأة اختفت في السبعينيات — تصبح الحدود بين الذاكرة الموروثة والواقع المُنشأ ضبابية. يتحول المنزل نفسه إلى شخصية، حيث تعكس أرضياته الصارخة والظلال المتغيرة تفكك إيليس النفسي. يتم استكشاف موضوعات التبني والمحو وهشاشة الروابط العائلية بدقة شعرية. يكشف الذروة عن برنامج حماية شهود حكومي فاشل، مما يجبر إيليس على الاختيار بين الحقيقة والمنزل الوحيد الذي عرفته. رواية مسكونة وتأملية تبقى في الذهن كحلم نصف منسي، وتدفع القراء إلى التشكيك في مدى انتماء هويتهم لأنفسهم حقًا.",
      ru: "Действие разворачивается в окутанном туманом прибрежном городке Блэквотер-Коув. «Кто там?» раскрывается через мозаику найденных предметов: письма, повреждённые водой и спрятанные в стене, дневник ребёнка, написанный шифром, и серия снимков Polaroid, показывающих одну и ту же комнату на протяжении десятилетий. Шестнадцатилетняя Элиз начинает подозревать, что её родители — не те, за кого себя выдают, обнаружив свидетельство о рождении с другим именем. Расшифровывая подсказки, оставленные предыдущей жилицей — женщиной, исчезнувшей в 1970-х, — повествование стирает грань между унаследованной памятью и сконструированной реальностью. Сам дом становится персонажем: его скрипучие полы и меняющиеся тени отражают психическое разрушение Элиз. Темы усыновления, стирания прошлого и хрупкости семейных уз исследуются с лирической точностью. Кульминация раскрывает провалившуюся программу защиты свидетелей, заставляя Элиз выбирать между правдой и единственным домом, который она знала. Эта пронзительная, созерцательная книга остаётся в памяти, как полузабытый сон, заставляя читателей задуматься, насколько их собственная идентичность действительно принадлежит им."
    }
  },
  {
    id: "book_2",
    img: book2,
    title: {
      en: "His Life Will Be Forever Changed",
      de: "Sein Leben wird sich für immer verändern",
      ar: "سيتغير حياته إلى الأبد",
      ru: "Его жизнь изменится навсегда"
    },
    type: "story",
    age: ">12",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "John Nash",
      de: "John Nash",
      ar: "جون ناش",
      ru: "Джон Нэш"
    },
    language: "english",
    rating: 2.9,
    price: 22,
    downloadURL: "/books/book2.pdf",
    description: {
      en: "A fictional narrative exploring the inner world of a mathematician grappling with reality and imagination. Though loosely inspired by real-life genius John Nash, this story blends drama, introspection, and the blurred lines between logic and madness.",
      de: "Eine fiktionale Erzählung, die die innere Welt eines Mathematikers erkundet, der mit Realität und Imagination ringt. Obwohl lose vom realen Genie John Nash inspiriert, verbindet diese Geschichte Drama, Introspektion und die verschwommenen Grenzen zwischen Logik und Wahnsinn.",
      ar: "سرد خيالي يستكشف العالم الداخلي لعالم رياضيات يتصارع مع الواقع والخيال. رغم أنه مستوحى بشكل غير مباشر من عبقري الحياة الواقعية جون ناش، فإن هذه القصة تمزج بين الدراما والتأمل والخطوط الضبابية بين المنطق والجنون.",
      ru: "Художественное повествование, исследующее внутренний мир математика, борющегося с реальностью и воображением. Хотя история вдохновлена реальным гением Джоном Нэшем, она сочетает драму, самоанализ и размытые границы между логикой и безумием."
    },
    depthDescription: {
      en: "'book2' plunges into the fractured psyche of Dr. Elias Vorne, a once-celebrated number theorist whose groundbreaking work on prime distribution earned him a Fields Medal nomination—before his mind began to fracture. The narrative alternates between clinical session transcripts, encrypted journal entries, and hallucinatory dialogues with 'The Constant,' a sentient mathematical entity that claims to govern the universe’s hidden symmetries. As Elias’s grip on consensus reality weakens, he becomes convinced that solving a particular Diophantine equation will unlock a parallel dimension where his deceased daughter still lives. The prose mirrors his mental state: early chapters are crisp and logical, while later sections spiral into recursive metaphors and typographical chaos. Supporting characters—a skeptical psychiatrist, a loyal graduate student, and a rival mathematician—serve as anchors to the real world, yet even they begin to question whether Elias’s delusions might contain a kernel of transcendent truth. The novel critiques the romanticization of 'mad genius' while honoring the profound loneliness of intellectual obsession. Its ambiguous ending leaves readers wondering: was it madness, revelation, or something in between?",
      de: "'book2' taucht ein in die gebrochene Psyche von Dr. Elias Vorne, einem einst gefeierten Zahlentheoretiker, dessen bahnbrechende Arbeit zur Primzahlverteilung ihn für die Fields-Medaille nominierte – bevor sein Geist zu bröckeln begann. Die Erzählung wechselt zwischen Transkripten klinischer Sitzungen, verschlüsselten Tagebucheinträgen und halluzinatorischen Dialogen mit 'Der Konstante', einer empfindungsfähigen mathematischen Entität, die behauptet, die verborgenen Symmetrien des Universums zu regieren. Während Elias' Halt an der gemeinsamen Realität schwindet, glaubt er, dass die Lösung einer bestimmten diophantischen Gleichung eine parallele Dimension öffnen wird, in der seine verstorbene Tochter noch lebt. Der Schreibstil spiegelt seinen Geisteszustand wider: frühe Kapitel sind klar und logisch, spätere Abschnitte verfallen in rekursive Metaphern und typografisches Chaos. Nebenfiguren – ein skeptischer Psychiater, eine loyale Doktorandin und ein konkurrierender Mathematiker – dienen als Anker zur Realität, beginnen aber selbst zu fragen, ob Elias' Wahn einen Funken transzendenter Wahrheit birgt. Der Roman kritisiert die Romantisierung des 'verrückten Genies', ehrt aber die tiefe Einsamkeit intellektueller Besessenheit. Das mehrdeutige Ende lässt Leser rätseln: War es Wahnsinn, Offenbarung oder etwas dazwischen?",
      ar: "تغوص رواية 'book2' في النفسية المتشظية للدكتور إلياس فورن، عالم نظرية الأعداد المشهور سابقًا، الذي رُشح لجائزة فيلدز بسبب عمله الرائد في توزيع الأعداد الأولية — قبل أن يبدأ عقله في التصدع. يتناوب السرد بين نصوص جلسات سريرية، ومدخلات يوميات مشفرة، وحوارات هلوسية مع 'الثابتة'، كيان رياضي واعٍ يدّعي أنه يحكم التناظرات الخفية للكون. مع تراجع قبضة إلياس على الواقع المشترك، يقتنع أن حل معادلة ديوفانتين معينة سيفتح بُعدًا موازيًا لا تزال فيه ابنته المتوفاة على قيد الحياة. يعكس الأسلوب حالته الذهنية: الفصول الأولى واضحة ومنطقية، بينما تتحول الأجزاء اللاحقة إلى استعارات متكررة وفوضى طباعية. الشخصيات الداعمة — طبيب نفسي متشكك، طالبة دراسات عليا مخلصة، وعالم رياضيات منافس — تعمل كمراسي للعالم الحقيقي، لكن حتى هم يبدؤون بالتساؤل عما إذا كانت هلوسات إلياس تحتوي على ذرة من الحقيقة المتعالية. تنتقد الرواية تأليه 'العبقرية المجنونة' بينما تكرم الوحدة العميقة للهوس الفكري. يترك النهاية الغامضة القارئ يتساءل: هل كان جنونًا، كشفًا، أم شيئًا بينهما؟",
      ru: "«book2» погружает в расколотую психику доктора Элиаса Ворна, некогда прославленного теоретика чисел, чья новаторская работа по распределению простых чисел принесла ему номинацию на медаль Филдса — до того как его разум начал трескаться. Повествование чередуется между расшифровками клинических сессий, зашифрованными записями в дневнике и галлюцинаторными диалогами с «Константой» — разумной математической сущностью, утверждающей, что управляет скрытыми симметриями Вселенной. По мере того как хватка Элиаса на общепринятую реальность ослабевает, он убеждается, что решение определённого диофантова уравнения откроет параллельное измерение, где его умершая дочь всё ещё жива. Проза отражает его психическое состояние: ранние главы чёткие и логичные, тогда как поздние превращаются в рекурсивные метафоры и типографический хаос. Второстепенные персонажи — скептически настроенный психиатр, преданная аспирантка и соперничающий математик — служат якорями в реальном мире, но даже они начинают задаваться вопросом, не содержит ли бред Элиаса зерно трансцендентной истины. Роман критикует романтизацию «безумного гения», но при этом чтит глубокое одиночество интеллектуальной одержимости. Неоднозначная концовка заставляет читателей задуматься: было ли это безумие, откровение или нечто среднее?"
    }
  },
  {
    id: "book_3",
    img: book3,
    title: {
      en: "Lost Boy",
      de: "Verlorener Junge",
      ar: "الولد الضائع",
      ru: "Потерянный мальчик"
    },
    type: "story",
    age: ">12",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "Anonymous",
      de: "Anonym",
      ar: "مجهول",
      ru: "Аноним"
    },
    language: "english",
    rating: 4.9,
    price: 16,
    downloadURL: "/books/lost-boy.pdf",
    description: {
      en: "A haunting coming-of-age story about a boy who vanishes during a summer storm and returns years later with no memory of where he’s been. Told through alternating perspectives, it examines trauma, memory, and the meaning of home.",
      de: "Eine eindringliche Coming-of-Age-Geschichte über einen Jungen, der während eines Sommersturms verschwindet und Jahre später ohne Erinnerung daran zurückkehrt, wo er gewesen ist. Erzählt aus wechselnden Perspektiven, untersucht sie Trauma, Erinnerung und die Bedeutung von Zuhause.",
      ar: "قصة مؤثرة عن بلوغ سن الرشد عن ولد يختفي خلال عاصفة صيفية ويعود بعد سنوات دون ذاكرة لأين كان. تُروى من خلال وجهات نظر متبادلة، وتستكشف الصدمة والذاكرة ومعنى الوطن.",
      ru: "Пронзительная история взросления о мальчике, исчезнувшем во время летней бури и вернувшемся спустя годы без воспоминаний о том, где он был. Рассказанная с разных точек зрения, она исследует травму, память и смысл дома."
    },
    depthDescription: {
      en: "In the summer of 1998, 12-year-old Leo vanished during a thunderstorm while chasing his dog into the Whisper Pines forest. Five years later, he reappears at the town’s bus station—barefoot, mute, and wearing clothes that don’t match any known manufacturer. 'Lost Boy' unfolds through three interwoven voices: Leo himself (whose memories return in fragmented, sensory flashes), his older sister Maya (now a forensic psychology student obsessed with his case), and Mr. Finch, the reclusive beekeeper who claims to have sheltered Leo in an off-grid cabin. As Maya digs deeper, she uncovers rumors of a secretive commune that disappeared from the same woods in the 1970s, and strange symbols carved into Leo’s forearm that match ancient Norse runic protection charms. The narrative masterfully explores dissociative amnesia, the unreliability of recovered memory, and the ethical dilemma of forcing someone to remember a past they may have buried for survival. Leo’s gradual reintegration is portrayed with heartbreaking nuance—his terror of thunderstorms, his instinctive knowledge of wild edible plants, his uncanny ability to calm agitated animals. The climax reveals he spent his missing years with a hermit suffering from PTSD, who taught him silence as a form of safety. Ultimately, the novel argues that 'home' is not a place, but the courage to be known—even when the truth is unbearable.",
      de: "Im Sommer 1998 verschwand der 12-jährige Leo während eines Gewitters, als er seinem Hund in den Whisper-Pines-Wald folgte. Fünf Jahre später taucht er am Busbahnhof der Stadt auf – barfuß, stumm und in Kleidung, die keinem bekannten Hersteller zugeordnet werden kann. 'Verlorener Junge' entfaltet sich durch drei miteinander verwobene Stimmen: Leo selbst (dessen Erinnerungen in fragmentierten, sensorischen Blitzen zurückkehren), seine ältere Schwester Maya (inzwischen Studentin der forensischen Psychologie, besessen von seinem Fall) und Mr. Finch, der zurückgezogen lebende Imker, der behauptet, Leo in einer abgelegenen Hütte beherbergt zu haben. Je tiefer Maya gräbt, desto mehr entdeckt sie Gerüchte über eine geheime Kommune, die in den 1970ern aus denselben Wäldern verschwand, und seltsame Symbole auf Leos Unterarm, die alten nordischen Runenschutzzeichen gleichen. Die Erzählung erforscht meisterhaft dissoziative Amnesie, die Unzuverlässigkeit wiedererlangter Erinnerungen und das ethische Dilemma, jemanden zu zwingen, sich an eine Vergangenheit zu erinnern, die er zum Überleben begraben hat. Leos schrittweise Wiedereingliederung wird mit herzzerreißender Nuance dargestellt – seine Angst vor Gewittern, sein instinktives Wissen über essbare Wildpflanzen, seine unheimliche Fähigkeit, aufgebrachte Tiere zu beruhigen. Der Höhepunkt enthüllt, dass er seine verschwundenen Jahre bei einem Einsiedler mit PTBS verbrachte, der ihm Schweigen als Form der Sicherheit beibrachte. Letztlich argumentiert der Roman, dass 'Zuhause' kein Ort ist, sondern der Mut, gesehen zu werden – selbst wenn die Wahrheit unerträglich ist.",
      ar: "في صيف 1998، اختفى ليو البالغ من العمر 12 عامًا خلال عاصفة رعدية أثناء مطاردته لكلبه في غابة ويسبر باينز. بعد خمس سنوات، ظهر مجددًا في محطة الحافلات بالمدينة — حافي القدمين، صامتًا، ويرتدي ملابس لا تتطابق مع أي مصنع معروف. تتكشف رواية \"الولد الضائع\" من خلال ثلاث أصوات متشابكة: ليو نفسه (الذي تعود ذكرياته في لمحات حسية مجزأة)، وأخته الكبرى مايا (طالبة علم النفس الشرعي المهووسة بحالته الآن)، والسيد فينش، النحال المنعزل الذي يدّعي أنه آواه في كوخ بعيد عن الشبكة. بينما تحفر مايا أعمق، تكتشف شائعات عن طائفة سرية اختفت من نفس الغابة في السبعينيات، ورموز غريبة منقوشة على ساعد ليو تتطابق مع تعويذات الحماية الرونية النوردية القديمة. تستكشف الرواية ببراعة فقدان الذاكرة التفارقي، وعدم موثوقية الذاكرة المستعادة، والمأزق الأخلاقي المتمثل في إجبار شخص على تذكر ماضٍ ربما دفنه من أجل البقاء. يُصوَّر اندماج ليو التدريجي ببراعة مؤلمة — خوفه من العواصف الرعدية، معرفته الغريزية بالنباتات البرية الصالحة للأكل، وقدرته الخارقة على تهدئة الحيوانات المضطربة. يكشف الذروة أنه قضا سنوات غيابه مع ناسك يعاني من اضطراب ما بعد الصدمة، علّمه الصمت كشكل من أشكال الأمان. في النهاية، تجادل الرواية بأن \"الوطن\" ليس مكانًا، بل الشجاعة ليُعرف المرء — حتى عندما تكون الحقيقة لا تُحتمل.",
      ru: "Летом 1998 года двенадцатилетний Лео исчез во время грозы, преследуя свою собаку в лесу Шёпотливые Сосны. Пять лет спустя он появляется на автобусной станции города — босиком, немой и в одежде, которую невозможно отнести ни к одному известному производителю. «Потерянный мальчик» раскрывается через три переплетённых голоса: самого Лео (его воспоминания возвращаются фрагментарными, сенсорными вспышками), его старшей сестры Маи (ныне студентки судебной психологии, одержимой его делом) и мистера Финча, затворника-пчеловода, утверждающего, что укрывал Лео в домике вне цивилизации. По мере того как Майя копает глубже, она находит слухи о секретной коммуне, исчезнувшей из тех же лесов в 1970-х, и странные символы, вырезанные на предплечье Лео, совпадающие с древними норвежскими руническими оберегами. Повествование мастерски исследует диссоциативную амнезию, ненадёжность восстановленной памяти и этическую дилемму принуждения кого-то вспомнить прошлое, которое он, возможно, похоронил ради выживания. Постепенная реинтеграция Лео изображена с душераздирающей тонкостью — его ужас перед грозами, инстинктивное знание съедобных диких растений, сверхъестественная способность успокаивать возбуждённых животных. Кульминация раскрывает, что пропавшие годы он провёл с отшельником, страдающим ПТСР, который научил его молчанию как форме безопасности. В конечном счёте, роман утверждает, что «дом» — это не место, а смелость быть узнанным — даже когда правда невыносима."
    }
  },
  {
    id: "book_4",
    img: book4,
    title: {
      en: "Collection of 25 Modern and Classic Stories",
      de: "Sammlung von 25 modernen und klassischen Geschichten",
      ar: "مجموعة من 25 قصة حديثة وكلاسيكية",
      ru: "Сборник из 25 современных и классических рассказов"
    },
    type: "story",
    age: ">13",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "John Nash",
      de: "John Nash",
      ar: "جون ناش",
      ru: "Джон Нэш"
    },
    language: "german",
    rating: 2.6,
    price: 25,
    downloadURL: "/books/collection-of-25-modern-and-classic-stories.pdf",
    description: {
      en: "An anthology featuring timeless tales from Kafka, Mann, and modern German voices, curated to showcase the evolution of narrative style across centuries. Ideal for students and lovers of European literature.",
      de: "Eine Anthologie mit zeitlosen Erzählungen von Kafka, Mann und modernen deutschen Stimmen, kuratiert, um die Entwicklung des Erzählstils über Jahrhunderte hinweg zu zeigen. Ideal für Studenten und Liebhaber der europäischen Literatur.",
      ar: "أنطولوجيا تضم حكايات خالدة لكافكا ومان وأصوات ألمانية حديثة، تم اختيارها لعرض تطور أسلوب السرد عبر القرون. مثالية للطلاب وعشاق الأدب الأوروبي.",
      ru: "Антология, включающая бессмертные рассказы Кафки, Манна и современных немецких авторов, составленная для демонстрации эволюции повествовательного стиля на протяжении веков. Идеальна для студентов и ценителей европейской литературы."
    },
    depthDescription: {
      en: "This meticulously curated anthology spans over 200 years of German-language storytelling, beginning with Goethe’s psychological depth in 'The Sorrows of Young Werther' and progressing through the existential dread of Kafka’s 'The Metamorphosis' and the moral complexity of Thomas Mann’s 'Mario and the Magician.' It includes lesser-known gems like Ingeborg Bachmann’s feminist parables and Christa Wolf’s postwar introspections, alongside contemporary voices such as Daniel Kehlmann and Jenny Erpenbeck, who tackle migration, digital alienation, and historical reckoning. Each story is prefaced by a scholarly yet accessible introduction that contextualizes its historical moment, literary innovations, and thematic concerns. The collection is organized thematically—'Identity,' 'Power,' 'Memory,' 'Absurdity'—revealing surprising dialogues across centuries: how Kafka’s bureaucratic nightmares echo in modern tales of algorithmic control, or how Mann’s critiques of fascism find new resonance in today’s political climate. Translations are newly commissioned for this volume, prioritizing linguistic rhythm over literal accuracy to preserve the musicality of the original German. Designed for both classroom use and solitary reading, it includes discussion questions and suggested further readings. More than a textbook, it’s a living archive of the German-speaking soul—its anxieties, its ironies, and its unyielding search for meaning in an often-incomprehensible world.",
      de: "Diese sorgfältig kuratierte Anthologie umspannt über 200 Jahre deutschsprachiger Erzählkunst, beginnend mit Goethes psychologischer Tiefe in 'Die Leiden des jungen Werthers' über die existenzielle Angst in Kafkas 'Die Verwandlung' bis hin zur moralischen Komplexität von Thomas Manns 'Mario und der Zauberer'. Sie enthält weniger bekannte Perlen wie Ingeborg Bachmanns feministische Parabeln und Christa Wolfs Nachkriegs-Introspektionen sowie zeitgenössische Stimmen wie Daniel Kehlmann und Jenny Erpenbeck, die Migration, digitale Entfremdung und historische Aufarbeitung thematisieren. Jede Geschichte wird von einer wissenschaftlichen, aber zugänglichen Einführung begleitet, die den historischen Kontext, literarische Innovationen und thematische Schwerpunkte erläutert. Die Sammlung ist thematisch gegliedert – 'Identität', 'Macht', 'Erinnerung', 'Absurdität' – und enthüllt überraschende Dialoge über Jahrhunderte hinweg: wie Kafkas bürokratische Albträume in modernen Erzählungen über algorithmische Kontrolle widerhallen oder wie Manns Faschismuskritik in der heutigen politischen Landschaft neue Resonanz findet. Die Übersetzungen wurden eigens für diesen Band angefertigt und priorisieren rhythmische Sprachmelodie gegenüber wörtlicher Genauigkeit, um die Musikalität des Originals zu bewahren. Konzipiert für den Unterricht und das einsame Lesen, enthält sie Diskussionsfragen und weiterführende Lektüreempfehlungen. Mehr als ein Lehrbuch ist es ein lebendiges Archiv der deutschsprachigen Seele – ihrer Ängste, Ironien und ihres unbeugsamen Sinnsuche in einer oft unverständlichen Welt.",
      ar: "تمتد هذه الأنطولوجيا المُعدة بعناية فائقة لأكثر من 200 عام من السرد باللغة الألمانية، بدءًا من العمق النفسي لدى غوته في \"آلام الفتى فيرتر\"، مرورًا بالرعب الوجودي في \"المسخ\" لكافكا، ووصولًا إلى التعقيد الأخلاقي في \"ماريو والساحر\" لتوماس مان. وتشمل جواهر أقل شهرة مثل أمثال إنجيبورغ باخمان النسوية وتأملات كريستا وولف ما بعد الحرب، إلى جانب أصوات معاصرة مثل دانيال كيلمان وجيني إربينبيك، اللذين يتناولان الهجرة والاغتراب الرقمي والمواجهة التاريخية. كل قصة يسبقها مقدمة أكاديمية لكنها سهلة، تضعها في سياقها التاريخي وتبين ابتكاراتها الأدبية واهتماماتها الموضوعية. تم تنظيم المجموعة موضوعيًا — \"الهوية\"، \"السلطة\"، \"الذاكرة\"، \"العبث\" — مما يكشف حوارات مدهشة عبر القرون: كيف تتردد كوابيس كافكا البيروقراطية في الحكايات الحديثة عن السيطرة الخوارزمية، أو كيف تجد انتقادات مان للفاشية صدى جديدًا في المناخ السياسي اليوم. الترجمات مُعدة خصيصًا لهذا المجلد، مع إعطاء الأولوية للإيقاع اللغوي على الدقة الحرفية للحفاظ على الموسيقى الأصلية للغة الألمانية. صُممت للاستخدام في الفصل الدراسي والقراءة الفردية، وتشمل أسئلة للنقاش وقراءات مقترحة للمزيد. إنها أكثر من كتاب دراسي — إنها أرشيف حي للروح الناطقة بالألمانية — قلقتها، سخريتها، وبحثها العنيد عن المعنى في عالم غالبًا ما يكون غير مفهوم.",
      ru: "Эта тщательно составленная антология охватывает более 200 лет немецкоязычного повествования: от психологической глубины Гёте в «Страданиях юного Вертера» до экзистенциального ужаса Кафки в «Превращении» и моральной сложности Томаса Манна в «Марио и волшебник». В неё включены менее известные жемчужины, такие как феминистские притчи Ингеборг Бахман и послевоенные размышления Кристи Вольф, а также современные авторы вроде Даниэля Кельмана и Дженни Эрпенбек, затрагивающие темы миграции, цифрового отчуждения и исторического переосмысления. Каждый рассказ предваряется учёным, но доступным введением, раскрывающим исторический контекст, литературные новаторства и тематические аспекты. Сборник организован по темам — «Идентичность», «Власть», «Память», «Абсурд» — и раскрывает неожиданные диалоги сквозь века: как бюрократические кошмары Кафки находят отклик в современных рассказах об алгоритмическом контроле, или как критика фашизма у Манна обретает новое звучание в сегодняшней политической обстановке. Переводы специально подготовлены для этого издания с приоритетом ритмической музыкальности над буквальной точностью, чтобы сохранить мелодичность оригинального немецкого языка. Созданная как для учебных целей, так и для индивидуального чтения, антология включает вопросы для обсуждения и рекомендации для дальнейшего чтения. Это больше, чем учебник — это живой архив души немецкоязычного мира: его тревог, иронии и неукротимого поиска смысла в часто непостижимом мире."
    }
  },
  {
    id: "book_5",
    img: book5,
    title: {
      en: "Physics for Game Developers",
      de: "Physik für Spieleentwickler",
      ar: "الفيزياء لمطوري الألعاب",
      ru: "Физика для разработчиков игр"
    },
    type: "physics",
    age: ">16",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "David M. Bourg",
      de: "David M. Bourg",
      ar: "ديفيد إم. بورغ",
      ru: "Дэвид М. Бург"
    },
    language: "german",
    rating: 2.6,
    price: 45,
    downloadURL: "/books/physics-for-game-developers.pdf",
    description: {
      en: "A practical guide that teaches how to implement real-world physics—like collision detection, rigid body dynamics, and fluid simulation—into video games using code examples and clear mathematical explanations.",
      de: "Ein praktischer Leitfaden, der zeigt, wie man reale Physik – wie Kollisionserkennung, Starrkörperdynamik und Flüssigkeitssimulation – mithilfe von Codebeispielen und klaren mathematischen Erklärungen in Videospiele implementiert.",
      ar: "دليل عملي يعلّم كيفية تنفيذ فيزياء الواقع — مثل كشف التصادم، ديناميكيات الأجسام الصلبة، ومحاكاة السوائل — في ألعاب الفيديو باستخدام أمثلة برمجية وشروحات رياضية واضحة.",
      ru: "Практическое руководство, обучающее внедрению реальной физики — такой как обнаружение столкновений, динамика твёрдых тел и моделирование жидкостей — в видеоигры с помощью примеров кода и понятных математических объяснений."
    },
    depthDescription: {
      en: "'Physics for Game Developers' bridges the gap between theoretical physics and real-time game engines by translating complex principles into efficient, stable code. The book begins with Newtonian mechanics—covering force, mass, acceleration, and torque—before advancing to rotational dynamics, where it explains moment of inertia tensors and quaternion-based orientation to avoid gimbal lock. A full chapter is dedicated to collision detection algorithms, from simple bounding spheres to swept AABBs and the Gilbert-Johnson-Keerthi (GJK) algorithm for convex shapes, with performance trade-offs clearly analyzed. Fluid simulation is tackled through smoothed-particle hydrodynamics (SPH), with optimizations for GPU implementation. Crucially, the author emphasizes numerical stability: how to prevent energy drift in integrators, handle time-step inconsistencies, and manage constraint stacking in ragdoll systems. Every concept is accompanied by C++ snippets that can be dropped into engines like Unity or Unreal with minimal adaptation. Case studies include realistic vehicle suspension, destructible environments, and cloth simulation using mass-spring systems. The second half explores advanced topics like inverse kinematics for character animation and aerodynamic lift for flight simulators. Written for developers with basic calculus knowledge, it avoids excessive formalism while preserving mathematical rigor—making it the definitive practical reference for indie and AAA studios alike.",
      de: "'Physik für Spieleentwickler' schlägt eine Brücke zwischen theoretischer Physik und Echtzeit-Game-Engines, indem es komplexe Prinzipien in effizienten, stabilen Code übersetzt. Das Buch beginnt mit der Newtonschen Mechanik – Kräfte, Masse, Beschleunigung und Drehmoment – bevor es zur Rotationsdynamik übergeht, wo Trägheitstensoren und quaternionenbasierte Orientierung erklärt werden, um Gimbal Lock zu vermeiden. Ein ganzes Kapitel widmet sich Kollisionserkennungsalgorithmen – von einfachen Hüllkugeln über Swept AABBs bis hin zum Gilbert-Johnson-Keerthi (GJK)-Algorithmus für konvexe Formen – mit klarer Analyse der Performance-Kompromisse. Flüssigkeitssimulation wird mittels Smoothed-Particle-Hydrodynamics (SPH) behandelt, mit Optimierungen für GPU-Implementierung. Der Autor betont entscheidend die numerische Stabilität: wie Energie-Drift in Integratoren verhindert, Zeitschritt-Inkonsistenzen gehandhabt und Constraint-Stacking in Ragdoll-Systemen verwaltet wird. Jedes Konzept wird von C++-Schnipseln begleitet, die mit minimaler Anpassung in Engines wie Unity oder Unreal eingefügt werden können. Fallstudien umfassen realistische Fahrzeugaufhängungen, zerstörbare Umgebungen und Stoffsimulation mittels Masse-Feder-Systemen. Die zweite Hälfte erforscht fortgeschrittene Themen wie inverse Kinematik für Charakteranimation und aerodynamischen Auftrieb für Flugsimulatoren. Geschrieben für Entwickler mit Grundkenntnissen in Analysis, vermeidet es übermäßigen Formalismus bei gleichzeitiger Wahrung mathematischer Strenge – und ist somit die definitive praktische Referenz für Indie- und AAA-Studios gleichermaßen.",
      ar: "يُجسّد كتاب \"الفيزياء لمطوري الألعاب\" جسرًا بين الفيزياء النظرية ومحركات الألعاب الزمنية الحقيقية من خلال ترجمة المبادئ المعقدة إلى كود فعّال ومستقر. يبدأ الكتاب بميكانيكا نيوتن — تغطي القوة والكتلة والتسارع والعزم — قبل التقدم إلى ديناميكيات الدوران، حيث يشرح موترات عزم القصور الذاتي والتوجه القائم على الكواتيرنيون لتجنب قفل الجيمبال. يُكرّس فصل كامل لخوارزميات كشف التصادم، من كرات التحديد البسيطة إلى محاور الربط المحيطة المتحركة (Swept AABBs) وخوارزمية جيلبرت-جونسون-كيرثي (GJK) للأشكال المحدبة، مع تحليل واضح للمفاضلات الأدائية. يتم التعامل مع محاكاة السوائل من خلال ديناميكا الجسيمات المُلساء (SPH)، مع تحسينات للتنفيذ على وحدة معالجة الرسومات (GPU). ويؤكد المؤلف بشكل حاسم على الاستقرار العددي: كيفية منع انجراف الطاقة في المُكاملات، والتعامل مع عدم اتساق خطوات الزمن، وإدارة تراكم القيود في أنظمة الدمى المفصلية (Ragdoll). يرافق كل مفهوم مقاطع كود بلغة C++ يمكن إدخالها في محركات مثل Unity أو Unreal مع الحد الأدنى من التكيف. تشمل دراسات الحالة نظام تعليق مركبات واقعي، وبيئات قابلة للتدمير، ومحاكاة الأقمشة باستخدام أنظمة الكتلة-الزنبرك. يستكشف النصف الثاني مواضيع متقدمة مثل الحركة العكسية لتحريك الشخصيات والرفع الديناميكي الهوائي لمحاكيات الطيران. كُتب للمطورين ذوي المعرفة الأساسية بالتفاضل والتكامل، ويتجنب الشكلانية المفرطة مع الحفاظ على الدقة الرياضية — مما يجعله المرجع العملي النهائي لاستوديوهات الألعاب المستقلة وAAA على حد سواء.",
      ru: "«Физика для разработчиков игр» устраняет разрыв между теоретической физикой и игровыми движками реального времени, переводя сложные принципы в эффективный и стабильный код. Книга начинается с ньютоновской механики — охватывая силу, массу, ускорение и крутящий момент — прежде чем перейти к динамике вращения, где объясняются тензоры момента инерции и ориентация на основе кватернионов для избежания блокировки кардана. Целая глава посвящена алгоритмам обнаружения столкновений — от простых ограничивающих сфер до Swept AABB и алгоритма Гилберта-Джонсона-Кирти (GJK) для выпуклых фигур — с чётким анализом компромиссов производительности. Моделирование жидкостей рассматривается через метод сглаженных частиц (SPH) с оптимизациями для реализации на GPU. Автор особо подчёркивает численную стабильность: как предотвратить дрейф энергии в интеграторах, справляться с несогласованностью временных шагов и управлять наложением ограничений в системах ragdoll. Каждая концепция сопровождается фрагментами кода на C++, которые можно вставить в движки вроде Unity или Unreal с минимальной адаптацией. Тематические исследования включают реалистичную подвеску автомобилей, разрушаемые окружения и симуляцию ткани с использованием масс-пружинных систем. Во второй половине рассматриваются продвинутые темы, такие как обратная кинематика для анимации персонажей и аэродинамическая подъёмная сила для авиасимуляторов. Написанная для разработчиков с базовыми знаниями математического анализа, книга избегает излишнего формализма, сохраняя при этом математическую строгость, что делает её окончательным практическим справочником как для инди-, так и для AAA-студий."
    }
  },
  {
    id: "book_6",
    img: book6,
    title: {
      en: "All of Statistics: A Concise Course in Statistical Inference",
      de: "Alle Statistik: Ein kompakter Kurs in statistischer Inferenz",
      ar: "كل الإحصاء: دورة موجزة في الاستدلال الإحصائي",
      ru: "Вся статистика: краткий курс статистического вывода"
    },
    type: "math",
    age: ">14",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Larry Wasserman",
      de: "Larry Wasserman",
      ar: "لاري واسرمان",
      ru: "Ларри Вассерман"
    },
    language: "german",
    rating: 2.6,
    price: 65,
    downloadURL: "/books/all-of-statistics-a-concise-course-in-statistical-inference.pdf",
    description: {
      en: "A rigorous yet accessible introduction to statistical theory, covering probability, inference, regression, and machine learning foundations. Designed for students with basic calculus and linear algebra knowledge.",
      de: "Eine rigorose, aber zugängliche Einführung in die statistische Theorie, die Wahrscheinlichkeit, Inferenz, Regression und Grundlagen des maschinellen Lernens abdeckt. Entwickelt für Studierende mit Grundkenntnissen in Analysis und linearer Algebra.",
      ar: "مقدمة صارمة ولكن سهلة لنظرية الإحصاء، تغطي الاحتمالات والاستدلال والانحدار وأسس تعلم الآلة. مصممة للطلاب ذوي المعرفة الأساسية بالتفاضل والتكامل والجبر الخطي.",
      ru: "Строгое, но доступное введение в статистическую теорию, охватывающее вероятность, статистический вывод, регрессию и основы машинного обучения. Предназначено для студентов с базовыми знаниями математического анализа и линейной алгебры."
    },
    depthDescription: {
      en: "Larry Wasserman’s 'All of Statistics' achieves the near-impossible: compressing a graduate-level statistics curriculum into a single, coherent volume without sacrificing depth. It begins with measure-theoretic probability—defining sigma-algebras, random variables, and convergence modes (almost sure, in probability, in distribution)—before transitioning to statistical inference via the Neyman-Pearson paradigm. The treatment of hypothesis testing includes uniformly most powerful tests, likelihood ratio tests, and the subtle distinction between statistical and practical significance. Regression is explored from both classical (OLS, GLS) and modern (LASSO, ridge, elastic net) perspectives, with geometric interpretations of regularization. A standout chapter on nonparametric methods covers kernel density estimation, splines, and the bootstrap, while the machine learning section rigorously frames classification as risk minimization under 0-1 loss. The book uniquely integrates Bayesian and frequentist viewpoints, showing how priors can be interpreted as penalized likelihoods. Advanced topics include VC dimension for model complexity, EM algorithm for missing data, and causal inference via potential outcomes. Every theorem is accompanied by intuitive explanations and counterexamples (e.g., why unbiased estimators can be inadmissible). Exercises range from theoretical proofs to R-based simulations that visualize bias-variance tradeoffs. Though concise, it serves as both a first course and a lifelong reference—essential for data scientists who refuse to treat statistics as a black box.",
      de: "Larry Wassermans 'All of Statistics' gelingt das beinahe Unmögliche: ein Statistik-Curriculum auf Graduiertenniveau in einem einzigen, kohärenten Band zu verdichten, ohne an Tiefe einzubüßen. Es beginnt mit der maßtheoretischen Wahrscheinlichkeit – Definition von Sigma-Algebren, Zufallsvariablen und Konvergenzmodi (fast sicher, in Wahrscheinlichkeit, in Verteilung) – bevor es über das Neyman-Pearson-Paradigma zur statistischen Inferenz übergeht. Die Behandlung des Hypothesentests umfasst gleichmäßig mächtigste Tests, Likelihood-Quotienten-Tests und die subtile Unterscheidung zwischen statistischer und praktischer Signifikanz. Regression wird sowohl aus klassischer (OLS, GLS) als auch moderner (LASSO, Ridge, Elastic Net) Perspektive betrachtet, mit geometrischen Interpretationen der Regularisierung. Ein herausragendes Kapitel zu nichtparametrischen Methoden behandelt Kerndichteschätzung, Splines und Bootstrap, während der maschinelle Lernabschnitt Klassifikation rigoros als Risikominimierung unter 0-1-Verlust formuliert. Das Buch integriert einzigartig bayessche und frequentistische Sichtweisen und zeigt, wie Prior-Verteilungen als penalisierte Likelihoods interpretiert werden können. Fortgeschrittene Themen umfassen die VC-Dimension für Modellkomplexität, den EM-Algorithmus für fehlende Daten und kausale Inferenz über potenzielle Ergebnisse. Jeder Satz wird von intuitiven Erklärungen und Gegenbeispielen begleitet (z. B. warum erwartungstreue Schätzer inadmissibel sein können). Die Übungen reichen von theoretischen Beweisen bis hin zu R-basierten Simulationen, die Bias-Varianz-Kompromisse visualisieren. Obwohl kompakt, dient es sowohl als erster Kurs als auch als lebenslange Referenz – unverzichtbar für Data Scientists, die die Statistik nicht als Black Box behandeln wollen.",
      ar: "يحقق كتاب لاري واسرمان \"كل الإحصاء\" المستحيل تقريبًا: ضغط منهج إحصاء على مستوى الدراسات العليا في مجلد واحد متماسك دون التضحية بالعمق. يبدأ بالاحتمال القائم على نظرية القياس — تعريف سيغما-الجبر، المتغيرات العشوائية، وأنماط التقارب (تقريبًا مؤكد، في الاحتمال، في التوزيع) — قبل الانتقال إلى الاستدلال الإحصائي عبر مبدأ نيمان-بيرسون. يشمل علاج اختبار الفرضيات الاختبارات الموحدة الأكثر قوة، واختبارات نسبة الاحتمال، والتمييز الدقيق بين الأهمية الإحصائية والأهمية العملية. يتم استكشاف الانحدار من منظورين كلاسيكي (OLS، GLS) وحديث (LASSO، Ridge، Elastic Net)، مع تفسيرات هندسية للتنظيم. يغطي فصل بارز حول الطرق غير المعلمية تقدير كثافة النواة، والمنحنيات المُلساء (Splines)، وطريقة البوتستراب، بينما يصوغ قسم تعلم الآلة التصنيف بدقة كتقليل المخاطر تحت خسارة 0-1. يدمج الكتاب بشكل فريد وجهتي النظر البايزية والتكرارية، ويوضح كيف يمكن تفسير التوزيعات السابقة كاحتمالات معاقبة. تشمل الموضوعات المتقدمة بُعد VC لتعقيد النموذج، وخوارزمية EM للبيانات المفقودة، والاستدلال السببي عبر النتائج المحتملة. يرافق كل مبرهنة شروحات بديهية وأمثلة مضادة (مثل سبب عدم قبول المقدرات غير المتحيزة). تتراوح التمارين من البراهين النظرية إلى محاكاة تعتمد على R لتوضيح مقايضات التحيز والتباين. وعلى الرغم من اختصاره، فإنه يعمل كمقرر أول ومصدر مرجعي مدى الحياة — ضروري لعلماء البيانات الذين يرفضون معاملة الإحصاء كصندوق أسود.",
      ru: "«Вся статистика» Ларри Вассермана достигает почти невозможного: сжимает учебную программу по статистике на уровне магистратуры в один связный том, не жертвуя глубиной. Она начинается с теоретико-вероятностного подхода — определения сигма-алгебр, случайных величин и видов сходимости (почти наверняка, по вероятности, по распределению) — прежде чем перейти к статистическому выводу через парадигму Неймана-Пирсона. Рассмотрение проверки гипотез включает равномерно наиболее мощные критерии, отношения правдоподобия и тонкое различие между статистической и практической значимостью. Регрессия исследуется как с классической (OLS, GLS), так и с современной (LASSO, гребневая, эластичная сеть) точек зрения, с геометрической интерпретацией регуляризации. Отдельная глава по непараметрическим методам охватывает оценку плотности ядра, сплайны и бутстреп, тогда как раздел по машинному обучению строго формулирует классификацию как минимизацию риска при потере 0-1. Книга уникально интегрирует байесовский и частотный подходы, показывая, как априорные распределения можно интерпретировать как штрафованные функции правдоподобия. Продвинутые темы включают размерность Вапника-Червоненкиса для сложности модели, алгоритм EM для пропущенных данных и причинно-следственный вывод через потенциальные исходы. Каждая теорема сопровождается интуитивными объяснениями и контрпримерами (например, почему несмещённые оценки могут быть неприемлемыми). Упражнения варьируются от теоретических доказательств до симуляций на R, визуализирующих компромисс между смещением и дисперсией. Несмотря на краткость, книга служит как первым курсом, так и lifelong reference — необходима для специалистов по данным, отказывающихся рассматривать статистику как чёрный ящик."
    }
  },
  {
    id: "book_7",
    img: book7,
    title: {
      en: "Calculus III",
      de: "Analysis III",
      ar: "التفاضل والتكامل III",
      ru: "Математический анализ III"
    },
    type: "math",
    age: ">17",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Anonymous",
      de: "Anonym",
      ar: "مجهول",
      ru: "Аноним"
    },
    language: "german",
    rating: 4.7,
    price: 0,
    downloadURL: "/books/calculus-iii.pdf",
    description: {
      en: "A comprehensive open-access textbook covering multivariable calculus, vector fields, partial derivatives, and multiple integrals. Ideal for university level STEM students seeking a clear, example-driven resource.",
      de: "Ein umfassendes Open-Access-Lehrbuch über mehrdimensionale Analysis, Vektorfelder, partielle Ableitungen und Mehrfachintegrale. Ideal für Studierende der MINT-Fächer auf Universitätsniveau, die eine klare, beispielorientierte Ressource suchen.",
      ar: "كتاب مدرسي مفتوح المصدر شامل يغطي التفاضل والتكامل متعدد المتغيرات، والحقول المتجهة، والمشتقات الجزئية، والتكاملات المتعددة. مثالي لطلاب العلوم والتكنولوجيا والهندسة والرياضيات على مستوى الجامعة الباحثين عن مورد واضح يعتمد على الأمثلة.",
      ru: "Полный учебник с открытым доступом, охватывающий многомерный анализ, векторные поля, частные производные и кратные интегралы. Идеален для студентов STEM-специальностей, ищущих понятный и насыщенный примерами ресурс."
    },
    depthDescription: {
      en: "This open-access 'Calculus III' textbook masterfully extends single-variable concepts into higher dimensions with an emphasis on geometric intuition and physical application. It begins with vectors in ℝ³, dot and cross products, and equations of lines and planes, then progresses to partial derivatives, directional derivatives, and the gradient as the direction of steepest ascent. The chain rule is generalized for multivariable functions, with applications to implicit differentiation and Jacobian matrices. Multiple integrals are explored in Cartesian, cylindrical, and spherical coordinates, with vivid examples like computing the mass of a non-uniform asteroid or the center of gravity of a turbine blade. Vector calculus forms the core: line integrals (work done by a force field), surface integrals (flux through a membrane), and the crowning achievements—Green’s, Stokes’, and Gauss’s theorems—which unify circulation, curl, and divergence into a coherent framework. Each theorem is motivated by physical laws: Gauss’s law in electromagnetism, conservation of mass in fluid dynamics. The text includes 3D visualizations of vector fields, contour plots, and parametric surfaces, alongside step-by-step solutions to complex integrals. Real-world modeling problems draw from electromagnetism, thermodynamics, and robotics. Designed for self-study, it features 'concept checks' after each section and a solutions manual for odd-numbered problems. As a free resource, it democratizes access to rigorous mathematical training for students worldwide.",
      de: "Dieses Open-Access-Lehrbuch 'Analysis III' erweitert meisterhaft eindimensionale Konzepte in höhere Dimensionen mit Schwerpunkt auf geometrischer Intuition und physikalischer Anwendung. Es beginnt mit Vektoren in ℝ³, Skalar- und Kreuzprodukten sowie Gleichungen von Geraden und Ebenen, bevor es zu partiellen Ableitungen, Richtungsableitungen und dem Gradienten als Richtung des steilsten Anstiegs übergeht. Die Kettenregel wird für mehrvariable Funktionen verallgemeinert, mit Anwendungen auf implizite Differentiation und Jacobi-Matrizen. Mehrfachintegrale werden in kartesischen, zylindrischen und sphärischen Koordinaten behandelt, mit anschaulichen Beispielen wie der Berechnung der Masse eines inhomogenen Asteroiden oder des Schwerpunkts einer Turbinenschaufel. Die Vektoranalysis bildet den Kern: Kurvenintegrale (Arbeit eines Kraftfeldes), Oberflächenintegrale (Fluss durch eine Membran) und die Höhepunkte – die Sätze von Green, Stokes und Gauß –, die Zirkulation, Rotation und Divergenz in einen kohärenten Rahmen vereinen. Jeder Satz wird durch physikalische Gesetze motiviert: Gaußsches Gesetz in der Elektrodynamik, Massenerhaltung in der Strömungsmechanik. Der Text enthält 3D-Visualisierungen von Vektorfeldern, Höhenlinien und parametrischen Flächen sowie schrittweise Lösungen komplexer Integrale. Anwendungsbeispiele stammen aus Elektromagnetismus, Thermodynamik und Robotik. Für das Selbststudium konzipiert, bietet es nach jedem Abschnitt 'Konzeptchecks' und ein Lösungsheft für ungerade Aufgaben. Als kostenlose Ressource demokratisiert es den Zugang zu rigoroser mathematischer Ausbildung weltweit.",
      ar: "يقوم هذا الكتاب المدرسي المفتوح المصدر \"التفاضل والتكامل III\" بتوسيع مفاهيم المتغير الواحد بشكل متقن إلى أبعاد أعلى مع التركيز على الحدس الهندسي والتطبيق الفيزيائي. يبدأ بالمتجهات في ℝ³، والضرب القياسي والاتجاهي، ومعادلات الخطوط والمستويات، ثم يتقدم إلى المشتقات الجزئية، والمشتقات الاتجاهية، والتدرج كاتجاه الصعود الأقصى. يتم تعميم قاعدة السلسلة للدوال متعددة المتغيرات، مع تطبيقات على الاشتقاق الضمني ومصفوفات جاكوبي. يتم استكشاف التكاملات المتعددة في الإحداثيات الديكارتية والأسطوانية والكروية، مع أمثلة حية مثل حساب كتلة كويكب غير منتظم أو مركز ثقل شفرة توربين. يشكل التفاضل والتكامل المتجهي جوهر الكتاب: التكاملات الخطية (الشغل المنجز بواسطة حقل قوة)، والتكاملات السطحية (التدفق عبر غشاء)، وأبرز الإنجازات — نظريات جرين وستوكس وغاوس — التي توحد الدوران والتموج والتباعد في إطار متماسك. يتم تحفيز كل مبرهنة بقوانين فيزيائية: قانون غاوس في الكهرومغناطيسية، وحفظ الكتلة في ديناميكيات الموائع. يحتوي النص على تصورات ثلاثية الأبعاد للحقول المتجهة، ورسومات الكنتور، والأسطح البارامترية، إلى جانب حلول خطوة بخطوة للتكاملات المعقدة. تستمد مشاكل النمذجة الواقعية من الكهرومغناطيسية والديناميكا الحرارية والروبوتات. صُمم للدراسة الذاتية، ويتميز بـ\"فحوصات المفاهيم\" بعد كل قسم ودليل حلول للمسائل ذات الأرقام الفردية. كمورد مجاني، فإنه يعمم الوصول إلى التدريب الرياضي الصارم للطلاب في جميع أنحاء العالم.",
      ru: "Этот учебник с открытым доступом «Математический анализ III» мастерски расширяет одномерные концепции до высших измерений с акцентом на геометрическую интуицию и физические приложения. Он начинается с векторов в ℝ³, скалярного и векторного произведений, уравнений прямых и плоскостей, затем переходит к частным производным, производным по направлению и градиенту как направлению наискорейшего роста. Правило дифференцирования сложной функции обобщается на многомерные функции с приложениями к неявному дифференцированию и якобианам. Кратные интегралы рассматриваются в декартовых, цилиндрических и сферических координатах на ярких примерах: вычисление массы неоднородного астероида или центра тяжести лопасти турбины. Векторный анализ составляет ядро книги: криволинейные интегралы (работа силового поля), поверхностные интегралы (поток через мембрану) и кульминационные теоремы — Грина, Стокса и Гаусса — которые объединяют циркуляцию, ротор и дивергенцию в единую систему. Каждая теорема мотивирована физическими законами: закон Гаусса в электромагнетизме, сохранение массы в гидродинамике. Текст включает 3D-визуализации векторных полей, линии уровня и параметрические поверхности, а также пошаговые решения сложных интегралов. Прикладные задачи взяты из электромагнетизма, термодинамики и робототехники. Созданный для самостоятельного изучения, он содержит «проверки концепций» после каждого раздела и руководство по решению нечётных задач. Как бесплатный ресурс, он демократизирует доступ к строгой математической подготовке для студентов по всему миру."
    }
  },
  {
    id: "book_8",
    img: book8,
    title: {
      en: "Integral Calculus",
      de: "Integralrechnung",
      ar: "التكامل",
      ru: "Интегральное исчисление"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Anonymous",
      de: "Anonym",
      ar: "مجهول",
      ru: "Аноним"
    },
    language: "german",
    rating: 2.6,
    price: 0,
    downloadURL: "/books/integral-calculus.pdf",
    description: {
      en: "This free educational resource walks learners through techniques of integration, applications in physics and geometry, and improper integrals with step-by-step solutions and practice problems.",
      de: "Diese kostenlose Lernressource führt Lernende schrittweise durch Integrationstechniken, Anwendungen in Physik und Geometrie sowie uneigentliche Integrale – mit detaillierten Lösungen und Übungsaufgaben.",
      ar: "يأخذك هذا المورد التعليمي المجاني عبر تقنيات التكامل، والتطبيقات في الفيزياء والهندسة، والتكاملات غير الصحيحة مع حلول خطوة بخطوة ومسائل تدريبية.",
      ru: "Этот бесплатный учебный ресурс пошагово знакомит учащихся с методами интегрирования, приложениями в физике и геометрии, а также с несобственными интегралами, с подробными решениями и практическими задачами."
    },
    depthDescription: {
      en: "'Integral Calculus' transforms the often-daunting process of integration into a structured, intuitive journey. It begins with the Fundamental Theorem of Calculus, establishing the deep connection between differentiation and area under a curve, then systematically explores techniques: u-substitution, integration by parts (with the LIATE heuristic), trigonometric integrals, partial fractions, and trigonometric substitution. Each method is illustrated with geometric interpretations—e.g., integration by parts as 'area decomposition'—and common pitfalls are highlighted (like forgetting absolute values in log integrals). Applications span physics (work, fluid pressure, center of mass), geometry (arc length, surface area of revolution), and probability (cumulative distribution functions). Improper integrals are treated with care, distinguishing between Type I (infinite intervals) and Type II (discontinuous integrands), with convergence tests like comparison and limit comparison. The final chapters introduce numerical integration (trapezoidal rule, Simpson’s rule) and special functions (gamma, beta) that arise in advanced contexts. Historical notes trace the development of integration from Archimedes’ method of exhaustion to Leibniz’s infinitesimals, humanizing the mathematics. Every chapter includes 'real-world modeling' sections: calculating the volume of a wine barrel, the force on a dam, or the expected value of a random variable. With over 500 solved examples and 1,200 exercises (with answers to odd problems), this free text rivals commercial textbooks in depth and clarity.",
      de: "'Integralrechnung' verwandelt den oft einschüchternden Integrationsprozess in eine strukturierte, intuitive Reise. Sie beginnt mit dem Hauptsatz der Analysis, der die tiefe Verbindung zwischen Differentiation und Fläche unter einer Kurve herstellt, und erkundet dann systematisch Techniken: Substitution, partielle Integration (mit der LIATE-Heuristik), trigonometrische Integrale, Partialbruchzerlegung und trigonometrische Substitution. Jede Methode wird mit geometrischen Interpretationen veranschaulicht – z. B. partielle Integration als 'Flächenzerlegung' – und häufige Fehlerquellen werden hervorgehoben (wie das Vergessen von Beträgen bei Logarithmus-Integralen). Anwendungen reichen von Physik (Arbeit, Flüssigkeitsdruck, Schwerpunkt) über Geometrie (Bogenlänge, Oberfläche von Rotationskörpern) bis hin zu Wahrscheinlichkeit (Verteilungsfunktionen). Uneigentliche Integrale werden sorgfältig behandelt, mit Unterscheidung zwischen Typ I (unendliche Intervalle) und Typ II (unstetige Integranden), sowie Konvergenztests wie Vergleichs- und Limesvergleichskriterium. Die letzten Kapitel führen numerische Integration (Trapezregel, Simpson-Regel) und spezielle Funktionen (Gamma, Beta) ein, die in fortgeschrittenen Kontexten auftreten. Historische Anmerkungen verfolgen die Entwicklung der Integration von Archimedes’ Exhaustionsmethode bis zu Leibniz’ Infinitesimalen und verleihen der Mathematik Menschlichkeit. Jedes Kapitel enthält 'Modellierung der realen Welt'-Abschnitte: Berechnung des Volumens eines Weinfasses, der Kraft auf einen Damm oder des Erwartungswerts einer Zufallsvariablen. Mit über 500 gelösten Beispielen und 1.200 Übungsaufgaben (mit Lösungen zu ungeraden Aufgaben) steht dieser kostenlose Text kommerziellen Lehrbüchern in Tiefe und Klarheit in nichts nach.",
      ar: "يحوّل كتاب \"التكامل\" العملية المرهقة غالبًا للتكامل إلى رحلة منظمة وبديهية. يبدأ بالمبرهنة الأساسية للتفاضل والتكامل، التي ترسخ العلاقة العميقة بين الاشتقاق والمساحة تحت المنحنى، ثم يستكشف بشكل منهجي التقنيات: التعويض، التكامل بالأجزاء (مع قاعدة LIATE)، التكاملات المثلثية، الكسور الجزئية، والتعويض المثلثي. يتم توضيح كل طريقة بتفسيرات هندسية — مثل التكامل بالأجزاء كـ\"تحليل مساحة\" — ويتم تسليط الضوء على الأخطاء الشائعة (مثل نسيان القيم المطلقة في تكاملات اللوغاريتم). تمتد التطبيقات عبر الفيزياء (الشغل، ضغط الموائع، مركز الكتلة)، والهندسة (طول القوس، مساحة سطح الدوران)، والاحتمالات (دوال التوزيع التراكمي). يتم التعامل مع التكاملات غير الصحيحة بعناية، مع التمييز بين النوع الأول (فترات لانهائية) والنوع الثاني (مقامات غير متصلة)، مع اختبارات التقارب مثل المقارنة والمقارنة النهائية. تقدم الفصول الأخيرة التكامل العددي (قاعدة شبه المنحرف، قاعدة سيمبسون) والدوال الخاصة (غاما، بيتا) التي تظهر في السياقات المتقدمة. تتبع الملاحظات التاريخية تطور التكامل من طريقة الاستنزاف لأرخميدس إلى الكميات المتناهية الصغر لليبنتز، مما يضفي طابعًا إنسانيًا على الرياضيات. يتضمن كل فصل أقسام \"نمذجة الواقع\": حساب حجم برميل نبيذ، أو القوة على سد، أو القيمة المتوقعة لمتغير عشوائي. مع أكثر من 500 مثال محلول و1200 تمرين (مع إجابات للمسائل ذات الأرقام الفردية)، يضاهي هذا النص المجاني الكتب الدراسية التجارية في العمق والوضوح.",
      ru: "«Интегральное исчисление» превращает часто пугающий процесс интегрирования в структурированное и интуитивно понятное путешествие. Оно начинается с основной теоремы анализа, устанавливающей глубокую связь между дифференцированием и площадью под кривой, а затем систематически исследует методы: замену переменной, интегрирование по частям (с эвристикой LIATE), тригонометрические интегралы, разложение на простейшие дроби и тригонометрическую подстановку. Каждый метод иллюстрируется геометрическими интерпретациями — например, интегрирование по частям как «декомпозиция площади» — и подчеркиваются типичные ошибки (например, забывание модуля в логарифмических интегралах). Приложения охватывают физику (работа, давление жидкости, центр масс), геометрию (длина дуги, площадь поверхности вращения) и теорию вероятностей (функции распределения). Несобственные интегралы рассматриваются внимательно: различаются интегралы первого типа (бесконечные интервалы) и второго типа (разрывные подынтегральные функции), а также тесты сходимости — сравнение и предельное сравнение. Заключительные главы знакомят с численным интегрированием (формула трапеций, правило Симпсона) и специальными функциями (гамма, бета), возникающими в продвинутых контекстах. Исторические заметки прослеживают развитие интегрирования от метода исчерпывания Архимеда до бесконечно малых Лейбница, оживляя математику. Каждая глава включает разделы «Моделирование реального мира»: расчёт объёма винной бочки, силы на плотину или математического ожидания случайной величины. Более 500 решённых примеров и 1200 упражнений (с ответами на нечётные задачи) делают этот бесплатный текст равным коммерческим учебникам по глубине и ясности."
    }
  },
  {
    id: "book_9",
    img: book9,
    title: {
      en: "Elementary Linear Algebra, Applications Version",
      de: "Elementare Lineare Algebra, Anwendungsversion",
      ar: "الجبر الخطي الابتدائي، النسخة التطبيقية",
      ru: "Элементарная линейная алгебра, прикладная версия"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Howard Anton",
      de: "Howard Anton",
      ar: "هاوارد أنتون",
      ru: "Говард Антон"
    },
    language: "german",
    rating: 2.6,
    price: 78,
    downloadURL: "/books/elementary-linear-algebra-applications-version.pdf",
    description: {
      en: "A classic textbook that balances theory and application, featuring real-world examples from engineering, computer science, and economics. Includes exercises that build both computational and conceptual understanding.",
      de: "Ein klassisches Lehrbuch, das Theorie und Anwendung ausbalanciert und reale Beispiele aus Ingenieurwesen, Informatik und Wirtschaft bietet. Enthält Übungen, die sowohl rechnerisches als auch konzeptionelles Verständnis fördern.",
      ar: "كتاب دراسي كلاسيكي يوازن بين النظرية والتطبيق، ويعرض أمثلة واقعية من الهندسة وعلوم الحاسوب والاقتصاد. يتضمن تمارين تبني الفهم الحسابي والمفاهيمي معًا.",
      ru: "Классический учебник, уравновешивающий теорию и практику, с реальными примерами из инженерии, информатики и экономики. Включает упражнения, развивающие как вычислительные, так и концептуальные навыки."
    },
    depthDescription: {
      en: "Howard Anton’s 'Elementary Linear Algebra' stands as a gold standard for its seamless integration of abstract theory and tangible application. It begins with systems of linear equations and matrix algebra, quickly advancing to vector spaces, subspaces, and the four fundamental subspaces (column, row, null, left-null). Eigenvalues and eigenvectors are introduced through dynamic systems—modeling population growth, Markov chains, and mechanical vibrations—before delving into diagonalization and spectral theory. The applications version shines in its real-world case studies: Google’s PageRank algorithm (eigenvector centrality), computer graphics (affine transformations, homogeneous coordinates), cryptography (Hill ciphers), and economics (Leontief input-output models). A dedicated chapter on least squares approximation connects linear algebra to data fitting and machine learning. The text emphasizes geometric intuition: 2D/3D visualizations of linear transformations, orthogonal projections as 'shadows,' and singular value decomposition (SVD) as a tool for image compression. Theoretical concepts like rank-nullity theorem and Gram-Schmidt orthogonalization are paired with MATLAB and Python exercises that reinforce computational fluency. True/false conceptual questions challenge misconceptions, while 'working with proofs' sections scaffold students into mathematical rigor. Updated editions include modern topics like QR decomposition and applications in network analysis. This book doesn’t just teach linear algebra—it shows why it’s the language of the 21st century.",
      de: "Howard Antons 'Elementare Lineare Algebra' gilt als Goldstandard für die nahtlose Integration abstrakter Theorie und greifbarer Anwendung. Es beginnt mit linearen Gleichungssystemen und Matrixalgebra, schreitet rasch zu Vektorräumen, Unterräumen und den vier fundamentalen Unterräumen (Spalten-, Zeilen-, Null- und Linksnulraum) vor. Eigenwerte und Eigenvektoren werden über dynamische Systeme eingeführt – Modellierung von Bevölkerungswachstum, Markov-Ketten und mechanischen Schwingungen – bevor Diagonalisierung und Spektraltheorie vertieft werden. Die Anwendungsversion glänzt durch reale Fallstudien: Googles PageRank-Algorithmus (Eigenvektor-Zentralität), Computergrafik (affine Transformationen, homogene Koordinaten), Kryptographie (Hill-Chiffre) und Wirtschaft (Leontief-Input-Output-Modelle). Ein eigenes Kapitel zur Methode der kleinsten Quadrate verbindet lineare Algebra mit Datenanpassung und maschinellem Lernen. Der Text betont geometrische Intuition: 2D/3D-Visualisierungen linearer Transformationen, orthogonale Projektionen als 'Schatten' und Singulärwertzerlegung (SVD) als Werkzeug zur Bildkompression. Theoretische Konzepte wie der Rang-Nullität-Satz und das Gram-Schmidt-Verfahren werden mit MATLAB- und Python-Übungen kombiniert, die rechnerische Geläufigkeit stärken. Wahr/Falsch-Fragen hinterfragen Fehlvorstellungen, während 'Beweise führen'-Abschnitte Studierende schrittweise in mathematische Strenge einführen. Aktualisierte Auflagen enthalten moderne Themen wie QR-Zerlegung und Anwendungen in der Netzwerkanalyse. Dieses Buch lehrt nicht nur lineare Algebra – es zeigt, warum sie die Sprache des 21. Jahrhunderts ist.",
      ar: "يُعتبر كتاب هوارد أنتون \"الجبر الخطي الابتدائي\" معيارًا ذهبيًا لدمجه السلس بين النظرية المجردة والتطبيق الملموس. يبدأ بأنظمة المعادلات الخطية والجبر المصفوفي، ويتقدم بسرعة إلى الفضاءات المتجهة والفضاءات الجزئية والأربعة فضاءات الأساسية (الأعمدة، الصفوف، الفضاء الصفري، الفضاء الصفري الأيسر). يتم تقديم القيم والمتجهات الذاتية من خلال الأنظمة الديناميكية — نمذجة نمو السكان، وسلاسل ماركوف، والاهتزازات الميكانيكية — قبل الغوص في التقطيع الطيفي والنظرية الطيفية. تتألق النسخة التطبيقية في دراسات الحالة الواقعية: خوارزمية جوجل لتصنيف الصفحات (مركزية المتجه الذاتي)، والرسومات الحاسوبية (التحويلات التآلفية، والإحداثيات المتجانسة)، والتشفير (شيفرة هيل)، والاقتصاد (نماذج ليونتيف للمدخلات-المخرجات). يخصص فصل كامل لتقريب المربعات الصغرى الذي يربط الجبر الخطي بملاءمة البيانات وتعلم الآلة. يؤكد النص على الحدس الهندسي: تصورات ثنائية وثلاثية الأبعاد للتحويلات الخطية، والأسقاطات المتعامدة كـ\"ظلال\"، وتحليل القيمة المفردة (SVD) كأداة لضغط الصور. يتم ربط المفاهيم النظرية مثل مبرهنة الرتبة-العدم وعملية غرام-شميت المتعامدة بتمارين MATLAB وبايثون التي تعزز الطلاقة الحسابية. تتحدى أسئلة المفاهيم الصحيحة/الخاطئة المفاهيم الخاطئة، بينما توفر أقسام \"العمل مع البراهين\" دعمًا تدريجيًا للطلاب نحو الدقة الرياضية. تتضمن الإصدارات المحدثة موضوعات حديثة مثل تحليل QR وتطبيقاته في تحليل الشبكات. هذا الكتاب لا يُدرّس الجبر الخطي فحسب — بل يوضح سبب كونه لغة القرن الحادي والعشرين.",
      ru: "«Элементарная линейная алгебра» Говарда Антона считается золотым стандартом благодаря безупречному сочетанию абстрактной теории и практического применения. Она начинается с систем линейных уравнений и матричной алгебры, быстро переходя к векторным пространствам, подпространствам и четырём фундаментальным подпространствам (столбцовому, строчному, нулевому и левому нулевому). Собственные значения и векторы вводятся через динамические системы — моделирование роста населения, цепи Маркова и механические колебания — перед углублением в диагонализацию и спектральную теорию. Прикладная версия сияет реальными кейсами: алгоритм PageRank Google (центральность по собственному вектору), компьютерная графика (аффинные преобразования, однородные координаты), криптография (шифр Хилла) и экономика (модели Леонтьева «затраты-выпуск»). Отдельная глава по методу наименьших квадратов связывает линейную алгебру с подгонкой данных и машинным обучением. Текст делает упор на геометрическую интуицию: 2D/3D-визуализации линейных преобразований, ортогональные проекции как «тени» и сингулярное разложение (SVD) как инструмент сжатия изображений. Теоретические концепции, такие как теорема о ранге и нульмерности и процесс ортогонализации Грама-Шмидта, сопровождаются упражнениями на MATLAB и Python, укрепляющими вычислительные навыки. Вопросы «верно/неверно» бросают вызов заблуждениям, а разделы «работа с доказательствами» постепенно вводят студентов в математическую строгость. Обновлённые издания включают современные темы, такие как QR-разложение и приложения в анализе сетей. Эта книга не просто учит линейной алгебре — она показывает, почему это язык XXI века."
    }
  },
  {
    id: "book_10",
    img: book10,
    title: {
      en: "Numerical Analysis",
      de: "Numerische Analysis",
      ar: "التحليل العددي",
      ru: "Численный анализ"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "Walter Gautschi",
      de: "Walter Gautschi",
      ar: "والتر غوتشي",
      ru: "Вальтер Гаутши"
    },
    language: "german",
    rating: 4.8,
    price: 55,
    downloadURL: "/books/numerical-analysis.pdf",
    description: {
      en: "A graduate-level introduction to algorithms for solving mathematical problems numerically, including interpolation, quadrature, and differential equations, with emphasis on accuracy and stability.",
      de: "Eine Einführung auf Graduiertenniveau in Algorithmen zur numerischen Lösung mathematischer Probleme, einschließlich Interpolation, Quadratur und Differentialgleichungen, mit Schwerpunkt auf Genauigkeit und Stabilität.",
      ar: "مقدمة على مستوى الدراسات العليا لخوارزميات حل المسائل الرياضية عدديًا، بما في ذلك الاستيفاء والتربيع والمعادلات التفاضلية، مع التركيز على الدقة والاستقرار.",
      ru: "Введение на уровне магистратуры в алгоритмы численного решения математических задач, включая интерполяцию, квадратуру и дифференциальные уравнения, с акцентом на точность и устойчивость."
    },
    depthDescription: {
      en: "Walter Gautschi’s 'Numerical Analysis' is a masterpiece of mathematical exposition, blending theoretical depth with computational pragmatism. It opens with a rigorous treatment of floating-point arithmetic and error analysis—rounding error, truncation error, condition numbers, and stability—laying the foundation for everything that follows. Polynomial interpolation is explored through Lagrange, Newton, and Hermite forms, with a critical examination of Runge’s phenomenon and the superiority of Chebyshev nodes. Numerical integration (quadrature) covers Newton-Cotes formulas, Gaussian quadrature (with orthogonal polynomials), and adaptive methods that refine intervals based on error estimates. The solution of ordinary differential equations (ODEs) spans Euler’s method, Runge-Kutta families (including embedded pairs for step-size control), and multistep methods (Adams-Bashforth, Adams-Moulton), with stability regions analyzed via Dahlquist’s theory. Partial differential equations (PDEs) are tackled through finite difference methods for elliptic (Poisson), parabolic (heat), and hyperbolic (wave) equations, with von Neumann stability analysis. A standout chapter on orthogonal polynomials (Legendre, Chebyshev, Hermite) reveals their role in approximation theory and Gaussian quadrature. The book emphasizes 'backward error analysis'—interpreting computed solutions as exact solutions to perturbed problems—and includes case studies in astrophysics (orbital mechanics) and engineering (structural vibration). With its precise theorems, insightful remarks, and challenging exercises (many drawn from real research problems), this text is indispensable for computational scientists who demand both accuracy and understanding.",
      de: "Walter Gautschis 'Numerische Analysis' ist ein Meisterwerk mathematischer Darstellung, das theoretische Tiefe mit rechnerischem Pragmatismus verbindet. Es beginnt mit einer rigorosen Behandlung der Gleitkommaarithmetik und Fehleranalyse – Rundungsfehler, Abbruchfehler, Konditionszahlen und Stabilität – und legt so das Fundament für alles Folgende. Polynominterpolation wird über Lagrange-, Newton- und Hermite-Formen erkundet, mit kritischer Betrachtung des Runge-Phänomens und der Überlegenheit von Tschebyschow-Knoten. Numerische Integration (Quadratur) umfasst Newton-Cotes-Formeln, Gauß-Quadratur (mit orthogonalen Polynomen) und adaptive Methoden, die Intervalle basierend auf Fehlerabschätzungen verfeinern. Die Lösung gewöhnlicher Differentialgleichungen (ODEs) reicht von Eulers Methode über Runge-Kutta-Familien (einschließlich eingebetteter Paare zur Schrittweitensteuerung) bis hin zu Mehrschrittverfahren (Adams-Bashforth, Adams-Moulton), wobei Stabilitätsgebiete mittels Dahlquist-Theorie analysiert werden. Partielle Differentialgleichungen (PDEs) werden mittels Finite-Differenzen-Methoden für elliptische (Poisson), parabolische (Wärmeleitung) und hyperbolische (Wellen) Gleichungen behandelt, mit von-Neumann-Stabilitätsanalyse. Ein herausragendes Kapitel zu orthogonalen Polynomen (Legendre, Tschebyschow, Hermite) offenbart ihre Rolle in der Approximationstheorie und Gauß-Quadratur. Das Buch betont die 'rückwärts gerichtete Fehleranalyse' – die Interpretation berechneter Lösungen als exakte Lösungen gestörter Probleme – und enthält Fallstudien aus der Astrophysik (Himmelsmechanik) und dem Ingenieurwesen (Strukturvibrationen). Mit präzisen Theoremen, tiefgründigen Bemerkungen und anspruchsvollen Übungen (viele aus realen Forschungsproblemen) ist dieser Text unverzichtbar für Computational Scientists, die sowohl Genauigkeit als auch Verständnis verlangen.",
      ar: "يُعد كتاب والتر غوتشي \"التحليل العددي\" تحفة في العرض الرياضي، يجمع بين العمق النظري والبراغماتية الحسابية. يبدأ بمعالجة صارمة لحساب الفاصلة العائمة وتحليل الخطأ — خطأ التقريب، خطأ الاقتطاع، أرقام الحالة، والاستقرار — ليضع الأساس لكل ما يليه. يتم استكشاف الاستيفاء متعدد الحدود من خلال صيغ لاغرانج ونيوتن وهيرميت، مع فحص نقدي لظاهرة رونجه وتفوق عقدة تشيبيشيف. يغطي التكامل العددي (التربيع) صيغ نيوتن-كوتس، والتربيع الغاوسي (مع متعددات الحدود المتعامدة)، والطرق التكيفية التي تُحسّن الفترات بناءً على تقديرات الخطأ. يمتد حل المعادلات التفاضلية العادية (ODEs) من طريقة أويلر، وعائلات رونجه-كيتا (بما في ذلك الأزواج المضمنة للتحكم في حجم الخطوة)، وطرق الخطوة المتعددة (آدامز-باشفورث، آدامز-مولتون)، مع تحليل مناطق الاستقرار عبر نظرية دالكويست. يتم التعامل مع المعادلات التفاضلية الجزئية (PDEs) من خلال طرق الفروق المنتهية للمعادلات الإهليلجية (بواسون)، والقطع المكافئ (الحرارة)، والزائدية (الموجة)، مع تحليل استقرار فون نيومان. يكشف فصل بارز حول متعددات الحدود المتعامدة (ليجاندر، تشيبيشيف، هيرميت) عن دورها في نظرية التقريب والتربيع الغاوسي. يؤكد الكتاب على \"تحليل الخطأ العكسي\" — تفسير الحلول المحسوبة كحلول دقيقة لمسائل مضطربة — ويتضمن دراسات حالة في الفيزياء الفلكية (ميكانيكا المدارات) والهندسة (الاهتزاز الهيكلي). مع مبرهناته الدقيقة وملاحظاته البصيرة وتمارينه الصعبة (الكثير منها مستمد من مشاكل بحثية حقيقية)، يُعد هذا النص لا غنى عنه للعلماء الحاسوبيين الذين يطلبون الدقة والفهم معًا.",
      ru: "«Численный анализ» Вальтера Гаутши — шедевр математического изложения, сочетающий теоретическую глубину с вычислительным прагматизмом. Он начинается с строгого рассмотрения арифметики с плавающей запятой и анализа ошибок — округления, усечения, чисел обусловленности и устойчивости — закладывая основу для всего последующего. Интерполяция полиномами исследуется через формы Лагранжа, Ньютона и Эрмита с критическим анализом явления Рунге и преимущества узлов Чебышёва. Численное интегрирование (квадратура) охватывает формулы Ньютона-Котеса, гауссову квадратуру (с ортогональными полиномами) и адаптивные методы, уточняющие интервалы на основе оценок погрешности. Решение обыкновенных дифференциальных уравнений (ОДУ) включает метод Эйлера, семейства Рунге-Кутты (включая вложенные пары для контроля шага) и многошаговые методы (Адамса-Бэшфорта, Адамса-Моултона), причём области устойчивости анализируются по теории Дальквиста. Уравнения в частных производных (УЧП) решаются методами конечных разностей для эллиптических (Пуассона), параболических (теплопроводности) и гиперболических (волновых) уравнений с анализом устойчивости по фон Нейману. Отдельная глава об ортогональных полиномах (Лежандра, Чебышёва, Эрмита) раскрывает их роль в теории приближений и гауссовой квадратуре. Книга подчёркивает «обратный анализ ошибок» — интерпретацию вычисленных решений как точных решений возмущённых задач — и включает кейсы из астрофизики (небесная механика) и инженерии (структурные колебания). Благодаря точным теоремам, глубоким замечаниям и сложным упражнениям (многие из реальных исследовательских задач), этот текст незаменим для вычислителей, требующих как точности, так и понимания."
    }
  },
  {
    id: "book_11",
    img: book11,
    title: {
      en: "Operating System Concepts",
      de: "Grundlagen von Betriebssystemen",
      ar: "مفاهيم أنظمة التشغيل",
      ru: "Основные понятия операционных систем"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
      de: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
      ar: "إبراهام سيلبيرشاتز، بيتر ب. غالفن، غريغ غاني",
      ru: "Авраам Силбершатц, Питер Б. Гэлвин, Грег Гань"
    },
    language: "german",
    rating: 5,
    price: 70,
    downloadURL: "/books/operating-system-concepts.pdf",
    description: {
      en: "Definitive guide explains core OS principles processes, memory management, file systems, and security with clear diagrams and real-world system examples.",
      de: "Der definitive Leitfaden erklärt Kernprinzipien von Betriebssystemen – Prozesse, Speicherverwaltung, Dateisysteme und Sicherheit – mit klaren Diagrammen und realen Systembeispielen.",
      ar: "الدليل الشامل يشرح مبادئ أنظمة التشغيل الأساسية: العمليات، إدارة الذاكرة، أنظمة الملفات، والأمن مع رسوم توضيحية واضحة وأمثلة واقعية من الأنظمة.",
      ru: "Окончательное руководство объясняет ключевые принципы ОС: процессы, управление памятью, файловые системы и безопасность с понятными диаграммами и примерами из реальных систем."
    },
    depthDescription: {
      en: "Widely known as the 'Dinosaur Book,' 'Operating System Concepts' remains the definitive academic text by systematically deconstructing how modern operating systems manage hardware and provide abstractions to applications. It begins with process management—covering process states, scheduling algorithms (FCFS, SJF, Round Robin, Multilevel Queue), and thread models (user-level vs kernel-level)—before diving into inter-process communication (pipes, message queues, shared memory) and synchronization primitives (mutexes, semaphores, monitors) with classic problems like the Dining Philosophers. Memory management is explored from base-and-bound through paging, segmentation, and virtual memory, with detailed analysis of page replacement algorithms (FIFO, LRU, Clock) and TLB optimization. Storage systems span disk scheduling (SSTF, SCAN, C-SCAN), RAID levels, and file system implementation (inodes, directories, free-space management), with comparisons of NTFS, ext4, and APFS. The security chapter has been expanded to cover modern threats: buffer overflows, privilege escalation, sandboxing, encryption (full-disk, file-based), and hardware-based security (TPM, Secure Boot). Virtualization and containerization (Docker, Kubernetes) are integrated throughout, showing how hypervisors and namespaces extend traditional OS concepts. Real-world examples contrast Linux, Windows, and macOS implementations—for instance, how each handles system calls or memory mapping. The 'Practice Exercises' include Linux kernel module programming and xv6 (a Unix-like teaching OS) labs. Updated for multicore architectures, it addresses cache coherence, NUMA, and parallel file systems. This edition doesn’t just describe operating systems—it equips readers to design, debug, and secure them.",
      de: "Weithin bekannt als 'Dinosaurier-Buch', bleibt 'Grundlagen von Betriebssystemen' der definitive akademische Text, der systematisch erklärt, wie moderne Betriebssysteme Hardware verwalten und Abstraktionen für Anwendungen bereitstellen. Es beginnt mit Prozessverwaltung – Prozesszustände, Scheduling-Algorithmen (FCFS, SJF, Round Robin, Mehrstufige Warteschlangen) und Thread-Modelle (User-Level vs Kernel-Level) – bevor es in Interprozesskommunikation (Pipes, Nachrichtenwarteschlangen, Shared Memory) und Synchronisationsprimitive (Mutexe, Semaphore, Monitore) mit klassischen Problemen wie den Speisenden Philosophen eintaucht. Speicherverwaltung wird von Base-and-Bound über Paging, Segmentierung und virtuellen Speicher erkundet, mit detaillierter Analyse von Seitenersetzungs-Algorithmen (FIFO, LRU, Clock) und TLB-Optimierung. Speichersysteme umfassen Platten-Scheduling (SSTF, SCAN, C-SCAN), RAID-Level und Dateisystem-Implementierung (Inodes, Verzeichnisse, Freiraumverwaltung), mit Vergleichen von NTFS, ext4 und APFS. Das Sicherheitskapitel wurde erweitert, um moderne Bedrohungen abzudecken: Pufferüberläufe, Privilegieneskalation, Sandboxing, Verschlüsselung (Full-Disk, Dateibasiert) und hardwarebasierte Sicherheit (TPM, Secure Boot). Virtualisierung und Containerisierung (Docker, Kubernetes) sind durchgängig integriert und zeigen, wie Hypervisoren und Namespaces traditionelle OS-Konzepte erweitern. Reale Beispiele kontrastieren Linux-, Windows- und macOS-Implementierungen – z. B. wie jeder Systemaufrufe oder Memory-Mapping handhabt. Die 'Übungsaufgaben' umfassen Linux-Kernel-Modul-Programmierung und xv6-Labore (ein Unix-ähnliches Lehr-OS). Aktualisiert für Multicore-Architekturen, behandelt es Cache-Kohärenz, NUMA und parallele Dateisysteme. Diese Ausgabe beschreibt nicht nur Betriebssysteme – sie befähigt Leser, sie zu entwerfen, zu debuggen und abzusichern.",
      ar: "المعروف على نطاق واسع باسم \"كتاب الديناصور\"، يظل \"مفاهيم أنظمة التشغيل\" النص الأكاديمي المعياري من خلال تفكيك منهجي لكيفية إدارة أنظمة التشغيل الحديثة للعتاد وتقديم التجريديات للتطبيقات. يبدأ بإدارة العمليات — تغطي حالات العمليات، وخوارزميات الجدولة (أول وارد أول صادر، أقصر وظيفة أولاً، راوند روبن، طابور متعدد المستويات)، ونماذج الخيوط (مستوى المستخدم مقابل مستوى النواة) — قبل الغوص في الاتصال بين العمليات (الأنابيب، طوابير الرسائل، الذاكرة المشتركة) وبدائيات المزامنة (الميوتكسات، أشباه الموصلات، الشاشات) مع مشاكل كلاسيكية مثل فلاسفة الطعام. يتم استكشاف إدارة الذاكرة من الربط الأساسي عبر الترحيل والتقطيع والذاكرة الافتراضية، مع تحليل مفصل لخوارزميات استبدال الصفحات (FIFO، LRU، Clock) وتحسين TLB. تمتد أنظمة التخزين لتشمل جدولة الأقراص (SSTF، SCAN، C-SCAN)، ومستويات RAID، وتنفيذ أنظمة الملفات (العُقد الداخلية، الدلائل، إدارة المساحة الحرة)، مع مقارنات بين NTFS وext4 وAPFS. تم توسيع فصل الأمان ليغطي التهديدات الحديثة: فيضانات المخزن المؤقت، تصعيد الامتيازات، العزل (Sandboxing)، التشفير (التشفير الكامل للقرص، التشفير القائم على الملفات)، والأمان القائم على العتاد (TPM، Secure Boot). تم دمج التقنيات الافتراضية والتغليف (Docker، Kubernetes) في جميع أنحاء الكتاب، مما يوضح كيف تمدد المحاكاة الافتراضية ومساحات الأسماء مفاهيم أنظمة التشغيل التقليدية. تقارن الأمثلة الواقعية بين تطبيقات لينكس وويندوز وماك أو إس — على سبيل المثال، كيف يتعامل كل منها مع استدعاءات النظام أو ربط الذاكرة. تتضمن \"تمارين الممارسة\" برمجة وحدات نواة لينكس ومختبرات xv6 (نظام تشغيل تعليمي شبيه بيونكس). تم تحديثه لهياكل المعالجات متعددة النوى، ويتناول تماسك الذاكرة المؤقتة (Cache Coherence)، وNUMA، وأنظمة الملفات المتوازية. هذه الطبعة لا تصف أنظمة التشغيل فحسب — بل تُزوّد القراء بمهارات تصميمها وتصحيح أخطائها وتأمينها.",
      ru: "Широко известная как «Книга с динозавром», «Основные понятия операционных систем» остаётся авторитетным академическим текстом, систематически разбирая, как современные ОС управляют оборудованием и предоставляют абстракции приложениям. Она начинается с управления процессами — состояния процессов, алгоритмы планирования (FCFS, SJF, Round Robin, многоуровневые очереди) и модели потоков (уровень пользователя vs уровень ядра) — прежде чем перейти к межпроцессному взаимодействию (каналы, очереди сообщений, разделяемая память) и примитивам синхронизации (мьютексы, семафоры, мониторы) с классическими задачами вроде обедающих философов. Управление памятью исследуется от base-and-bound через страничную и сегментную организацию к виртуальной памяти с детальным анализом алгоритмов замещения страниц (FIFO, LRU, Clock) и оптимизацией TLB. Системы хранения охватывают дисковое планирование (SSTF, SCAN, C-SCAN), уровни RAID и реализацию файловых систем (inode, каталоги, управление свободным пространством) с сравнением NTFS, ext4 и APFS. Глава по безопасности расширена для охвата современных угроз: переполнение буфера, эскалация привилегий, песочницы, шифрование (полный диск, на уровне файлов) и аппаратная безопасность (TPM, Secure Boot). Виртуализация и контейнеризация (Docker, Kubernetes) интегрированы повсеместно, показывая, как гипервизоры и пространства имён расширяют традиционные концепции ОС. Реальные примеры сравнивают реализации в Linux, Windows и macOS — например, как каждая система обрабатывает системные вызовы или отображение памяти. «Практические упражнения» включают программирование модулей ядра Linux и лабораторные работы с xv6 (учебной Unix-подобной ОС). Обновлённое издание учитывает многоядерные архитектуры, рассматривая когерентность кэша, NUMA и параллельные файловые системы. Эта книга не просто описывает операционные системы — она вооружает читателей навыками их проектирования, отладки и защиты."
    }
  },
  {
    id: "book_12",
    img: book12,
    title: {
      en: "Java Network Programming",
      de: "Java-Netzwerkprogrammierung",
      ar: "برمجة الشبكات بجافا",
      ru: "Сетевое программирование на Java"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "Elliotte Rusty Harold",
      de: "Elliotte Rusty Harold",
      ar: "إليوت رستي هارولد",
      ru: "Элиот Растин Харольд"
    },
    language: "german",
    rating: 4.7,
    price: 48,
    downloadURL: "/books/java-network-programming.pdf",
    description: {
      en: "A hands-on tutorial for building robust networked applications in Java, covering sockets, HTTP, UDP, and secure communication. Updated for modern Java versions and internet protocols.",
      de: "Ein praxisorientiertes Tutorial zum Erstellen robuster netzwerkfähiger Anwendungen in Java, das Sockets, HTTP, UDP und sichere Kommunikation abdeckt. Aktualisiert für moderne Java-Versionen und Internetprotokolle.",
      ar: "برنامج تعليمي عملي لبناء تطبيقات شبكية قوية بلغة جافا، يغطي المقابس (Sockets) وHTTP وUDP والاتصال الآمن. محدّث لإصدارات جافا الحديثة وبروتوكولات الإنترنت.",
      ru: "Практическое руководство по созданию надёжных сетевых приложений на Java, охватывающее сокеты, HTTP, UDP и защищённую связь. Обновлено для современных версий Java и интернет-протоколов."
    },
    depthDescription: {
      en: "'Java Network Programming' is the authoritative guide to building scalable, secure, and efficient networked applications in Java. It begins with the fundamentals of TCP/IP and UDP, then dives into Java’s Socket and ServerSocket classes, demonstrating client-server architectures with thread pools for concurrency. A full chapter is dedicated to non-blocking I/O (NIO and NIO.2), explaining selectors, channels, and buffers for high-performance servers that handle thousands of connections. HTTP programming covers both client-side (HttpURLConnection, HttpClient) and server-side (embedded Jetty) implementations, including RESTful API design, cookies, and session management. Security is woven throughout: SSL/TLS setup with keystores and truststores, certificate validation, and secure WebSocket communication. The book addresses real-world challenges like NAT traversal, connection timeouts, packet fragmentation, and firewall compatibility, with debugging techniques using Wireshark and netstat. Advanced topics include multicast UDP for group communication, RMI (Remote Method Invocation) for distributed objects, and protocol design for custom binary formats. Code examples emphasize modern Java features: try-with-resources for automatic socket closure, lambda expressions for event handling, and CompletableFuture for asynchronous operations. The final chapters explore emerging protocols like HTTP/2 and QUIC, and cloud-native considerations (load balancing, service discovery). With its balance of theory, code, and practical wisdom, this book transforms Java developers into confident network engineers.",
      de: "'Java-Netzwerkprogrammierung' ist der maßgebliche Leitfaden zum Erstellen skalierbarer, sicherer und effizienter netzwerkfähiger Anwendungen in Java. Es beginnt mit den Grundlagen von TCP/IP und UDP, taucht dann in Javas Socket- und ServerSocket-Klassen ein und demonstriert Client-Server-Architekturen mit Thread-Pools für Parallelität. Ein ganzes Kapitel widmet sich nicht-blockierendem I/O (NIO und NIO.2) und erklärt Selektoren, Kanäle und Puffer für Hochleistungsserver, die Tausende von Verbindungen verwalten. Die HTTP-Programmierung umfasst sowohl clientseitige (HttpURLConnection, HttpClient) als auch serverseitige (eingebettetes Jetty) Implementierungen, einschließlich RESTful-API-Design, Cookies und Sitzungsverwaltung. Sicherheit durchzieht das gesamte Buch: SSL/TLS-Einrichtung mit Keystores und Truststores, Zertifikatsvalidierung und sichere WebSocket-Kommunikation. Das Buch behandelt reale Herausforderungen wie NAT-Traversal, Verbindungs-Timeouts, Paketfragmentierung und Firewall-Kompatibilität mit Debugging-Techniken mittels Wireshark und netstat. Fortgeschrittene Themen umfassen Multicast-UDP für Gruppenkommunikation, RMI (Remote Method Invocation) für verteilte Objekte und Protokoll-Design für benutzerdefinierte Binärformate. Codebeispiele betonen moderne Java-Features: try-with-resources für automatisches Schließen von Sockets, Lambda-Ausdrücke für Ereignisbehandlung und CompletableFuture für asynchrone Operationen. Die letzten Kapitel erkunden aufkommende Protokolle wie HTTP/2 und QUIC sowie Cloud-native Aspekte (Lastverteilung, Service-Discovery). Mit seiner Balance aus Theorie, Code und praktischer Weisheit verwandelt dieses Buch Java-Entwickler in selbstbewusste Netzwerk-Ingenieure.",
      ar: "يُعد كتاب \"برمجة الشبكات بجافا\" الدليل المرجعي لبناء تطبيقات شبكية قابلة للتوسع وآمنة وفعالة بلغة جافا. يبدأ بأساسيات TCP/IP وUDP، ثم يتعمق في فئات Socket وServerSocket في جافا، ويوضح هياكل العميل-الخادم باستخدام مجمعات الخيوط للتوازي. يُكرّس فصل كامل للإدخال/الإخراج غير المحظور (NIO وNIO.2)، ويشرح المُحدِّدات والقنوات والمخازن المؤقتة لخوادم عالية الأداء تتعامل مع آلاف الاتصالات. يغطي برمجة HTTP كلاً من التنفيذات من جانب العميل (HttpURLConnection، HttpClient) ومن جانب الخادم (Jetty المدمج)، بما في ذلك تصميم واجهات برمجة التطبيقات RESTful، والكوكيز، وإدارة الجلسات. يتم نسج الأمان في جميع أنحاء الكتاب: إعداد SSL/TLS مع مخازن المفاتيح ومخازن الثقة، والتحقق من صحة الشهادات، والاتصال الآمن عبر WebSocket. يعالج الكتاب تحديات العالم الحقيقي مثل اجتياز NAT، ومهلات الاتصال، وتجزئة الحزم، وتوافق جدار الحماية، مع تقنيات تصحيح الأخطاء باستخدام Wireshark وnetstat. تشمل الموضوعات المتقدمة UDP البث المتعدد للتواصل الجماعي، وRMI (استدعاء الطريقة عن بُعد) للكائنات الموزعة، وتصميم البروتوكولات للتنسيقات الثنائية المخصصة. تؤكد أمثلة الكود على ميزات جافا الحديثة: try-with-resources لإغلاق المقابس تلقائيًا، وتعابير لامدا للتعامل مع الأحداث، وCompletableFuture للعمليات غير المتزامنة. تستكشف الفصول الأخيرة بروتوكولات ناشئة مثل HTTP/2 وQUIC، والاعتبارات الخاصة بالسحابة الأصلية (توازن التحميل، اكتشاف الخدمة). مع توازنها بين النظرية والكود والحكمة العملية، يحوّل هذا الكتاب مطوري جافا إلى مهندسي شبكات واثقين.",
      ru: "«Сетевое программирование на Java» — авторитетное руководство по созданию масштабируемых, безопасных и эффективных сетевых приложений на Java. Оно начинается с основ TCP/IP и UDP, затем углубляется в классы Socket и ServerSocket Java, демонстрируя клиент-серверные архитектуры с пулами потоков для параллелизма. Целая глава посвящена неблокирующему вводу-выводу (NIO и NIO.2), объясняя селекторы, каналы и буферы для высокопроизводительных серверов, обрабатывающих тысячи соединений. Программирование HTTP охватывает как клиентские (HttpURLConnection, HttpClient), так и серверные (встроенный Jetty) реализации, включая проектирование RESTful API, cookies и управление сессиями. Безопасность пронизывает всю книгу: настройка SSL/TLS с keystores и truststores, проверка сертификатов и защищённая WebSocket-связь. Книга решает реальные проблемы: обход NAT, таймауты соединений, фрагментация пакетов и совместимость с брандмауэрами, с методами отладки через Wireshark и netstat. Продвинутые темы включают multicast UDP для групповой связи, RMI (удалённый вызов методов) для распределённых объектов и проектирование протоколов для пользовательских бинарных форматов. Примеры кода подчёркивают современные возможности Java: try-with-resources для автоматического закрытия сокетов, лямбда-выражения для обработки событий и CompletableFuture для асинхронных операций. Заключительные главы исследуют новые протоколы вроде HTTP/2 и QUIC, а также облачные аспекты (балансировка нагрузки, обнаружение сервисов). Благодаря балансу теории, кода и практической мудрости, эта книга превращает Java-разработчиков в уверенных сетевых инженеров."
    }
  },
  {
    id: "book_13",
    img: book13,
    title: {
      en: "Machine Learning Step By Step Guide",
      de: "Maschinelles Lernen Schritt für Schritt",
      ar: "دليل التعلم الآلي خطوة بخطوة",
      ru: "Руководство по машинному обучению шаг за шагом"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "Andriy Burkov",
      de: "Andriy Burkov",
      ar: "أندريه بوركوف",
      ru: "Андрей Бурков"
    },
    language: "german",
    rating: 5,
    price: 0,
    downloadURL: "/books/machine-learning-step-by-step-guide.pdf",
    description: {
      en: "A free, beginner-friendly introduction to machine learning concepts from linear regression to neural networks using intuitive explanations and Python code. Based on the popular 'Hundred Page Machine Learning Book'.",
      de: "Eine kostenlose, anfängerfreundliche Einführung in maschinelles Lernen – von linearer Regression bis zu neuronalen Netzen – mit intuitiven Erklärungen und Python-Code. Basierend auf dem beliebten 'Hundred Page Machine Learning Book'.",
      ar: "مقدمة مجانية وسهلة للمبتدئين لمفاهيم التعلم الآلي من الانحدار الخطي إلى الشبكات العصبية باستخدام شروحات بديهية وكود بايثون. مستند إلى كتاب \"التعلم الآلي في مئة صفحة\" الشهير.",
      ru: "Бесплатное введение для начинающих в концепции машинного обучения — от линейной регрессии до нейронных сетей — с интуитивными объяснениями и кодом на Python. Основано на популярной книге «Машинное обучение в ста страницах»."
    },
    depthDescription: {
      en: "Despite its brevity, Andriy Burkov’s 'Machine Learning Step By Step Guide' distills the essence of modern ML into a remarkably coherent narrative. It begins with the foundational philosophy: the bias-variance tradeoff, the importance of validation sets, and the pitfalls of overfitting. Supervised learning is covered through linear and logistic regression (with gradient descent derivation), decision trees (including entropy and information gain), and ensemble methods like random forests and gradient boosting. Unsupervised learning explores k-means clustering, hierarchical clustering, and PCA for dimensionality reduction. The neural networks chapter demystifies backpropagation with a step-by-step numerical example, then connects it to modern frameworks like TensorFlow. Crucially, the book emphasizes practical wisdom: how to handle imbalanced datasets, when to use L1 vs L2 regularization, and why accuracy is often a poor metric. It introduces kernel methods, SVMs, and Bayesian inference without excessive formalism, always linking math to intuition. The final chapters cover advanced topics—reinforcement learning (Q-learning), sequence modeling (RNNs), and attention mechanisms—with an eye toward current research. Every concept is accompanied by minimal, readable Python code (using NumPy and scikit-learn) that illustrates the core idea without library abstractions. Designed as a 'first book' before tackling dense textbooks like Bishop or Goodfellow, it succeeds by prioritizing understanding over comprehensiveness. As a free resource, it has democratized ML education for millions worldwide.",
      de: "Trotz seiner Kürze verdichtet Andriy Burkovs 'Maschinelles Lernen Schritt für Schritt' das Wesen des modernen ML in eine bemerkenswert kohärente Erzählung. Es beginnt mit der grundlegenden Philosophie: Bias-Varianz-Abwägung, Bedeutung von Validierungsdatensätzen und Fallen der Überanpassung. Überwachtes Lernen wird durch lineare und logistische Regression (mit Herleitung des Gradientenabstiegs), Entscheidungsbäume (einschließlich Entropie und Informationsgewinn) und Ensemble-Methoden wie Random Forests und Gradient Boosting abgedeckt. Unüberwachtes Lernen erforscht k-Means-Clustering, hierarchisches Clustering und PCA zur Dimensionsreduktion. Das Kapitel zu neuronalen Netzen entmystifiziert Backpropagation mit einem schrittweisen numerischen Beispiel und verbindet es dann mit modernen Frameworks wie TensorFlow. Wichtig ist, dass das Buch praktische Weisheit betont: Umgang mit unausgewogenen Datensätzen, wann L1- vs. L2-Regularisierung verwendet wird und warum Genauigkeit oft eine schlechte Metrik ist. Es führt Kernel-Methoden, SVMs und Bayes’sche Inferenz ohne übermäßigen Formalismus ein und verknüpft Mathematik stets mit Intuition. Die letzten Kapitel behandeln fortgeschrittene Themen – bestärkendes Lernen (Q-Lernen), Sequenzmodellierung (RNNs) und Attention-Mechanismen – mit Blick auf aktuelle Forschung. Jedes Konzept wird von minimalem, lesbarem Python-Code (mit NumPy und scikit-learn) begleitet, der die Kernidee ohne Bibliotheksabstraktionen veranschaulicht. Als 'erstes Buch' vor anspruchsvollen Lehrbüchern wie Bishop oder Goodfellow konzipiert, gelingt es durch Priorisierung von Verständnis gegenüber Vollständigkeit. Als kostenlose Ressource hat es die ML-Ausbildung für Millionen weltweit demokratisiert.",
      ar: "رغم اختصاره، يُكثّف دليل أندريه بوركوف \"التعلم الآلي خطوة بخطوة\" جوهر التعلم الآلي الحديث في سرد متماسك بشكل ملحوظ. يبدأ بالفلسفة الأساسية: المفاضلة بين التحيز والتباين، وأهمية مجموعات التحقق، وأخطار الإفراط في التخصيص. يغطي التعلم الخاضع للإشراف عبر الانحدار الخطي واللوغاريتمي (مع اشتقاق الانحدار التدرجي)، وأشجار القرار (بما في ذلك الانتروبيا واكتساب المعلومات)، وطرق التجميع مثل غابات القرار العشوائي وتعزيز الانحدار. يستكشف التعلم غير الخاضع للإشراف تجميع k-means والتجميع الهرمي وتحليل المكونات الرئيسية (PCA) لتقليل الأبعاد. يفكك فصل الشبكات العصبية خوارزمية الانتشار العكسي بمثال عددي خطوة بخطوة، ثم يربطها بإطارات عمل حديثة مثل TensorFlow. ويؤكد الكتاب بشكل حاسم على الحكمة العملية: كيفية التعامل مع مجموعات البيانات غير المتوازنة، ومتى تُستخدم التنظيمات L1 مقابل L2، ولماذا تكون الدقة في كثير من الأحيان مقياسًا سيئًا. يقدم طرق النواة، وآلات ناقلات الدعم (SVMs)، والاستدلال البايزي دون شكليات مفرطة، ويربط دائمًا الرياضيات بالحدس. تغطي الفصول الأخيرة موضوعات متقدمة — التعلم المعزز (Q-learning)، ونمذجة المتتاليات (RNNs)، وآليات الانتباه — مع التركيز على الأبحاث الحالية. يرافق كل مفهوم كود بايثون بسيط وواضح (باستخدام NumPy وscikit-learn) يوضح الفكرة الأساسية دون تجريدات المكتبات. صُمم كـ\"كتاب أول\" قبل التصدي لكتب دراسية كثيفة مثل بيشوب أو جودفيلو، وينجح من خلال إعطاء الأولوية للفهم على الشمولية. كمورد مجاني، فقد دمقرط التعليم في التعلم الآلي لملايين الأشخاص حول العالم.",
      ru: "Несмотря на краткость, «Руководство по машинному обучению шаг за шагом» Андрея Буркова удивительно последовательно передаёт суть современного машинного обучения. Оно начинается с фундаментальных концепций: компромисса между смещением и дисперсией, важности валидационных наборов и ловушек переобучения. Обучение с учителем охватывает линейную и логистическую регрессию (с выводом градиентного спуска), деревья решений (включая энтропию и прирост информации) и ансамблевые методы, такие как случайные леса и градиентный бустинг. Обучение без учителя исследует кластеризацию k-средних, иерархическую кластеризацию и метод главных компонент (PCA) для снижения размерности. Глава о нейронных сетях разъясняет обратное распространение ошибки на пошаговом численном примере, а затем связывает его с современными фреймворками, такими как TensorFlow. Книга особенно подчёркивает практическую мудрость: как работать с несбалансированными наборами данных, когда использовать L1- и L2-регуляризацию и почему точность часто является плохой метрикой. Вводятся методы ядра, метод опорных векторов (SVM) и байесовский вывод без излишнего формализма, всегда связывая математику с интуицией. Заключительные главы охватывают продвинутые темы — обучение с подкреплением (Q-обучение), моделирование последовательностей (RNN) и механизмы внимания — с ориентацией на современные исследования. Каждая концепция сопровождается минималистичным, читаемым кодом на Python (с использованием NumPy и scikit-learn), иллюстрирующим суть без абстракций библиотек. Созданная как «первая книга» перед изучением сложных учебников вроде Бишопа или Гудфеллоу, она добивается успеха, ставя понимание выше полноты. Как бесплатный ресурс, она демократизировала образование в области машинного обучения для миллионов людей по всему миру."
    }
  },
  {
    id: "book_14",
    img: book14,
    title: {
      en: "Computer Architecture",
      de: "Rechnerarchitektur",
      ar: "هندسة الحاسوب",
      ru: "Архитектура компьютера"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Second Edition",
      de: "Zweite Auflage",
      ar: "الطبعة الثانية",
      ru: "Второе издание"
    },
    author: {
      en: "David A. Patterson, John L. Hennessy",
      de: "David A. Patterson, John L. Hennessy",
      ar: "ديفيد أ. باترسون، جون ل. هينيسي",
      ru: "Дэвид А. Паттерсон, Джон Л. Хеннесси"
    },
    language: "german",
    rating: 4.9,
    price: 80,
    downloadURL: "/books/computer-architecture.pdf",
    description: {
      en: "The authoritative textbook on modern computer design, covering instruction sets, pipelining, memory hierarchies, and parallelism. Used in top universities worldwide and co-authored by Turing Award winners.",
      de: "Das maßgebliche Lehrbuch zum modernen Rechnerdesign, das Befehlssätze, Pipelining, Speicherhierarchien und Parallelität abdeckt. Wird an führenden Universitäten weltweit verwendet und von Turing-Award-Gewinnern verfasst.",
      ar: "الكتاب المرجعي في تصميم الحاسوب الحديث، يغطي مجموعات التعليمات، خطوط الأنابيب، تسلسلات الذاكرة، والتوازي. يُستخدم في أرقى الجامعات عالميًا، وشارك في تأليفه فائزان بجائزة تورينغ.",
      ru: "Авторитетный учебник по современному проектированию компьютеров, охватывающий системы команд, конвейеризацию, иерархию памяти и параллелизм. Используется в ведущих университетах мира и написан лауреатами премии Тьюринга."
    },
    depthDescription: {
      en: "Patterson and Hennessy’s 'Computer Architecture' is the seminal text that defined the field’s modern pedagogy through its 'quantitative approach.' This edition confronts the end of Dennard scaling and Moore’s Law by shifting focus from single-core performance to domain-specific architectures (DSAs) like GPUs, TPUs, and FPGAs. It begins with instruction set architecture (ISA) design, comparing RISC-V (open standard), ARM (mobile), and x86 (desktop), then dives into pipelining hazards (structural, data, control) and solutions like forwarding and branch prediction. The memory hierarchy chapter analyzes cache design (direct-mapped, set-associative), replacement policies (LRU, FIFO), and virtual memory translation (TLBs, page tables), with quantitative models for miss rates and AMAT. Parallelism is explored at all levels: instruction-level (superscalar, VLIW), data-level (SIMD), thread-level (multicore, hyperthreading), and cluster-level (message passing). A groundbreaking chapter on warehouse-scale computers (WSCs) reveals how Google and Amazon design data centers for energy efficiency and fault tolerance. The quantum computing appendix, co-authored with experts, explains qubits, entanglement, and Shor’s algorithm without hype. Every concept is grounded in real processors: Apple’s M1, NVIDIA’s A100, and RISC-V cores. Case studies include optimizing matrix multiplication for cache locality and analyzing the energy-performance tradeoffs of mobile SoCs. With its rigorous benchmarks, insightful 'fallacies and pitfalls' sections, and forward-looking vision, this book doesn’t just teach computer architecture—it shapes its future.",
      de: "Patterson und Hennessys 'Rechnerarchitektur' ist der wegweisende Text, der die moderne Didaktik des Fachgebiets durch seinen 'quantitativen Ansatz' definierte. Diese Ausgabe befasst sich mit dem Ende der Dennard-Skalierung und des Mooreschen Gesetzes, indem sie den Fokus von Single-Core-Performance auf domänenspezifische Architekturen (DSAs) wie GPUs, TPUs und FPGAs verlagert. Sie beginnt mit dem Design der Befehlssatzarchitektur (ISA) und vergleicht RISC-V (Open Standard), ARM (Mobil) und x86 (Desktop), bevor sie in Pipeline-Gefahren (strukturell, Daten, Steuerung) und Lösungen wie Forwarding und Sprungvorhersage eintaucht. Das Kapitel zur Speicherhierarchie analysiert Cache-Design (direktabbildend, mengenassoziativ), Ersetzungsstrategien (LRU, FIFO) und Adressübersetzung bei virtuellem Speicher (TLBs, Seitentabellen) mit quantitativen Modellen für Fehlerraten und AMAT. Parallelität wird auf allen Ebenen untersucht: Befehlsebene (Superskalar, VLIW), Datenebene (SIMD), Thread-Ebene (Multicore, Hyperthreading) und Cluster-Ebene (Message Passing). Ein bahnbrechendes Kapitel zu Warehouse-Scale-Computern (WSCs) enthüllt, wie Google und Amazon Rechenzentren für Energieeffizienz und Fehlertoleranz entwerfen. Der Anhang zu Quantencomputing, gemeinsam mit Experten verfasst, erklärt Qubits, Verschränkung und Shors Algorithmus ohne Hype. Jedes Konzept ist in realen Prozessoren verankert: Apples M1, NVIDIAs A100 und RISC-V-Kernen. Fallstudien umfassen die Optimierung der Matrixmultiplikation für Cache-Lokalität und die Analyse der Energie-Leistungs-Kompromisse mobiler SoCs. Mit rigorosen Benchmarks, einblickreichen 'Irrtümern und Fallen'-Abschnitten und zukunftsweisender Vision lehrt dieses Buch nicht nur Rechnerarchitektur – es gestaltet ihre Zukunft.",
      ar: "يُعد كتاب باترسون وهينيسي \"هندسة الحاسوب\" النص المؤسس الذي عرّف منهجية المجال الحديثة من خلال \"النهج الكمي\". تتصدى هذه الطبعة لنهاية تقليص دينارد وقانون مور من خلال تحويل التركيز من أداء النواة الواحدة إلى الهياكل المعمارية الخاصة بالمجالات (DSAs) مثل وحدات معالجة الرسومات (GPUs) ووحدات معالجة الموترات (TPUs) وأجهزة FPGA. يبدأ الكتاب بتصميم بنية مجموعة التعليمات (ISA)، ويقارن بين RISC-V (معيار مفتوح)، وARM (الهواتف المحمولة)، وx86 (أجهزة سطح المكتب)، ثم يتعمق في مخاطر خطوط الأنابيب (هيكلية، بيانات، تحكم) والحلول مثل التوجيه والتنبؤ بالفروع. يحلل فصل تسلسل الذاكرة تصميم الذاكرة المؤقتة (المباشر، المرتبط بالمجموعات)، وسياسات الاستبدال (LRU، FIFO)، وترجمة الذاكرة الافتراضية (جداول TLB، جداول الصفحات)، مع نماذج كمية لمعدلات الفشل وAMAT. يتم استكشاف التوازي على جميع المستويات: مستوى التعليمات (فائق التدرج، VLIW)، مستوى البيانات (SIMD)، مستوى الخيوط (متعدد النوى، التشعب الفائق)، ومستوى العنقود (تمرير الرسائل). يكشف فصل رائد عن أجهزة الحاسوب على نطاق المستودعات (WSCs) كيف تُصمم جوجل وأمازون مراكز البيانات من أجل الكفاءة في استهلاك الطاقة والتحمل ضد الأعطال. يشرح ملحق الحوسبة الكمومية، الذي شارك في تأليفه خبراء، الكيوبتات والتشابك وخوارزمية شور دون مبالغة. يتم ترسيخ كل مفهوم في معالجات حقيقية: معالج Apple M1، وNVIDIA A100، ونوى RISC-V. تشمل دراسات الحالة تحسين ضرب المصفوفات من أجل توطين الذاكرة المؤقتة وتحليل مقايضات الكفاءة الطاقية لأداء وحدات النظام المتنقلة (SoCs). مع مقاييسه الصارمة، وأقسامه البصيرة \"الأوهام والأخطاء الشائعة\"، ورؤيته المستقبلية، لا يُدرّس هذا الكتاب هندسة الحاسوب فحسب — بل يشكل مستقبلها.",
      ru: "«Архитектура компьютера» Паттерсона и Хеннесси — основополагающий текст, определивший современную педагогику в этой области благодаря «количественному подходу». Это издание сталкивается с окончанием масштабирования Деннарда и закона Мура, смещая фокус с производительности одного ядра на архитектуры, специализированные для конкретных задач (DSA), такие как GPU, TPU и FPGA. Книга начинается с проектирования архитектуры системы команд (ISA), сравнивая RISC-V (открытый стандарт), ARM (мобильные устройства) и x86 (настольные ПК), затем углубляется в опасности конвейеризации (структурные, данные, управление) и решения, такие как пересылка и предсказание ветвлений. Глава об иерархии памяти анализирует организацию кэша (прямо отображаемый, ассоциативный по множествам), политики замещения (LRU, FIFO) и трансляцию виртуальной памяти (буферы TLB, таблицы страниц) с количественными моделями для частоты промахов и AMAT. Параллелизм исследуется на всех уровнях: уровне команд (суперскалярность, VLIW), уровне данных (SIMD), уровне потоков (многоядерность, гиперпоточность) и уровне кластеров (передача сообщений). Прорывная глава о компьютерах складского масштаба (WSC) раскрывает, как Google и Amazon проектируют центры обработки данных для энергоэффективности и отказоустойчивости. Приложение по квантовым вычислениям, написанное совместно со специалистами, объясняет кубиты, запутанность и алгоритм Шора без излишнего ажиотажа. Каждая концепция основана на реальных процессорах: Apple M1, NVIDIA A100 и ядрах RISC-V. Тематические исследования включают оптимизацию умножения матриц для локальности кэша и анализ компромиссов между энергопотреблением и производительностью мобильных SoC. Благодаря строгим тестам, проницательным разделам «заблуждения и ловушки» и前瞻性 vision, эта книга не просто учит архитектуре компьютеров — она формирует её будущее."
    }
  },
  {
    id: "book_15",
    img: book15,
    title: {
      en: "Introduction to Algorithms",
      de: "Einführung in Algorithmen",
      ar: "مقدمة في الخوارزميات",
      ru: "Введение в алгоритмы"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Third Edition",
      de: "Dritte Auflage",
      ar: "الطبعة الثالثة",
      ru: "Третье издание"
    },
    author: {
      en: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      de: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      ar: "توماس هـ. كورمن، تشارلز إي. ليسيرسون، رونالد ل. ريفيست، كليفورد شتاين",
      ru: "Томас Х. Кормен, Чарльз Э. Лейзерсон, Рональд Л. Ривест, Клиффорд Штейн"
    },
    language: "english",
    rating: 4.9,
    price: 0,
    downloadURL: "/books/introduction-to-algorithms.pdf",
    description: {
      en: "The definitive guide to algorithms, covering sorting, graph theory, dynamic programming, and NP-completeness with rigorous analysis and clear pseudocode.",
      de: "Der definitive Leitfaden zu Algorithmen, der Sortieren, Graphentheorie, dynamische Programmierung und NP-Vollständigkeit mit rigoroser Analyse und klarem Pseudocode abdeckt.",
      ar: "الدليل الشامل للخوارزميات، يغطي الفرز، نظرية المخططات، البرمجة الديناميكية، والاكتمال NP مع تحليل دقيق وشفرة شبه برمجية واضحة.",
      ru: "Окончательное руководство по алгоритмам, охватывающее сортировку, теорию графов, динамическое программирование и NP-полноту с тщательным анализом и понятным псевдокодом."
    },
    depthDescription: {
      en: "Universally known as 'CLRS,' this cornerstone text provides a comprehensive and mathematically rigorous treatment of algorithms. It begins with foundational concepts—loop invariants, asymptotic notation, and recurrence relations—before diving into sorting (quicksort, heapsort, radix sort) and data structures (hash tables, binary search trees, B-trees). Graph algorithms span breadth-first search, Dijkstra’s shortest path, minimum spanning trees (Kruskal, Prim), and maximum flow (Ford-Fulkerson). Dynamic programming is taught through classic problems like matrix-chain multiplication and longest common subsequence, while greedy algorithms are analyzed via matroid theory. The NP-completeness chapter introduces reducibility, Cook-Levin theorem, and approximation algorithms for intractable problems. Each algorithm is accompanied by correctness proofs and complexity analysis, with real-world applications in bioinformatics, cryptography, and network routing. The third edition adds multithreaded algorithms, van Emde Boas trees, and advanced string matching. With its balance of theory and practice, it remains the gold standard for computer science education worldwide.",
      de: "Weltweit bekannt als 'CLRS', bietet dieser Eckpfeiler-Text eine umfassende und mathematisch rigorose Behandlung von Algorithmen. Er beginnt mit grundlegenden Konzepten – Schleifeninvarianten, asymptotische Notation und Rekurrenzrelationen – bevor er in Sortierverfahren (Quicksort, Heapsort, Radixsort) und Datenstrukturen (Hashtabellen, binäre Suchbäume, B-Bäume) eintaucht. Graphalgorithmen umfassen Breitensuche, Dijkstras kürzesten Pfad, minimale Spannbäume (Kruskal, Prim) und maximalen Fluss (Ford-Fulkerson). Dynamische Programmierung wird anhand klassischer Probleme wie Matrix-Kettenmultiplikation und längster gemeinsamer Teilfolge gelehrt, während gierige Algorithmen mittels Matroidtheorie analysiert werden. Das NP-Vollständigkeits-Kapitel führt Reduzierbarkeit, Cook-Levin-Theorem und Approximationsalgorithmen für unlösbare Probleme ein. Jeder Algorithmus wird von Korrektheitsbeweisen und Komplexitätsanalysen begleitet, mit Anwendungen in Bioinformatik, Kryptographie und Netzwerkrouting. Die dritte Auflage fügt multithreaded Algorithmen, van-Emde-Boas-Bäume und fortgeschrittenes String-Matching hinzu. Mit seiner Balance aus Theorie und Praxis bleibt es der Goldstandard der Informatik-Ausbildung weltweit.",
      ar: "المعروف عالميًا باسم \"CLRS\"، يوفر هذا الكتاب المرجعي معالجة شاملة ودقيقة رياضيًا للخوارزميات. يبدأ بالمفاهيم الأساسية — ثوابت الحلقات، الترميز المقارب، وعلاقات التكرار — قبل الغوص في خوارزميات الفرز (الترتيب السريع، الترتيب الهيبي، الترتيب الجذري) وهياكل البيانات (جداول التجزئة، أشجار البحث الثنائية، أشجار B). تغطي خوارزميات المخططات البحث بالعرض، أقصر مسار لديكسترا، الأشجار الممتدة الدنيا (كروسكال، بريم)، وأقصى تدفق (فورد-فولكرسون). يتم تدريس البرمجة الديناميكية من خلال مشاكل كلاسيكية مثل ضرب سلسلة المصفوفات وأطول تتابع جزئي مشترك، بينما يتم تحليل الخوارزميات الجشعة عبر نظرية الماترويد. يقدم فصل الاكتمال NP مفاهيم القابلية للتحويل، مبرهنة كوك-ليفن، وخوارزميات التقريب للمشاكل المستعصية. يرافق كل خوارزمية براهين صحتها وتحليل تعقيدها، مع تطبيقات واقعية في المعلوماتية الحيوية، والتشفير، وتوجيه الشبكات. تضيف الطبعة الثالثة خوارزميات متعددة الخيوط، وأشجار فان إمدي بواس، ومطابقة السلاسل المتقدمة. مع توازنها بين النظرية والممارسة، تظل المعيار الذهبي لتعليم علوم الحاسوب في جميع أنحاء العالم.",
      ru: "Всемирно известная как «CLRS», эта фундаментальная книга предоставляет всестороннее и математически строгое изложение алгоритмов. Она начинается с базовых концепций — инвариантов циклов, асимптотических обозначений и рекуррентных соотношений — прежде чем перейти к сортировке (быстрая, пирамидальная, поразрядная) и структурам данных (хеш-таблицы, двоичные деревья поиска, B-деревья). Алгоритмы на графах охватывают поиск в ширину, алгоритм Дейкстры для кратчайшего пути, минимальные остовные деревья (Краскала, Прима) и максимальный поток (Форда-Фалкерсона). Динамическое программирование преподаётся на классических задачах, таких как умножение цепочки матриц и самая длинная общая подпоследовательность, а жадные алгоритмы анализируются через теорию матроидов. Глава о NP-полноте вводит сводимость, теорему Кука-Левина и приближённые алгоритмы для неразрешимых задач. Каждый алгоритм сопровождается доказательствами корректности и анализом сложности с реальными приложениями в биоинформатике, криптографии и маршрутизации сетей. Третье издание добавляет многопоточные алгоритмы, деревья ван Эмде Боаса и продвинутый поиск подстрок. Благодаря балансу теории и практики, она остаётся золотым стандартом образования в области информатики по всему миру."
    }
  },
  {
    id: "book_16",
    img: book16,
    title: {
      en: "The Brothers Karamazov",
      de: "Die Brüder Karamasow",
      ar: "الإخوة كارامازوف",
      ru: "Братья Карамазовы"
    },
    type: "story",
    age: ">16",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Fyodor Dostoevsky",
      de: "Fjodor Dostojewski",
      ar: "فيودور دوستويفسكي",
      ru: "Фёдор Достоевский"
    },
    language: "english",
    rating: 5.0,
    price: 0,
    downloadURL: "/books/the-brothers-karamazov.pdf",
    description: {
      en: "A philosophical novel exploring faith, doubt, free will, and morality through the turbulent lives of three brothers and their enigmatic father.",
      de: "Ein philosophischer Roman, der Glauben, Zweifel, freien Willen und Moralität durch das turbulente Leben dreier Brüder und ihres rätselhaften Vaters erforscht.",
      ar: "رواية فلسفية تستكشف الإيمان والشك والإرادة الحرة والأخلاق من خلال حياة ثلاثة إخوة مضطربة وأبيهم الغامض.",
      ru: "Философский роман, исследующий веру, сомнение, свободу воли и мораль через бурную жизнь трёх братьев и их загадочного отца."
    },
    depthDescription: {
      en: "'The Brothers Karamazov' is Dostoevsky’s final and greatest work, a profound meditation on the existence of God, the problem of evil, and the burden of human freedom. Through the contrasting worldviews of the rational Ivan, the sensual Dmitri, and the spiritual Alyosha, the novel stages a cosmic debate: Ivan’s 'Grand Inquisitor' chapter challenges Christ’s gift of free will, while Father Zosima’s teachings offer a vision of active love and humility. The murder of the depraved patriarch Fyodor Pavlovich sets off a chain of psychological and legal drama, but the true conflict is metaphysical. Dostoevsky weaves in courtroom realism, romantic entanglements, and theological discourse to create a tapestry of 19th-century Russian society. The character of Smerdyakov—a servant shaped by resentment and nihilism—embodies the dangers of moral relativism. Published just months before the author’s death, the novel feels like a final testament: a plea for compassion in a world teetering between faith and despair. Its influence extends from existentialist philosophy to modern psychology, and its questions remain urgently relevant.",
      de: "'Die Brüder Karamasow' ist Dostojewskis letztes und größtes Werk, eine tiefgründige Meditation über die Existenz Gottes, das Problem des Bösen und die Last der menschlichen Freiheit. Durch die kontrastierenden Weltanschauungen des rationalen Iwan, des sinnlichen Dmitri und des spirituellen Aljoscha inszeniert der Roman eine kosmische Debatte: Iwans 'Großer Inquisitor' stellt Christi Geschenk der Freiheit in Frage, während Vater Zosimas Lehren eine Vision aktiver Liebe und Demut bieten. Der Mord am verdorbenen Patriarchen Fjodor Pawlowitsch löst eine Kette psychologischer und juristischer Dramen aus, doch der wahre Konflikt ist metaphysisch. Dostojewski verwebt Gerichtsrealismus, romantische Verwicklungen und theologischen Diskurs zu einem Panorama der russischen Gesellschaft des 19. Jahrhunderts. Die Figur des Smerdjakow – ein Diener, geformt von Ressentiment und Nihilismus – verkörpert die Gefahren des moralischen Relativismus. Wenige Monate vor dem Tod des Autors veröffentlicht, wirkt der Roman wie ein letztes Testament: ein Plädoyer für Mitgefühl in einer Welt zwischen Glauben und Verzweiflung. Sein Einfluss reicht von der existenzialistischen Philosophie bis zur modernen Psychologie, und seine Fragen bleiben dringend aktuell.",
      ar: "تُعد رواية \"الإخوة كارامازوف\" آخر أعمال دوستويفسكي وأعظمها، وهي تأمل عميق في وجود الله ومشكلة الشر وعبء الحرية البشرية. من خلال الرؤى العالمية المتباينة للعقلاني إيفان، والحسّي دميتري، والروحي أليوشا، تُصوّر الرواية نقاشًا كونيًا: فصل \"المحقق العظيم\" لإيفان يتحدى هبة المسيح للإرادة الحرة، بينما تقدم تعاليم الأب زوسيما رؤية للحب الفعّال والتواضع. يُطلق قتل البطريرك الفاسد فيودور بافلوفيتش سلسلة من الدراما النفسية والقانونية، لكن الصراع الحقيقي هو ميتافيزيقي. ينسج دوستويفسكي الواقعية القضائية والتشابكات الرومانسية والخطاب اللاهوتي ليخلق لوحة للحياة الاجتماعية الروسية في القرن التاسع عشر. يجسد شخصية سميردياكوف — الخادم المتشكل من المرارة والعدمية — مخاطر النسبية الأخلاقية. نُشرت الرواية قبل أشهر قليلة من وفاة المؤلف، وتشعر وكأنها وصيته الأخيرة: نداء للرحمة في عالم يترنح بين الإيمان واليأس. يمتد تأثيرها من الفلسفة الوجودية إلى علم النفس الحديث، وتظل أسئلتها ملحة اليوم.",
      ru: "«Братья Карамазовы» — последнее и величайшее произведение Достоевского, глубокое размышление о существовании Бога, проблеме зла и бремени человеческой свободы. Через контрастирующие мировоззрения рационального Ивана, чувственного Дмитрия и духовного Алёши роман разворачивает космический спор: глава «Великий инквизитор» Ивана бросает вызов дару Христа — свободе воли, тогда как учение старца Зосимы предлагает видение активной любви и смирения. Убийство развратного патриарха Фёдора Павловича запускает цепь психологических и юридических драм, но истинный конфликт — метафизический. Достоевский сплетает судебный реализм, романтические перипетии и богословские дискуссии в панораму русского общества XIX века. Персонаж Смердяков — слуга, сформированный обидой и нигилизмом — олицетворяет опасности морального релятивизма. Опубликованная за несколько месяцев до смерти автора, роман ощущается как последнее завещание: призыв к состраданию в мире, балансирующем между верой и отчаянием. Его влияние простирается от экзистенциальной философии до современной психологии, и его вопросы остаются актуальными."
    }
  },
  {
    id: "book_17",
    img: book17,
    title: {
      en: "Linear Algebra Done Right",
      de: "Lineare Algebra – Richtig Gemacht",
      ar: "الجبر الخطي بالطريقة الصحيحة",
      ru: "Линейная алгебра правильно"
    },
    type: "math",
    age: ">16",
    edition: {
      en: "Third Edition",
      de: "Dritte Auflage",
      ar: "الطبعة الثالثة",
      ru: "Третье издание"
    },
    author: {
      en: "Sheldon Axler",
      de: "Sheldon Axler",
      ar: "شيلدون أكسلر",
      ru: "Шелдон Акслер"
    },
    language: "english",
    rating: 4.4,
    price: 0,
    downloadURL: "/books/linear-algebra-done-right.pdf",
    description: {
      en: "A modern approach to linear algebra that emphasizes vector spaces and linear maps over determinants, ideal for theoretical understanding.",
      de: "Ein moderner Ansatz zur linearen Algebra, der Vektorräume und lineare Abbildungen gegenüber Determinanten betont – ideal für das theoretische Verständnis.",
      ar: "نهج حديث للجبر الخطي يركّز على الفضاءات المتجهة والخرائط الخطية أكثر من المحددات، مثالي للفهم النظري.",
      ru: "Современный подход к линейной алгебре, делающий акцент на векторных пространствах и линейных отображениях, а не на определителях, идеален для теоретического понимания."
    },
    depthDescription: {
      en: "Sheldon Axler’s revolutionary text reimagines linear algebra by delaying determinants until the final chapter, focusing instead on the intrinsic geometry of vector spaces and linear operators. It begins with complex vector spaces, inner products, and orthogonality, then builds to the spectral theorem for self-adjoint operators and the singular value decomposition. The core insight is that eigenvalues and invariant subspaces reveal the structure of linear maps more clearly than matrix manipulation. Proofs are elegant and conceptual—e.g., the existence of eigenvalues is shown via the fundamental theorem of algebra, not characteristic polynomials. The book includes novel results like the 'Axler trick' for avoiding determinants in volume calculations. Exercises range from straightforward verifications to deep theoretical challenges, many with hints. Designed for math majors, it prepares students for functional analysis and quantum mechanics by emphasizing abstraction over computation. The third edition adds new sections on product spaces, quotient spaces, and dual spaces, along with hundreds of new exercises. For students tired of 'plug-and-chug' linear algebra, this book offers a path to true mathematical maturity.",
      de: "Sheldon Axlers revolutionärer Text überdenkt die lineare Algebra, indem er Determinanten bis zum letzten Kapitel verschiebt und stattdessen auf die intrinsische Geometrie von Vektorräumen und linearen Operatoren fokussiert. Er beginnt mit komplexen Vektorräumen, Skalarprodukten und Orthogonalität, um dann zum Spektralsatz für selbstadjungierte Operatoren und der Singulärwertzerlegung aufzubauen. Die zentrale Erkenntnis ist, dass Eigenwerte und invariante Unterräume die Struktur linearer Abbildungen klarer offenbaren als Matrixmanipulation. Die Beweise sind elegant und konzeptionell – z. B. wird die Existenz von Eigenwerten über den Fundamentalsatz der Algebra gezeigt, nicht über charakteristische Polynome. Das Buch enthält neuartige Ergebnisse wie den 'Axler-Trick', um Determinanten bei Volumenberechnungen zu vermeiden. Die Übungen reichen von einfachen Verifikationen bis hin zu tiefen theoretischen Herausforderungen, viele mit Hinweisen. Für Mathematikstudenten konzipiert, bereitet es durch Betonung der Abstraktion gegenüber Berechnung auf Funktionalanalysis und Quantenmechanik vor. Die dritte Auflage fügt neue Abschnitte zu Produkträumen, Quotientenräumen und Dualräumen sowie Hunderte neuer Übungen hinzu. Für Studierende, die genug haben von 'Einsetzen-und-Ausrechnen'-Linearer-Algebra, bietet dieses Buch einen Weg zur wahren mathematischen Reife.",
      ar: "يعيد كتاب شيلدون أكسلر الثوري تصور الجبر الخطي من خلال تأجيل المحددات حتى الفصل الأخير، مع التركيز بدلاً من ذلك على الهندسة الجوهرية للفضاءات المتجهة والمؤثرات الخطية. يبدأ بالفضاءات المتجهة العقدية، والجداءات الداخلية، والتعامد، ثم يبني نحو المبرهنة الطيفية للمؤثرات ذاتية التلاحم وتحليل القيمة المفردة. الفكرة الأساسية هي أن القيم الذاتية والفضاءات الجزئية الثابتة تكشف بنية الخرائط الخطية بشكل أوضح من معالجة المصفوفات. البراهين أنيقة ومفاهيمية — على سبيل المثال، يُبرهن وجود القيم الذاتية عبر المبرهنة الأساسية للجبر، وليس عبر متعددات الحدود المميزة. يحتوي الكتاب على نتائج جديدة مثل \"خدعة أكسلر\" لتجنب المحددات في حسابات الحجم. تتراوح التمارين من التحقق البسيط إلى التحديات النظرية العميقة، مع تلميحات كثيرة. صُمم لطلاب الرياضيات، ويُعد الطلاب للتحليل الدالي والميكانيكا الكمومية من خلال التأكيد على التجريد أكثر من الحساب. تضيف الطبعة الثالثة أقسامًا جديدة عن فضاءات الجداء، وفضاءات الحاصل، والفضاءات الثنائية، بالإضافة إلى مئات التمارين الجديدة. للطلاب الذين سئموا من الجبر الخطي \"الإدخال والحساب\"، يقدم هذا الكتاب طريقًا إلى النضج الرياضي الحقيقي.",
      ru: "Революционный текст Шелдона Аксера переосмысливает линейную алгебру, откладывая определители до последней главы и сосредотачиваясь вместо этого на внутренней геометрии векторных пространств и линейных операторов. Он начинается с комплексных векторных пространств, скалярных произведений и ортогональности, затем переходит к спектральной теореме для самосопряжённых операторов и сингулярному разложению. Ключевое понимание заключается в том, что собственные значения и инвариантные подпространства раскрывают структуру линейных отображений яснее, чем манипуляции с матрицами. Доказательства элегантны и концептуальны — например, существование собственных значений доказывается через основную теорему алгебры, а не через характеристические многочлены. Книга включает новые результаты, такие как «трюк Аксера» для избежания определителей при вычислении объёмов. Упражнения варьируются от простых проверок до глубоких теоретических задач, многие с подсказками. Созданная для студентов-математиков, она готовит их к функциональному анализу и квантовой механике, делая упор на абстракцию, а не вычисления. Третье издание добавляет новые разделы о произведениях пространств, факторпространствах и двойственных пространствах, а также сотни новых упражнений. Для студентов, уставших от «подставь и посчитай» линейной алгебры, эта книга предлагает путь к подлинной математической зрелости."
    }
  },
  {
    id: "book_18",
    img: book18,
    title: {
      en: "Anna Karenina",
      de: "Anna Karenina",
      ar: "آنا كارينينا",
      ru: "Анна Каренина"
    },
    type: "story",
    age: ">16",
    edition: {
      en: "First Edition",
      de: "Erste Auflage",
      ar: "الطبعة الأولى",
      ru: "Первое издание"
    },
    author: {
      en: "Leo Tolstoy",
      de: "Leo Tolstoi",
      ar: "ليو تولستوي",
      ru: "Лев Толстой"
    },
    language: "english",
    rating: 4.9,
    price: 0,
    downloadURL: "/books/anna-karenina.pdf",
    description: {
      en: "A tragic love story set against the backdrop of 19th-century Russian aristocracy, exploring themes of passion, society, and moral responsibility.",
      de: "Eine tragische Liebesgeschichte vor dem Hintergrund des russischen Adels des 19. Jahrhunderts, die Themen wie Leidenschaft, Gesellschaft und moralische Verantwortung erforscht.",
      ar: "قصة حب مأساوية تدور أحداثها في أوساط أرستقراطية روسيا في القرن التاسع عشر، وتستكشف موضوعات العاطفة والمجتمع والمسؤولية الأخلاقية.",
      ru: "Трагическая история любви на фоне русской аристократии XIX века, исследующая темы страсти, общества и моральной ответственности."
    },
    depthDescription: {
      en: "'Anna Karenina' opens with one of literature’s most famous lines: 'All happy families are alike; each unhappy family is unhappy in its own way.' Tolstoy weaves two parallel narratives: Anna’s doomed affair with the dashing Count Vronsky, which leads to social ostracism and psychological disintegration, and Levin’s philosophical quest for meaning through love, faith, and agrarian reform. The novel is a panoramic portrait of Russian society—salons, serfdom, elections, and military campaigns—yet its power lies in intimate psychological detail. Anna’s descent into jealousy and paranoia is rendered with terrifying realism, while Levin’s spiritual awakening mirrors Tolstoy’s own crisis of faith. The narrative technique is revolutionary: free indirect discourse allows readers to inhabit characters’ thoughts without authorial intrusion. Symbolism abounds—the train as fate, the storm as passion, the countryside as moral clarity. Unlike melodrama, Anna’s tragedy stems not from villainy but from the collision of authentic emotion with rigid social codes. A masterpiece of realism, it remains the gold standard for the psychological novel.",
      de: "'Anna Karenina' beginnt mit einer der berühmtesten Zeilen der Literatur: 'Alle glücklichen Familien gleichen einander; jede unglückliche Familie ist auf ihre eigene Weise unglücklich.' Tolstoi verwebt zwei parallele Erzählstränge: Annas zum Scheitern verurteilte Affäre mit dem charmanten Grafen Wronski, die zu sozialer Ächtung und psychischer Desintegration führt, und Lewins philosophische Suche nach Sinn durch Liebe, Glauben und Agrarreform. Der Roman ist ein Panorama der russischen Gesellschaft – Salons, Leibeigenschaft, Wahlen und Feldzüge – doch seine Kraft liegt in intimen psychologischen Details. Annas Absturz in Eifersucht und Paranoia wird mit erschreckendem Realismus geschildert, während Lewins spirituelles Erwachen Tolstois eigene Glaubenskrise widerspiegelt. Die Erzähltechnik ist revolutionär: Der freie indirekte Stil ermöglicht es Lesern, die Gedanken der Figuren zu bewohnen, ohne dass der Autor eingreift. Symbolik ist allgegenwärtig – der Zug als Schicksal, der Sturm als Leidenschaft, die Landschaft als moralische Klarheit. Im Gegensatz zur Melodramatik entspringt Annas Tragödie nicht der Boshaftigkeit, sondern der Kollision authentischer Emotion mit starren sozialen Normen. Ein Meisterwerk des Realismus, bleibt es der Goldstandard des psychologischen Romans.",
      ar: "تفتتح رواية \"آنا كارينينا\" بإحدى أشهر الجمل في الأدب: \"كل العائلات السعيدة متشابهة؛ كل عائلة تعيسة تعيسة بطريقتها الخاصة.\" ينسج تولستوي سردين متوازيين: علاقة آنا المحتومة مع الكونت الوسيم فرونسكي، التي تؤدي إلى نبذ اجتماعي وتفكك نفسي، وبحث ليفين الفلسفي عن المعنى من خلال الحب والإيمان والإصلاح الزراعي. الرواية هي لوحة بانورامية للمجتمع الروسي — الصالونات، القنانة، الانتخابات، والحملات العسكرية — لكن قوتها تكمن في التفاصيل النفسية الحميمة. يُصوَّر انحدار آنا إلى الغيرة والبارانويا بواقعية مروعة، بينما يعكس الصحوة الروحية لليفين أزمة إيمان تولستوي الخاصة. تقنية السرد ثورية: يسمح الخطاب غير المباشر الحر للقراء بسكنة أفكار الشخصيات دون تدخل المؤلف. الرمزية وافرة — القطار كرمز للقدر، العاصفة كرمز للعاطفة، الريف كرمز للوضوح الأخلاقي. على عكس الميلودراما، فإن مأساة آنا لا تنبع من الشر، بل من تصادم المشاعر الصادقة مع القواعد الاجتماعية الصارمة. كتحفة واقعية، تظل المعيار الذهبي للرواية النفسية.",
      ru: "«Анна Каренина» начинается с одной из самых знаменитых фраз в литературе: «Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему». Толстой сплетает два параллельных сюжета: обречённую связь Анны с обаятельным графом Вронским, ведущую к общественному остракизму и психическому распаду, и философские поиски Лёвина смысла через любовь, веру и аграрную реформу. Роман — панорамное изображение русского общества: салоны, крепостное право, выборы, военные кампании — но его сила — в интимных психологических деталях. Погружение Анны в ревность и паранойю передано с пугающим реализмом, а духовное пробуждение Лёвина отражает собственный кризис веры Толстого. Приём повествования революционен: свободная косвенная речь позволяет читателям проникать в мысли персонажей без вмешательства автора. Символика повсюду — поезд как судьба, буря как страсть, деревня как моральная ясность. В отличие от мелодрамы, трагедия Анны возникает не из-за злодейства, а из столкновения искренних чувств с жёсткими социальными нормами. Будучи шедевром реализма, она остаётся золотым стандартом психологического романа."
    }
  }
];

export const testimonialData = [
  {
    id: 1,
    name: "Victor Chen",
    text: "This online book platform has revolutionized my reading habits. The interface is clean, the library vast, and downloading books takes seconds. I read more than ever now!",
    img: profileImg1,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    text: "As a student, I rely on this platform for affordable access to textbooks and novels. The search feature is smart, and offline reading works flawlessly.",
    img: profileImg2,
  },
  {
    id: 3,
    name: "Aarav Patel",
    text: "Finding rare and classic titles used to be hard now it’s effortless. This book platform curates beautifully and delivers a seamless reading experience every time.",
    img: profileImg3,
  },
  {
    id: 4,
    name: "Élodie Moreau",
    text: "I love how this platform supports multiple languages and formats. Whether I’m reading poetry or technical guides, the experience is always smooth and enjoyable.",
    img: profileImg4,
  },
  {
    id: 5,
    name: "आरव शर्मा",
    text: "This online book service gave me access to thousands of titles without leaving home. The personalized recommendations are spot on and have introduced me to amazing authors.",
    img: profileImg5,
  },
  {
    id: 6,
    name: "Анастасия Волкова",
    text: "Even with a slow internet connection, this platform loads quickly and syncs my progress across devices. It’s become my go-to for daily reading and relaxation.",
    img: profileImg6,
  },
  {
    id: 7,
    name: "田中陽翔",
    text: "The night mode and customizable fonts make reading comfortable for hours. This book platform truly understands what readers need for an immersive experience.",
    img: profileImg7,
  },
  {
    id: 8,
    name: "Liam O'Sullivan",
    text: "From bestsellers to indie gems, this platform has it all. I especially appreciate the sample chapters—helps me discover new books without commitment.",
    img: profileImg8,
  },
  {
    id: 9,
    name: "Sofia Ricci",
    text: "I’ve tried several e-book services, but this one stands out for its intuitive design, huge collection, and excellent customer support. My reading journey has never been better.",
    img: profileImg9,
  },
];

export const mockUsers: User[] = [
  {
    id: "user_6",
    email: "anastasia@example.com",
    password: "ana987h5",
    name: "Анастасия Волкова",
    profileImage: profileImg6,
    role: "user",
    createdAt: "2024-01-15",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Programming", "Math"],
    },
    currentReadings: ["book_10", "book_8"],
    readingHistory: [
      "book_4",
      "book_7",
      "book_2",
      "book_1",
      "book_5",
      "book_9",
    ],
    savedBooks: [
      "book_1",
      "book_5",
      "book_7",
      "book_8",
      "book_2",
      "book_9",
      "book_6",
      "book_10",
      "book_3",
      "book_4",
    ],
    notes: [
      {
        id: "note_1",
        title: "Multivariable Calculus - Key Concepts",
        content:
          "Gradient vectors point in the direction of maximum increase. The directional derivative D_u f = ∇f · u. For optimization with constraints, use Lagrange multipliers: ∇f = λ∇g. Remember that curl measures rotation in vector fields, while divergence measures source/sink behavior.",
        creationDate: new Date("2024-09-15"),
        aboutBooks: ["book_9", "book_7", "book_2"],
        tags: ["calculus", "vector calculus", "optimization"],
      },
      {
        id: "note_2",
        title: "Integration Techniques Summary",
        content:
          "For rational functions, use partial fraction decomposition. Trigonometric substitution: √(a²-x²) → x = a sinθ, √(a²+x²) → x = a tanθ, √(x²-a²) → x = a secθ. Integration by parts: ∫u dv = uv - ∫v du. LIATE rule for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.",
        creationDate: new Date("2024-09-20"),
        aboutBooks: ["book_4", "book_8", "book_3", "book_9", "book_3"],
        tags: ["integration", "calculus", "techniques"],
      },
    ],
  },
  {
    id: "user_002",
    email: "bob@example.com",
    password: "securepass",
    name: "Bob Smith",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-02-10",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Science", "Education"],
    },
    currentReadings: ["book_13", "book_6"],
    readingHistory: ["book_4"],
    savedBooks: ["book_15", "book_14"],
    notes: [
      {
        id: "note_002_1",
        title: "Machine Learning Fundamentals",
        content:
          "Bias-variance tradeoff: high bias = underfitting, high variance = overfitting. Cross-validation (k=5 or k=10) helps estimate model performance. Regularization: L1 (Lasso) creates sparse models, L2 (Ridge) prevents overfitting. Always scale features before applying SVM or neural networks.",
        creationDate: new Date("2024-08-12"),
        aboutBooks: ["book_13", "book_6"],
        tags: ["machine learning", "statistics", "model evaluation"],
      },
    ],
  },
  {
    id: "user_003",
    email: "carol@example.com",
    password: "carol123",
    name: "Carol Davis",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-03-05",
    preferences: {
      theme: "system",
      notifications: true,
      favoriteCategories: ["Programming"],
    },
    currentReadings: ["book_11", "book_12"],
    readingHistory: ["book_14"],
    savedBooks: ["book_15", "book_17"],
    notes: [
      {
        id: "note_003_1",
        title: "Process Synchronization in OS",
        content:
          "Critical section problem requires mutual exclusion, progress, and bounded waiting. Semaphores: binary (mutex) vs counting. Monitor = collection of procedures + condition variables. Deadlock conditions: mutual exclusion, hold & wait, no preemption, circular wait. Prevention vs avoidance vs detection.",
        creationDate: new Date("2024-07-28"),
        aboutBooks: ["book_11", "book_14"],
        tags: ["operating systems", "concurrency", "deadlocks"],
      },
    ],
  },
  {
    id: "user_004",
    email: "dave@example.com",
    password: "davepass",
    name: "Dave Wilson",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-03-20",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Physics", "Math"],
    },
    currentReadings: ["book_5", "book_10"],
    readingHistory: ["book_14"],
    savedBooks: ["book_10"],
    notes: [
      {
        id: "note_004_1",
        title: "Rigid Body Dynamics for Games",
        content:
          "Moment of inertia tensor I relates angular momentum L to angular velocity ω: L = Iω. Torque τ = dL/dt = Iα + ω × (Iω). For collision response, use impulse-based methods: J = -(1+e)(v_rel · n) / (1/m1 + 1/m2 + (r1×n)ᵀI1⁻¹(r1×n) + (r2×n)ᵀI2⁻¹(r2×n)).",
        creationDate: new Date("2024-08-05"),
        aboutBooks: ["book_5", "book_10"],
        tags: ["physics", "game development", "rigid body"],
      },
    ],
  },
  {
    id: "user_005",
    email: "eve@example.com",
    password: "eve12345",
    name: "Eve Brown",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-04-01",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Education", "Story"],
    },
    currentReadings: ["book_16", "book_18"],
    readingHistory: ["book_4"],
    savedBooks: ["book_1", "book_3"],
    notes: [
      {
        id: "note_005_1",
        title: "The Grand Inquisitor Analysis",
        content:
          "Ivan's parable challenges Christ's gift of free will as too heavy for humanity. The Inquisitor argues people prefer miracle, mystery, and authority over freedom. This reflects Dostoevsky's critique of rationalism and socialism. Alyosha's silent kiss represents faith beyond reason. The chapter is central to understanding the novel's philosophical conflict.",
        creationDate: new Date("2024-09-10"),
        aboutBooks: ["book_16", "book_18"],
        tags: ["literature", "philosophy", "dostoevsky", "existentialism"],
      },
    ],
  },
  {
    id: "user_006",
    email: "frank@example.com",
    password: "frankpass",
    name: "Frank Miller",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-04-10",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Programming", "Computer Architecture"],
    },
    currentReadings: ["book_15", "book_14"],
    readingHistory: ["book_11", "book_12"],
    savedBooks: ["book_17"],
    notes: [
      {
        id: "note_006_1",
        title: "Dynamic Programming Patterns",
        content:
          "Fibonacci: memoize overlapping subproblems. Knapsack: dp[i][w] = max(value[i] + dp[i-1][w-weight[i]], dp[i-1][w]). Longest Common Subsequence: if x[i]==y[j] then dp[i][j] = 1 + dp[i-1][j-1] else max(dp[i-1][j], dp[i][j-1]). Always define state, recurrence, and base cases clearly.",
        creationDate: new Date("2024-08-22"),
        aboutBooks: ["book_15", "book_17"],
        tags: ["algorithms", "dynamic programming", "optimization"],
      },
    ],
  },
  {
    id: "user_007",
    email: "grace@example.com",
    password: "grace123",
    name: "Grace Lee",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-05-01",
    preferences: {
      theme: "system",
      notifications: true,
      favoriteCategories: ["Math", "Science"],
    },
    currentReadings: ["book_6", "book_13"],
    readingHistory: ["book_7", "book_8"],
    savedBooks: ["book_10", "book_4"],
    notes: [
      {
        id: "note_007_1",
        title: "Statistical Inference Key Points",
        content:
          "Central Limit Theorem: sample means ~ N(μ, σ²/n) for large n. Confidence interval for μ: x̄ ± z*σ/√n. Hypothesis testing: H₀ vs H₁, p-value = P(observed | H₀ true). Type I error (α) = false positive, Type II error (β) = false negative. Power = 1-β.",
        creationDate: new Date("2024-09-05"),
        aboutBooks: ["book_6", "book_13"],
        tags: ["statistics", "inference", "hypothesis testing"],
      },
    ],
  },
  {
    id: "user_008",
    email: "henry@example.com",
    password: "henrypass",
    name: "Henry Taylor",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-05-15",
    preferences: {
      theme: "dark",
      notifications: false,
      favoriteCategories: ["Programming"],
    },
    currentReadings: ["book_15"],
    readingHistory: ["book_15"],
    savedBooks: ["book_17"],
    notes: [
      {
        id: "note_008_1",
        title: "Graph Algorithms Implementation",
        content:
          "BFS uses queue, finds shortest path in unweighted graphs. DFS uses stack/recursion, good for topological sorting and cycle detection. Dijkstra: priority queue, O((V+E)log V), doesn't work with negative weights. Bellman-Ford: O(VE), handles negative weights, detects negative cycles.",
        creationDate: new Date("2024-08-18"),
        aboutBooks: ["book_15", "book_17"],
        tags: ["algorithms", "graphs", "data structures"],
      },
    ],
  },
  {
    id: "user_009",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    profileImage: profileImg3,
    role: "admin",
    createdAt: "2023-12-01",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["All"],
    },
    currentReadings: ["book_1", "book_3"],
    readingHistory: ["book_16", "book_18"],
    savedBooks: ["book_1", "book_3", "book_16", "book_18"],
    notes: [
      {
        id: "note_009_1",
        title: "Identity and Memory in Literature",
        content:
          "Both 'Who Is There?' and 'Lost Boy' explore how memory constructs identity. The unreliable narrator technique creates psychological tension. Setting as character: the old house and the forest both represent liminal spaces between reality and perception. Trauma disrupts linear narrative structure.",
        creationDate: new Date("2024-09-25"),
        aboutBooks: ["book_1", "book_3"],
        tags: ["literature", "psychology", "narrative theory"],
      },
    ],
  },
  {
    id: "user_010",
    email: "zoe@example.com",
    password: "zoepass",
    name: "Zoe Clark",
    profileImage: profileImg2,
    role: "user",
    createdAt: "2024-06-01",
    preferences: {
      theme: "light",
      notifications: true,
      favoriteCategories: ["Story", "Education"],
    },
    currentReadings: ["book_18"],
    readingHistory: ["book_4"],
    savedBooks: ["book_15"],
    notes: [
      {
        id: "note_010_1",
        title: "Anna Karenina - Social Commentary",
        content:
          "Tolstoy contrasts Anna's passionate but socially destructive love with Levin's philosophical journey toward meaning. The novel critiques 19th-century Russian aristocracy's hypocrisy. Anna's tragedy stems not from her affair but from society's refusal to accept female autonomy. Levin represents Tolstoy's own spiritual crisis and resolution.",
        creationDate: new Date("2024-09-18"),
        aboutBooks: ["book_18", "book_4"],
        tags: ["literature", "russian", "social criticism", "feminism"],
      },
    ],
  },
];
