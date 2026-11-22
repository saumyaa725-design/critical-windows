const exposureData = {
  none: {
    base: 8,
    label: "Preparation focus",
    mechanism: "No single exposure selected. The priority is building reserves, identifying environmental risks, and starting prenatal care or preconception planning.",
    next: "Use this moment to prepare: start or review a prenatal vitamin, check medication safety, and identify food or exposure barriers early.",
    questions: [
      "Which prenatal vitamin ingredients matter most for me?",
      "Are any medications, supplements, or workplace exposures worth reviewing before pregnancy?",
      "What local programs can help with food, transportation, or prenatal care?"
    ]
  },
  alcohol: {
    base: 34,
    label: "Alcohol",
    mechanism: "Alcohol crosses the placenta and can affect cell growth, cell migration, oxidative stress, gene regulation, and brain development.",
    next: "If pregnant and alcohol use is ongoing, contact a clinician. Earlier support matters, and honest details about timing and amount help them guide care.",
    questions: [
      "How should I describe timing and amount of alcohol exposure?",
      "What screening or follow-up is recommended?",
      "What support exists if stopping is difficult?"
    ]
  },
  opioids: {
    base: 38,
    label: "Opioids",
    mechanism: "Opioids can affect fetal neurodevelopment, growth, and newborn adaptation. Sudden withdrawal during pregnancy can be dangerous without medical guidance.",
    next: "Talk with a clinician urgently. Do not stop opioids suddenly without medical support; ask about medication-assisted treatment, prenatal monitoring, mental health care, and social support.",
    questions: [
      "What is the safest treatment plan during pregnancy?",
      "Should I be referred to maternal-fetal medicine or addiction medicine?",
      "What newborn monitoring or support may be needed?"
    ]
  },
  nicotine: {
    base: 28,
    label: "Nicotine / vaping",
    mechanism: "Nicotine and smoke-related chemicals can affect blood vessels, oxygen delivery, placental function, fetal growth, and brain signaling.",
    next: "Ask for pregnancy-specific quitting support. Cutting down can help, but clinical support improves the chance of stopping safely.",
    questions: [
      "What nicotine cessation options are appropriate in pregnancy?",
      "How can fetal growth be monitored?",
      "What support is available if stress triggers use?"
    ]
  },
  cannabis: {
    base: 22,
    label: "Cannabis",
    mechanism: "Cannabis compounds can cross the placenta and may interact with the endocannabinoid system, which helps regulate brain development.",
    next: "Bring cannabis use up with a clinician, especially if it is being used for nausea, anxiety, sleep, or pain, so safer options can be discussed.",
    questions: [
      "What alternatives can help nausea, sleep, pain, or anxiety?",
      "What does current evidence suggest for prenatal cannabis exposure?",
      "Should any additional monitoring be considered?"
    ]
  },
  lead: {
    base: 32,
    label: "Lead",
    mechanism: "Lead can mimic or disrupt calcium signaling, affect the nervous system, and may be mobilized from bone during pregnancy.",
    next: "If old paint, contaminated dust, certain jobs, ceramics, spices, or water are concerns, ask about blood lead testing and exposure removal.",
    questions: [
      "Should I get a blood lead level test?",
      "How can I reduce exposure at home or work?",
      "Do calcium and iron status matter for my risk?"
    ]
  },
  mercury: {
    base: 20,
    label: "Mercury",
    mechanism: "Methylmercury can affect the developing nervous system, while low-mercury fish can provide DHA and other nutrients for brain development.",
    next: "Do not avoid all fish automatically. Choose low-mercury options and ask about DHA if vegetarian, allergic, or not eating seafood.",
    questions: [
      "Which fish are lower in mercury?",
      "Do I need a DHA supplement?",
      "How should I balance fish benefits and mercury risk?"
    ]
  },
  pollution: {
    base: 24,
    label: "Pollution / smoke / pesticides",
    mechanism: "Air pollution, smoke, and some pesticides may increase oxidative stress, inflammation, placental stress, and fetal growth risk.",
    next: "Reduce exposure where realistic: ventilation, masks during smoke events, avoiding pesticide application, and asking local health departments about resources.",
    questions: [
      "Are there local air quality or housing resources?",
      "Can workplace duties be adjusted during pregnancy?",
      "What signs would require follow-up?"
    ]
  },
  medication: {
    base: 18,
    label: "Medication question",
    mechanism: "Medication risk depends on the drug, dose, timing, maternal condition being treated, and what happens if treatment is stopped.",
    next: "Do not stop prescribed medication without speaking to a clinician. Untreated illness can also affect pregnancy, so the safer question is usually risk versus benefit.",
    questions: [
      "What are the risks of this medication versus untreated illness?",
      "Is there a pregnancy-preferred alternative?",
      "Who can review this: OB, pharmacist, specialist, or teratology information service?"
    ]
  }
};

const journeyData = {
  planning: {
    score: -8,
    window: "Preconception is powerful because folate status, medication review, vaccines, chronic disease care, and exposure reduction can be improved before early organs form."
  },
  early: {
    score: 16,
    window: "Weeks 1-8 include implantation, placenta formation, neural tube closure, early brain patterning, heart development, and organ formation."
  },
  mid: {
    score: 8,
    window: "Weeks 9-20 include rapid growth, placental expansion, early movement, brain organization, and continued organ refinement."
  },
  late: {
    score: 5,
    window: "Weeks 21-40 emphasize fetal growth, lung maturation, iron transfer, fat storage, immune preparation, and intense brain development."
  },
  postexposure: {
    score: 18,
    window: "After a concerning exposure, the most useful details are timing, amount, frequency, co-exposures, symptoms, and current nutrition or health barriers."
  }
};

const doseScores = {
  none: 0,
  past: 8,
  occasional: 14,
  repeated: 26,
  high: 38
};

const nutritionAdvice = {
  vegetarian: "Vegetarian pattern: check B12, iron, iodine, choline, DHA alternatives, protein, calcium, vitamin D, beans/lentils/tofu/eggs if eaten, fortified foods.",
  lowincome: "Limited budget: prioritize prenatal vitamins, iodized salt, beans, lentils, peanut butter, eggs if eaten, fortified cereal, frozen vegetables, canned low-mercury fish if eaten, WIC/SNAP/food pantry support.",
  allergy: "Allergies/restrictions: replace missing food groups with equivalent nutrients; ask before supplementing high doses.",
  nausea: "Nausea/low appetite: small frequent meals, bland protein, fluids, and clinician-approved nausea treatment can protect nutrition.",
  anemia: "Iron concern: ask about anemia screening and iron-rich foods or supplements; vitamin C helps absorption, calcium can interfere if taken at the same time.",
  noprenatal: "No prenatal vitamin yet: ask about starting one with folic acid, iodine, iron when appropriate, vitamin D, and possibly choline/DHA."
};

const weekWindows = [
  {
    weeks: "Before pregnancy",
    title: "Preparation window",
    body: "The embryo may develop before someone knows they are pregnant, so preconception nutrition, medication review, and exposure reduction can matter early.",
    tags: ["Folate", "Medication review", "Food access", "Exposure scan"]
  },
  {
    weeks: "Weeks 1-8",
    title: "Structure-building window",
    body: "Neural tube closure, early brain patterning, heart formation, facial development, and organ formation make this a high-sensitivity period.",
    tags: ["Neural tube", "Heart", "Placenta", "Alcohol sensitivity"]
  },
  {
    weeks: "Weeks 9-20",
    title: "Growth and patterning",
    body: "Organs refine, the placenta expands, fetal movement begins, and the brain continues organizing cells, circuits, and signaling systems.",
    tags: ["Brain organization", "Growth", "Placenta", "Iron"]
  },
  {
    weeks: "Weeks 21-40",
    title: "Maturation window",
    body: "The fetus builds brain connections, stores iron, gains fat, matures lungs, and prepares immune and endocrine systems for birth.",
    tags: ["DHA", "Iron transfer", "Lungs", "Immune system"]
  }
];

const libraryItems = [
  ["nutrient", "Folate", "DNA synthesis, neural tube closure, methylation", "Low intake is most concerning before and very early in pregnancy.", "Leafy greens, beans, fortified grains, prenatal vitamins"],
  ["nutrient", "Choline", "Cell membranes, methylation, brain development", "Needs may be hard to meet without eggs/meat; vegetarian diets need planning.", "Eggs if eaten, soy, beans, cruciferous vegetables, supplements if advised"],
  ["nutrient", "Iron", "Oxygen transport, placenta, fetal brain growth", "Low iron can worsen fatigue and may interact with lead absorption risk.", "Beans, lentils, meat if eaten, fortified cereal, spinach with vitamin C"],
  ["nutrient", "Iodine", "Thyroid hormone production and fetal brain development", "Deficiency can affect neurodevelopment; excess can also be harmful.", "Iodized salt, dairy if eaten, seafood, prenatal vitamins"],
  ["nutrient", "DHA", "Brain and retinal development", "Mercury concerns should be balanced with low-mercury omega-3 sources.", "Low-mercury fish, algae-based DHA"],
  ["exposure", "Alcohol", "Placental transfer, oxidative stress, cell migration, gene regulation", "No known safe level in pregnancy; support matters more than shame.", "Ask about screening and cessation support"],
  ["exposure", "Lead", "Calcium mimicry, neurotoxicity, placental transfer", "Older housing, dust, water, ceramics, spices, and jobs can be sources.", "Ask about blood lead testing and removal of exposure"],
  ["exposure", "Nicotine", "Vascular effects, oxygen delivery, placental function", "Vaping is not automatically safe; nicotine itself is biologically active.", "Ask about pregnancy-specific quitting support"],
  ["exposure", "Mercury", "Neurotoxicity from high-mercury fish", "Avoid high-mercury fish while preserving benefits of low-mercury seafood or DHA.", "Ask for fish guidance and DHA alternatives"],
  ["context", "Food Access", "Nutrition risk is not just personal choice", "Cost, transportation, housing, nausea, and culture shape what is realistic.", "Connect to WIC, SNAP, clinics, school and community programs"],
  ["context", "Placenta", "Active exchange organ, not a perfect filter", "It transports nutrients, oxygen, hormones, immune signals, and some toxicants.", "Central model for the simulator"],
  ["context", "Evidence Strength", "Strong, moderate, or emerging evidence", "The simulator separates known risks from areas where science is still developing.", "Use uncertainty honestly"]
];

const form = document.querySelector("#simForm");
const weekInput = document.querySelector("#week");
const weekLabel = document.querySelector("#weekLabel");
const scoreRing = document.querySelector("#scoreRing");
const scoreNumber = document.querySelector("#scoreNumber");
const riskLabel = document.querySelector("#riskLabel");
const nextStep = document.querySelector("#nextStep");
const windowText = document.querySelector("#windowText");
const mechanismText = document.querySelector("#mechanismText");
const nutritionList = document.querySelector("#nutritionList");
const questionList = document.querySelector("#questionList");

function currentWindowScore(week) {
  if (week === 0) return -6;
  if (week <= 8) return 18;
  if (week <= 20) return 10;
  return 7;
}

function labelForScore(score) {
  if (score >= 78) return "Urgent";
  if (score >= 58) return "High";
  if (score >= 36) return "Moderate";
  return "Preparation";
}

function colorForScore(score) {
  if (score >= 78) return "#c95f4d";
  if (score >= 58) return "#c89b2c";
  if (score >= 36) return "#3c6ea8";
  return "#6f9e43";
}

function updateSimulator() {
  const data = new FormData(form);
  const journey = document.querySelector("#journey").value;
  const exposure = document.querySelector("#exposure").value;
  const dose = document.querySelector("#dose").value;
  const week = Number(weekInput.value);
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map((item) => item.value);

  weekLabel.textContent = week;

  let score = 12 + exposureData[exposure].base + journeyData[journey].score + doseScores[dose] + currentWindowScore(week);
  score += checked.length * 5;
  score = Math.max(5, Math.min(100, score));

  const color = colorForScore(score);
  scoreNumber.textContent = score;
  riskLabel.textContent = labelForScore(score);
  scoreRing.style.background = `conic-gradient(${color} ${score}%, #e8eef2 0)`;

  nextStep.textContent = exposureData[exposure].next;
  windowText.textContent = journeyData[journey].window;
  mechanismText.textContent = exposureData[exposure].mechanism;

  const priorities = checked.map((key) => nutritionAdvice[key]);
  if (priorities.length === 0) {
    priorities.push("Core priorities: prenatal vitamin review, folic acid, iron status, iodine, choline, DHA, calcium, vitamin D, protein, and enough total calories.");
  }
  nutritionList.innerHTML = priorities.map((item) => `<li>${item}</li>`).join("");
  questionList.innerHTML = exposureData[exposure].questions.map((item) => `<li>${item}</li>`).join("");
}

function buildTimeline() {
  document.querySelector("#timeline").innerHTML = weekWindows
    .map((item) => `
      <article class="timeline-card">
        <span class="weeks">${item.weeks}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </article>
    `)
    .join("");
}

function buildLibrary() {
  document.querySelector("#libraryGrid").innerHTML = libraryItems
    .map(([kind, title, mechanism, context, action]) => `
      <article class="library-card" data-kind="${kind}">
        <div>
          <p class="eyebrow">${kind}</p>
          <h3>${title}</h3>
        </div>
        <div class="mini-grid"><strong>Role</strong><span>${mechanism}</span></div>
        <div class="mini-grid"><strong>Why it matters</strong><span>${context}</span></div>
        <div class="mini-grid"><strong>Action</strong><span>${action}</span></div>
      </article>
    `)
    .join("");
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab, .panel").forEach((element) => element.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

form.addEventListener("input", updateSimulator);
form.addEventListener("change", updateSimulator);

buildTimeline();
buildLibrary();
updateSimulator();
