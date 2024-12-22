type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string; // Optional badge (e.g., "Most Popular" or "Contact Sales")
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Free",
        desc: "Get started with essential tools for onboarding and document management.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Up to 5 active workflows",
            "1 admin user + 3 team members",
            "Basic form builder (limited templates)",
            "1 integration (e.g., Slack, Google Drive)",
            "100MB document storage",
            "Email-only support"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock advanced features for streamlined client and vendor onboarding.",
        monthlyPrice: 59,
        yearlyPrice: 708, // Monthly rate times 12 for yearly discount
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Unlimited workflows",
            "Unlimited users",
            "Advanced form builder with conditional logic",
            "Unlimited integrations (e.g., Salesforce, HubSpot, DocuSign)",
            "10GB document storage",
            "Approval workflow automation",
            "Analytics dashboard",
            "Priority support"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations and agencies needing custom workflows.",
        monthlyPrice: 99,
        yearlyPrice: 1188, // Monthly rate times 12 for yearly discount
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited workflows and users",
            "Custom onboarding workflows",
            "AI-powered insights and optimizations",
            "White labeling option",
            "Dedicated account manager",
            "Enterprise-grade security",
            "Custom analytics and reporting",
            "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
