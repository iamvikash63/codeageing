const authModal = document.getElementById("authModal");
const authMessage = document.getElementById("authMessage");
const authTitle = document.getElementById("authTitle");
const authTabs = document.querySelectorAll(".auth-tab");
const authViews = document.querySelectorAll("[data-auth-view]");
const authOpenButtons = document.querySelectorAll("[data-auth-open]");
const authCloseButtons = document.querySelectorAll("[data-auth-close]");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const signOutBtn = document.getElementById("signOutBtn");
const authGreeting = document.getElementById("authGreeting");
const authDescription = document.getElementById("authDescription");
const guestActions = document.getElementById("guestActions");
const memberActions = document.getElementById("memberActions");
const dashboardStatus = document.getElementById("dashboardStatus");
const dashboardList = document.getElementById("dashboardList");
const catalogTabs = document.querySelectorAll(".catalog-tab");
const featuredCourseCard = document.getElementById("featuredCourseCard");
const catalogRailTitle = document.getElementById("catalogRailTitle");
const catalogRail = document.getElementById("catalogRail");
const catalogPrevBtn = document.getElementById("catalogPrevBtn");
const catalogNextBtn = document.getElementById("catalogNextBtn");

const USERS_KEY = "codeageing-course-users";
const SESSION_KEY = "codeageing-course-session";

const starterCourses = [
  {
    title: "Full Stack Web Development Bootcamp",
    meta: "86 lectures, PDFs, projects, and practice modules",
    status: "Enrolled"
  },
  {
    title: "Backend API and Database Masterclass",
    meta: "Role-based access and secure architecture modules",
    status: "In Library"
  },
  {
    title: "Resources and certificates",
    meta: "Future area for PDFs, source code files, and completion downloads",
    status: "Available"
  }
];

const catalogCollections = {
  "artificial-intelligence": {
    title: "Learn AI with Codeageing",
    featured: {
      logo: "Codeageing AI Track",
      heading: "Applied AI for builders, teams, and future-ready careers",
      description: "Master the practical side of AI with guided workflows, prompt systems, tool stacks, and business use cases that feel current and portfolio-friendly.",
      metrics: ["4.8 rating", "1,240 learners", "12.5 hours"],
      points: ["Prompt engineering", "Agent workflow demos", "Business automation"],
      price: "Rs 1,899",
      note: "Includes projects, PDFs, and certificate-ready modules",
      button: "Explore AI Track"
    },
    cards: [
      {
        badge: "Best Seller",
        category: "AI Foundations",
        title: "Prompt Engineering and Workflow Design",
        description: "Build repeatable prompting systems for writing, research, and execution-heavy tasks.",
        rating: "4.9",
        metrics: ["Course 1 of 6", "48 mins"],
        tags: ["Templates", "Hands-on"],
        price: "Rs 599",
        image: "Primary-File/Images/artificial-intelligence.png",
        alt: "Illustration of artificial intelligence and digital brain"
      },
      {
        badge: "Trending",
        category: "AI Productivity",
        title: "AI for Project Management and Ops",
        description: "Use AI to structure documents, summarize meetings, and automate internal workflows.",
        rating: "4.7",
        metrics: ["Course 2 of 6", "54 mins"],
        tags: ["Teams", "Automation"],
        price: "Rs 649",
        image: "Primary-File/Images/anaytics.png",
        alt: "Analytics themed illustration for AI productivity"
      },
      {
        badge: "New",
        category: "AI Coding",
        title: "AI Coding Systems for Modern Developers",
        description: "Pair with coding assistants to speed up planning, refactors, debugging, and shipping.",
        rating: "4.8",
        metrics: ["Course 3 of 6", "1 hr 06 mins"],
        tags: ["Frontend", "Backend"],
        price: "Rs 699",
        image: "Primary-File/Images/scalable.png",
        alt: "Scalable technology illustration"
      },
      {
        badge: "Popular",
        category: "Career Skills",
        title: "AI for Freelancers, Creators, and Founders",
        description: "Turn AI into a delivery system for services, content, offers, and client communication.",
        rating: "4.8",
        metrics: ["Course 4 of 6", "43 mins"],
        tags: ["Creator stack", "Freelancing"],
        price: "Rs 579",
        image: "Primary-File/Images/robots-and-humans.png",
        alt: "Robots and humans concept illustration"
      }
    ]
  },
  "web-development": {
    title: "Launch modern web skills",
    featured: {
      logo: "Codeageing Dev Track",
      heading: "Front-end to full-stack learning with real project momentum",
      description: "This collection is designed like a storefront but organized like an academy, so students can browse polished cards and still feel the path from beginner to deploy-ready.",
      metrics: ["4.9 rating", "940 learners", "18 hours"],
      points: ["Responsive layouts", "JavaScript projects", "Deploy workflows"],
      price: "Rs 2,199",
      note: "Ideal for your flagship full-stack or frontend bootcamp",
      button: "View Dev Courses"
    },
    cards: [
      {
        badge: "Flagship",
        category: "Frontend",
        title: "Responsive Web Design from Scratch",
        description: "Build pages that feel polished on desktop, tablet, and mobile without relying on templates.",
        rating: "4.9",
        metrics: ["Course 1 of 7", "58 mins"],
        tags: ["HTML", "CSS"],
        price: "Rs 699",
        image: "Primary-File/drop-down/web-dev-img.png",
        alt: "Web development themed visual"
      },
      {
        badge: "Best Seller",
        category: "JavaScript",
        title: "JavaScript Projects for Real Interfaces",
        description: "Create tabs, sliders, forms, and interactive sections that mirror production UI patterns.",
        rating: "4.8",
        metrics: ["Course 2 of 7", "1 hr 12 mins"],
        tags: ["DOM", "APIs"],
        price: "Rs 749",
        image: "Primary-File/Images/joy-pr-img.png",
        alt: "Project interface preview"
      },
      {
        badge: "Portfolio",
        category: "Full Stack",
        title: "Full Stack Website Build and Deployment",
        description: "Connect frontend polish to backend thinking, hosting, and scalable project structure.",
        rating: "4.8",
        metrics: ["Course 3 of 7", "1 hr 24 mins"],
        tags: ["Node", "Deploy"],
        price: "Rs 799",
        image: "Primary-File/Images/portfolio-pr-img.png",
        alt: "Portfolio project preview"
      },
      {
        badge: "New",
        category: "Commerce",
        title: "Build a Product Landing Page that Converts",
        description: "Learn hero composition, CTA systems, social proof, and page flow for modern brands.",
        rating: "4.7",
        metrics: ["Course 4 of 7", "46 mins"],
        tags: ["UI", "Marketing"],
        price: "Rs 629",
        image: "Primary-File/Images/shoplify-pr-img.png",
        alt: "Ecommerce project preview"
      }
    ]
  },
  "ui-ux": {
    title: "Design interfaces people enjoy using",
    featured: {
      logo: "Codeageing Design Track",
      heading: "UI and UX lessons with cleaner systems, sharper hierarchy, and better visual intent",
      description: "The section style here is deliberately more editorial and product-led, so it reflects the kind of refined work students should learn to create.",
      metrics: ["4.7 rating", "680 learners", "9 hours"],
      points: ["Wireframes", "Design systems", "Landing page craft"],
      price: "Rs 1,599",
      note: "Strong fit for your agency-style design offering",
      button: "Browse Design Track"
    },
    cards: [
      {
        badge: "Popular",
        category: "UX Basics",
        title: "User Flows, Wireframes, and Clarity",
        description: "Design journeys that reduce confusion and create smoother interactions across screens.",
        rating: "4.7",
        metrics: ["Course 1 of 5", "37 mins"],
        tags: ["Research", "Flows"],
        price: "Rs 499",
        image: "Primary-File/drop-down/ui-ux-drop.png",
        alt: "UI UX design visual"
      },
      {
        badge: "Studio",
        category: "UI Systems",
        title: "Design Systems for Websites and Apps",
        description: "Organize typography, buttons, spacing, and cards into a coherent reusable language.",
        rating: "4.8",
        metrics: ["Course 2 of 5", "51 mins"],
        tags: ["Components", "Figma"],
        price: "Rs 579",
        image: "Primary-File/drop-down/ux-ui.png",
        alt: "UX UI icon and design visual"
      },
      {
        badge: "New",
        category: "Landing Pages",
        title: "High-Conversion Landing Page Composition",
        description: "Learn bold sectioning, CTAs, contrast, and storytelling through layout rhythm.",
        rating: "4.8",
        metrics: ["Course 3 of 5", "44 mins"],
        tags: ["Hero sections", "Visual hierarchy"],
        price: "Rs 549",
        image: "Primary-File/drop-down/web-designing.png",
        alt: "Web designing themed visual"
      },
      {
        badge: "Portfolio",
        category: "Mobile Design",
        title: "Mobile Interface Design for Real Products",
        description: "Design app screens that balance utility, visual polish, and faster user decisions.",
        rating: "4.6",
        metrics: ["Course 4 of 5", "41 mins"],
        tags: ["Apps", "Prototyping"],
        price: "Rs 529",
        image: "Primary-File/drop-down/mobile-dev.png",
        alt: "Mobile development style visual"
      }
    ]
  },
  "digital-marketing": {
    title: "Grow brands with modern digital skills",
    featured: {
      logo: "Codeageing Growth Track",
      heading: "Marketing lessons that connect design, traffic, offers, and content systems",
      description: "This track gives your catalog more breadth and makes the section feel like a full marketplace instead of a single-topic bootcamp page.",
      metrics: ["4.6 rating", "510 learners", "8.5 hours"],
      points: ["Funnels", "Content systems", "Offer strategy"],
      price: "Rs 1,499",
      note: "A strong category for founders, freelancers, and growth teams",
      button: "See Growth Courses"
    },
    cards: [
      {
        badge: "Hot",
        category: "Content",
        title: "Content Strategy for Websites and Socials",
        description: "Plan publishing systems that align messaging, visuals, and conversion goals.",
        rating: "4.6",
        metrics: ["Course 1 of 4", "39 mins"],
        tags: ["Content", "Brand voice"],
        price: "Rs 459",
        image: "Primary-File/drop-down/digital-marketing.png",
        alt: "Digital marketing themed visual"
      },
      {
        badge: "Ads",
        category: "Campaigns",
        title: "Launch Paid Campaigns with Better Creative",
        description: "Learn the relationship between targeting, hooks, offers, and landing pages.",
        rating: "4.5",
        metrics: ["Course 2 of 4", "47 mins"],
        tags: ["Meta ads", "Funnels"],
        price: "Rs 499",
        image: "Primary-File/drop-down/digital-img.png",
        alt: "Digital campaign visual"
      },
      {
        badge: "New",
        category: "SEO",
        title: "SEO and Website Visibility for Service Brands",
        description: "Improve discoverability with cleaner structure, better content planning, and search intent.",
        rating: "4.6",
        metrics: ["Course 3 of 4", "42 mins"],
        tags: ["SEO", "Lead gen"],
        price: "Rs 489",
        image: "Primary-File/Images/Food-court-pr-img.png",
        alt: "Website project mockup"
      },
      {
        badge: "Growth",
        category: "Offers",
        title: "Build Offers that Turn Attention into Leads",
        description: "Shape service packages, lead magnets, and conversion pathways for digital businesses.",
        rating: "4.7",
        metrics: ["Course 4 of 4", "35 mins"],
        tags: ["Offers", "Conversion"],
        price: "Rs 469",
        image: "Primary-File/Images/dine-delight-pr-img.png",
        alt: "Business project preview"
      }
    ]
  },
  "career-launch": {
    title: "Build skills that lead to real opportunities",
    featured: {
      logo: "Codeageing Career Track",
      heading: "Career-focused learning paths for students who want clarity, confidence, and proof of skill",
      description: "This category mirrors the more aspirational screenshots by combining a strong headline, supportive subcopy, and clear outcomes students care about before they buy.",
      metrics: ["4.8 rating", "760 learners", "10 hours"],
      points: ["Portfolio polish", "Interview prep", "Freelance readiness"],
      price: "Rs 1,699",
      note: "Great for your upskilling and placement-oriented messaging",
      button: "Start Career Path"
    },
    cards: [
      {
        badge: "Mentor Pick",
        category: "Portfolio",
        title: "Build a Job-Ready Developer Portfolio",
        description: "Turn practice work into case studies that show clarity, process, and execution.",
        rating: "4.8",
        metrics: ["Course 1 of 5", "52 mins"],
        tags: ["Portfolio", "Positioning"],
        price: "Rs 549",
        image: "Primary-File/Images/CDA-Hero-Img.png",
        alt: "Codeageing hero visual"
      },
      {
        badge: "Popular",
        category: "Interview",
        title: "Interview Readiness for Web and AI Roles",
        description: "Prepare answers, practice thinking aloud, and present projects more effectively.",
        rating: "4.7",
        metrics: ["Course 2 of 5", "49 mins"],
        tags: ["Mock prep", "Confidence"],
        price: "Rs 529",
        image: "Primary-File/Images/client-img.jpg",
        alt: "Client portrait"
      },
      {
        badge: "Freelance",
        category: "Business",
        title: "Freelancing Basics for New Tech Creators",
        description: "Learn how to package services, handle clients, and build trust through delivery systems.",
        rating: "4.7",
        metrics: ["Course 3 of 5", "45 mins"],
        tags: ["Clients", "Pricing"],
        price: "Rs 499",
        image: "Primary-File/Images/client-img2.jpg",
        alt: "Client portrait two"
      },
      {
        badge: "Growth",
        category: "Communication",
        title: "Present Your Work Like a Professional",
        description: "Improve communication, walkthroughs, and handoff confidence during real opportunities.",
        rating: "4.8",
        metrics: ["Course 4 of 5", "38 mins"],
        tags: ["Presentation", "Delivery"],
        price: "Rs 479",
        image: "Primary-File/Images/client-img3.jpg",
        alt: "Client portrait three"
      }
    ]
  }
};

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
};

const saveSession = (session) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

const setMessage = (message, isError = false) => {
  authMessage.textContent = message;
  authMessage.classList.toggle("is-error", isError);
};

const switchAuthTab = (tabName) => {
  authTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.authTab === tabName);
  });

  authViews.forEach((view) => {
    view.classList.toggle("hidden", view.dataset.authView !== tabName);
  });

  authTitle.textContent = tabName === "login"
    ? "Access your courses and prepare for the future LMS"
    : "Create a student or admin account for your course platform";

  setMessage("");
};

const openAuthModal = (defaultTab = "login") => {
  switchAuthTab(defaultTab);
  authModal.classList.remove("hidden");
  authModal.setAttribute("aria-hidden", "false");
};

const closeAuthModal = () => {
  authModal.classList.add("hidden");
  authModal.setAttribute("aria-hidden", "true");
  setMessage("");
};

const renderDashboard = (session) => {
  dashboardList.innerHTML = "";

  const items = session
    ? starterCourses
    : [
        {
          title: "Full Stack Web Development Bootcamp",
          meta: "Login to unlock lectures, PDFs, and progress tracking.",
          status: "Preview"
        },
        {
          title: "Backend API and Database Masterclass",
          meta: "Use your future admin panel to assign modules and premium access.",
          status: "Preview"
        },
        {
          title: "Resources and certificates",
          meta: "Store bonus PDFs, coding files, and downloadable completion assets.",
          status: "Preview"
        }
      ];

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "dashboard-item";
    article.innerHTML = `
      <div>
        <h4>${item.title}</h4>
        <p>${item.meta}</p>
      </div>
      <span>${item.status}</span>
    `;
    dashboardList.appendChild(article);
  });
};

const renderCatalog = (trackName = "artificial-intelligence") => {
  const collection = catalogCollections[trackName];

  if (!collection || !featuredCourseCard || !catalogRail || !catalogRailTitle) {
    return;
  }

  catalogTabs.forEach((tab) => {
    const isActive = tab.dataset.track === trackName;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  catalogRailTitle.textContent = collection.title;
  featuredCourseCard.innerHTML = `
    <div class="featured-course-logo">
      <i class="fa-solid fa-sparkles"></i>
      <span>${collection.featured.logo}</span>
    </div>
    <h3>${collection.featured.heading}</h3>
    <p>${collection.featured.description}</p>
    <div class="featured-course-metrics">
      ${collection.featured.metrics.map((metric) => `<span>${metric}</span>`).join("")}
    </div>
    <div class="featured-course-points">
      ${collection.featured.points.map((point) => `<span>${point}</span>`).join("")}
    </div>
    <div class="featured-course-footer">
      <div class="featured-course-price">
        <strong>${collection.featured.price}</strong>
        <small>${collection.featured.note}</small>
      </div>
      <button type="button" class="solid-btn" data-auth-open>${collection.featured.button}</button>
    </div>
  `;

  catalogRail.innerHTML = collection.cards.map((course) => `
    <article class="catalog-course-card">
      <div class="catalog-card-media">
        <img src="${course.image}" alt="${course.alt}">
        <span class="catalog-card-badge">${course.badge}</span>
      </div>
      <div class="catalog-card-body">
        <div class="catalog-card-topline">
          <strong>${course.category}</strong>
          <span class="catalog-card-rating"><i class="fa-solid fa-star"></i>${course.rating}</span>
        </div>
        <h4>${course.title}</h4>
        <p>${course.description}</p>
        <div class="catalog-card-metrics">
          ${course.metrics.map((metric) => `<span>${metric}</span>`).join("")}
        </div>
        <div class="catalog-card-tags">
          ${course.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="catalog-card-footer">
          <span class="catalog-card-price">${course.price}</span>
          <button type="button" class="catalog-card-action" data-auth-open>Enroll</button>
        </div>
      </div>
    </article>
  `).join("");

  catalogRail.scrollTo({ left: 0, behavior: "smooth" });

  featuredCourseCard.querySelectorAll("[data-auth-open]").forEach((button) => {
    button.addEventListener("click", () => openAuthModal("login"));
  });

  catalogRail.querySelectorAll("[data-auth-open]").forEach((button) => {
    button.addEventListener("click", () => openAuthModal("login"));
  });
};

const renderAuthState = () => {
  const session = readSession();

  if (!session) {
    authGreeting.textContent = "You are browsing as a guest";
    authDescription.textContent = "Create an account or sign in to simulate course access, saved student details, and future course ownership.";
    guestActions.classList.remove("hidden");
    memberActions.classList.add("hidden");
    dashboardStatus.textContent = "Locked";
    dashboardStatus.classList.remove("is-live");
    renderDashboard(null);
    return;
  }

  authGreeting.textContent = `Welcome back, ${session.name}`;
  authDescription.textContent = `Signed in as ${session.role}. This is where your future purchased courses, PDFs, and lecture library can appear.`;
  guestActions.classList.add("hidden");
  memberActions.classList.remove("hidden");
  dashboardStatus.textContent = session.role === "admin" ? "Admin Ready" : "Unlocked";
  dashboardStatus.classList.add("is-live");
  renderDashboard(session);
};

authOpenButtons.forEach((button) => {
  button.addEventListener("click", () => openAuthModal("login"));
});

authCloseButtons.forEach((button) => {
  button.addEventListener("click", closeAuthModal);
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchAuthTab(tab.dataset.authTab));
});

catalogTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderCatalog(tab.dataset.track));
});

if (catalogPrevBtn && catalogRail) {
  catalogPrevBtn.addEventListener("click", () => {
    catalogRail.scrollBy({ left: -320, behavior: "smooth" });
  });
}

if (catalogNextBtn && catalogRail) {
  catalogNextBtn.addEventListener("click", () => {
    catalogRail.scrollBy({ left: 320, behavior: "smooth" });
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();
    const users = readUsers();
    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if (!matchedUser) {
      setMessage("No matching account found. Please sign up first or check your login details.", true);
      return;
    }

    saveSession({
      name: matchedUser.name,
      email: matchedUser.email,
      role: matchedUser.role
    });

    loginForm.reset();
    renderAuthState();
    setMessage("Login successful. Your student dashboard preview is now unlocked.");
    window.setTimeout(closeAuthModal, 800);
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();
    const role = String(formData.get("role") || "student").trim();
    const users = readUsers();
    const alreadyExists = users.some((user) => user.email === email);

    if (alreadyExists) {
      setMessage("An account with this email already exists. Please log in instead.", true);
      switchAuthTab("login");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role
    };

    users.push(newUser);
    saveUsers(users);
    saveSession({
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    });

    signupForm.reset();
    renderAuthState();
    setMessage("Account created successfully. You are now signed in.");
    window.setTimeout(closeAuthModal, 800);
  });
}

if (signOutBtn) {
  signOutBtn.addEventListener("click", () => {
    clearSession();
    renderAuthState();
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !authModal.classList.contains("hidden")) {
    closeAuthModal();
  }
});

renderAuthState();
renderCatalog();
