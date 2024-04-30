interface Plan {
  title: string;
  desc: string;
  cost: number | null;
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
      cost: 0,
      features: features.free,
    },
    essential: {
      title: "Essential",
      desc: "",
      cost: 35,
      features: features.essential,
    },
    growth: {
      title: "Growth",
      desc: "",
      cost: 50,
      features: features.growth,
    },
    custom: {
      title: "Custom",
      desc: "",
      cost: null,
      features: features.custom,
    },
  } as MonthlyYearlyData,
  yearly: {
    free: {
      title: "Free",
      desc: "",
      cost: 0,
      features: features.free,
    },
    essential: {
      title: "Essential",
      desc: "22%",
      cost: 14,
      features: features.essential,
    },
    growth: {
      title: "Growth",
      desc: "35%",
      cost: 16.5,
      features: features.growth,
    },
    custom: {
      title: "Custom",
      desc: "42%",
      cost: null,
      features: features.custom,
    },
  } as MonthlyYearlyData,
};

export default data;
