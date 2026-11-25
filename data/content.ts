export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  image?: string;
  /** Leave true until the quote is replaced with a real review the family has agreed to share. */
  sample: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mum looks forward to her visits now. It feels less like care and more like a friend popping round.",
    name: "Family member",
    context: "Domiciliary care, Stockport",
    image: "/img/face-2.jpg",
    sample: true,
  },
  {
    quote:
      "Coming home from hospital felt so much less frightening knowing someone kind would be there every morning.",
    name: "Client",
    context: "Hospital to home, Bredbury",
    image: "/img/face-1.jpg",
    sample: true,
  },
  {
    quote:
      "For the first time in months I could take a weekend away and actually relax. Dad was in safe hands.",
    name: "Family member",
    context: "Respite care, Hazel Grove",
    image: "/img/face-4.jpg",
    sample: true,
  },
];

export const steps = [
  {
    title: "A friendly call",
    text: "Tell us about your loved one and what's become difficult. We listen first and answer your questions.",
    note: "Around 15 minutes",
    icon: "phone",
  },
  {
    title: "A free home visit",
    text: "A care manager visits to understand routines, preferences and the home, then puts together a care plan.",
    note: "Free, no obligation",
    icon: "home",
  },
  {
    title: "Care, carefully matched",
    text: "We introduce a carer chosen for personality as well as skills — then stay in touch and review regularly.",
    note: "Ongoing reviews",
    icon: "heart",
  },
] as const;

export const reasons = [
  {
    title: "Consistent, familiar carers",
    text: "A small team who get to know your loved one — not a stream of strangers.",
    icon: "people",
  },
  {
    title: "Families kept in the loop",
    text: "Regular updates and a care manager you can speak to directly.",
    icon: "chat",
  },
  {
    title: "Flexible as needs change",
    text: "Increase, reduce or pause visits as life changes, with no long contracts.",
    icon: "plus",
  },
] as const;

export const faqs = [
  {
    group: "Getting started",
    items: [
      {
        q: "How do I arrange care?",
        a: "Call us or send an enquiry. We'll have a friendly chat about what's needed, then arrange a free home assessment at a time that suits you.",
      },
      {
        q: "Is the home assessment really free?",
        a: "Yes. The assessment is free and there's no obligation to go ahead afterwards.",
      },
      {
        q: "Which areas do you cover?",
        a: "We support families across Stockport and Greater Manchester. If you're unsure whether we cover your area, just ask.",
      },
    ],
  },
  {
    group: "Our carers",
    items: [
      {
        q: "How are your carers chosen?",
        a: "Every carer is carefully screened, trained and supported before they visit anyone. We match carers on personality and interests as well as skills.",
      },
      {
        q: "Will my loved one see the same carer?",
        a: "We keep a small, consistent team around each person so visits always feel familiar.",
      },
      {
        q: "What if we don't get on with a carer?",
        a: "Tell us and we'll find a better match. It's important that your loved one feels comfortable.",
      },
    ],
  },
  {
    group: "Costs & flexibility",
    items: [
      {
        q: "How much does home care cost?",
        a: "Every plan is priced individually, based on the type and amount of support. We'll give you clear costs after the assessment, before anything starts.",
      },
      {
        q: "Am I tied into a contract?",
        a: "No. Care can be increased, reduced or paused as needs change.",
      },
      {
        q: "Can the council or NHS help with funding?",
        a: "Some people qualify for help from their local authority or NHS Continuing Healthcare. We're happy to talk through the options with you.",
      },
    ],
  },
];

export const values = [
  { title: "Dignity", text: "Treating every person with respect, privacy and kindness." },
  { title: "Independence", text: "Helping people do as much as they can, for as long as they can." },
  { title: "Consistency", text: "Familiar carers and reliable visits that families can count on." },
  { title: "Openness", text: "Honest communication with clients and families at every step." },
];
