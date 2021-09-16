export const roleOptions = [
  { value: "", label: "Select one" },
  {
    value: { challenge: "scaling your company.", role: "Executive Leadership" },
    label: "Executive Leadership",
  },
  {
    value: {
      challenge: "seeing your commissions in real-time.",
      role: "a Sales Rep",
    },
    label: "a Sales Rep",
  },
  {
    value: {
      challenge: "coaching and motivating every rep.",
      role: "Sales Management",
    },
    label: "Sales Management",
  },
  {
    value: {
      challenge: "understanding your commissions.",
      role: "Account management/CS",
    },
    label: "Account management/CS",
  },
  {
    value: {
      challenge: "building and optimizing comp plans.",
      role: "Revenue Operations",
    },
    label: "Revenue Operations",
  },
  {
    value: { challenge: "forecasting revenue and reporting.", role: "Finance" },
    label: "Finance",
  },
  {
    value: {
      challenge: "paying your sales team accurately and on time.",
      role: "Accounting & HR",
    },
    label: "Accounting & HR",
  },
  {
    value: { challenge: "hiring sales leaders.", role: "a Founder" },
    label: "a Founder",
  },
  {
    value: { challenge: "GTM and Operations.", role: "an Investor" },
    label: "an Investor",
  },
].map(({ value, label }) => ({
  value: typeof value === "string" ? value : JSON.stringify(value),
  label,
}));

export const reasonOptions = [
  { value: "", label: "Select one" },
  {
    value: "learn from the best",
    label: "learn from the best",
  },
  {
    value: "discover new technology",
    label: "discover new technology",
  },
  {
    value: "build a stronger team",
    label: "build a stronger team",
  },
  {
    value: "network with others",
    label: "network with others",
  },
  {
    value: "get funded",
    label: "get funded",
  },
  {
    value: "bring on customers",
    label: "bring on customers",
  },
];

export const interestOptions = [
  { value: "", label: "Select one" },
  {
    value: "with your dog.",
    label: "my pets(s)",
  },
  {
    value: "with your kids.",
    label: "my kid(s)",
  },
  {
    value: "travelling the world.",
    label: "travel",
  },
  {
    value: "listening to music.",
    label: "music",
  },
  {
    value: "watching sports.",
    label: "sports",
  },
  {
    value: "wining & dining.",
    label: "food",
  },
  {
    value: "building your company.",
    label: "my company",
  },
];
