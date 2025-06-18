import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Plus } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CriteriaItem {
  id: string;
  title: string;
  description?: string;
  documents?: string[];
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
      { id: '1.1.1', title: 'The Institution ensures effective curriculum delivery through a well-planned and documented process', documents: ['Curriculum Document', 'Academic Calendar'] },
      { id: '1.1.2', title: 'The institution adheres to the academic calendar including for the conduct of CIE', documents: ['Academic Calendar', 'CIE Schedule'] },
      { id: '1.2.1', title: 'Number of Certificate/Value added courses offered and online courses of MOOCs', documents: ['Course List', 'Certificates'] },
      { id: '1.3.1', title: 'Institution integrates crosscutting issues relevant to Professional Ethics', documents: ['Ethics Integration Report'] },
      { id: '1.3.2', title: 'Percentage of students undertaking project work/field work/ internships', documents: ['Project Reports', 'Internship Records'] },
      { id: '1.3.3', title: 'Percentage of students undertaking project work/field work/ internships', documents: ['Field Work Reports'] },
      { id: '1.4.1', title: 'Institution obtains feedback on the syllabus and its transaction at the institution', documents: ['Feedback Reports', 'Analysis Documents'] }
    ]
  },
  'criteria-2': {
    title: 'CRITERIA 2: Teaching-learning and Evaluation',
    items: [
      { id: '2.1', title: 'Student Enrollment and Profile', documents: ['Enrollment Data', 'Student Profiles'] },
      { id: '2.2', title: 'Student Teacher Ratio', documents: ['Ratio Analysis', 'Faculty Data'] },
      { id: '2.1.1', title: 'Enrolment percentage', documents: ['Enrollment Statistics'] },
      { id: '2.1.2', title: 'Percentage of seats filled against seats reserved', documents: ['Reservation Data'] },
      { id: '2.2.1', title: 'Student – Full time Teacher Ratio', documents: ['STR Analysis'] },
      { id: '2.2.2', title: 'Percentage of full time teachers against sanctioned posts', documents: ['Faculty Strength'] },
      { id: '2.3.1', title: 'Student centric methods', documents: ['Teaching Methods'] },
      { id: '2.3.2', title: 'Teachers use ICT enabled tools', documents: ['ICT Usage Reports'] },
      { id: '2.3.3', title: 'Ratio of mentor to students', documents: ['Mentoring Data'] },
      { id: '2.4.1', title: 'Percentage of full-time teachers against sanctioned posts', documents: ['Sanctioned Posts'] },
      { id: '2.4.2', title: 'Percentage of full time teachers with NET/SET/SLET', documents: ['Qualification Data'] },
      { id: '2.5.1', title: 'Mechanism of internal assessment', documents: ['Assessment Methods'] },
      { id: '2.5.2', title: 'Percentage of student complaints/grievances', documents: ['Grievance Reports'] },
      { id: '2.5.3', title: 'IT integration and reforms in examination', documents: ['IT Integration'] },
      { id: '2.6.1', title: 'Programme and course outcomes', documents: ['Outcome Reports'] },
      { id: '2.6.2', title: 'Pass percentage of Students during last five years', documents: ['Pass Percentage Data'] }
    ]
  },
  'criteria-3': {
    title: 'CRITERIA 3: Research, Innovations and Extension',
    items: [
      { id: '3.1.1', title: 'Grants received from Government and non-governmental agencies', documents: ['Grant Details', 'Funding Reports'] },
      { id: '3.1.2', title: 'Percentage of teachers recognized as research guides', documents: ['Research Guide List'] },
      { id: '3.1.3', title: 'Percentage of departments having Research projects', documents: ['Department Research'] },
      { id: '3.2.1', title: 'Number of papers published per teacher', documents: ['Publication List'] },
      { id: '3.2.2', title: 'Number of books and chapters in edited volumes', documents: ['Book Publications'] },
      { id: '3.2.3', title: 'Number of books and chapters in edited volumes/books published', documents: ['Chapter Publications'] },
      { id: '3.4.1', title: 'Extension activities are carried out in the neighborhood', documents: ['Extension Reports'] },
      { id: '3.4.2', title: 'Number of awards and recognitions received', documents: ['Awards List'] },
      { id: '3.4.4', title: 'Percentage of expenditure for infrastructure augmentation', documents: ['Infrastructure Expenditure'] },
      { id: '3.5.1', title: 'Number of functional MoUs with institutions', documents: ['MoU Documents'] },
      { id: '3.6.1', title: 'Extension activities in the neighborhood', documents: ['Community Programs'] },
      { id: '3.6.2', title: 'Number of awards and recognitions received', documents: ['Recognition Certificates'] },
      { id: '3.7.1', title: 'Number of collaborative activities', documents: ['Collaboration Reports'] }
    ]
  },
  'criteria-4': {
    title: 'CRITERIA 4: Infrastructure and Learning Resources',
    items: [
      { id: '4.1.1', title: 'The Institution has adequate infrastructure and physical facilities', documents: ['Infrastructure Report', 'Facility Details'] },
      { id: '4.1.2', title: 'Percentage of expenditure for infrastructure augmentation', documents: ['Expenditure Analysis'] },
      { id: '4.2.1', title: 'Library is automated using Integrated Library Management System', documents: ['Library Automation'] },
      { id: '4.2.2', title: 'The institution has subscription for the following e-resources', documents: ['E-Resource List'] },
      { id: '4.3.1', title: 'Institution frequently updates its IT facilities', documents: ['IT Updates'] },
      { id: '4.3.2', title: 'Student – Computer ratio', documents: ['Computer Ratio'] },
      { id: '4.3.3', title: 'Bandwidth of internet connection in the Institution', documents: ['Internet Bandwidth'] },
      { id: '4.4.1', title: 'Percentage of expenditure incurred on maintenance', documents: ['Maintenance Expenditure'] },
      { id: '4.4.2', title: 'Procedures and policies for maintaining and utilizing physical', documents: ['Maintenance Policies'] }
    ]
  },
  'criteria-5': {
    title: 'CRITERIA 5: Student Support and Progression',
    items: [
      { id: '5.1.1', title: 'Percentage of students benefited by scholarships', documents: ['Scholarship Data'] },
      { id: '5.1.2', title: 'Capacity building and skills enhancement initiatives', documents: ['Skill Development'] },
      { id: '5.1.3', title: 'Percentage of students benefitted by guidance', documents: ['Guidance Programs'] },
      { id: '5.1.4', title: 'The Institution has a transparent mechanism', documents: ['Transparency Reports'] },
      { id: '5.2.1', title: 'Percentage of placement of outgoing students', documents: ['Placement Data'] },
      { id: '5.2.2', title: 'Percentage of students qualifying in state/national', documents: ['Qualification Data'] },
      { id: '5.3.1', title: 'Number of awards/medals won by students', documents: ['Student Awards'] },
      { id: '5.3.2', title: 'Activity of Student Council & representation', documents: ['Student Council'] },
      { id: '5.3.3', title: 'Number of sports and cultural events/competitions', documents: ['Events List'] },
      { id: '5.4.1', title: 'There is a registered Alumni Association', documents: ['Alumni Association'] },
      { id: '5.4.2', title: 'Alumni contribution during the last five years', documents: ['Alumni Contributions'] }
    ]
  },
  'criteria-6': {
    title: 'CRITERIA 6: Governance, Leadership and Management',
    items: [
      { id: '6.1.1', title: 'The governance of the institution is reflective', documents: ['Governance Structure'] },
      { id: '6.1.2', title: 'The effective leadership is visible', documents: ['Leadership Reports'] },
      { id: '6.2.1', title: 'The institutional Strategic/ perspective plan', documents: ['Strategic Plan'] },
      { id: '6.2.2', title: 'Implementation of e-governance', documents: ['E-Governance'] },
      { id: '6.3.1', title: 'The institution has effective welfare measures', documents: ['Welfare Measures'] },
      { id: '6.3.2', title: 'Percentage of teachers provided with financial support', documents: ['Financial Support'] },
      { id: '6.4.1', title: 'Institution conducts internal and external financial audits', documents: ['Audit Reports'] },
      { id: '6.5.1', title: 'Internal Quality Assurance Cell (IQAC)', documents: ['IQAC Reports'] }
    ]
  },
  'criteria-7': {
    title: 'CRITERIA 7: Institutional Values and Best Practices',
    items: [
      { id: '7.1.1', title: 'Measures initiated by the Institution for the promotion of gender equity', documents: ['Gender Equity'] },
      { id: '7.1.2', title: 'The Institution has facilities for alternate sources of energy', documents: ['Energy Sources'] },
      { id: '7.1.3', title: 'Describe the facilities in the Institution for the management of waste', documents: ['Waste Management'] },
      { id: '7.2.1', title: 'Describe two best practices successfully implemented', documents: ['Best Practices'] },
      { id: '7.3.1', title: 'Portray the performance of the Institution', documents: ['Performance Report'] }
    ]
  },
  'ssr': {
    title: 'Self Study Report (SSR)',
    items: [
      { id: 'ssr-1', title: 'Executive Summary', documents: ['Executive Summary PDF'] },
      { id: 'ssr-2', title: 'Profile of the Institution', documents: ['Institution Profile'] },
      { id: 'ssr-3', title: 'Extended Profile', documents: ['Extended Profile'] },
      { id: 'ssr-4', title: 'Quality Indicator Framework', documents: ['QIF Document'] },
      { id: 'ssr-5', title: 'Institutional Preparedness for NEP', documents: ['NEP Preparedness'] },
      { id: 'ssr-6', title: 'SWOC Analysis', documents: ['SWOC Analysis'] },
      { id: 'ssr-7', title: 'Annexure', documents: ['Annexure Documents'] }
    ]
  },
  'dvv-clarifications': {
    title: 'DVV Clarifications',
    items: [
      { id: 'dvv-1', title: 'DVV Clarification Response - Criteria 1', description: 'Detailed response to Data Verification and Validation queries for Criteria 1 covering curricular aspects and related documentation.', documents: ['DVV Response C1', 'Supporting Evidence C1', 'Revised Data C1'] },
      { id: 'dvv-2', title: 'DVV Clarification Response - Criteria 2', description: 'Comprehensive clarification for Criteria 2 addressing teaching-learning processes, evaluation methods, and student-teacher ratios.', documents: ['DVV Response C2', 'Faculty Data Verification', 'Student Enrollment Proof'] },
      { id: 'dvv-3', title: 'DVV Clarification Response - Criteria 3', description: 'Research and innovation related clarifications including publication details, research grants, and extension activities.', documents: ['DVV Response C3', 'Publication Evidence', 'Research Grant Documents'] },
      { id: 'dvv-4', title: 'DVV Clarification Response - Criteria 4', description: 'Infrastructure and learning resources verification including IT facilities, library resources, and physical infrastructure.', documents: ['DVV Response C4', 'Infrastructure Photos', 'Equipment Lists'] },
      { id: 'dvv-5', title: 'DVV Clarification Response - Criteria 5', description: 'Student support services clarification covering scholarships, placement data, and student progression details.', documents: ['DVV Response C5', 'Placement Records', 'Scholarship Evidence'] },
      { id: 'dvv-6', title: 'DVV Clarification Response - Criteria 6', description: 'Governance and management clarifications including leadership structure, financial management, and quality assurance.', documents: ['DVV Response C6', 'Governance Documents', 'Audit Reports'] },
      { id: 'dvv-7', title: 'DVV Clarification Response - Criteria 7', description: 'Institutional values and best practices clarification covering environmental initiatives, gender equity, and institutional distinctiveness.', documents: ['DVV Response C7', 'Best Practice Evidence', 'Environmental Reports'] },
      { id: 'dvv-8', title: 'Additional Clarifications and Supporting Documents', description: 'Supplementary clarifications and additional evidence provided to address specific DVV queries across all criteria.', documents: ['Additional Clarifications', 'Supplementary Evidence', 'Final Response Summary'] }
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
    // Reset expanded items when switching tabs to ensure clean state
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

                {/* Panel Content - SINGLE COLUMN LAYOUT TO PREVENT INTERFERENCE */}
                <div className="p-6">
                  <div className="space-y-4">
                    {criteria.items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`group border border-gray-200 dark:border-dark-600 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Item Header - Each item has unique expansion state */}
                        <button
                          onClick={() => toggleItemExpansion(item.id)}
                          onKeyDown={(e) => handleKeyDown(e, () => toggleItemExpansion(item.id))}
                          className="w-full bg-primary-600 hover:bg-primary-700 text-white p-4 flex items-center justify-between transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                          aria-expanded={expandedItems.has(item.id)}
                          aria-controls={`content-${item.id}`}
                        >
                          <span className="font-semibold text-left">{item.id}</span>
                          <Plus 
                            className={`w-5 h-5 transition-transform duration-300 ${
                              expandedItems.has(item.id) ? 'rotate-45' : ''
                            }`}
                          />
                        </button>

                        {/* Item Content - Only expands if this specific item is in expandedItems */}
                        <div
                          id={`content-${item.id}`}
                          className={`bg-white dark:bg-dark-700 transition-all duration-300 overflow-hidden ${
                            expandedItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                              {item.title}
                            </h4>
                            
                            {item.description && (
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                {item.description}
                              </p>
                            )}

                            {/* Documents */}
                            {item.documents && item.documents.length > 0 && (
                              <div className="space-y-2">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                  Related Documents:
                                </h5>
                                {item.documents.map((doc, docIndex) => (
                                  <div
                                    key={docIndex}
                                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-500 transition-colors duration-200"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <FileText className="w-4 h-4 text-primary-600 dark:text-accent-teal" />
                                      <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {doc}
                                      </span>
                                    </div>
                                    <div className="flex space-x-1">
                                      <button
                                        className="p-1 text-gray-500 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200"
                                        title="Download"
                                      >
                                        <Download className="w-4 h-4" />
                                      </button>
                                      <button
                                        className="p-1 text-gray-500 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200"
                                        title="View"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete SSR
            </a>
            <a
              href="/naac-presentation.pdf"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-accent-teal dark:border-accent-teal font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-accent-teal dark:hover:text-dark-900 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Presentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};