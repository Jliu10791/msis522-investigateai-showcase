export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'investigate-ai',

  title: 'InvestiGate',
  subtitle: 'The Anti-FOMO Decision Engine \u2014 AI-powered multi-agent investment analysis for disciplined retail investors.',
  ownerLine: 'Team 10 \u00b7 MSIS 522 \u00b7 Foster School of Business \u00b7 University of Washington',
  executiveSummary:
    'InvestiGate is an AI-powered investment analysis platform that uses adversarial multi-agent debate to help retail investors make disciplined, portfolio-aware decisions instead of reacting emotionally during volatile markets. The system orchestrates four specialized agents \u2014 a Bull Analyst, Bear Analyst, Portfolio Strategist, and a Judge (CIO) \u2014 each grounded in real SEC 10-K filings, live market data, and historical scenario precedents. The output is not a one-line answer: it delivers a structured recommendation with evidence-scored reasoning, concentration risk analysis, hidden ETF exposure detection, and a traffic-light confidence signal.',

  instructions: [],

  links: [
    { label: 'GitHub Repo', url: 'https://github.com/yuvasrig/investigate-ai', primary: true },
    { label: 'Slides', url: 'https://docs.google.com/presentation/d/1M7JNFTBBHxUO8MTJKBKYoQtJKJwoaKICY5bu0TbH9D4/edit?slide=id.p1#slide=id.p1' },
    { label: 'Technical Report', url: 'https://drive.google.com/file/d/17MiWQcS29aPdpd6Q2me6IIubmp8fEUfO/view' },
    { label: 'Demo Recording', url: 'https://drive.google.com/file/d/1EjO3CU0t5htVbRTnvp5fstJ_rLHrJFHP/view' },
  ],

  badges: ['React', 'TypeScript', 'FastAPI', 'LangGraph', 'Tailwind CSS', 'Claude API', 'OpenAI API'],

  keywords: ['multi-agent AI', 'investment analysis', 'portfolio risk', 'adversarial debate', 'RAG', 'SEC filings'],

  methods: [
    'Multi-agent adversarial debate (Bull vs Bear)',
    'RAG-based historical scenario retrieval',
    'Evidence scoring & verification (0\u201340 scale)',
    'Portfolio look-through exposure analysis',
  ],

  metrics: [
    { label: 'Team', value: '4 students', note: 'Yuvasri Govindasamy \u00b7 Jiayi Liu \u00b7 Jessica Suga \u00b7 Yinglin Zhen' },
    { label: 'Core User', value: 'Retail investors', note: 'Self-directed investors managing their own portfolios' },
  ],

  problemStatement:
    'Retail investors routinely make emotional, one-sided decisions during market volatility \u2014 panic-selling on fear or revenge-buying on hype. According to DALBAR research, the average equity fund investor underperforms the S&P 500 by up to 4.5% annually, driven almost entirely by impulsive reactions to macroeconomic shocks. Existing tools either echo headlines without analysis (standard AI chatbots), cost tens of thousands per year (Bloomberg terminals), or apply rigid rules without context (robo-advisors). Retail investors lack a structured way to evaluate upside, downside, and hidden concentration risk before acting on a trade.',

  solutionSummary:
    'InvestiGate replaces single-perspective AI responses with a structured multi-agent debate. When a user asks "Should I buy ACN?", the system retrieves SEC 10-K filings, live market data, and historical scenario precedents, then runs four specialized agents in parallel: a Bull Analyst builds the strongest case for the investment, a Bear Analyst counters with risks and rebuttals, a Portfolio Strategist calculates hidden exposure through ETFs and assesses concentration risk, and a Judge (CIO) scores each agent\'s evidence quality and synthesizes a final recommendation with a traffic-light confidence signal, suggested allocation, and entry strategy.',

  audience: 'Self-directed retail investors managing their own portfolios during volatile market conditions',
  impactGoal: 'Reduce impulsive, emotion-driven trading decisions by providing structured, evidence-grounded analysis with portfolio-aware risk context',
  status: 'Demo-ready prototype',

  members: [
    { name: 'Yuvasri Govindasamy', role: 'Team 10', focus: '' },
    { name: 'Jiayi Liu', role: 'Team 10', focus: '' },
    { name: 'Jessica Suga', role: 'Team 10', focus: '' },
    { name: 'Yinglin Zhen', role: 'Team 10', focus: '' },
  ],

  gallery: [
    // — Workflow —
    {
      title: 'Workflow \u2014 Query & Risk Controls',
      caption: 'The main InvestiGate interface where users enter a query, select Buy/Hold/Sell, set amount and risk tolerance, and see portfolio summary with concentration warnings before launching the analysis.',
      assetPath: '/project-assets/workflow-1.png',
    },
    {
      title: 'Workflow \u2014 Holdings & Position Selection',
      caption: 'The holdings list with per-position sparklines and values. Users select any position to trigger the multi-agent analysis workflow for that asset.',
      assetPath: '/project-assets/workflow-2.png',
    },
    {
      title: 'Workflow \u2014 Multi-Agent Analysis in Progress',
      caption: 'Four AI agents (Bull Analyst, Bear Analyst, Portfolio Strategist, Judge) running in parallel with real-time progress indicators and data grounding steps (SEC 10-K, news corpus, RAG vector store).',
      assetPath: '/project-assets/analysis-part.png',
    },
    // — Portfolio —
    {
      title: 'Portfolio \u2014 Overview & Growth',
      caption: 'Portfolio-level summary showing total value ($82,000), gain/loss ($17,500), 18-month growth (+41.4%), and holdings count across 7 sectors.',
      assetPath: '/project-assets/portfolio-dashboard-overview.png',
    },
    {
      title: 'Portfolio \u2014 Holdings Detail',
      caption: 'Detailed holdings table with ticker, shares, cost basis, gain/loss, portfolio weight, and sector for each position.',
      assetPath: '/project-assets/portfolio-dashboard-holdings.png',
    },
    // — Recommendation —
    {
      title: 'Recommendation \u2014 Bull Investment Thesis',
      caption: 'The results experience begins with the Bull Analyst\'s upside case: evidence quality score (25/40), best-case price target, key advantages, and growth catalysts. Speculative claims are flagged in orange for transparency.',
      assetPath: '/project-assets/section-3-bull.png',
    },
    {
      title: 'Recommendation \u2014 Bear Principal Risks',
      caption: 'The Bear Analyst\'s downside case follows with risk factors, valuation concerns, cyclical risks, and direct rebuttals to the Bull\'s thesis. Speculative claims are explicitly marked.',
      assetPath: '/project-assets/section-4-bear.png',
    },
    {
      title: 'Recommendation \u2014 Portfolio Allocation Strategy',
      caption: 'The Portfolio Strategist\'s allocation recommendation with concentration risk assessment, a suggested reduced allocation ($4,000 vs. requested $5,000), and ETF alternatives for diversification.',
      assetPath: '/project-assets/section-5-strategist.png',
    },
    {
      title: 'Recommendation \u2014 Hidden Exposure Detection',
      caption: 'Part of the recommendation results: detects hidden stock exposure through index funds (SPY, VOO, VTI), shows before-and-after totals, and recommends a maximum allocation to stay under the 15% concentration limit.',
      assetPath: '/project-assets/hidden-detection.png',
    },
    {
      title: 'Recommendation \u2014 Confidence Analysis & Agent Roles',
      caption: 'The recommendation appendix with conviction scores across key dimensions (Growth Potential, Risk Level, Portfolio Fit, Timing, Execution Clarity) and a summary of each agent\'s mandate in the decision process.',
      assetPath: '/project-assets/Appendix.png',
    },
  ],

  stack: [
    {
      category: 'Frontend',
      tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix / shadcn UI', 'Recharts', 'Framer Motion'],
      note: 'Responsive dashboard with portfolio visualization, real-time agent progress indicators, and interactive analysis results.',
    },
    {
      category: 'AI & Agent Orchestration',
      tools: ['LangGraph', 'LangChain', 'Claude 3.5 Sonnet', 'OpenAI GPT-4o-mini', 'Pydantic v2', 'sentence-transformers'],
      note: 'Multi-agent workflow with structured output schemas, evidence scoring, and parallel agent execution via asyncio.',
    },
    {
      category: 'Data & Backend',
      tools: ['FastAPI', 'Python 3.11+', 'SEC EDGAR API', 'yfinance', 'Pinecone', 'SQLite / PostgreSQL'],
      note: 'Async API gateway with RAG-based scenario retrieval, SEC 10-K filing parsing, and live market data integration.',
    },
  ],

  features: [
    {
      title: 'Multi-Agent Adversarial Debate',
      description:
        'Replaces the "yes-man" AI with a structured debate between a Bull Analyst and a Bear Analyst. Both agents are constrained by Gated RAG \u2014 they must anchor every claim in SEC 10-K filings and historical market data. The Bear reads the Bull\'s thesis and directly attacks its weakest assumptions.',
      highlights: [
        'Bull builds upside case with price target and growth catalysts',
        'Bear counters with risk factors, rebuttals, and worst-case target',
        'Speculative claims are explicitly flagged for transparency',
      ],
    },
    {
      title: 'Judge Verdict & Evidence Scoring',
      description:
        'A Judge agent (Chief Investment Officer) scores each analyst on a 0\u201340 evidence scale across four dimensions: data citations, calculation rigor, historical precedent, and counterarguments. The final recommendation weighs conviction against evidence quality, not just sentiment.',
      highlights: [
        'Evidence-weighted scoring: (conviction \u00d7 evidence score) / 40',
        'Traffic-light signal: GREEN / YELLOW / RED based on evidence and risk',
        'Automatic RED override if concentration risk is extreme',
      ],
    },
    {
      title: 'Portfolio Dashboard & Concentration Analysis',
      description:
        'A full portfolio view showing holdings, sector breakdown, gain/loss tracking, and concentration risk warnings. The system flags when a single stock or sector exceeds recommended thresholds (15% single stock, 40% single sector).',
      highlights: [
        'Real-time portfolio value and growth tracking',
        'Sector concentration risk alerts with color-coded warnings',
        'Missing protections flagged (e.g., bond buffer, international diversification)',
      ],
    },
    {
      title: 'Hidden ETF Exposure Detection',
      description:
        'Calculates how much of a stock you already own through index funds like SPY, QQQ, VOO, and VTI. Before you buy more of a stock, it reveals you may already hold significant exposure through your ETFs \u2014 preventing accidental over-concentration.',
      highlights: [
        'Look-through analysis across major index fund ETFs',
        'Shows before-and-after exposure percentages',
        'Recommends maximum allocation to stay under 15% concentration limit',
      ],
    },
    {
      title: 'Scenario Analysis & Historical Precedent Matching',
      description:
        'RAG-powered retrieval of historical market scenarios (e.g., geopolitical shocks, tech crashes, AI booms) to ground the analysis in real precedent. Agents reference these scenarios to strengthen their arguments and surface patterns from past market events.',
      highlights: [
        'Vector similarity search against curated historical scenario database',
        'Agents cite specific precedents with source attribution',
        'Scenario matching covers geopolitical, technological, and cyclical events',
      ],
    },
  ],

  architecture: [
    {
      title: 'Input Layer',
      description:
        'User submits a query (e.g., "Should I buy ACN?") with action type (Buy/Hold/Sell), dollar amount, risk tolerance, and time horizon. An Intent Router (GPT-4o-mini) extracts the ticker, action, and relevant scenario types.',
    },
    {
      title: 'Grounding & Retrieval Layer',
      description:
        'Parallel data retrieval fetches SEC 10-K filings via the EDGAR API, live market data via yfinance, and historical scenario precedents via RAG vector search (Pinecone). User portfolio holdings are loaded for exposure calculation.',
    },
    {
      title: 'Parallel Agent Reasoning Layer',
      description:
        'Three agents execute concurrently via LangGraph: Bull Analyst builds the upside case, Bear Analyst counters with risks (after reading Bull\'s thesis), and Portfolio Strategist calculates hidden exposure and concentration risk. All agents use Pydantic-enforced output schemas.',
    },
    {
      title: 'Verification & Synthesis Layer',
      description:
        'The Evidence Scoring Engine scores each agent on a 0\u201340 scale (data citations, rigor, precedent, counterarguments). The Judge/CIO weighs conviction against evidence quality, applies hallucination penalties for unverified claims, and determines the traffic-light signal.',
    },
    {
      title: 'Output Layer',
      description:
        'Structured JSON response with final action (BUY/HOLD/SELL), recommended allocation, confidence score, traffic-light signal (GREEN/YELLOW/RED), entry strategy, and risk management guidance. All agent reasoning is preserved for interactive exploration.',
    },
  ],

  codeHighlights: [
    {
      title: 'LangGraph Multi-Agent Workflow',
      language: 'python',
      note: 'The core workflow orchestrates four agents with parallel execution and sequential synthesis.',
      code: `workflow = StateGraph(AnalysisState)

# Add agent nodes
workflow.add_node("retrieve_data", retrieve_data_node)
workflow.add_node("bull_agent", bull_agent_node)
workflow.add_node("bear_agent", bear_agent_node)
workflow.add_node("strategist_agent", strategist_agent_node)
workflow.add_node("judge_agent", judge_agent_node)

# Data retrieval -> parallel agents -> judge synthesis
workflow.set_entry_point("retrieve_data")
workflow.add_edge("retrieve_data", "bull_agent")
workflow.add_edge("retrieve_data", "bear_agent")
workflow.add_edge("retrieve_data", "strategist_agent")
workflow.add_edge("bull_agent", "judge_agent")
workflow.add_edge("bear_agent", "judge_agent")
workflow.add_edge("strategist_agent", "judge_agent")
workflow.add_edge("judge_agent", END)

app = workflow.compile()`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Multi-agent debate with Bull, Bear, Strategist, and Judge agents',
        'Portfolio dashboard with holdings tracking and concentration risk alerts',
        'Hidden ETF exposure detection across major index funds',
        'SEC 10-K filing grounding and evidence scoring (0\u201340 scale)',
        'RAG-powered historical scenario matching',
        'PDF export of full analysis reports with agent reasoning',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Plaid integration for automatic portfolio sync from brokerage accounts',
        'Voice input via Whisper API for hands-free analysis queries',
        'Real-time streaming of agent reasoning progress to the frontend',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Mobile app for on-the-go analysis during market hours',
        'Options and derivatives exposure analysis',
        'International market coverage beyond US equities',
        'Multi-user collaboration and shared portfolio analysis',
      ],
    },
  ],

  risks: [
    {
      title: 'LLM Reliability & Hallucination',
      mitigation:
        'Agents are constrained by Gated RAG grounding \u2014 every numerical claim must cite a source (SEC 10-K, market data). Evidence scoring penalizes agents with low verification rates or excessive speculative claims. The Judge applies hallucination penalties before synthesis.',
    },
    {
      title: 'Data Freshness & Latency',
      mitigation:
        'SEC filings lag real-time events by weeks or months. The system combines multiple data sources (10-K filings, live market data, news) and displays data timestamps so users understand the recency of grounding data.',
    },
    {
      title: 'Financial Decision-Support Liability',
      mitigation:
        'InvestiGate presents analysis as structured decision support, not investment advice. Traffic-light signals and evidence scores encourage careful evaluation rather than blind action. The system never auto-executes trades.',
    },
    {
      title: 'API Cost Scaling',
      mitigation:
        'Each analysis invokes multiple LLM calls across four agents. Smart caching avoids redundant LLM calls for repeated queries, and warm RAG state reuses pre-embedded documents to reduce embedding costs.',
    },
  ],
};
