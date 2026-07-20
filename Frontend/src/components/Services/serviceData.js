import hrImage from '../../assets/HRServices.jpg';
import payroll from '../../assets/PayrollServices.jpg';
import law from '../../assets/LawServices.jpg';
import esi from '../../assets/ESIServices.jpg';
import accounting from '../../assets/AccountingServices.jpg';
import taining from '../../assets/TrainingServices.jpg';
import business from '../../assets/BusinessSupportServices.jpg';
import gst from '../../assets/GSTServices.jpg';
import digital from '../../assets/DSCServices.jpg';

export const servicesData = [
  {
    slug: 'hr-shared-services',
    image: hrImage,
    icon: '👥',
    color: 'orange',
    title: 'HR Shared Services',
    shortDesc: 'Professional HR infrastructure for growing businesses without the cost of a full-time HR department.',
    tagline: 'ELITE HR SUPPORT ON-DEMAND',
    intro: 'Scaling a business is hard. Managing people is harder. We provide the strategic HR backbone your company needs to grow without the heavy overhead of a full-time HR executive.',
    painPoints: [
      'Spending too much time on administrative paperwork instead of core growth',
      'Inconsistent employee onboarding leading to high early-stage turnover',
      'Lack of standardized HR policies and employee handbooks',
      'Difficulty managing employee records and digital documentation',
    ],
    sections: [
      {
        heading: 'Strategic HR Administration',
        items: [
          'End-to-End Employee Lifecycle Management (Joining to Exit)',
          'Customized HR Policy Drafting & Implementation',
          'Employee Master Database Management',
          'Performance Management System (PMS) Setup',
          'Employee Grievance Redressal & Conflict Resolution',
        ],
      },
      {
        heading: 'Operational Excellence',
        items: [
          'Attendance & Leave Tracking Automation',
          'HR Reporting & Executive MIS Dashboards',
          'Digital Document Management & Archiving',
          'Employee Helpdesk & Rapid Query Resolution',
        ],
      },
    ],
    outcomes: ['Reduce HR Administrative costs by up to 80%', '100% consistent policy application across the org', 'Faster onboarding cycle for new hires', 'Improved employee retention and satisfaction'],
    whyChoose: ['Cost-Effective', 'Expert Guidance', 'Scalable Support', 'Compliance First'],
    highlight: 'Professional HR management that scales with your business growth.',
  },
  {
    slug: 'payroll-management',
    image: payroll,
    icon: '₹',
    color: 'blue',
    title: 'Payroll Management',
    shortDesc: 'Precision-driven payroll processing ensuring your employees are paid accurately and on time, every time.',
    tagline: 'ERROR-FREE PAYROLL. HAPPY EMPLOYEES.',
    intro: 'Payroll is the most sensitive part of your business. A single mistake can lead to employee dissatisfaction or legal penalties. We bring military-grade precision to your payroll.',
    painPoints: [
      'Manual calculation errors leading to salary disputes and employee frustration',
      'Stress over missing statutory deadlines for PF, ESI, and PT',
      'Complexity in managing bonuses, arrears, and various deductions',
      'Lack of professional, transparent payslips and tax reports',
    ],
    sections: [
      {
        heading: 'Core Payroll Engine',
        items: [
          'End-to-End Gross-to-Net Salary Processing',
          'Automated Professional Payslip Generation & Distribution',
          'Bonus, Incentive & Gratuity Calculations',
          'Loan & Advance Recovery Management',
        ],
      },
      {
        heading: 'Tax & Statutory Compliance',
        items: [
          'Accurate PF, ESI, and PT calculations',
          'Monthly ECR Filing & Challan Generation',
          'TDS Calculation & Quarterly Return Filing',
          'Form 16 Generation & Distribution for Employees',
        ],
      },
    ],
    outcomes: ['Zero payroll errors', '100% statutory compliance', 'Significant reduction in admin hours', 'Secure & confidential data handling'],
    whyChoose: ['Absolute Precision', 'Timely Disbursement', 'Regulatory Expertise', 'Data Security'],
    highlight: 'We handle the complexity; you get the peace of mind.',
  },
  {
    slug: 'labour-law-compliance',
    image: law,
    icon: '⚖️',
    color: 'green',
    title: 'Labour Law Compliance',
    shortDesc: 'Shield your business from legal risks with complete factory and labour law adherence.',
    tagline: 'LEGAL PROTECTION & REGULATORY PEACE',
    intro: 'Government inspections can be daunting. We act as your legal shield, ensuring every register is updated and every license is valid, preventing costly penalties and shutdowns.',
    painPoints: [
      'Fear of government inspections and unexpected penalties',
      'Confusion over complex Factory Act and Shop & Establishment rules',
      'Difficulty in maintaining a massive volume of statutory registers',
      'Expired licenses causing operational delays',
    ],
    sections: [
      {
        heading: 'Factory & Establishment Compliance',
        items: [
          'Factory License Registration, Renewal & Amendments',
          'Shop & Establishment Registration & Maintenance',
          'Notice of Occupier / Manager change filings',
          'Plan Approval (Building / Layout) coordination',
          'Maintenance of all Mandatory Statutory Registers',
        ],
      },
      {
        heading: 'Contract Labour & Audit Support',
        items: [
          'CLRA Act compliance and Principal Employer Registration',
          'Contractor License Registration & Maintenance',
          'Drafting Legally Sound Employer-Contractor Agreements',
          'Handling Labour Inspections & Audit Representation',
        ],
      },
    ],
    outcomes: ['Zero penalties during government inspections', 'Full legal validity of all business licenses', 'Reduced legal liability for directors', 'Clean compliance audit reports'],
    whyChoose: ['Deep Legal Knowledge', 'Audit-Ready Documentation', 'Prompt Renewals', 'Inspection Support'],
    highlight: 'Turn compliance from a burden into a business advantage.',
  },
  {
    slug: 'esi-pf-compliance',
    image: esi,
    icon: '🛡️',
    color: 'purple',
    title: 'ESI & PF Compliance',
    shortDesc: 'End-to-end management of social security benefits for your workforce.',
    tagline: 'SECURE YOUR WORKFORCE, SECURE YOUR BUSINESS',
    intro: 'Employee trust is built on the reliability of their benefits. We ensure your PF and ESI contributions are managed flawlessly, ensuring your employees are protected and your business is compliant.',
    painPoints: [
      'Complexity in UAN generation and KYC updates for employees',
      'Errors in monthly contribution filings leading to interest/penalties',
      'Slow resolution of employee queries regarding PF withdrawals',
      'Difficulties in handling member exits and transfers',
    ],
    sections: [
      {
        heading: 'EPF (Provident Fund) Management',
        items: [
          'EPFO Registration & Establishment Code Allotment',
          'Seamless UAN Generation, Activation & KYC Updates',
          'Monthly ECR Filing & Contribution Payments',
          'PF Admin: Onboarding, Exits, and Transfer support',
        ],
      },
      {
        heading: 'ESIC (State Insurance) Management',
        items: [
          'ESIC Registration & Code Allotment',
          'Employee Enrolment & ESI Card Generation',
          'Monthly Contribution Filing & Challan Generation',
          'Compliance Support for ESI Inspections',
        ],
      },
    ],
    outcomes: ['100% accuracy in employee social security', 'Faster resolution of employee PF/ESI queries', 'Zero late-payment penalties', 'Enhanced employee trust and loyalty'],
    whyChoose: ['Expert Portal Handling', 'Timely Filings', 'Member-Centric Support', 'Accuracy Guaranteed'],
    highlight: 'Seamless benefits management for a happier workforce.',
  },
  {
    slug: 'accounting-services',
    image: accounting,
    icon: '🧮',
    color: 'teal',
    title: 'Accounting Services',
    shortDesc: 'Transform your numbers into insights with professional bookkeeping and financial reporting.',
    tagline: 'CLARITY IN NUMBERS. CONFIDENCE IN GROWTH.',
    intro: 'Accounting is more than just tax filing; it is the heartbeat of your business. We provide the financial clarity you need to make data-driven decisions and maintain a healthy cash flow.',
    painPoints: [
      'Lack of real-time visibility into profit and loss',
      'Messy bookkeeping causing stress during audit season',
      'Inaccurate cash flow forecasting leading to liquidity issues',
      'Complexities in GST reconciliation and TDS management',
    ],
    sections: [
      {
        heading: 'Financial Core',
        items: [
          'Daily/Monthly Bookkeeping & General Ledger Maintenance',
          'Accounts Payable & Receivable Management',
          'Bank and Vendor Reconciliation',
          'Finalization of Balance Sheets & P&L Statements',
        ],
      },
      {
        heading: 'Tax & Strategic Reporting',
        items: [
          'GST Filing, Reconciliation & Amendments',
          'TDS Calculation, Filing & Return Management',
          'Income Tax Return (ITR) Filing',
          'Executive MIS Reports & Financial Analysis',
        ],
      },
    ],
    outcomes: ['Audit-ready financial records at all times', 'Clear visibility of business profitability', 'Reduced tax leakage through accurate filing', 'Better cash flow management'],
    whyChoose: ['Tally Expertise', 'Financial Accuracy', 'Tax Optimization', 'Timely Reporting'],
    highlight: 'Professional accounting that empowers your financial decisions.',
  },
  {
    slug: 'training-support',
    image: taining,
    icon: '🎓',
    color: 'red',
    title: 'Training & Support',
    shortDesc: 'Upskill your workforce and ensure a safe, respectful workplace through professional training.',
    tagline: 'BUILDING CAPABILITY. ENSURING SAFETY.',
    intro: 'A skilled and aware workforce is your greatest asset. We specialize in POSH compliance and HR capacity building to protect your employees and your brand reputation.',
    painPoints: [
      'Legal risk due to lack of POSH (Prevention of Sexual Harassment) compliance',
      'Lack of leadership and soft skills among middle management',
      'Employee ignorance of workplace safety and labour laws',
      'Inefficient use of HR software and productivity tools',
    ],
    sections: [
      {
        heading: 'POSH Compliance (Mandatory)',
        items: [
          'SHE-Box Portal Registration & Compliance',
          'Drafting Professional POSH Policies',
          'Internal Committee (IC) Setup & Training',
          'Employee Awareness Sessions on Workplace Harassment',
          'Annual POSH Return Filing Support',
        ],
      },
      {
        heading: 'Corporate Capacity Building',
        items: [
          'Leadership Development for Supervisors',
          'HR Policy & Procedure Training for Managers',
          'Labour Law Awareness for Operational Staff',
          'Soft Skills & Communication Workshops',
        ],
      },
    ],
    outcomes: ['100% compliance with the POSH Act', 'Reduced workplace conflicts and grievances', 'Increased manager productivity', 'A culture of respect and professional safety'],
    whyChoose: ['Certified Trainers', 'Interactive Modules', 'Legal Alignment', 'Customized Content'],
    highlight: 'Creating a safe, skilled, and compliant workplace culture.',
  },
  {
    slug: 'business-support-services',
    image: business,
    icon: '💼',
    color: 'indigo',
    title: 'Business Support Services',
    shortDesc: 'Comprehensive administrative and licensing support to get your business operational quickly.',
    tagline: 'YOUR PARTNER IN BUSINESS SETUP',
    intro: 'Launching or expanding a business involves a mountain of paperwork. We handle the red tape, licensing, and administrative hurdles so you can focus on your product and customers.',
    painPoints: [
      'Frustration with slow government licensing processes',
      'Confusion over which licenses are mandatory for specific industries',
      'Difficulty in finding reliable housekeeping or security vendors',
      'Overwhelming administrative tasks during the setup phase',
    ],
    sections: [
      {
        heading: 'Licensing & Approvals',
        items: [
          'KSPCB (Pollution Control Board) Approval & Renewals',
          'BWSSB (Water & Sewage) Approval & Renewals',
          'Trade and Fire Safety License Management',
          'Customized License Audit for New Setups',
        ],
      },
      {
        heading: 'Operational Support',
        items: [
          'Labour Contract & Vendor Management Support',
          'Security & Housekeeping Agency Setup',
          'End-to-End Tally Accounting Implementation',
          'Administrative Workflow Design',
        ],
      },
    ],
    outcomes: ['Faster time-to-market for new business units', 'Complete legal validity of all operational licenses', 'Reduced stress during the setup phase', 'Efficient operational infrastructure'],
    whyChoose: ['Govt Liaison Expertise', 'Rapid Execution', 'End-to-End Support', 'Network of Trusted Vendors'],
    highlight: 'We handle the red tape; you build the empire.',
  },
  {
    slug: 'gst-registration',
    image: gst,
    icon: '📋',
    color: 'cyan',
    title: 'GST Registration & Filing',
    shortDesc: 'Hassle-free GST management from initial registration to monthly compliance.',
    tagline: 'TAX COMPLIANCE MADE SIMPLE',
    intro: 'GST can be a nightmare of reconciliation and deadlines. We simplify the entire process, ensuring you claim every eligible input tax credit while staying 100% compliant.',
    painPoints: [
      'Complexity in choosing the right GST scheme',
      'Errors in filing returns leading to GST notices',
      'Missed Input Tax Credits (ITC) due to poor reconciliation',
      'Stress over monthly deadlines and portal glitches',
    ],
    sections: [
      {
        heading: 'GST Setup & Management',
        items: [
          'New GST Registration & Application Support',
          'GST Amendment (Address, Phone, Business Activity)',
          'Cancellation and Revocation of GST Registration',
          'Digital Signature (DSC) Integration for GST',
        ],
      },
      {
        heading: 'Ongoing Filing & Compliance',
        items: [
          'Accurate GSTR-1 and GSTR-3B Filing',
          'Detailed GSTR-2A/2B Reconciliation',
          'Handling GST Notices and Department Queries',
          'Annual GST Return (GSTR-9) Filing',
        ],
      },
    ],
    outcomes: ['Zero penalties for late or incorrect filings', 'Maximum Input Tax Credit (ITC) recovery', 'Clean tax records for bank loans/audits', 'Total peace of mind regarding tax laws'],
    whyChoose: ['Tax Experts', 'Meticulous Reconciliation', 'Deadline Driven', 'Error-Free Filing'],
    highlight: 'Optimizing your tax efficiency through professional management.',
  },
  {
    slug: 'digital-signature-dsc',
    icon: '🔏',
    image: digital,
    color: 'amber',
    title: 'Digital Signature (DSC) Services',
    shortDesc: 'Fast and secure issuance of Digital Signature Certificates for all your legal filings.',
    tagline: 'SECURE. DIGITAL. INSTANT.',
    intro: 'In a digital-first regulatory world, a DSC is your identity. We provide the fastest and most secure way to get your Class 3 certificates for GST, Income Tax, and MCA filings.',
    painPoints: [
      'Long delays in getting DSC certificates',
      'Confusion over the types of certificates needed (Class 2 vs Class 3)',
      'Difficulty in the video verification process',
      'Expired certificates halting critical business filings',
    ],
    sections: [
      {
        heading: 'DSC Issuance',
        items: [
          'Class 3 Digital Signature Certificate (DSC) issuance',
          'Individual and Organization DSC support',
          'Fast-track Video Verification assistance',
          'USB Token delivery and installation support',
        ],
      },
      {
        heading: 'Lifecycle Management',
        items: [
          'Renewal of Expiring Certificates',
          'DSC for GST, ITR, and PF/ESI Portals',
          'DSC for MCA (Company) Filings',
          'Security Guidelines for Token Usage',
        ],
      },
    ],
    outcomes: ['Instant access to digital filing capabilities', 'Zero downtime in business submissions', 'Highly secure identity verification', 'Seamless integration with Govt portals'],
    whyChoose: ['Rapid Turnaround', 'Secure Process', 'Technical Support', 'Easy Documentation'],
    highlight: 'The key to your digital business identity.',
  },
];

export const getServiceBySlug = (slug) => servicesData.find(s => s.slug === slug);