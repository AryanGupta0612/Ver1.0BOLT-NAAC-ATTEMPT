import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CriteriaItem {
  id: string;
  pdfFiles: {
    name: string;
    url: string;
  }[];
}

interface CriteriaData {
  [key: string]: {
    title: string;
    items: CriteriaItem[];
  };
}

const criteriaData: CriteriaData = {
  'criteria-1': {
    title: 'CRITERIA 1: Curricular Aspects',
    items: [
      { 
        id: '1.1.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/AdditionalInfo.pdf' }
        ]
      },
      { 
        id: '1.1.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/1_1_2_academic_calendar.pdf' }
        ]
      },
      { 
        id: '1.2.1',
        pdfFiles: [
          { name: 'Academic Council and Board of Study meeting.pdf', url: '/assets/Subsequent Academic Council meeting extracts endorsing the decision of BOS.pdf' },
          { name: 'Relevant Document.pdf', url: '/assets/SupportiveClaim.pdf' }
        ]
      },
      { 
        id: '1.3.1',
        pdfFiles: [
          { name: 'Sample Activities.pdf', url: '/assets/additional information-sample of activities.pdf' },
          { name: 'SPIT Syllabus.pdf', url: '/assets/additional information-SPIT-syllabus.pdf' },
          { name: 'Humanity and Social Science (HSS).pdf', url: '/assets/additional information HSS.pdf' },
          { name: 'Massive Open Online Course (MOOC).pdf', url: '/assets/Additional information-MOOC Courses.pdf' },
          { name: 'Seva Satva/ABL/LLC.pdf', url: '/assets/additional information-seva-sattva _ABL_LLC-courses.pdf' }
        ]
      },
      { 
        id: '1.3.2',
        pdfFiles: [
          { name: 'Value added Program Course Module and Notices.pdf', url: '/assets/program brochure_notice for Certificate_Value added programs with course modules.pdf' },
          { name: 'List of Students and Certificates.pdf', url: '/assets/List of students and Certificate.pdf' },
          { name: 'Relevant Document.pdf', url: '/assets/Link of relevant document.pdf' }
        ]
      },
      { 
        id: '1.3.3',
        pdfFiles: [
          { name: 'Field/Research Project/Internship content.pdf', url: '/assets/Program and course contents having element of field projects_ research projects _internships.pdf' },
          { name: 'Project List and Sample report.pdf', url: '/assets/Sample Evaluated project list and report_fieldwork report.pdf' },
          { name: 'Internship Completion Letters.pdf', url: '/assets/Sample Internship completion letter provided by host institutions.pdf' },
          { name: 'Relevant Document.pdf', url: '/assets/The relevant information.pdf' }
        ]
      },
      { 
        id: '1.4.1',
        pdfFiles: [
          { name: 'Plan of Action.pdf', url: '/assets/1.4.1 Action taken.pdf' }, 
          { name: 'IQAC Feedback.pdf', url: '/assets/IQAC feedback.pdf' }
        ]
      }
    ]
  },
  'criteria-2': {
    title: 'CRITERIA 2: Teaching-learning and Evaluation',
    items: [
      { 
        id: '2.1.1',
        pdfFiles: [
          { name: 'Enrollment Statistics.pdf', url: '/criteria-2/2.1.1-enrollment-stats.pdf' },
          { name: 'Admission Data.pdf', url: '/criteria-2/2.1.1-admission-data.pdf' }
        ]
      },
      { 
        id: '2.1.2',
        pdfFiles: [
          { name: 'Reservation Data.pdf', url: '/criteria-2/2.1.2-reservation-data.pdf' },
          { name: 'Seat Allocation Report.pdf', url: '/criteria-2/2.1.2-seat-allocation.pdf' }
        ]
      },
      { 
        id: '2.2.1',
        pdfFiles: [
          { name: 'STR Analysis.pdf', url: '/criteria-2/2.2.1-str-analysis.pdf' },
          { name: 'Faculty Student Data.pdf', url: '/criteria-2/2.2.1-faculty-student-data.pdf' }
        ]
      },
      { 
        id: '2.2.2',
        pdfFiles: [
          { name: 'Faculty Strength.pdf', url: '/criteria-2/2.2.2-faculty-strength.pdf' },
          { name: 'Sanctioned Posts.pdf', url: '/criteria-2/2.2.2-sanctioned-posts.pdf' }
        ]
      },
      { 
        id: '2.3.1',
        pdfFiles: [
          { name: 'Teaching Methods.pdf', url: '/criteria-2/2.3.1-teaching-methods.pdf' },
          { name: 'Student Centric Approach.pdf', url: '/criteria-2/2.3.1-student-centric.pdf' }
        ]
      },
      { 
        id: '2.3.2',
        pdfFiles: [
          { name: 'ICT Usage Reports.pdf', url: '/criteria-2/2.3.2-ict-usage.pdf' },
          { name: 'Digital Tools Implementation.pdf', url: '/criteria-2/2.3.2-digital-tools.pdf' }
        ]
      },
      { 
        id: '2.3.3',
        pdfFiles: [
          { name: 'Mentoring Data.pdf', url: '/criteria-2/2.3.3-mentoring-data.pdf' },
          { name: 'Mentor Student Ratio.pdf', url: '/criteria-2/2.3.3-mentor-ratio.pdf' }
        ]
      },
      { 
        id: '2.4.1',
        pdfFiles: [
          { name: 'Sanctioned Posts.pdf', url: '/criteria-2/2.4.1-sanctioned-posts.pdf' },
          { name: 'Faculty Appointment Data.pdf', url: '/criteria-2/2.4.1-appointment-data.pdf' }
        ]
      },
      { 
        id: '2.4.2',
        pdfFiles: [
          { name: 'Qualification Data.pdf', url: '/criteria-2/2.4.2-qualification-data.pdf' },
          { name: 'NET SET SLET Records.pdf', url: '/criteria-2/2.4.2-net-set-records.pdf' }
        ]
      },
      { 
        id: '2.5.1',
        pdfFiles: [
          { name: 'Assessment Methods.pdf', url: '/criteria-2/2.5.1-assessment-methods.pdf' },
          { name: 'Internal Assessment Framework.pdf', url: '/criteria-2/2.5.1-assessment-framework.pdf' }
        ]
      },
      { 
        id: '2.5.2',
        pdfFiles: [
          { name: 'Grievance Reports.pdf', url: '/criteria-2/2.5.2-grievance-reports.pdf' },
          { name: 'Complaint Resolution Data.pdf', url: '/criteria-2/2.5.2-complaint-resolution.pdf' }
        ]
      },
      { 
        id: '2.5.3',
        pdfFiles: [
          { name: 'IT Integration.pdf', url: '/criteria-2/2.5.3-it-integration.pdf' },
          { name: 'Examination Reforms.pdf', url: '/criteria-2/2.5.3-exam-reforms.pdf' }
        ]
      },
      { 
        id: '2.6.1',
        pdfFiles: [
          { name: 'Outcome Reports.pdf', url: '/criteria-2/2.6.1-outcome-reports.pdf' },
          { name: 'Programme Outcomes.pdf', url: '/criteria-2/2.6.1-programme-outcomes.pdf' }
        ]
      },
      { 
        id: '2.6.2',
        pdfFiles: [
          { name: 'Pass Percentage Data.pdf', url: '/criteria-2/2.6.2-pass-percentage.pdf' },
          { name: 'Academic Performance Analysis.pdf', url: '/criteria-2/2.6.2-performance-analysis.pdf' }
        ]
      }
    ]
  },
  'criteria-3': {
    title: 'CRITERIA 3: Research, Innovations and Extension',
    items: [
      { 
        id: '3.1.1',
        pdfFiles: [
          { name: 'Grant Details.pdf', url: '/criteria-3/3.1.1-grant-details.pdf' },
          { name: 'Funding Reports.pdf', url: '/criteria-3/3.1.1-funding-reports.pdf' }
        ]
      },
      { 
        id: '3.1.2',
        pdfFiles: [
          { name: 'Research Guide List.pdf', url: '/criteria-3/3.1.2-research-guides.pdf' },
          { name: 'Recognition Certificates.pdf', url: '/criteria-3/3.1.2-recognition-certificates.pdf' }
        ]
      },
      { 
        id: '3.1.3',
        pdfFiles: [
          { name: 'Department Research.pdf', url: '/criteria-3/3.1.3-department-research.pdf' },
          { name: 'Research Project List.pdf', url: '/criteria-3/3.1.3-project-list.pdf' }
        ]
      },
      { 
        id: '3.2.1',
        pdfFiles: [
          { name: 'Publication List.pdf', url: '/criteria-3/3.2.1-publication-list.pdf' },
          { name: 'Research Papers Database.pdf', url: '/criteria-3/3.2.1-papers-database.pdf' }
        ]
      },
      { 
        id: '3.2.2',
        pdfFiles: [
          { name: 'Book Publications.pdf', url: '/criteria-3/3.2.2-book-publications.pdf' },
          { name: 'Author Contributions.pdf', url: '/criteria-3/3.2.2-author-contributions.pdf' }
        ]
      },
      { 
        id: '3.2.3',
        pdfFiles: [
          { name: 'Chapter Publications.pdf', url: '/criteria-3/3.2.3-chapter-publications.pdf' },
          { name: 'Editorial Contributions.pdf', url: '/criteria-3/3.2.3-editorial-contributions.pdf' }
        ]
      },
      { 
        id: '3.4.1',
        pdfFiles: [
          { name: 'Extension Reports.pdf', url: '/criteria-3/3.4.1-extension-reports.pdf' },
          { name: 'Community Outreach.pdf', url: '/criteria-3/3.4.1-community-outreach.pdf' }
        ]
      },
      { 
        id: '3.4.2',
        pdfFiles: [
          { name: 'Awards List.pdf', url: '/criteria-3/3.4.2-awards-list.pdf' },
          { name: 'Recognition Documents.pdf', url: '/criteria-3/3.4.2-recognition-docs.pdf' }
        ]
      },
      { 
        id: '3.4.4',
        pdfFiles: [
          { name: 'Infrastructure Expenditure.pdf', url: '/criteria-3/3.4.4-infrastructure-expenditure.pdf' },
          { name: 'Budget Allocation.pdf', url: '/criteria-3/3.4.4-budget-allocation.pdf' }
        ]
      },
      { 
        id: '3.5.1',
        pdfFiles: [
          { name: 'MoU Documents.pdf', url: '/criteria-3/3.5.1-mou-documents.pdf' },
          { name: 'Collaboration Agreements.pdf', url: '/criteria-3/3.5.1-collaboration-agreements.pdf' }
        ]
      },
      { 
        id: '3.6.1',
        pdfFiles: [
          { name: 'Community Programs.pdf', url: '/criteria-3/3.6.1-community-programs.pdf' },
          { name: 'Social Impact Reports.pdf', url: '/criteria-3/3.6.1-social-impact.pdf' }
        ]
      },
      { 
        id: '3.6.2',
        pdfFiles: [
          { name: 'Recognition Certificates.pdf', url: '/criteria-3/3.6.2-recognition-certificates.pdf' },
          { name: 'Achievement Records.pdf', url: '/criteria-3/3.6.2-achievement-records.pdf' }
        ]
      },
      { 
        id: '3.7.1',
        pdfFiles: [
          { name: 'Collaboration Reports.pdf', url: '/criteria-3/3.7.1-collaboration-reports.pdf' },
          { name: 'Partnership Activities.pdf', url: '/criteria-3/3.7.1-partnership-activities.pdf' }
        ]
      }
    ]
  },
  'criteria-4': {
    title: 'CRITERIA 4: Infrastructure and Learning Resources',
    items: [
      { 
        id: '4.1.1',
        pdfFiles: [
          { name: 'Infrastructure Report.pdf', url: '/criteria-4/4.1.1-infrastructure-report.pdf' },
          { name: 'Facility Details.pdf', url: '/criteria-4/4.1.1-facility-details.pdf' }
        ]
      },
      { 
        id: '4.1.2',
        pdfFiles: [
          { name: 'Expenditure Analysis.pdf', url: '/criteria-4/4.1.2-expenditure-analysis.pdf' },
          { name: 'Infrastructure Investment.pdf', url: '/criteria-4/4.1.2-infrastructure-investment.pdf' }
        ]
      },
      { 
        id: '4.2.1',
        pdfFiles: [
          { name: 'Library Automation.pdf', url: '/criteria-4/4.2.1-library-automation.pdf' },
          { name: 'ILMS Implementation.pdf', url: '/criteria-4/4.2.1-ilms-implementation.pdf' }
        ]
      },
      { 
        id: '4.2.2',
        pdfFiles: [
          { name: 'E-Resource List.pdf', url: '/criteria-4/4.2.2-e-resource-list.pdf' },
          { name: 'Digital Subscriptions.pdf', url: '/criteria-4/4.2.2-digital-subscriptions.pdf' }
        ]
      },
      { 
        id: '4.3.1',
        pdfFiles: [
          { name: 'IT Updates.pdf', url: '/criteria-4/4.3.1-it-updates.pdf' },
          { name: 'Technology Upgrades.pdf', url: '/criteria-4/4.3.1-technology-upgrades.pdf' }
        ]
      },
      { 
        id: '4.3.2',
        pdfFiles: [
          { name: 'Computer Ratio.pdf', url: '/criteria-4/4.3.2-computer-ratio.pdf' },
          { name: 'IT Infrastructure Data.pdf', url: '/criteria-4/4.3.2-it-infrastructure.pdf' }
        ]
      },
      { 
        id: '4.3.3',
        pdfFiles: [
          { name: 'Internet Bandwidth.pdf', url: '/criteria-4/4.3.3-internet-bandwidth.pdf' },
          { name: 'Network Infrastructure.pdf', url: '/criteria-4/4.3.3-network-infrastructure.pdf' }
        ]
      },
      { 
        id: '4.4.1',
        pdfFiles: [
          { name: 'Maintenance Expenditure.pdf', url: '/criteria-4/4.4.1-maintenance-expenditure.pdf' },
          { name: 'Facility Maintenance Records.pdf', url: '/criteria-4/4.4.1-maintenance-records.pdf' }
        ]
      },
      { 
        id: '4.4.2',
        pdfFiles: [
          { name: 'Maintenance Policies.pdf', url: '/criteria-4/4.4.2-maintenance-policies.pdf' },
          { name: 'Utilization Procedures.pdf', url: '/criteria-4/4.4.2-utilization-procedures.pdf' }
        ]
      }
    ]
  },
  'criteria-5': {
    title: 'CRITERIA 5: Student Support and Progression',
    items: [
      { 
        id: '5.1.1',
        pdfFiles: [
          { name: 'Scholarship Data.pdf', url: '/criteria-5/5.1.1-scholarship-data.pdf' },
          { name: 'Financial Aid Records.pdf', url: '/criteria-5/5.1.1-financial-aid.pdf' }
        ]
      },
      { 
        id: '5.1.2',
        pdfFiles: [
          { name: 'Skill Development.pdf', url: '/criteria-5/5.1.2-skill-development.pdf' },
          { name: 'Capacity Building Programs.pdf', url: '/criteria-5/5.1.2-capacity-building.pdf' }
        ]
      },
      { 
        id: '5.1.3',
        pdfFiles: [
          { name: 'Guidance Programs.pdf', url: '/criteria-5/5.1.3-guidance-programs.pdf' },
          { name: 'Student Counseling Data.pdf', url: '/criteria-5/5.1.3-counseling-data.pdf' }
        ]
      },
      { 
        id: '5.1.4',
        pdfFiles: [
          { name: 'Transparency Reports.pdf', url: '/criteria-5/5.1.4-transparency-reports.pdf' },
          { name: 'Grievance Mechanism.pdf', url: '/criteria-5/5.1.4-grievance-mechanism.pdf' }
        ]
      },
      { 
        id: '5.2.1',
        pdfFiles: [
          { name: 'Placement Data.pdf', url: '/criteria-5/5.2.1-placement-data.pdf' },
          { name: 'Employment Statistics.pdf', url: '/criteria-5/5.2.1-employment-stats.pdf' }
        ]
      },
      { 
        id: '5.2.2',
        pdfFiles: [
          { name: 'Qualification Data.pdf', url: '/criteria-5/5.2.2-qualification-data.pdf' },
          { name: 'Competitive Exam Results.pdf', url: '/criteria-5/5.2.2-exam-results.pdf' }
        ]
      },
      { 
        id: '5.3.1',
        pdfFiles: [
          { name: 'Student Awards.pdf', url: '/criteria-5/5.3.1-student-awards.pdf' },
          { name: 'Achievement Records.pdf', url: '/criteria-5/5.3.1-achievement-records.pdf' }
        ]
      },
      { 
        id: '5.3.2',
        pdfFiles: [
          { name: 'Student Council.pdf', url: '/criteria-5/5.3.2-student-council.pdf' },
          { name: 'Student Representation Data.pdf', url: '/criteria-5/5.3.2-representation-data.pdf' }
        ]
      },
      { 
        id: '5.3.3',
        pdfFiles: [
          { name: 'Events List.pdf', url: '/criteria-5/5.3.3-events-list.pdf' },
          { name: 'Cultural Activities Report.pdf', url: '/criteria-5/5.3.3-cultural-activities.pdf' }
        ]
      },
      { 
        id: '5.4.1',
        pdfFiles: [
          { name: 'Alumni Association.pdf', url: '/criteria-5/5.4.1-alumni-association.pdf' },
          { name: 'Registration Documents.pdf', url: '/criteria-5/5.4.1-registration-docs.pdf' }
        ]
      },
      { 
        id: '5.4.2',
        pdfFiles: [
          { name: 'Alumni Contributions.pdf', url: '/criteria-5/5.4.2-alumni-contributions.pdf' },
          { name: 'Donation Records.pdf', url: '/criteria-5/5.4.2-donation-records.pdf' }
        ]
      }
    ]
  },
  'criteria-6': {
    title: 'CRITERIA 6: Governance, Leadership and Management',
    items: [
      { 
        id: '6.1.1',
        pdfFiles: [
          { name: 'Governance Structure.pdf', url: '/criteria-6/6.1.1-governance-structure.pdf' },
          { name: 'Leadership Framework.pdf', url: '/criteria-6/6.1.1-leadership-framework.pdf' }
        ]
      },
      { 
        id: '6.2.1',
        pdfFiles: [
          { name: 'Strategic Plan.pdf', url: '/criteria-6/6.2.1-strategic-plan.pdf' },
          { name: 'Implementation Report.pdf', url: '/criteria-6/6.2.1-implementation-report.pdf' }
        ]
      },
      { 
        id: '6.2.2',
        pdfFiles: [
          { name: 'E-Governance Systems.pdf', url: '/criteria-6/6.2.2-e-governance-systems.pdf' },
          { name: 'Digital Infrastructure.pdf', url: '/criteria-6/6.2.2-digital-infrastructure.pdf' }
        ]
      },
      { 
        id: '6.3.1',
        pdfFiles: [
          { name: 'Welfare Policies.pdf', url: '/criteria-6/6.3.1-welfare-policies.pdf' },
          { name: 'Staff Benefits.pdf', url: '/criteria-6/6.3.1-staff-benefits.pdf' }
        ]
      },
      { 
        id: '6.3.2',
        pdfFiles: [
          { name: 'Financial Support Records.pdf', url: '/criteria-6/6.3.2-financial-support.pdf' },
          { name: 'Conference Attendance.pdf', url: '/criteria-6/6.3.2-conference-attendance.pdf' }
        ]
      },
      { 
        id: '6.3.3',
        pdfFiles: [
          { name: 'Training Programs.pdf', url: '/criteria-6/6.3.3-training-programs.pdf' },
          { name: 'Professional Development.pdf', url: '/criteria-6/6.3.3-professional-development.pdf' }
        ]
      },
      { 
        id: '6.4.1',
        pdfFiles: [
          { name: 'Audit Reports.pdf', url: '/criteria-6/6.4.1-audit-reports.pdf' },
          { name: 'Financial Statements.pdf', url: '/criteria-6/6.4.1-financial-statements.pdf' }
        ]
      },
      { 
        id: '6.4.2',
        pdfFiles: [
          { name: 'Grant Records.pdf', url: '/criteria-6/6.4.2-grant-records.pdf' },
          { name: 'Funding Sources.pdf', url: '/criteria-6/6.4.2-funding-sources.pdf' }
        ]
      },
      { 
        id: '6.4.3',
        pdfFiles: [
          { name: 'Resource Mobilization.pdf', url: '/criteria-6/6.4.3-resource-mobilization.pdf' },
          { name: 'Fund Utilization.pdf', url: '/criteria-6/6.4.3-fund-utilization.pdf' }
        ]
      },
      { 
        id: '6.5.1',
        pdfFiles: [
          { name: 'IQAC Reports.pdf', url: '/criteria-6/6.5.1-iqac-reports.pdf' },
          { name: 'Quality Initiatives.pdf', url: '/criteria-6/6.5.1-quality-initiatives.pdf' }
        ]
      },
      { 
        id: '6.5.2',
        pdfFiles: [
          { name: 'Review Reports.pdf', url: '/criteria-6/6.5.2-review-reports.pdf' },
          { name: 'Process Evaluation.pdf', url: '/criteria-6/6.5.2-process-evaluation.pdf' }
        ]
      },
      { 
        id: '6.5.3',
        pdfFiles: [
          { name: 'Quality Audits.pdf', url: '/criteria-6/6.5.3-quality-audits.pdf' },
          { name: 'Assessment Reports.pdf', url: '/criteria-6/6.5.3-assessment-reports.pdf' }
        ]
      }
    ]
  },
  'criteria-7': {
    title: 'CRITERIA 7: Institutional Values and Best Practices',
    items: [
      { 
        id: '7.1.1',
        pdfFiles: [
          { name: 'Gender Equity Policies.pdf', url: '/criteria-7/7.1.1-gender-equity.pdf' },
          { name: 'Women Empowerment Programs.pdf', url: '/criteria-7/7.1.1-women-empowerment.pdf' }
        ]
      },
      { 
        id: '7.1.2',
        pdfFiles: [
          { name: 'Energy Conservation.pdf', url: '/criteria-7/7.1.2-energy-conservation.pdf' },
          { name: 'Renewable Energy Systems.pdf', url: '/criteria-7/7.1.2-renewable-energy.pdf' }
        ]
      },
      { 
        id: '7.1.3',
        pdfFiles: [
          { name: 'Waste Management System.pdf', url: '/criteria-7/7.1.3-waste-management.pdf' },
          { name: 'Environmental Policies.pdf', url: '/criteria-7/7.1.3-environmental-policies.pdf' }
        ]
      },
      { 
        id: '7.1.4',
        pdfFiles: [
          { name: 'Water Conservation.pdf', url: '/criteria-7/7.1.4-water-conservation.pdf' },
          { name: 'Rainwater Harvesting.pdf', url: '/criteria-7/7.1.4-rainwater-harvesting.pdf' }
        ]
      },
      { 
        id: '7.1.5',
        pdfFiles: [
          { name: 'Green Campus Report.pdf', url: '/criteria-7/7.1.5-green-campus.pdf' },
          { name: 'Environmental Initiatives.pdf', url: '/criteria-7/7.1.5-environmental-initiatives.pdf' }
        ]
      },
      { 
        id: '7.1.6',
        pdfFiles: [
          { name: 'Environmental Audits.pdf', url: '/criteria-7/7.1.6-environmental-audits.pdf' },
          { name: 'Energy Audits.pdf', url: '/criteria-7/7.1.6-energy-audits.pdf' }
        ]
      },
      { 
        id: '7.1.7',
        pdfFiles: [
          { name: 'Accessibility Features.pdf', url: '/criteria-7/7.1.7-accessibility-features.pdf' },
          { name: 'Barrier-Free Infrastructure.pdf', url: '/criteria-7/7.1.7-barrier-free.pdf' }
        ]
      },
      { 
        id: '7.1.8',
        pdfFiles: [
          { name: 'Inclusion Policies.pdf', url: '/criteria-7/7.1.8-inclusion-policies.pdf' },
          { name: 'Diversity Programs.pdf', url: '/criteria-7/7.1.8-diversity-programs.pdf' }
        ]
      },
      { 
        id: '7.1.9',
        pdfFiles: [
          { name: 'Constitutional Awareness.pdf', url: '/criteria-7/7.1.9-constitutional-awareness.pdf' },
          { name: 'Civic Education.pdf', url: '/criteria-7/7.1.9-civic-education.pdf' }
        ]
      },
      { 
        id: '7.1.10',
        pdfFiles: [
          { name: 'Code of Conduct.pdf', url: '/criteria-7/7.1.10-code-of-conduct.pdf' },
          { name: 'Ethics Guidelines.pdf', url: '/criteria-7/7.1.10-ethics-guidelines.pdf' }
        ]
      },
      { 
        id: '7.2.1',
        pdfFiles: [
          { name: 'Best Practice 1.pdf', url: '/criteria-7/7.2.1-best-practice-1.pdf' },
          { name: 'Best Practice 2.pdf', url: '/criteria-7/7.2.1-best-practice-2.pdf' }
        ]
      },
      { 
        id: '7.3.1',
        pdfFiles: [
          { name: 'Distinctive Performance.pdf', url: '/criteria-7/7.3.1-distinctive-performance.pdf' },
          { name: 'Institutional Excellence.pdf', url: '/criteria-7/7.3.1-institutional-excellence.pdf' }
        ]
      }
    ]
  },
  'ssr': {
    title: 'Self Study Report (SSR)',
    items: [
      { 
        id: 'ssr-complete',
        pdfFiles: [
          { name: 'Complete SSR Document.pdf', url: '/ssr/complete-ssr-document.pdf' },
          { name: 'Executive Summary.pdf', url: '/ssr/executive-summary.pdf' }
        ]
      },
      { 
        id: 'ssr-profile',
        pdfFiles: [
          { name: 'Extended Profile.pdf', url: '/ssr/extended-profile.pdf' },
          { name: 'Quality Indicator Framework.pdf', url: '/ssr/quality-indicators.pdf' }
        ]
      },
      { 
        id: 'ssr-analysis',
        pdfFiles: [
          { name: 'SWOC Analysis.pdf', url: '/ssr/swoc-analysis.pdf' },
          { name: 'Institutional Analysis.pdf', url: '/ssr/institutional-analysis.pdf' }
        ]
      }
    ]
  },
  'dvv-clarifications': {
    title: 'DVV Clarifications',
    items: [
      { 
        id: 'dvv-criteria-1',
        pdfFiles: [
          { name: 'DVV Response C1.pdf', url: '/dvv/dvv-response-c1.pdf' },
          { name: 'Supporting Evidence C1.pdf', url: '/dvv/supporting-evidence-c1.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-2',
        pdfFiles: [
          { name: 'DVV Response C2.pdf', url: '/dvv/dvv-response-c2.pdf' },
          { name: 'Faculty Data Verification.pdf', url: '/dvv/faculty-data-verification.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-3',
        pdfFiles: [
          { name: 'DVV Response C3.pdf', url: '/dvv/dvv-response-c3.pdf' },
          { name: 'Publication Evidence.pdf', url: '/dvv/publication-evidence.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-4',
        pdfFiles: [
          { name: 'DVV Response C4.pdf', url: '/dvv/dvv-response-c4.pdf' },
          { name: 'Infrastructure Photos.pdf', url: '/dvv/infrastructure-photos.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-5',
        pdfFiles: [
          { name: 'DVV Response C5.pdf', url: '/dvv/dvv-response-c5.pdf' },
          { name: 'Placement Records.pdf', url: '/dvv/placement-records.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-6',
        pdfFiles: [
          { name: 'DVV Response C6.pdf', url: '/dvv/dvv-response-c6.pdf' },
          { name: 'Governance Documents.pdf', url: '/dvv/governance-documents.pdf' }
        ]
      },
      { 
        id: 'dvv-criteria-7',
        pdfFiles: [
          { name: 'DVV Response C7.pdf', url: '/dvv/dvv-response-c7.pdf' },
          { name: 'Best Practice Evidence.pdf', url: '/dvv/best-practice-evidence.pdf' }
        ]
      }
    ]
  }
};

export const CriteriaPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('criteria-1');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [ref, isVisible] = useIntersectionObserver();

  const tabs = [
    { id: 'criteria-1', label: 'CRITERIA 1' },
    { id: 'criteria-2', label: 'CRITERIA 2' },
    { id: 'criteria-3', label: 'CRITERIA 3' },
    { id: 'criteria-4', label: 'CRITERIA 4' },
    { id: 'criteria-5', label: 'CRITERIA 5' },
    { id: 'criteria-6', label: 'CRITERIA 6' },
    { id: 'criteria-7', label: 'CRITERIA 7' },
    { id: 'ssr', label: 'SSR' },
    { id: 'dvv-clarifications', label: 'DVV Clarifications' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setExpandedItems(new Set());
  };

  const toggleItemExpansion = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 bg-white dark:bg-dark-900 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NAAC Criteria Portal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive documentation and evidence for NAAC accreditation across all criteria
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-8 transition-all duration-700 delay-400 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <div 
            className="flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-dark-800 p-2 rounded-xl"
            role="tablist"
            aria-label="NAAC Criteria Navigation"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, () => handleTabClick(tab.id))}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-700 hover:shadow-md'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Panels */}
        <div className={`transition-all duration-700 delay-600 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          {Object.entries(criteriaData).map(([criteriaId, criteria]) => (
            <div
              key={criteriaId}
              id={`panel-${criteriaId}`}
              className={`${activeTab === criteriaId ? 'block' : 'hidden'}`}
              role="tabpanel"
              aria-labelledby={`tab-${criteriaId}`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
                {/* Panel Header */}
                <div className="bg-gradient-to-r from-primary-600 to-accent-teal p-6">
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white">
                    {criteria.title}
                  </h3>
                </div>

                {/* Panel Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {criteria.items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`group border border-gray-200 dark:border-dark-600 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Item Header */}
                        <button
                          onClick={() => toggleItemExpansion(item.id)}
                          onKeyDown={(e) => handleKeyDown(e, () => toggleItemExpansion(item.id))}
                          className="w-full bg-primary-600 hover:bg-primary-700 text-white p-4 flex items-center justify-between transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                          aria-expanded={expandedItems.has(item.id)}
                          aria-controls={`content-${item.id}`}
                        >
                          <span className="font-semibold text-left">{item.id}</span>
                          <div className={`w-5 h-5 transition-transform duration-300 ${
                            expandedItems.has(item.id) ? 'rotate-45' : ''
                          }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </button>

                        {/* Item Content */}
                        <div
                          id={`content-${item.id}`}
                          className={`bg-white dark:bg-dark-700 transition-all duration-300 overflow-hidden ${
                            expandedItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6">
                            {/* PDF Downloads */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {item.pdfFiles.map((pdf, pdfIndex) => (
                                <a
                                  key={pdfIndex}
                                  href={pdf.url}
                                  download
                                  className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-accent-teal/10 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-primary-100 hover:to-accent-teal/20 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-primary-200 dark:border-dark-500 hover:border-primary-300 dark:hover:border-dark-400 hover:shadow-md"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-300">
                                      <Download className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-accent-teal transition-colors duration-300">
                                      {pdf.name}
                                    </span>
                                  </div>
                                  <div className="text-primary-600 dark:text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Download className="w-4 h-4" />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`mt-12 text-center transition-all duration-700 delay-800 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/naac-ssr-complete.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete SSR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};