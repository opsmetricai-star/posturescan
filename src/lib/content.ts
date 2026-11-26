export type Feature = { h: string; b: string };
export type PageData = {
  section: "platform" | "solutions" | "company";
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  intro: string;
  stats: [string, string][];
  features: Feature[];
  stepsTitle: string;
  steps: Feature[];
};

const mk = (
  section: PageData["section"], slug: string, nav: string, eyebrow: string, title: string, intro: string,
  stats: [string, string][], features: Feature[], stepsTitle: string, steps: Feature[],
): PageData => ({ section, slug, nav, eyebrow, title, intro, stats, features, stepsTitle, steps });

const FACTS: [string, string][] = [
  ["0 to 100", "risk score on every analysis"],
  ["4 severity tiers", "critical, high, medium and low"],
  ["Per resource", "explanation and fix for each finding"],
];

export const PAGES: PageData[] = [
  mk("platform", "ai-analysis", "AI Configuration Analysis", "PLATFORM", "An AI engine that reads your infrastructure like an attacker",
    "PostureScan analyzes IAM policies, Terraform, Kubernetes manifests and storage configurations, identifies the misconfigurations that create real exposure, and ranks them by business risk.",
    FACTS,
    [{ h: "Contextual analysis", b: "The model reads each resource in relation to the rest of the configuration, so a permissive rule is judged by what it actually exposes." },
     { h: "Structured findings", b: "Every result is validated against a strict schema: title, severity, affected resource, explanation and fix." },
     { h: "Deterministic limits", b: "Usage is metered server-side per plan, so spend and capacity stay predictable for finance and operations." },
     { h: "Private by design", b: "Each analysis is stored under your account with row-level security. No other tenant can read it." }],
    "How an analysis runs", [{ h: "Ingest", b: "Paste a configuration from any environment." }, { h: "Analyze", b: "The AI engine evaluates every resource." }, { h: "Decide", b: "Findings are scored and ranked by severity." }, { h: "Act", b: "Apply the fix generated for each finding." }]),
  mk("platform", "risk-scoring", "Risk Scoring", "PLATFORM", "A single score that turns configuration risk into a decision",
    "Replace long lists of alerts with a 0 to 100 posture score and a ranked set of findings, so leaders know where to spend the next engineering hour.",
    FACTS,
    [{ h: "Executive-ready score", b: "One number per analysis that summarizes hardening, comparable across teams and over time." },
     { h: "Severity ranking", b: "Critical issues surface first, so remediation effort follows risk, not volume." },
     { h: "History", b: "Every analysis is saved, giving you a record of posture as it improves." },
     { h: "Plain-language rationale", b: "Each finding explains why it matters, so owners act without a security translator." }],
    "From finding to decision", [{ h: "Score", b: "Quantify posture." }, { h: "Rank", b: "Order by severity." }, { h: "Assign", b: "Route to the owning team." }, { h: "Verify", b: "Re-run to confirm the fix." }]),
  mk("platform", "remediation", "Automated Remediation Guidance", "PLATFORM", "Every finding ships with the fix",
    "The engine does not stop at detection. It writes the remediation for each finding, cutting the time between discovery and a closed risk.",
    FACTS,
    [{ h: "Specific fixes", b: "Guidance references the exact resource and setting that needs to change." },
     { h: "Least-privilege rewrites", b: "Over-broad permissions are paired with a narrower alternative." },
     { h: "Faster closure", b: "Engineers receive an action, not an investigation task." },
     { h: "Re-analysis", b: "Run the updated configuration again and confirm the score improves." }],
    "Remediation loop", [{ h: "Detect", b: "Identify the issue." }, { h: "Explain", b: "State the exposure." }, { h: "Fix", b: "Apply the generated change." }, { h: "Confirm", b: "Re-analyze." }]),

  mk("solutions", "cloud-posture", "Cloud Security Posture", "SOLUTIONS", "Cloud posture management driven by AI",
    "Give security leaders a continuous read on configuration risk across accounts, without building a rules library or staffing a triage queue.",
    FACTS,
    [{ h: "No rules to maintain", b: "The engine reasons over configurations directly instead of depending on hand-written checks." },
     { h: "Multi-environment", b: "Analyze production, staging and development configurations the same way." },
     { h: "Lower triage cost", b: "Ranked, explained findings reduce the analyst time spent per issue." },
     { h: "Audit trail", b: "Saved analyses document what was found and when." }],
    "Operating model", [{ h: "Collect", b: "Gather configurations." }, { h: "Analyze", b: "Run the engine." }, { h: "Prioritize", b: "Act on critical first." }]),
  mk("solutions", "iam-review", "Identity and Access Review", "SOLUTIONS", "Find over-privileged access before it becomes an incident",
    "Analyze IAM policies and role definitions to expose wildcard permissions, privilege escalation routes and risky trust relationships.",
    FACTS,
    [{ h: "Wildcard detection", b: "Flag actions and resources granted more broadly than the workload needs." },
     { h: "Escalation paths", b: "Identify permission combinations that allow privilege escalation." },
     { h: "Trust review", b: "Surface cross-account and public trust that widens the blast radius." },
     { h: "Narrower policy", b: "Receive a tighter policy for each over-privileged grant." }],
    "Review flow", [{ h: "Paste", b: "Paste the policy." }, { h: "Assess", b: "Find excess access." }, { h: "Tighten", b: "Apply the fix." }]),
  mk("solutions", "kubernetes", "Kubernetes Security", "SOLUTIONS", "Harden Kubernetes manifests before they reach a cluster",
    "Analyze deployment manifests for privileged containers, host access, missing limits and unsafe defaults.",
    FACTS,
    [{ h: "Container privilege", b: "Detect privileged mode, root users and added capabilities." },
     { h: "Host exposure", b: "Find host network, host path and socket mounts." },
     { h: "Resource controls", b: "Catch missing limits that enable noisy-neighbor and denial-of-service risk." },
     { h: "Secure defaults", b: "Receive a corrected manifest section for each issue." }],
    "Review flow", [{ h: "Paste", b: "Paste the manifest." }, { h: "Assess", b: "Find unsafe settings." }, { h: "Correct", b: "Apply the fix." }]),
  mk("solutions", "infrastructure-as-code", "Infrastructure as Code", "SOLUTIONS", "Stop misconfigurations at the template",
    "Analyze Terraform and other infrastructure templates so risk is removed at the source, before it is deployed repeatedly.",
    FACTS,
    [{ h: "Template analysis", b: "Review resources, variables and defaults for insecure settings." },
     { h: "Shift-left economics", b: "Fixing a template once is cheaper than remediating every deployment." },
     { h: "Network exposure", b: "Catch open ingress, public endpoints and permissive security groups." },
     { h: "Encryption gaps", b: "Find unencrypted storage and data paths." }],
    "Review flow", [{ h: "Paste", b: "Paste the template." }, { h: "Assess", b: "Find insecure settings." }, { h: "Correct", b: "Update the source." }]),
  mk("solutions", "storage-exposure", "Storage and Data Exposure", "SOLUTIONS", "Protect the data your business runs on",
    "Analyze storage configurations for public access, missing encryption and weak access controls that put customer and company data at risk.",
    FACTS,
    [{ h: "Public access", b: "Identify buckets and containers that are readable by anyone." },
     { h: "Encryption", b: "Detect storage that is not encrypted at rest or in transit." },
     { h: "Access control", b: "Find overly broad policies on data stores." },
     { h: "Retention and logging", b: "Spot missing versioning and access logs." }],
    "Review flow", [{ h: "Paste", b: "Paste the configuration." }, { h: "Assess", b: "Find exposure." }, { h: "Secure", b: "Apply the fix." }]),

  mk("company", "about", "About", "COMPANY", "Security decisions at the speed of AI",
    "PostureScan builds AI-native infrastructure security for businesses. Our position is simple: teams should be told what is wrong, how serious it is and how to fix it, without a queue in between.",
    [["AI-native", "analysis is the core engine"], ["B2B", "built for teams and operators"], ["Outcome-led", "risk, cost and speed"]],
    [{ h: "Context over volume", b: "A short list of explained, ranked findings beats a long list of alerts." },
     { h: "Accountable AI", b: "Outputs are validated against a schema and reviewed by people before action." },
     { h: "Operator focus", b: "We design for the people who run infrastructure and answer for its risk." },
     { h: "Plain commitments", b: "Clear plans, clear limits and clear data handling." }],
    "Our approach", [{ h: "Analyze", b: "Apply AI to real configurations." }, { h: "Decide", b: "Rank by business risk." }, { h: "Automate", b: "Generate the fix." }]),
  mk("company", "security", "Security and Data Handling", "COMPANY", "How we protect your data",
    "A security product has to be secure. This is how PostureScan handles the configurations and account data you entrust to it.",
    [["RLS", "enforced on every table"], ["Server-side", "usage and AI calls"], ["Per account", "data isolation"]],
    [{ h: "Tenant isolation", b: "Row-level security restricts every analysis to the account that created it." },
     { h: "Server-side processing", b: "AI requests and usage limits run on the server, never in the browser." },
     { h: "Credential hygiene", b: "Do not paste secrets. Configurations should be sanitized before analysis." },
     { h: "AI processing", b: "Submitted configurations are sent to our AI provider to generate findings." }],
    "Our commitments", [{ h: "Isolate", b: "Separate every account." }, { h: "Limit", b: "Meter usage by plan." }, { h: "Disclose", b: "Be clear about processing." }]),
];

export const bySection = (s: PageData["section"]) => PAGES.filter((p) => p.section === s);
export const findPage = (s: PageData["section"], slug: string) => PAGES.find((p) => p.section === s && p.slug === slug);
