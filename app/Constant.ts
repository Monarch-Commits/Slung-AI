// Navigation links for the Navbar component
export const NAV_LINKS = [
  { label: 'Platform', href: '/#platform' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Sign In', href: '/#sign-in' },
];

// Data for the How It Works section
export const HowItWorksSteps = [
  {
    title: 'Upload',
    description:
      'Drop in your documents — rent rolls, T-12s, operating memoranda. Any format, any property management system.',
    img: '/cards/1.png',
    gradient: 'from-[#dff2ff] via-[#bfe6ff] to-[#4fb3ff]',
    s: 'absolute -bottom-10 ',
  },
  {
    title: 'Model',
    description:
      'Your underwriting is built automatically. Institutional-grade assumptions, live rent comps, and anomaly detection — all included.',
    img: '/cards/2222.png',
    gradient: 'from-[#dbeafe] via-[#93c5fd] to-[#6366f1]',
    s: 'absolute bottom-0 -right-25',
  },
  {
    title: 'Decide',
    description:
      'In minutes, not hours. Know exactly where the deal stands — and share it with anyone who needs to see it.',
    img: '/cards/3333.png',
    gradient: 'from-[#4fb3ff] via-[#93c5fd] to-[#dbeafe]',
    s: 'absolute -bottom-4 left-[-30px]',
  },
];

// FAQ data for the FAQ component
export const FAQs = [
  {
    question: 'What is Slung ?',
    answer:
      'Slung is an AI-powered underwriting platform built for multifamily investors and brokers. Upload a rent roll, T12, offering memorandum, or any property document, and Slung extracts the data, reclassifies expenses into institutional categories, benchmarks against 200,000+ comparable properties, pulls live rent and sale comps, and delivers a complete underwriting model — in about 3 minutes. You still get full control to review, edit, and export an institutional-grade Excel workbook.',
  },
  {
    question: 'How does Slung extract data from T12s and rent rolls?',
    answer:
      "Slung's AI reads and extracts every line item from your T12s and rent rolls — regardless of format or property management system (Yardi, RealPage, AppFolio, Entrata, MRI, Rent Manager, or custom exports). It identifies income, expenses, unit mixes, lease terms, vacancy, and rent schedules, then automatically reclassifies everything into standardized institutional categories for apples-to-apples comparisons. Extraction takes seconds. You can review, edit, and override any categorization before running your analysis.",
  },
  {
    question: 'Does it take 3 minutes to analyze a deal?',
    answer:
      "Yes. It takes about 3 minutes to analyze a deal with Slung, from upload to complete underwriting model. That includes AI extraction, expense reclassification, market benchmarking against 200,000+ properties, rent comp analysis, and NOI optimization. Manual Excel underwriting typically takes 2–4 hours per deal. Slung's speed lets high-volume teams screen their entire pipeline — not just the deals that land on the right desk at the right time.",
  },
  {
    question: 'What file formats and property management systems do you support?',
    answer:
      "Slung accepts Excel (.xlsx, .xls), CSV, and PDF formats. Documents can come from any major property management system — Yardi, RealPage, AppFolio, Entrata, MRI, Rent Manager, and more. No need to reformat or clean files before uploading. Slung's AI handles inconsistent layouts and non-standard categorizations automatically. Just drag and drop or upload from your file explorer.",
  },
  {
    question: 'How is Slung different from using an Excel template?',
    answer:
      "Static spreadsheets require hours of manual data entry and lack live market context. Slung extracts data from your documents instantly, highlights expense anomalies against market benchmarks, provides live rent and sale comps, and lets you share dynamic models with your team or investors. When you're ready, export a fully institutional-grade Excel workbook for offline work. You get the speed of automation with the flexibility of a spreadsheet.",
  },
  {
    question: 'How does expense benchmarking work?',
    answer:
      "Slung benchmarks every expense category against 20,000+ comparable properties matched by size, vintage, and location. For each line item — admin, utilities, R&M, insurance, payroll, marketing, taxes — you see your per-unit spend vs. market average and the percentage variance. This instantly reveals where a property is overspending (value-add opportunity) and where it's already lean — actionable signals for your operating strategy before you even tour the property.",
  },
  {
    question: 'Does Slung provide rent comp analysis?',
    answer:
      'Yes. Slung automatically generates rent comp analysis with an interactive map showing comparable properties, current rents, price per square foot, unit mix, and proximity. For each unit type, you see current rent vs. market rents and comps — instantly identifying loss-to-lease opportunities and validating broker assumptions.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Slung uses AES-256 encryption at rest and TLS 1.2+ encryption in transit — the same standards used by major financial institutions. We are actively pursuing SOC 2 Type II certification and follow strict access controls, audit logging, and data isolation practices. Your deal data is never shared with other users or used to train models.',
  },
];

// Comparison data for the CompareSection component
export const Compare = [
  {
    label: 'Setup',
    slung: 'Minutes',
    slungSub: 'Upload a document and go',
    legacy: 'Weeks + training',
    legacySub: 'Implementation & onboarding required',
  },
  {
    label: 'AI extraction',
    slung: 'Any format',
    slungSub: 'PDF, XLSX, CSV — all PMS systems',
    legacy: 'Manual',
    legacySub: 'Copy-paste data entry per deal',
  },
  {
    label: 'Benchmarking',
    slung: '200,000+ properties',
    slungSub: 'Live peer benchmarks included',
    legacy: 'Not supported',
    legacySub: 'No market context built in',
  },
  {
    label: 'Rent comps',
    slung: 'Auto-mapped',
    slungSub: 'Pulled live into your model',
    legacy: 'Additional $XXX/month',
    legacySub: 'Separate subscription required',
  },
  {
    label: 'Underwriting model',
    slung: 'Web + dynamic Excel',
    slungSub: 'Live model, shareable & exportable',
    legacy: 'Hard-coded Excel',
    legacySub: 'Static, brittle, hard to share',
  },
  {
    label: 'Time to insight',
    slung: '90 seconds',
    slungSub: 'First look at the deal',
    legacy: '30+ minutes',
    legacySub: 'Manual data entry first',
  },
  {
    label: 'Start time',
    slung: 'Start Now',
    slungSub: '14 day free trial. No credit card.',
    legacy: 'Delay Start',
    legacySub: 'Start in two weeks after demo.',
  },
  {
    label: 'Pricing',
    slung: '$99/month',
    slungSub: 'Cancel Anytime.',
    legacy: '$1,250/month.',
    legacySub: 'Forced annual contract.',
    color: {
      color1: 'text-[#18B007]',
      color2: 'text-[#E00000]',
    },
  },
];
