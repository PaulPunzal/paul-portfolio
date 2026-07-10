import { Project, SkillGroup, MarqueeItem, DirectLink, BlogPost } from "./types";

// ── PROJECTS DATA ──────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "motorpass",
    iconName: "Cpu",
    githubUrls: [
        { label: "IoT System", url: "https://github.com/PaulPunzal/capstone-motorpass" }
    ],
    images: [
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915530/x7hgoj9ogpbo6y90iibx.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915530/hbnngkopjtxikzxsz7bs.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915531/kwixnkhmq2xfxookma7p.png",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778918404/cs6icdii6jt9koitzig4.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778916460/rc5nri2d3jsaxhavc8az.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915532/dywpzlnpaojhfaucd6rr.png"

    ],
    certificates: [
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915529/kht1p1eux7xuzuhmnhsm.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778915505/v1eqgtwrrop2burufquc.jpg"

    ],
    iconBgStyle: "rgba(125,249,166,0.1)",
    label: "Capstone · Full-Stack",
    title: "MotorPass",
    fullTitle: "MotorPass — Smart Gate Pass System",
    role: "Capstone · Full-Stack Developer",
    shortDesc:
      "Smart motorcycle gate pass system with YOLO helmet detection, OCR license scanning, fingerprint biometrics, and live Firebase dashboard on Raspberry Pi 4.",
    fullDesc:
      "An IoT-based automated campus entry system deployed on a Raspberry Pi 4, replacing manual gate pass workflows with multi-factor AI verification. Integrates computer vision, biometrics, and dual-database resilience into a single cohesive system.",
    bullets: [
      "Engineered the end-to-end IoT pipeline on Raspberry Pi 4, integrating hardware peripherals and cloud services to replace manual gate pass workflows and improve throughput.",
      "Custom-trained a YOLO/ONNX machine learning model for real-time helmet detection, automatically enforcing campus safety compliance without much relying human intervention.",
      "Implemented multi-factor authentication combining OCR-powered driver's license scanning with fingerprint biometrics for secure, verified vehicle entry.",
      "Architected a dual-database strategy using SQLite for resilient local event logging and Firebase Realtime Database for live synchronization — zero data loss during connectivity drops — with a live admin monitoring dashboard.",
    ],
    previewTags: ["Python", "YOLO/ONNX", "Raspberry Pi", "Firebase", "OCR", "Biometrics"],
    stack: [
      { label: "Python", highlight: true },
      { label: "YOLO/ONNX", highlight: true },
      { label: "Raspberry Pi 4", highlight: false },
      { label: "Firebase Realtime DB", highlight: false },
      { label: "SQLite", highlight: false },
      { label: "OCR", highlight: false },
      { label: "Biometrics", highlight: false },
    ],
  },
  {
    id: "little-lion",
    iconName: "BookOpen",
    githubUrls: [
      { label: "Live Demo", url: "https://little-lion.pages.dev/" }
    ],
      images: [
        "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778916733/ornilcbclhidt9mo417q.png"
    ],
    iconBgStyle: "rgba(255,200,100,0.1)",
    label: "OJT · Lead Dev & Backend",
    title: "Little Lion SPED",
    fullTitle: "Little Lion — SPED School Management System",
    role: "OJT · Lead Developer & UI/UX",
    shortDesc:
      "Full SPED school management platform. (Note: Source code is confidential. Demo link is for the landing page only; login is restricted).",
    fullDesc:
      "A specialized administrative platform for a Special Education school — covering full requirements gathering, architecture, and delivery. Built five tailored portals for distinct stakeholder groups with an emphasis on accessibility and clarity.\n\n🔒 *Note: The source code is confidential. The attached live link is for testing/demo purposes. For this specific demo, only the landing page is accessible and login functionality is disabled.*",
    bullets: [
      "Led end-to-end development from requirements gathering to production deployment during OJT.",
      "Architected a Role-Based Access Control (RBAC) system with five distinct portals for Admins, Staff, Teachers, Therapists, and Parents — each showing only relevant data.",
      "Designed accessible, calming frontend interfaces using intentional color palettes (greens and whites) and clear information hierarchies for users including parents with varying technical literacy.",
      "Built a real-time parent communication hub with a structured \"Concerns\" ticketing system and live daily activity digests, significantly improving transparency and parent-teacher engagement.",
    ],
    previewTags: ["React", "Firebase", "RBAC"],
    stack: [
      { label: "React", highlight: true },
      { label: "Firebase Firestore", highlight: true },
      { label: "Firebase Auth", highlight: false },
      { label: "JavaScript", highlight: false },
      { label: "CSS", highlight: false },
      { label: "RBAC", highlight: false },
    ],
  },
  {
    id: "elearning",
    iconName: "GraduationCap",
    iconBgStyle: "rgba(100,150,255,0.1)",
    label: "Full-Stack · Mobile",
    title: "E-Learning Platform",
    fullTitle: "E-Learning & Assessment Platform",
    role: "Full-Stack & Mobile Developer",
    shortDesc:
      "Cross-platform mobile e-learning app with adaptive quiz engine, OTP auth, and custom PHP REST API backend.",
    fullDesc:
      "A cross-platform mobile e-learning ecosystem with a custom PHP backend. Delivers adaptive quizzes, OTP-based authentication, and RESTful data flows between a Flutter mobile frontend and a MySQL relational database.",
    bullets: [
      "Developed the cross-platform mobile app using Flutter/Dart, paired with a custom Vanilla PHP backend for a fully self-contained educational ecosystem.",
      "Engineered a dynamic quiz and assessment engine supporting score tracking, attempt history, and randomized difficulty levels across multiple lesson modules.",
      "Designed and implemented RESTful APIs managing complex relational data flows between the mobile frontend and MySQL database.",
      "Executed major database schema migrations and role restructuring to support new feature rollouts without downtime, while implementing secure OTP-based authentication.",
    ],
    previewTags: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    stack: [
      { label: "Flutter", highlight: true },
      { label: "Dart", highlight: true },
      { label: "PHP (Vanilla)", highlight: false },
      { label: "MySQL", highlight: false },
      { label: "REST APIs", highlight: false },
      { label: "OTP Auth", highlight: false },
    ],
  },
  {
    id: "grocery",
    iconName: "ScanEye",
    githubUrls: [
      { label: "Mobile App", url: "https://github.com/PaulPunzal/Offline-GroceryList" }
    ],
    images: [
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778917303/fctzqhkpycnzxncriixo.jpg",
      "https://res.cloudinary.com/dlfjnz8xq/image/upload/v1778917305/h2zazdtyyctuqijwvosz.jpg"
    ],
    iconBgStyle: "rgba(255,100,150,0.1)",
    label: "Mobile · Offline-First",
    title: "Grocery OCR",
    fullTitle: "Offline Grocery List — Smart Utility App",
    role: "Mobile Developer",
    shortDesc:
      "Offline-first grocery app with AI-powered product scanning via device camera and OCR, zero internet required.",
    fullDesc:
      "An offline-first mobile productivity application built in TypeScript, designed to function entirely without internet connectivity. Uses on-device AI-powered OCR to capture product information directly from packaging — eliminating manual data entry.",
    bullets: [
      "Architected an offline-first architecture in TypeScript leveraging on-device local storage APIs — works fully with zero internet connectivity.",
      "Integrated device-native camera access with AI-powered OCR to instantly capture and parse product information from packaging, eliminating manual data entry.",
      "Implemented on-device scheduling algorithms and local notification management for list reminders and session persistence.",
    ],
    previewTags: ["React Native", "TypeScript", "Expo", "OCR"],
    stack: [
      { label: "React Native (Expo)", highlight: true },
      { label: "TypeScript", highlight: true },
      { label: "OCR", highlight: false },
      { label: "Local Storage APIs", highlight: false },
      { label: "Local Notifications", highlight: false },
    ],
  },

  {
    id: "pcci-valenzuela",
    iconName: "Network", 
    githubUrls: [
      { label: "Live Demo", url: "https://pcci-valenzuela.onrender.com/" }
    ],
    iconBgStyle: "rgba(50,200,200,0.1)",
    label: "OJT · Lead & Middleware",
    title: "PCCI Membership Portal",
    fullTitle: "PCCI Valenzuela — Membership Business Portal",
    role: "OJT · IT Lead Developer & Middleware",
    shortDesc:
      "Business membership portal built with a headless Laravel API and Bootstrap. (Note: Source code confidential, testing demo available).",
    fullDesc:
      "A comprehensive business membership platform developed for the Philippine Chamber of Commerce and Industry (Valenzuela chapter). Engineered using a headless architecture to completely decouple the frontend from the backend, streamlining data flow and scalability.\n\n🔒 *Note: The source code is confidential. The attached live link is provided strictly as a testing demo of the platform's interface.*",
    bullets: [
      "Acted as the IT Lead Developer during OJT, managing the technical direction and integration workflows between the frontend and backend teams.",
      "Developed and maintained the middleware layer to securely connect the headless Laravel REST API with the Bootstrap-based frontend client.",
      "Engineered robust API endpoints for managing business profiles, membership applications, and event ticketing.",
      "Architected specialized role-based access flows supporting distinct, isolated dashboards for Admins, Members, and Treasurers.",
    ],
    previewTags: ["Laravel", "Bootstrap", "Headless API", "Middleware"],
    stack: [
      { label: "Laravel", highlight: true },
      { label: "Bootstrap", highlight: true },
      { label: "PHP", highlight: false },
      { label: "REST APIs", highlight: false },
      { label: "Middleware", highlight: false },
      { label: "RBAC", highlight: false },
    ],
  },
  {
    id: "8con-academy",
    iconName: "TrendingUp",
    githubUrls: [
      { label: "Live Demo", url: "https://8con-academy-website-batch6.vercel.app/" }
    ],
    iconBgStyle: "rgba(255, 170, 0, 0.1)", 
    label: "OJT · Frontend",
    title: "8Con Academy",
    fullTitle: "8Con Academy — Forex Trading Corporate Website",
    role: "OJT · Frontend Developer",
    shortDesc:
      "Modern corporate frontend for a Forex Trading academy. (Note: Source code confidential, live testing demo available).",
    fullDesc:
      "A comprehensive corporate frontend developed during OJT for 8Con Academy, a Forex Trading company. Built from the ground up using React and Vite, the platform introduces the company's core brand, showcases internship and career pathways, and streamlines new student registrations.\n\n🔒 *Note: The source code is confidential. The attached live link is provided strictly as a testing demo.*",
    bullets: [
      "Developed dynamic, responsive frontend components using React and JavaScript to effectively showcase the academy's trading background and core brand.",
      "Implemented an interactive Chatbot FAQ and seamless student registration modals to improve user engagement and conversion for prospective enrollees.",
      "Built a modular, easily maintainable architecture utilizing Vite for optimized, lightning-fast local development and production builds.",
      "Designed custom CSS animations and layouts to present a professional, high-trust interface suitable for the financial and trading education sector.",
    ],
    previewTags: ["React", "Vite", "JavaScript", "Frontend"],
    stack: [
      { label: "React", highlight: true },
      { label: "Vite", highlight: true },
      { label: "JavaScript", highlight: false },
      { label: "CSS", highlight: false },
      { label: "Frontend Architecture", highlight: false },
    ],
  }

];

// ── SKILLS DATA ────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend & Mobile",
    items: [
      { label: "JavaScript" },
      { label: "TypeScript", highlight: true },
      { label: "React", highlight: true },
      { label: "Next.js", highlight: true },
      { label: "Vue.js", highlight: true },
      { label: "Tailwind CSS" },
      { label: "Bootstrap", },
      { label: "Styled Components" },
      { label: "Framer Motion" },
      { label: "Vite" , highlight: true },
      { label: "Prettier" },
      { label: "React Native", highlight: true },
      { label: "Flutter", highlight: true },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { label: "Node.js", highlight: true },
      { label: "Express.js" , highlight: true },
      { label: "NestJS" , highlight: true },
      { label: "FastAPI" , highlight: true },
      { label: "Laravel" , highlight: true },
      { label: "PostgreSQL" , highlight: true },
      { label: "MySQL" , highlight: true },
      { label: "SQLite" },
      { label: "MongoDB" },
      { label: "Firebase"},
      { label: "Prisma" },
      { label: "REST APIs" , highlight: true },
      { label: "OAuth" },
      { label: "JWT" },
    ],
  }
];

// ── BLOG POSTS DATA ────────────────────────────────────────────────────────
// Add a new object here for every new post. `date` and `readTime` are plain
// strings you set by hand — edit freely.

export const blogPosts: BlogPost[] = [

{
  slug: "rejected-and-weirdly-grateful",
  title: "Rejected, and Weirdly Grateful For It",
  excerpt:
    "Getting rejected from an interview really sad. But it taught me more than the interview itself would have.",
  date: "JUL 2026",
  readTime: "2 min",
  iconName: "Briefcase",
  coverBgStyle:
    "linear-gradient(135deg, rgba(255,90,90,0.16) 0%, #0c0c0c 70%)",
  content: `Got rejected from an interview recently. And yeah, it really sad. You start questioning your own capabilities and realizations hits -- That kind of thing just sits in your head for a while.

## Still Not Enough, But I'll Take It

But thinking about it more, I don't think the rejection itself was the bad part. The bad part would've been not learning anything from it.

Because honestly, it made me realize there's still a lot I don't know. Not in a "you failed" way, more like a "hey, you still got room to grow" way. It humbles you. Tells you to keep learning, keep studying, keep showing up.

Still not enough though. That's the thing — being humbled doesn't mean much if you just feel bad for a day and go back to doing the same thing. It's supposed to push you. Every rejection, every "no," should be the thing that makes you reach a little further next time.

So yeah, it sad. But I'll take it. It's just proof I'm not done yet — and honestly, none of us really are.

## The Small Thing That Actually Got Me

Funny enough, it wasn't even some hard technical question that tripped me up. It was one of the simple ones, near the last question, the kind you'd usually brush off as "oh that's easy." And that's exactly why it gets you — you stop paying attention to the small stuff because you're too busy preparing for the big scary questions, and then the small overlooked thing is what actually gets you rejected. Kind of funny when you think about it, haha.`,
},

  {
  slug: "freshmen-need-experience",
  title: "Freshmen Need Experience — But Where Do You Even Get It?",
  excerpt:
    "On choosing IT right as it got saturated, why junior roles feel like they're disappearing under AI, and figuring out where experience is even supposed to come from.",
  date: "JUN 2025",
  readTime: "5 min",
  iconName: "Briefcase",
  coverBgStyle:
    "linear-gradient(135deg, rgba(255,170,80,0.16) 0%, #0c0c0c 70%)",
  coverImage: "/blog/freshmen-cover.png",
  content: `One of the reasons I chose IT was something I heard back in senior high, right after the pandemic — it was known as one of the most in-demand courses out there. Looking back, I think that was right around when AI and automation started actually taking off, not just being talked about.

Even before AI, tech was in-demand for a different reason. There just weren't that many developers who could actually go through the process of becoming a web developer, armed with nothing but Stack Overflow, Reddit, and whatever community forums existed at the time.

## The number of people changed the value

Now it feels saturated. More people are choosing the tech path, and it became easier than before because of AI. I can't really argue with the fact that junior and entry-level work is genuinely at risk of being replaced — you can build a fairly functional full-stack app now just by putting together a team of AI agents.

I keep coming back to a simple idea I always say: the value of something changes based on the data. The more people who can do it, the less its value becomes, and the more competitive it gets.

Honestly, I can't really complain about it either. That's just the way it works for tech to move forward. Building isn't enough anymore, because anyone can build now. What actually matters is who fully understands how it's built, how to design the build, and whether it's maintainable in the long run.

## Does the industry still need juniors?

I've read blogs saying juniors are still needed because they're the future seniors. But that argument has a hole in it — how can juniors be the future if the entry point that's supposed to create them has already been replaced by AI?

But then again, I don't think it can really be fully replaced either. I think the only people who believe that are the ones who are scared to move forward. Every generation has been tested, not just this one. We need to adapt and advance instead of just complaining.

## So, where does experience actually come from?

Yeah, it's genuinely hard to find a tech job right now, especially the one you actually want — it got too saturated. But the ones who think ahead are the ones who move forward. You can't just complain, you have to accept that this is how it is now, because we have more powerful tools like AI.

So to answer my own question, "Freshmen need experience, but where?" — you only really get experience if you're lucky enough to land a job, or if you study more and think outside the box. And if you're not lucky enough to have a backer or a connection, you just have to be more competitive and adaptable than everyone else trying to get in.`,
}
  ,
  {
    slug: "inspiration-or-jealousy",
    title: "Inspiration or Jealousy, and Getting Humbled Along the Way",
    excerpt:
      "What I think about when someone else's app is the one going viral — and why AI making it easier to ship doesn't change what's actually worth learning.",
    date: "Dec 2025",
    readTime: "5 min",
    iconName: "Sparkles",
    coverBgStyle:
      "linear-gradient(135deg, rgba(168,140,255,0.16) 0%, #0c0c0c 70%)",
    coverImage: "/blog/inspiration-cover.png",
    content: `There is a moment I keep running into on social media. Someone posts an app or a website they built. It's clean, it clearly solves something, and the replies are full of people saying they needed exactly this. I always stop and check it out. Half the time I end up creating an account just to click around.

Somewhere in there is a small hit of "okay, that's actually possible." Someone turned an idea into something real and quite nice.

Right behind "this is cool" is something smaller and more specific: not envy of the person, but of the gap between what they shipped and what I have. It shows up fast, and it doesn't ask permission.

## Inspiration and jealousy are doing the same job

For a long time I treated these as opposite reactions — inspiration is the good one, jealousy is the one you're supposed to hide. I don't think that's quite right.

Both are pointing at the same fact: this was possible, and someone else got there first. Inspiration is what that fact feels like when I'm rested and curious. Jealousy is what it feels like when I'm tired and comparing. Same signal, different mood. Once I noticed that, the jealousy stopped feeling like something to be ashamed of and started feeling like information — a slightly rougher version of the same nudge that makes me want to build something in the first place.

## The tool changed, the standard didn't

Here's the part that actually complicates things: a lot of what I'm reacting to now was built with heavy AI assistance. Vibe coding, non-coders shipping real products, ideas going from sketch to working app in a weekend. I don't say that with any resentment — I use AI in my own work constantly, to move faster and to get unstuck. I'd be a hypocrite to be annoyed at anyone else for doing the same thing.

But it does change the math. If more people can build a working product, then "I built a working product" stops being the differentiator it used to be. Tech hiring was already competitive before AI made building faster. Now the bar for what counts as impressive keeps moving up, because the cost of producing something impressive-looking keeps going down.

That's not a complaint. It's just the environment I'm actually job-hunting in, and pretending otherwise wouldn't help me.

## So what's still mine

If the barrier to "make something that works" keeps dropping, the thing worth investing in is the barrier that doesn't drop as easily: understanding why it works, and what happens when it doesn't.

That's the honest reason I've been spending more time on data structures and algorithms, cybersecurity, networking, and how the internet actually moves data around underneath the frameworks. Not because I think fundamentals are morally superior to shipping fast — I don't — but because they're harder to shortcut, and that makes them a better place to put my effort than trying to out-ship people who can already out-ship me.

## Getting humbled is part of the process

None of this means the jealousy goes away. I still open someone's project, poke around it, and feel that same small sting. I've just stopped treating it as a problem to suppress and started treating it as a pretty reliable signal that I still have somewhere to grow.

Getting humbled by someone else's work isn't the end of the story. It's usually just the part right before I go learn the thing that made me feel that way.`,
  }
  ,
  {
    slug: "motorpass-accidental-developer",
    title: "MotorPass: A Capstone Journey I Didn't Plan For",
    excerpt:
      "My capstone journey — how a school gate pass problem turned into my first real dive into AI, hardware, and helmet detection.",
    date: "MAY 2026",
    readTime: "8 min",
    iconName: "Cpu",
    coverBgStyle:
      "linear-gradient(135deg, rgba(125,249,166,0.16) 0%, #0c0c0c 70%)",
    coverImage: "/blog/motorpass-cover.png",
    content: `I didn't even know what "capstone project" meant at first. Honestly, I thought it was just some kind of science project you do for a grade. That word started floating around during my second year of college, when classmates were already scouting for "advanced groupings" for third year Capstone 1 — basically, the smartest students quietly forming alliances ahead of time. Meanwhile, I wasn't paying much attention to any of it. I was too busy living in my own leisure time.

By the time I actually looked up and realized, "oh wait, it's time to form a capstone group," most of the strategic pairing had already happened. I ended up grouping with three girls, all of them specializing in documentation. The moment that settled in, I knew I was screwed — because that meant the technical, hands-on development would mostly fall on me. They weren't developers by specialization, but the project was still very much a team effort — we brainstormed together, made decisions together, and they carried the documentation, leadership, and UI design work that kept the whole thing organized.

Weirdly enough, that scared feeling came with a flicker of motivation too. I had a feeling this was going to force me to actually learn and study hard, because I didn't have a choice anymore. If we wanted to graduate, We had to make this work.

## Picking a Title (and Getting Rejected)

The first real step of the capstone journey was choosing a title — each of us had to propose one individually, and the panel would pick one out of the four. We even had to rank our own pitches from most wanted to least wanted. Here's how we ranked them:

- **First choice:** ColorBlind Awareness
- **Second choice:** MotorPass
- **Third choice (mine):** Carinderya
- **Last choice:** History of Rizal's Life

My pitch, Carinderya, was about an interactive map for local food stalls, with a community feature where people could share recipes and thoughts about food. It got rejected — the panel said food-related projects were too common.

The colorblind awareness idea was a gamified app aimed at early childhood detection. The reasoning behind it was solid: catching colorblindness early matters, because kids who don't know they have it can get confused with colors in school, struggle with their studies, and even feel different from their classmates, which can chip away at their confidence. There's also research showing some people don't find out they're colorblind until adulthood — sometimes only when applying for jobs that require normal color vision, like piloting. Despite all that, this one got rejected too.

The third proposal was an AR game about the life of Jose Rizal, covering his life story and the book *El Filibusterismo*.

And then there was MotorPass — the idea that ended up being our capstone. It was about building a gate pass system for motorcycles. The school had a strict policy: no helmet, no physical driver's license, no entry. The problem was that this whole process was being checked manually, with no real record of who entered or left the school on a motorcycle. MotorPass was meant to solve that — a real-time monitoring system that automates the checking process and keeps a report of every entry and exit.

It also had to be strict about what counted as a proper helmet. The system needed to tell the difference between a half-face helmet, a full-face helmet, and anything that didn't actually qualify — like a "nutshell" type helmet — and reject entry if it wasn't the real deal. The same strictness applied to the driver's license: it had to be a physical card, scanned and read directly by the system, not just shown and waved through.

## The Routine: Meetings, Roles, and a Raspberry Pi

Once MotorPass was chosen, the real work started. The routine in school became discussing features, scenarios, limitations, flow, objectives — all the planning groundwork before any code got written. We also split into roles: I was the developer, and my three groupmates handled documentation, leadership, and UI design.

Since our project involved hardware, our original proposal used an Arduino. But as the scope grew clearer, we realized we needed something more powerful — MotorPass had to be centralized with a touch screen monitor, and Arduino just wasn't going to cut it. That's when the Raspberry Pi entered the picture.

I still remember the first time I held a Raspberry Pi 4 in my hands. Something clicked. It felt like the start of a new, long journey — and it was completely new territory for me. I spent the first week just studying and experimenting with it: installing a suitable OS, testing the GPIO pins by hooking up an LED and a buzzer. It worked similarly to Arduino, except this was a full mini computer.

From there, we settled into a rhythm. Every week, we'd meet to discuss changes — I'd present my progress, they'd give insight, suggestions, and recommendations, and I'd explain what was working, what wasn't, and why certain features were blocked by conflicts or limitations. We lived in that rotation for a long time.

## Building the Brains: Helmet Detection and OCR

MotorPass had two main features: **Helmet Detection** and **OCR (text recognition)** for Driver's License ID verification.

I started with Helmet Detection first, using YOLOv5 with PyTorch to train the model. I collected a bunch of helmet images — some I took myself, others downloaded online — and went through the process of putting bounding boxes around each one. The rule of thumb was simple: the more images, the more accurate the detection.

This part of the project was genuinely fun. A lot of it was completely new to me, and it ended up being the real starting point of my journey into AI. There was something almost unbelievable about the whole thing — like, *I can actually build something that detects objects on its own?*

Once Helmet Detection was working, I moved on to OCR — and it turned out to be way harder than I expected. It was a constant cycle of trial and error. There were so many edge cases to think through:

- How do you calculate where on the ID a specific date is supposed to be?
- How do you tell if the ID is actually valid, and not just some random card?
- How do you detect if the ID has expired?
- What happens when the text on the ID isn't fully visible?
- How does lighting affect what the camera can even read?

Because of all these complications, I ended up building a custom OCR system as a fallback — something that could still work offline. When there was an internet connection, the system would switch to using an OCR API instead for better accuracy.

## When Two Features Become One System

Once both core features were done, the real challenge was connecting them into a single working flow: Helmet detection → fingerprint scan → driver's license verification → success.

Of course, building this also meant breaking things along the way. I corrupted two SD cards on our Raspberry Pi while trying to find the right combination of Python versions, libraries, and tools — OpenCV, Pandas, Ultralytics, and a handful of others. Every mismatch had consequences, and sometimes those consequences meant starting the setup process all over again.

The touch screen brought its own headaches too. I had to keep reworking the layout to fit a 15-inch square touch display, which isn't exactly a standard size you can just design around without a lot of trial and error.

## The Forum

After everything — the corrupted SD cards, the late nights debugging OCR edge cases, the constant back-and-forth in our weekly meetings — we presented MotorPass at the capstone forum in front of the entire third-year IT batch.

We placed in the **top 5**.

## What I Learned, and What's Next

Looking back, I didn't choose to be the "main developer" — I kind of stumbled into it because I wasn't paying attention at the right time. But that accident turned into one of the most hands-on learning experiences I've had so far. I went from not knowing what GPIO pins were to training my own object detection model and building a fallback OCR system from scratch.

A few things stuck with me from this whole experience:

- Being forced into a role you didn't plan for can still turn into real growth, if you let it.
- Hardware projects fail in ways software-only projects don't — corrupted SD cards taught me that the hard way.
- "Simple" features like ID verification often hide a surprising amount of complexity once you actually try to build them.
- Weekly check-ins, even informal ones, kept the whole team honest about progress and limitations.

MotorPass was my first real taste of combining AI, hardware, and a full system pipeline into something that actually worked in front of real people. It won't be my last. I'm carrying everything I learned here — the debugging instincts, the patience for trial and error, the comfort with being thrown into something I don't fully understand yet — into whatever comes next.`,
  }
];

// ── MARQUEE ITEMS ──────────────────────────────────────────────────────────

export const marqueeItems: MarqueeItem[] = [
  { text: "FULL-STACK DEVELOPER" },
  { text: "MOBILE APP DEVELOPER" },
  { text: "REACT & NEXT.JS" },
  { text: "FLUTTER & DART" },
  { text: "COMPUTER VISION" },
  { text: "IOT SYSTEMS" },
  { text: "REST API DESIGN" },
  { text: "OPEN TO WORK" },
];

// ── CONTACT LINKS ──────────────────────────────────────────────────────────

export const directLinks: DirectLink[] = [
  {
    icon: "✉",
    label: "Email",
    value: "punzalpauljohn@gmail.com",
    href: "mailto:punzalpauljohn@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "0968-329-5292",
    href: "tel:09683295292",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/PaulNewbie",
    href: "https://github.com/PaulNewbie",
    external: true,
  },
];