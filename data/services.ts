export type Service = {
  slug: string;
  title: string;
  short: string;
  tag?: string;
  image: string;
  imageAlt: string;
  intro: string;
  includes: string[];
  suitedFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "domiciliary-care",
    title: "Domiciliary Care",
    short: "Regular visits for personal care, meals, medication and daily routines.",
    tag: "Most requested",
    image: "/img/domiciliary-care.jpg",
    imageAlt: "Carer preparing a meal with an older woman in her kitchen",
    intro:
      "Domiciliary care brings friendly, professional support into your loved one's own home — from a short morning call to several visits a day. Every plan is built around their routines, so life carries on the way they like it.",
    includes: [
      "Help with washing, dressing and personal care",
      "Meal preparation and support with eating and drinking",
      "Medication prompts and reminders",
      "Light housework, laundry and keeping the home safe",
      "Shopping, errands and appointments",
      "A friendly face and conversation at every visit",
    ],
    suitedFor: [
      "Older adults who want to stay independent at home",
      "Families looking for reliable day-to-day support",
      "Anyone needing a little extra help after a change in health",
    ],
    faqs: [
      {
        q: "How long is a visit?",
        a: "Visits are planned around what your loved one needs — from short calls for medication or meals to longer visits for personal care and companionship.",
      },
      {
        q: "Will we see the same carer?",
        a: "We work hard to keep a small, consistent team around each person so visits always feel familiar.",
      },
    ],
  },
  {
    slug: "live-in-care",
    title: "Live-in Care",
    short: "A dedicated carer living alongside your loved one, day and night.",
    image: "/img/live-in-care.jpg",
    imageAlt: "Carer and older man looking through a photo album together",
    intro:
      "Live-in care means a fully trained carer lives in your loved one's home, offering round-the-clock reassurance and one-to-one support. It's a warm alternative to moving into a care home.",
    includes: [
      "One-to-one support throughout the day",
      "Personal care, mobility support and medication help",
      "Cooking, housekeeping and running the home",
      "Companionship, hobbies and trips out",
      "Reassurance through the night",
      "Regular reviews with family and our care managers",
    ],
    suitedFor: [
      "People who need support at different times of the day and night",
      "Couples who want to stay together at home",
      "Families considering an alternative to residential care",
    ],
    faqs: [
      {
        q: "Does the carer need their own room?",
        a: "Yes — live-in carers need a private bedroom so they can rest properly between periods of support.",
      },
      {
        q: "What happens when the carer takes a break?",
        a: "We arrange planned cover from a familiar carer so support carries on without disruption.",
      },
    ],
  },
  {
    slug: "night-care",
    title: "Night Care",
    short: "Waking or sleeping nights for safety, comfort and peace of mind.",
    image: "/img/night-care.jpg",
    imageAlt: "Smiling older woman wrapped in a warm scarf",
    intro:
      "Nights can be the hardest time — for the person who needs support and for the family worrying about them. Our night carers help your loved one stay safe, settled and comfortable until morning.",
    includes: [
      "Waking nights for people who need regular support",
      "Sleeping nights for reassurance if help is needed",
      "Help with toileting, repositioning and continence care",
      "Calm support for confusion or restlessness",
      "Medication prompts at night",
      "A handover to family or day carers each morning",
    ],
    suitedFor: [
      "People at risk of falls during the night",
      "Those living with dementia who are restless at night",
      "Family carers who need a full night's sleep",
    ],
    faqs: [
      {
        q: "What's the difference between waking and sleeping nights?",
        a: "On a waking night the carer stays awake throughout. On a sleeping night they rest in a spare room and are on hand if your loved one needs help.",
      },
    ],
  },
  {
    slug: "hospital-to-home",
    title: "Hospital to Home",
    short: "A calm, supported return home after a hospital stay.",
    image: "/img/hospital-to-home.jpg",
    imageAlt: "Carer greeting an older woman with a warm handshake",
    intro:
      "Coming home from hospital can feel daunting. We help your loved one settle back in safely, rebuild confidence and get back to their routines — with support that steps down as they recover.",
    includes: [
      "Planning with family before discharge",
      "Preparing the home and stocking up on essentials",
      "Help with mobility, personal care and medication",
      "Encouragement with exercises from the care team",
      "Support getting to follow-up appointments",
      "Gradually reducing visits as independence returns",
    ],
    suitedFor: [
      "Anyone returning home after an operation or illness",
      "People recovering from a fall",
      "Families who live further away and can't be there daily",
    ],
    faqs: [
      {
        q: "How quickly can support start?",
        a: "Get in touch as soon as you know a discharge date and we'll work with you to have support in place for the journey home.",
      },
    ],
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    short: "Short-term cover so family carers can rest and recharge.",
    image: "/img/respite-care.jpg",
    imageAlt: "Older couple holding hands outside their home",
    intro:
      "Caring for someone you love is rewarding, but everyone needs a break. Our respite care steps in for a few hours, a few days or a few weeks, so you can rest knowing your loved one is in good hands.",
    includes: [
      "Cover for holidays, appointments or a simple rest",
      "The same routines and preferences you've set",
      "Personal care, meals and medication support",
      "Companionship and activities",
      "Flexible bookings — from a few hours to several weeks",
      "A full handover when you return",
    ],
    suitedFor: [
      "Family carers who need a break",
      "Short periods when your usual support isn't available",
      "Trying home care for the first time",
    ],
    faqs: [
      {
        q: "Can we book respite regularly?",
        a: "Yes — many families book a regular afternoon or weekend so they always have time to recharge.",
      },
    ],
  },
  {
    slug: "specialist-care",
    title: "Specialist Care",
    short: "Dementia, Parkinson's, palliative and complex needs support.",
    tag: "Dementia care",
    image: "/img/specialist-care.jpg",
    imageAlt: "Carer doing a colouring activity with older residents",
    intro:
      "Some conditions call for extra knowledge and patience. Our carers receive specialised training so they can support people living with dementia, Parkinson's and other long-term conditions with skill and compassion.",
    includes: [
      "Dementia care focused on familiarity and routine",
      "Support for Parkinson's, stroke and MS",
      "Palliative and end-of-life care at home",
      "Working alongside GPs, district nurses and specialists",
      "Meaningful activities that support wellbeing",
      "Guidance and reassurance for the whole family",
    ],
    suitedFor: [
      "People living with dementia or a progressive condition",
      "Families wanting someone to remain at home at the end of life",
      "Anyone with complex or changing care needs",
    ],
    faqs: [
      {
        q: "Are your carers trained in dementia care?",
        a: "Carers supporting people with dementia receive specialised training before they're matched, and ongoing support from our care managers.",
      },
    ],
  },
  {
    slug: "social-companionship",
    title: "Social Companionship",
    short: "Conversation, hobbies and outings that keep life full.",
    image: "/img/social-companionship.jpg",
    imageAlt: "Carer knitting with an older woman",
    intro:
      "Loneliness affects health as much as any condition. Our companions bring conversation, laughter and company — whether that's a cup of tea at home, a walk in the park or a trip to a favourite café.",
    includes: [
      "Regular visits from a familiar companion",
      "Hobbies, games, reading and reminiscing",
      "Trips out to shops, cafés, clubs and places of worship",
      "Help staying in touch with family and friends",
      "Light help around the home",
      "Encouragement to stay active and connected",
    ],
    suitedFor: [
      "Older adults who live alone",
      "People who've lost confidence going out",
      "Families who want their loved one to have more company",
    ],
    faqs: [
      {
        q: "Can companionship be combined with other care?",
        a: "Absolutely — companionship fits easily alongside personal care, respite or live-in support.",
      },
    ],
  },
  {
    slug: "holiday-care",
    title: "Holiday Care",
    short: "A trusted carer travelling with your loved one.",
    image: "/img/holiday-care.jpg",
    imageAlt: "Older couple sitting on a bench looking out to sea",
    intro:
      "Needing care shouldn't mean missing out on holidays and family occasions. A trusted carer can travel with your loved one, so they can enjoy time away with all the support they need.",
    includes: [
      "Planning support before you travel",
      "A familiar carer travelling alongside",
      "Personal care and medication support while away",
      "Help with mobility, transport and luggage",
      "Flexible support around family plans",
      "Peace of mind for everyone",
    ],
    suitedFor: [
      "Family holidays, weddings and celebrations",
      "Visits to relatives in other parts of the country",
      "Short breaks that would otherwise feel out of reach",
    ],
    faqs: [
      {
        q: "Who pays for the carer's travel?",
        a: "We'll talk through travel and accommodation costs openly during planning so there are no surprises.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
