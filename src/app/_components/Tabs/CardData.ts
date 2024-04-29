interface Plan {
  title: string;
  desc: string;
  features: string[];
}

type MonthlyYearlyData = Record<string, Plan>;

const features = {
  free: [
    "75 mins per month",
    "720p render quality",
    "Multi-Lingual feature",
    "CutMagic",
  ],
  essential: [
    "Everything in Free plan",
    "200 - 500 mins per month",
    "1080p render quality",
    "Import with integrations",
    "Intelliclips, short videos & chapters",
  ],
  growth: [
    "Everything in Essential plan",
    "200 - 1000 mins per month",
    "1080p render quality",
    "Custom Brand Kit & templates",
    "Bulk export (upto 5)",
    "Bulk multi-social publishing",
  ],
  custom: [
    "Everything in Growth plan",
    "4K render quality",
    "900 or more mins per month",
    "Full video transcripts",
    "Clip transcripts",
  ],
};

const data = {
  monthly: {
    free: {
      title: "Free",
      desc: "",
      features: features.free,
    },
    essential: {
      title: "Essential",
      desc: "",
      features: features.essential,
    },
    growth: {
      title: "Growth",
      desc: "",
      features: features.growth,
    },
    custom: {
      title: "Custom",
      desc: "",
      features: features.custom,
    },
  } as MonthlyYearlyData,
  yearly: {
    free: {
      title: "Free",
      desc: "",
      features: features.free,
    },
    essential: {
      title: "Essential",
      desc: "Billed annually at 67% off",
      features: features.essential,
    },
    growth: {
      title: "Growth",
      desc: "Billed annually at 62% off",
      features: features.growth,
    },
    custom: {
      title: "Custom",
      desc: "Billed annually at 65% off",
      features: features.custom,
    },
  } as MonthlyYearlyData,
};

export default data;
