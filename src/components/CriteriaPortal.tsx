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
          { name: 'List of the Faculty Year-wise.pdf', url: '/assets/2.1 Percentage of full time teachers working in the institution throughout during the last five years.pdf' }
        ]
      },
      { 
        id: '2.2',
        pdfFiles: [
          { name: 'List of the Faculty Year-wise.pdf', url: '/assets/2.2.pdf' }
        ]
      },
      { 
        id: '2.1.1',
        pdfFiles: [
          { name: 'Admission List as Published by HEI.pdf', url: '/assets/2.1.1 Final Admission list as published by HEI.pdf' },
          { name: 'Sanction of Intake as Approved by Competent Authority.pdf', url: '/assets/2.1.1 Sanction of Intake as approved by competent authority.pdf' }
        ]
      },
      { 
        id: '2.1.2',
        pdfFiles: [
          { name: 'Percentage of Seats Filled against Reserved Categories.pdf', url: '/assets/Percentage of seats filled against reserved categories.pdf' },
          { name: 'Letter Issued by State Gov Indicating Reserved Catagories.pdf', url: '/assets/2.1.2 Copy of letter issued by State Gov indicating reserved catagories.pdf' }
        ]
      },
      { 
        id: '2.2.1',
        pdfFiles: [
          { name: 'Catering to Differential Learning.pdf', url: '/assets/2.2.1 Catering to differential learning.pdf' }
        ]
      },
      { 
        id: '2.2.2',
        pdfFiles: [
          { name: 'Full time teachers in 2022-23.pdf', url: '/assets/2.2.2 full time teachers 2022-23.pdf' },
          { name: 'Number of students in 2022-23.pdf', url: '/assets/2.2.2 List showing number of students in 22-23.pdf' }
        ]
      },
      { 
        id: '2.3.1',
        pdfFiles: [
          { name: 'Student Centric Methods.pdf', url: '/assets/Student centric methods.pdf' }
        ]
      },
      { 
        id: '2.3.2',
        pdfFiles: [
          { name: 'Effective Mentor-Mentee Schemes.pdf', url: '/assets/2.3.2 The institution adopts effective Mentor-Mentee Schemes to address academics and student-psychological issues.pdf' },
          { name: 'List of Active mentors.pdf', url: '/assets/2.3.2_list of active mentors.pdf' }
        ]
      },
      { 
        id: '2.3.3',
        pdfFiles: [
          { name: 'Adherence to Academic Calendar.pdf', url: '/assets/2.3.3 Academic Calendar Adherance.pdf' }
        ]
      },
      { 
        id: '2.4.1',
        pdfFiles: [
          { name: 'Sanction Letters Indicating Number of Posts.pdf', url: '/assets/2.4.1.1 Sanction letters indicating number of posts.pdf' }
        ]
      },
      { 
        id: '2.4.2',
        pdfFiles: [
          { name: 'List of faculty with PhD.pdf', url: '/assets/List of faculty with PhD Yearwise.pdf' },
          { name: 'PhD Certificates.pdf', url: '/assets/Copies of PhD Certificate.pdf' }
        ]
      },
      { 
        id: '2.5.1',
        pdfFiles: [
          { name: 'Date of Publication of Results.pdf', url: '/assets/2.5.1 Average number of days from the date of last semester-end_ year- end examination till the last date of declaration of results during the last five years.pdf' },
          { name: 'Policy document.pdf', url: '/assets/Policy document on Declaration of results.pdf' },
          { name: 'Exam timetables.pdf', url: '/assets/2.5.1 Exam Timetables released by CoE.pdf' }
        ]
      },
      { 
        id: '2.5.2',
        pdfFiles: [
          { name: 'Student Complaints Greivances about Evaluation.pdf', url: '/assets/2.5.2 Percentage of student complaints_greivances about evaluation.pdf' },
          { name: 'Additional Document.pdf', url: '/assets/Any other document-students appeared.pdf' }
        ]
      },
      { 
        id: '2.5.3',
        pdfFiles: [
          { name: 'IT Integration and Reforms in the Examination Procedures.pdf', url: '/assets/2.5.3-QLM-IT-integration-and-reforms-in-the-examination-procedures.pdf' }
        ]
      },
      { 
        id: '2.6.1',
        pdfFiles: [
          { name: 'Learning Outcomes.pdf', url: '/assets/2.6.1-The Institutation has stated learning outcomes.pdf' }
        ]
      },
      { 
        id: '2.6.2',
        pdfFiles: [
          { name: 'Report on Pass Percentage of Students.pdf', url: '/assets/Certified CoE report of pass percentage.pdf' },
          { name: 'Annual Report of COE.pdf', url: '/assets/Annual Report - Certified by COE.pdf' },
          { name: 'Gazette 2022-23.pdf', url: '/assets/2.6.2 Any other relevant document- 2022-23 Gazette.pdf' },
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
          { name: 'Additional Information.pdf', url: '/assets/Additional_Information_3_1_1.pdf' }
        ]
      },
      { 
        id: '3.1.2',
        pdfFiles: [
          { name: 'Audited Income-Expenditure Statement.pdf', url: '/assets/Audited Income-Expenditure statement highlighting the expenditure.pdf' },
          { name: 'Sanction Letters of Seed Money to the Teachers.pdf', url: '/assets/Sanction letters of seed money to the teachers.pdf' },
          { name: 'List of faculty Provided with Seed Money for Research.pdf', url: '/assets/List of faculty who have been provided with seed money for research.pdf' }
        ]
      },
      { 
        id: '3.1.3',
        pdfFiles: [
          { name: 'List of Teachers Awarded National International Fellowship.pdf', url: '/assets/List_of_teachers awarded national_ international fellowship.pdf' },
          { name: 'E-copies of the Award Letters.pdf', url: '/assets/E-copies of the award letters of the teachers.pdf' }
        ]
      },
      { 
        id: '3.2.1',
        pdfFiles: [
          { name: 'List of Extramural Funding Received.pdf', url: '/assets/E-copies of the award letters of the teachers.pdf' },
          { name: 'Copies of the Letters.pdf', url: '/assets/(new)Copies of the letters.pdf' }
        ]
      },
      { 
        id: '3.2.2',
        pdfFiles: [
          { name: 'List of Project titles.pdf', url: '/assets/(new) List of Project.pdf' },
          { name: 'Grant awards letters.pdf', url: '/assets/(new) Copies of grant award.pdf' }
        ]
      },
      { 
        id: '3.2.3',
        pdfFiles: [
          { name: 'Letter of the University Recognizing Faculty as Research Guides.pdf', url: '/assets/Copies of the letter of the University recognizing faculty as Research guides.pdf' }
        ]
      },
      { 
        id: '3.4.1',
        pdfFiles: [
          { name: 'Constitutions of the Research Advisory.pdf', url: '/assets/(new) Constitutions of the research advisory.pdf' },
          { name: 'Bills of Purchase of Licensed Plagiarism Check.pdf', url: '/assets/Bills of purchase of licensed plagiarism.pdf' },
          { name: 'Constitution of the Ethics Committee.pdf', url: '/assets/3.4.2_Ethics_comitee_and_procedings.pdf' },
          { name: 'Syllabus of the Research Methodology.pdf', url: '/assets/syllabus of the research methodology.pdf' }
        ]
      },
      { 
        id: '3.4.2',
        pdfFiles: [
          { name: 'Ph.D. Registration Letters.pdf', url: '/assets/Ph.D. registration letters_Joining reports of candidates.pdf' }
        ]
      },
      { 
        id: '3.4.4',
        pdfFiles: [
          { name: 'List of Conference Papers and Book Chapters.pdf', url: '/assets/List of chapter_bo.pdf' },
          { name: 'Conference Papers and Book Chapters.pdf', url: '/assets/Copy of the Cover page.pdf' }
        ]
      },
      { 
        id: '3.5.1',
        pdfFiles: [
          { name: 'Letter from the Beneficiary of the consultancy.pdf', url: '/assets/Letter from the beneficiary of the consultancy along with details of the consultancy fee.pdf' },
          { name: 'CA certified copy of Statement of Accounts.pdf', url: '/assets/CA certified copy of statement of accounts as attested by head of the institution.pdf' },
          { name: 'Audited Statements of Accounts.pdf', url: '/assets/Audited statements of accounts indicating the revenue generated through corporate training_consultancy.pdf' }
        ]
      },
      { 
        id: '3.6.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Merged_Outcomes_of_extension_activities_Index_3.6.1.pdf' }
        ]
      },
      { 
        id: '3.6.2',
        pdfFiles: [
          { name: 'Photographs and any other Supporting Document.pdf', url: '/assets/Merged_Outcomes_of_extension_activities_Index_3.6.1.pdf' },
          { name: 'Report of Extension and Outreach program.pdf', url: '/assets/Merged_Detailed_Report_Index_Activities_3.6.2.pdf' }
        ]
      },
      { 
        id: '3.7.1',
        pdfFiles: [
          { name: 'Functional MOUs.pdf', url: '/assets/functional MoUs_linkage_collaborations.pdf' },
          { name: 'List of Yearwise Activities.pdf', url: '/assets/List of yearwise activities.docx.pdf' }
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
          { name: 'Additional Information.pdf', url: '/assets/4.1.1_Upload any additional information.pdf' }
        ]
      },
      { 
        id: '4.1.2',
        pdfFiles: [
          { name: 'Relevant Expenditure Claimed for Infrastructure Augmentation.pdf', url: '/assets/Audited income.pdf' }
        ]
      },
      { 
        id: '4.2.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional information_44.pdf' }
        ]
      },
      { 
        id: '4.2.2',
        pdfFiles: [
          { name: 'Library Books Expenditure.pdf', url: '/assets/Audited income library.pdf' }
        ]
      },
      { 
        id: '4.3.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional information_4.3.1.pdf' }
        ]
      },
      { 
        id: '4.3.2',
        pdfFiles: [
          { name: 'Computer Purchase Bills.pdf', url: '/assets/Purchased BillsCopies highlighting the number of computers purchased.pdf' },
          { name: 'Extract Stock Register.pdf', url: '/assets/4.3.2.pdf' }
        ]
      },
      { 
        id: '4.3.3',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional information_4.3.3.pdf' }
        ]
      },
      { 
        id: '4.4.1',
        pdfFiles: [
          { name: 'Physical and Academic Expenditure.pdf', url: '/assets/Audited income and expenditure_4.4.1.pdf' }
        ]
      },
      { 
        id: '4.4.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional information_4.4.2_final.pdf' }
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
          { name: 'Year-wise list of Beneficiary Students.pdf', url: '/assets/Scholarship_Final.pdf' },
          { name: 'Sanction Letter of Scholarship and Freeship.pdf', url: '/assets/Sanction letter of scholarship and free ships (along with English translated version if it is in regional language)..pdf' },
          { name: 'Policy Document.pdf', url: '/assets/Policy Document.pdf' }
        ]
      },
      { 
        id: '5.1.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Efforts taken by the institution.pdf' }
        ]
      },
      { 
        id: '5.1.3',
        pdfFiles: [
          { name: 'Reports for Awareness of Trends in Technology.pdf', url: '/assets/Awareness in Trends & Technology.pdf' },
          { name: 'Reports of Language, Soft Skills, Communication Skills, Life Skills.pdf', url: '/assets/Languages, Communication Skills, Soft Skills, Life Skills.pdf' }
        ]
      },
      { 
        id: '5.1.4',
        pdfFiles: [
          { name: 'Awareness and Undertakings on Policies.pdf', url: '/assets/1 Proof w.r.t Organisation wide awareness and undertakings on policies with zero tolerance.pdf' },
          { name: 'Mechanisms for Submission of Online/Offline Student Greviances.pdf', url: '/assets/2 Online and Offline Mechanisms.pdf' },
          { name: 'Implementation Guidelines of Statutory/Regulatory Bodies.pdf', url: '/assets/3 Implementation of guidelines of statutory_regulatory bodies.pdf' },
          { name: 'Stuatory/Regulatory Committiees.pdf', url: '/assets/4 statutory_regulatory Committees.pdf' },
          { name: 'Annual Report of Committee.pdf', url: '/assets/5 Annual report of the committee.pdf' }
        ]
      },
      { 
        id: '5.2.1',
        pdfFiles: [
          { name: 'Placement and Higher studies summary.pdf', url: '/assets/Placement and Higher Studies proof(NAAC).docx.pdf' },
          { name: 'Placement 2022-23.pdf', url: '/assets/1 Placement 2022-23.pdf' },
          { name: 'Higher studies 2022-23.pdf', url: '/assets/2 Higher Studies 2022-23.pdf' },
          { name: 'Placement 2021-22.pdf', url: '/assets/3 Placement 2021-22.pdf' },
          { name: 'Higher studies 2021-22.pdf', url: '/assets/4 Higher Studies 2021-22.pdf' },
          { name: 'Placement 2020-21.pdf', url: '/assets/5 Placement 2020-21.pdf' },
          { name: 'Higher studies 2020-21.pdf', url: '/assets/6 Higher Studies 2020-21.pdf' },
          { name: 'Placement 2019-20.pdf', url: '/assets/7 Placement 2019-20.pdf' },
          { name: 'Higher studies 2019-20.pdf', url: '/assets/8 Higher Studies 2019-20.pdf' },
          { name: 'Placement 2018-19.pdf', url: '/assets/9 Placement 2018-19.pdf' },
          { name: 'Higher studies 2018-19.pdf', url: '/assets/10 Higher Studies 2018-19.pdf' }
        ]
      },
      { 
        id: '5.2.2',
        pdfFiles: [
          { name: 'List of Students Qualified Year-wise.pdf', url: '/assets/5.2.2 final.pdf' }
        ]
      },
      {
        id: '5.3.1',
        pdfFiles: [
          { name: 'List of E-copies of Award Letters and Certificates.pdf', url: '/assets/awards.pdf' }
        ]
      },
      { 
        id: '5.3.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Student Council and other representations.pdf' }
        ]
      },
      { 
        id: '5.3.3',
        pdfFiles: [
          { name: 'Report on Sports, Cultural,Technical/Academices Festival.pdf', url: '/assets/FESTIVALS.pdf' },
          { name: 'List of Participants.pdf', url: '/assets/List of students participated in the events.pdf' },
          { name: 'Copy of Circular/Brochure.pdf', url: '/assets/Circulars final.pdf' }

        ]
      },
      { 
        id: '5.4.1',
        pdfFiles: [
          { name: 'List of Alumni with the Amount Contributed.pdf', url: '/assets/List of alumnus_alumni with the amount contributed year-wise index.pdf' },
          { name: 'Annual Audited Statements.pdf', url: '/assets/Annual Audited statements.pdf' }
        ]
      },
      { 
        id: '5.4.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/alumni contributions and engagements.pdf' }
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
          { name: 'Additional Information.pdf', url: '/assets/Additional Information 6.1.1.pdf' }
        ]
      },
      { 
        id: '6.2.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional Information 6.2.1.pdf' }
        ]
      },
      { 
        id: '6.2.2',
        pdfFiles: [
          { name: 'Screenshots of User Interface.pdf', url: '/assets/Screenshots of User Interface.pdf' },
          { name: 'Institute Expenditure.pdf', url: '/assets/6_2_2 Institute Expenditure.pdf' },
          { name: 'Annual E-governance Report.pdf', url: '/assets/6_2_2 Annual e-governance report.pdf' }
        ]
      },
      { 
        id: '6.3.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/6.3.1 -Additional Information.pdf' }
        ]
      },
      { 
        id: '6.3.2',
        pdfFiles: [
          { name: 'Policy Document.pdf', url: '/assets/Policy document 6.3.2.pdf' },
          { name: 'Audited Statement.pdf', url: '/assets/Audited statement.pdf' },
          { name: 'Financial Letter Year wise.pdf', url: '/assets/Copy of finacial letter Year wise.pdf' }
        ]
      },
      { 
        id: '6.3.3',
        pdfFiles: [
          { name: 'Refresher Course.pdf', url: '/assets/Refresher course.pdf' },
          { name: 'Copy of Certificate.pdf', url: '/assets/Copy of Certificate 6.3.3.pdf' },
          { name: 'Annual Report.pdf', url: '/assets/Annual Report 6.3.3.pdf' }
        ]
      },
      { 
        id: '6.4.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/6.4.1-Additional Information.pdf' }
        ]
      },
      { 
        id: '6.4.2',
        pdfFiles: [
          { name: 'Sanction Letters.pdf', url: '/assets/6.4.2-Copy of sanction letters.pdf' },
          { name: 'Annual Audited Statements.pdf', url: '/assets/Annual Audited statements 6.4.2.pdf' }
        ]
      },
      { 
        id: '6.4.3',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional Information 6.4.3.pdf' }
        ]
      },
      { 
        id: '6.5.1',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/6.5.1.-additional Information.pdf' }
        ]
      },
      { 
        id: '6.5.2',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/6.5.2.-Additional Informationpdf.pdf' }
        ]
      },
      { 
        id: '6.5.3',
        pdfFiles: [
          { name: 'Quality Audit Reports.pdf', url: '/assets/Quality Audit Reports.pdf' },
          { name: 'NIRF AAA Report.pdf', url: '#' },
          { name: 'List of Collaborative Quality Initiatives with other Institute.pdf', url: '/assets/List of Collaborative Quality Initiatives with other Institute.pdf' },
          { name: 'Relevant Document.pdf', url: '/assets/Relevant Document.pdf' }
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
          { name: 'Additional Information.pdf', url: '/assets/Additional Information 7.1.1.pdf' }
        ]
      },
      { 
        id: '7.1.2',
        pdfFiles: [
          { name: 'Permission for Connecting to Grid.pdf', url: '/assets/Permission Document for connecting to grid.pdf' },
          { name: 'Photographs of Facilities.pdf', url: '/assets/Photographs of facilities.pdf' },
          { name: 'Bills for Purchase of Equipment.pdf', url: '/assets/Bills for purchase of equipment.pdf' }
        ]
      },
      { 
        id: '7.1.3',
        pdfFiles: [
          { name: 'Relevant Information to Waste Management.pdf', url: '/assets/Any other relevant information 7.1.3.pdf' }
        ]
      },
      { 
        id: '7.1.4',
        pdfFiles: [
          { name: 'Green Audit Report on Water Conservation.pdf', url: '#' },
          { name: 'Geotagged Photographs of the Facilities.pdf', url: '/assets/Geotagged Photographs of the facilities.pdf' },
          { name: 'Bills of Purchase.pdf', url: '/assets/Bills of purchase.pdf' }
        ]
      },
      { 
        id: '7.1.5',
        pdfFiles: [
          { name: 'Clean and Green Campus Policy.pdf', url: '/assets/Clean and Green Campus Policy.pdf' },
          { name: 'Geo-tagged photographs.pdf', url: '/assets/Photographs.pdf' },
          { name: 'Circulars and report of activities.pdf', url: '/assets/Circulars and report of activities 7.1.5.pdf' }
        ]
      },
      { 
        id: '7.1.6',
        pdfFiles: [
          { name: 'Report on Beyond Campus Activities.pdf', url: '/assets/Report on beyond Campus activities.pdf' },
          { name: 'Policy on Environment and Energy usage.pdf', url: '/assets/Policy on environment and energy usage 7.1.6.pdf' },
          { name: 'Green Audit and Environment Audit Reports.pdf', url: '/assets/Green Energy and Environment Audit reports.pdf' },
          { name: 'Certificates of awards Received.pdf', url: '/assets/Certificates of awards 7.1.6.pdf' }
        ]
      },
      { 
        id: '7.1.7',
        pdfFiles: [
          { name: 'Additional Information.pdf', url: '/assets/Additional Information 7.1.7.pdf' }
        ]
      },
      { 
        id: '7.1.8',
        pdfFiles: [
          { name: 'Supporting Documents for Information Provided.pdf', url: '/assets/Supporting Documents for information provided 7.1.8.pdf' }
        ]
      },
      { 
        id: '7.1.9',
        pdfFiles: [
          { name: 'Details of Activities.pdf', url: '/assets/Details of activities 7.1.9.pdf' },
          { name: 'Any other Relevant Information.pdf', url: '/assets/Any other relevant information 7.1.9.pdf' }
        ]
      },
      { 
        id: '7.1.10',
        pdfFiles: [
          { name: 'Report on Student Attributes.pdf', url: '/assets/Report on student attributes 7.1.10.pdf' },
          { name: 'Any Other Relevant Documents to Support the Claim.pdf', url: '/assets/Any other relevant documents to support the claim 7.1.10.pdf' },
          { name: 'Constitution & Proceeding of Monitoring Committee.pdf', url: '/assets/Constitution & Proceedings of Monitoring Committee 7.1.10.pdf' },
          { name: 'Circulars and Geotagged photographs of activities under this metric.pdf', url: '/assets/Circulars and geotagged photographs of activities under this metric 7.1.10.pdf' }
        ]
      },
      { 
        id: '7.2.1',
        pdfFiles: [
          { name: 'Best Practices.pdf', url: '/assets/Best Practices 7.2.1.pdf' }
        ]
      },
      { 
        id: '7.3.1',
        pdfFiles: [
          { name: 'Relevant Information.pdf', url: '/assets/Any other relevant information 7.3.1.pdf' }
        ]
      }
    ]
  },
  'ssr': {
    title: 'SSR',
    items: [
      { 
        id: 'SSR',
        pdfFiles: [
          { name: 'SSR.pdf', url: '/assets/S.P.I.T._NAAC_SSR_Cycle_1.pdf' }
        ]
      }
    ]
  },
  'dvv-clarifications': {
    title: 'DVV Clarifications',
    items: [
      { 
        id: 'Criteria 1',
        pdfFiles: [
          { name: 'Number of students on rolls year wise.pdf', url: '/assets/1.1Number of students on rolls year wise during last five years.pdf' },
          { name: 'Number of final year outgoing students.pdf', url: '/assets/1.2 Number of final year outgoing students year wise during last five years.pdf' },
          { name: 'MoM of BOS and AC.pdf', url: '/assets/1.2.1 MoM of BOS and AC.pdf' },
          { name: 'Syllabus Revision.pdf', url: '/assets/1.2.1 Syllabus Revision.pdf' },
          { name: 'List of New Courses.pdf', url: '/assets/updated 1.2.1 dvv -8524.pdf' },
          { name: 'List of Value added Program.pdf', url: '/assets/1.3.2List of Value added Program.pdf' },
          { name: 'Value added courses content.pdf', url: '/assets/1.3.2. Value added courses content.pdf' },
          { name: 'List of Student and certificate.pdf', url: '/assets/1.3.2 List of Student and certificate.pdf' },
          { name: 'List of Internship students and certificate.pdf', url: '/assets/1.3.3 List of Internship students and certificate.pdf' },
          { name: 'Program and course contents having element of field projects.pdf', url: '/assets/1.3.3 Program and course contents having element of field projects.pdf' },
          { name: 'Subsequent Academic Council meeting.pdf', url: '/assets/Subsequent Academic Council meeting dvv.pdf' },
          { name: 'Alumni Feedback.pdf', url: '/assets/alumni dvv.pdf' },
          { name: 'Employer Feedback.pdf', url: '/assets/employer dvv.pdf' },
          { name: 'Parent Feedback.pdf', url: '/assets/parent dvv.pdf' },
          { name: 'Students Feedback.pdf', url: '/assets/students dvv.pdf' }
        ]
      },
      { 
        id: 'Criteria 2',
        pdfFiles: [
          { name: 'Number of Full Time Teachers Year wise.pdf', url: '/assets/2.1 Lhead-merged.pdf' },
          { name: 'Total No. of Full time teachers worked during the last five years.pdf', url: '/assets/1-2.2 Lhead-merged.pdf' },
          { name: 'Appointment Letter.pdf', url: '/assets/2 Appoinment Letter merged.pdf' },
          { name: 'Sanction of Intake as approved by competent authority.pdf', url: '/assets/dvv 2.1.1 Sanction of Intake as approved by competent authority.pdf' },
          { name: 'Admission extract.pdf', url: '/assets/dvv Admission extract.pdf' },
          { name: 'Admission list as published by HEI.pdf', url: '/assets/dvv 2.1.1  Admission list as published by HEI.pdf' },
          { name: 'Additional Intake.pdf', url: '/assets/dvv Additional Intake.pdf' },
          { name: 'Percentage of seats filled against reserved categories.pdf', url: '/assets/dvv 2.1.2 Percentage of seats filled against reserved categories.pdf' },
          { name: 'Summary of no. of seats earmarked and admitted.pdf', url: '/assets/dvv 2.1.2 DVV Clarification Merged.pdf' },
          { name: 'Admission extract.pdf', url: '/assets/3mm Admission extract.pdf' },
          { name: 'Sanctioned order of the posts.pdf', url: '/assets/dvv 2.4.1_Sanctioned post 2023-2018-merged.pdf' },
          { name: 'List of faculties with PhD and PhD degrees.pdf', url: '/assets/dvvCopy of 2.4.2 DVV Merged.pdf' },
          { name: 'Certified experience of faculties.pdf', url: '/assets/dvv2.4.3Nlastest compled acad year.pdf' },
          { name: 'Number of full time teachers worked in last five years.pdf', url: '/assets/Copy of 1  2.4.4 finaldvv.pdf' },
          { name: 'List of full time teachers during first year assessment period.pdf', url: '/assets/Copy of 2 First Yr of Assessmentdvv.pdf' },
          { name: 'Exam end date & date of announcement of results.pdf', url: '/assets/dvvExam n Result Dates-final.pdf' },
          { name: 'Exam timetable released by COE.pdf', url: '/assets/dvv 2.5.1 Exam Timetables released by CoE.pdf' },
          { name: 'Result sheet with date of publication.pdf', url: '/assets/2.5.1Lheaddvvv.pdf' },
          { name: 'Document of minutes of the grievances.pdf', url: '/assets/dcc2.5.2 Lhead.pdf' },
          { name: 'List of students applied for revaluation.pdf', url: '/assets/dvv 2.5.2 Percentage of student complaints_greivances about evaluation.pdf' },
          { name: 'Annual report of COE.pdf', url: '/assets/1 Annual Report - Certified by COE.pdf' },
          { name: 'COE report indicating past percentage of students.pdf', url: '/assets/2 Certified CoE report of pass percentage.pdf' }
        ]
      },
      { 
        id: 'Criteria 3',
        pdfFiles: [
          { name: 'Audited Income Expenditure.pdf', url: '/assets/Audited Income-Expendituredvv.pdf' },
          { name: 'List of faculty seed money for research.pdf', url: '/assets/List of faculty seed money for research.pdf' },
          { name: 'Sanction letters.pdf', url: '/assets/Sanction letters dvv.pdf' },
          { name: 'E-copies of the teachers.pdf', url: '/assets/E-copies of the teachers dvv.pdf' },
          { name: 'List of teachers awarded.pdf', url: '/assets/List_of_teachers awarded.pdf' },
          { name: 'List of grants.pdf', url: '/assets/List of grantss dvv.pdf' },
          { name: 'List of teachers.pdf', url: '/assets/List of teachers dvv.pdf' },
          { name: 'Sanction order.pdf', url: '/assets/Sanction orderdvv.pdf' },
          { name: 'Faculty as Research guides.pdf', url: '/assets/faculty as Research guides.pdf' },
          { name: 'Bills of purchase.pdf', url: '/assets/Bills of purchase dvv.pdf' },
          { name: 'Constitution of the ethics committee.pdf', url: '/assets/Constitution of the ethics committeedvv.pdf' },
          { name: 'Copy of the syllabus.pdf', url: '/assets/Copy of the syllabusdvv.pdf' },
          { name: 'Research advisory committee.pdf', url: '/assets/research advisory committee.pdf' },
          { name: 'Letters Received.pdf', url: '/assets/letter_receiveddvv.pdf' },
          { name: 'The joining letter Ph.D.pdf', url: '/assets/the joining letter Ph.Ddvv.pdf' },
          { name: 'Link to journal papers.pdf', url: '/assets/link to journal papers.pdf' },
          { name: 'Screenshots of journal papers 2018.pdf', url: '/assets/journalpapers2018.pdf' },
          { name: 'Screenshots of journal papers 2019.pdf', url: '/assets/journalpapers2019.pdf' },
          { name: 'Screenshots of journal papers 2020.pdf', url: '/assets/journalpapers2020.pdf' },
          { name: 'Screenshots of journal papers 2021.pdf', url: '/assets/journalpapers2021.pdf' },
          { name: 'Screenshots of journal papers 2022.pdf', url: '/assets/journalpapers2022.pdf' },
          { name: 'Screenshots of journal papers 2023.pdf', url: '/assets/journalpapers2023.pdf' },
          { name: 'Data Template.pdf', url: '/assets/data_template_3.4.3.pdf' },
          { name: 'Ecopy of along with ISBN number.pdf', url: '/assets/Ecopy with ISBN number.pdf' },
          { name: 'Audited statements.pdf', url: '/assets/Audited statementsdvvvv.pdf' },
          { name: 'Letter from the beneficiary.pdf', url: '/assets/Letter from the beneficiarydvv.pdf' },
          { name: 'Activities.pdf', url: '/assets/3.6.2_ctivities.pdf' },
          { name: 'Outreach Activities.pdf', url: '/assets/outreach activities.xlsx - 3.6.2dvv.pdf' },
          { name: 'Copies of functional MoUs.pdf', url: '/assets/Copies_of_functional MoUs.pdf' },
          { name: 'List of yearwise activities.pdf', url: '/assets/List of yearwise activitiesdvvvv.pdf' },
          { name: 'Summary of the functional MOUs.pdf', url: '/assets/Summary of the functional MOUsdvv.pdf' }
        ]
      },
      { 
        id: 'Criteria 4',
        pdfFiles: [
          { name: 'Expense Infrastructure.pdf', url: '/assets/4.1.2_Exp_InfraDA.pdf' },
          { name: 'Fund.pdf', url: '/assets/4.1.2_fund.pdf' },
          { name: 'EF Excluding Salary.pdf', url: '/assets/3.1_EFExcludingSalary.pdf' },
          { name: 'Statement salary show.pdf', url: '/assets/3.1_Statementsalaryshow.pdf' },
          { name: 'Purchase Expenditure.pdf', url: '/assets/4.2.2_Expenditurepurchaseb.pdf' },
          { name: 'ESR.pdf', url: '/assets/4.3.2_ESR.pdf' },
          { name: 'PB.pdf', url: '/assets/4.3.2_PB.pdf' },
          { name: 'Physical Expenditure.pdf', url: '/assets/4.4.1_Expenditurephysicalfaa.pdf' }
        ]
      },
      { 
        id: 'Criteria 5',
        pdfFiles: [
          { name: 'Government Scholarship Policy document.pdf', url: '/assets/1 Government Scholarship Policy document.pdf' },
          { name: 'Non Government Scholarship Policy document.pdf', url: '/assets/2 Non Government Scholarship Policy document.pdf' },
          { name: 'Sanction letter of scholarship.pdf', url: '/assets/3 sanction letter of scholarship.pdf' },
          { name: 'Year-wise list of beneficiary students in each scheme.pdf', url: '/assets/4 Year-wise list of beneficiary students in each scheme.pdf' },
          { name: 'Capacity Development Programme.pdf', url: '/assets/1 S.P.I.T._Capacity_Development_Programmedvv5.pdf' },
          { name: 'Awareness in Trends and Technology.pdf', url: '/assets/Awareness in Trends & Technology.pdf' },
          { name: 'Language, Life Skills.pdf', url: '/assets/Languages, Communication Skills, Soft Skills, Life Skills.pdf' },
          { name: 'Minutes of the meetings of student grievances.pdf', url: '/assets/1 Minutes of the meetings of student grievances.pdf' },
          { name: 'Anti Ragging committee.pdf', url: '/assets/2 Anti Ragging committeedv.pdf' },
          { name: 'Grievance Redressal committee.pdf', url: '/assets/3 Grievance Redressal committee.pdf' },
          { name: 'Internal Complaints committee.pdf', url: '/assets/4 Internal Complaints committee.pdf' },
          { name: 'Year-wise list of students placed details.pdf', url: '/assets/1 Year-wise list of students placed details.pdf' },
          { name: 'Higher Studies 2022-23.pdf', url: '/assets/2 Higher Studies 2022-23.pdf' },
          { name: 'Higher Studies 2021-22.pdf', url: '/assets/4 Higher Studies 2021-22.pdf' },
          { name: 'Higher Studies 2020-21.pdf', url: '/assets/6 Higher Studies 2020-21.pdf' },
          { name: 'Higher Studies 2019-20.pdf', url: '/assets/8 Higher Studies 2019-20.pdf' },
          { name: 'Higher Studies 2018-19.pdf', url: '/assets/10 Higher Studies 2018-19.pdf' },
          { name: 'List of students qualified yearwise under each head.pdf', url: '/assets/1 List of students qualified yearwise under each headdvv.pdf' },
          { name: 'Qualifying Certificates.pdf', url: '/assets/2 Qualifying Certificatesdvv.pdf' },
          { name: 'E-copies of award letters and certificates.pdf', url: '/assets/1 E-copies of award letters and certificates.pdf' },
          { name: 'List of number of students participants in events.pdf', url: '/assets/1 List of number of students participants in events.pdf' },
          { name: 'Report of the events.pdf', url: '/assets/2 Report of the eventsdvv.pdf' },
          { name: 'Alumni Association Registration Certificate.pdf', url: '/assets/1 Alumni Association Registration Certificate.pdf' },
          { name: 'Annual audited statements of account.pdf', url: '/assets/2 Annual audited statements of account.pdf' }
        ]
      },
      { 
        id: 'Criteria 6',
        pdfFiles: [
          { name: 'ERP Contract Document.pdf', url: '/assets/ERP Contract Document.pdf' },
          { name: 'Institutional expenditure statements.pdf', url: '/assets/Institutional expenditure statements.pdf' },
          { name: 'Screenshot of UI.pdf', url: '/assets/screenshots dvv.pdf' },
          { name: 'Policy Document.pdf', url: '/assets/Policy Document.pdf' },
          { name: 'Ecopy letters FY-22-23.pdf', url: '/assets/Ecopy letters FY-22-23.pdf' },
          { name: 'Faculty List FY-22-23.pdf', url: '/assets/Faculty List FY-22-23.pdf' },
          { name: 'Ecopy letters FY-21-22.pdf', url: '/assets/Ecopy letters FY-21-22.pdf' },
          { name: 'Faculty List FY-21-22.pdf', url: '/assets/Faculty List FY-21-22dvv.pdf' },
          { name: 'Ecopy letters FY-20-21.pdf', url: '/assets/Ecopy letters FY-20-21.pdf' },
          { name: 'Faculty List FY-20-21.pdf', url: '/assets/Faculty List FY-20-21.pdf' },
          { name: 'Ecopy letters FY-19-20.pdf', url: '/assets/Ecopy letters FY-19-20.pdf' },
          { name: 'Faculty List FY-19-20.pdf', url: '/assets/Faculty List FY-19-20.pdf' },
          { name: 'E-Copy letters FY-18-19.pdf', url: '/assets/E-Copy lettersFY-18-19dvv.pdf' },
          { name: 'Faculty list FY-18-19.pdf', url: '/assets/Faculty list FY-18-19dvv.pdf' },
          { name: 'Audited Statement.pdf', url: '/assets/Audited Statement (1).pdf' },
          { name: 'Revised DVV.pdf', url: '/assets/DVV_6.3.3.pdf' },
          { name: 'List of teachers 22-23.pdf', url: '/assets/2022-23-Copy of List_Of_Teacherdvv.pdf' },
          { name: 'Ecopy Certificate 22-23.pdf', url: '/assets/2022-23-Copy of Copy_Of_Certificate.pdf' },
          { name: 'List of teachers 21-22.pdf', url: '/assets/Copy of List of Teachers 21-22.pdf' },
          { name: 'Ecopy Certificate 21-22.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'List of teachers 20-21.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Ecopy Certificate 20-21.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'List of teachers 19-20.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Ecopy Certificate 19-20.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'List of teachers 18-19.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Ecopy Certificate 18-19.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Annual audited statements.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Copy of Sanction letter.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Proceedings of AAA.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'List of Activities.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Supporting Document.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'NIRF Certificates.pdf', url: '/dvv/governance-documents.pdf' },
          { name: 'Quality certificate.pdf', url: '/dvv/governance-documents.pdf' }
        ]
      },
      { 
        id: 'Criteria 7',
        pdfFiles: [
          { name: 'Any other relevant proof.pdf', url: '/dvv/dvv-response-c7.pdf' },
          { name: 'Bills for purchase of equipment under this metric.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Geotagged Photographs of facilities.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Permission Document for connecting to grid.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Bills for purchase of equipment.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Geotagged Photos of facilities.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Green Audit report on water conservation facilties on campus.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Water conservation policy document.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Beyond Campus Activities.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Certificates and Awards.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Green, Energy and Environment Audit Reports (2018-19 to 2022-23).pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Any other relevant proof.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Activities organised under this metric for students.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Institute Handbook.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Activities organised under this metric for faculty and staff.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Policy Document on Code of Conduct.pdf', url: '/dvv/best-practice-evidence.pdf' },
          { name: 'Proceedings of Monitoring Committee.pdf', url: '/dvv/best-practice-evidence.pdf' }
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
                            <div
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                              style={{
                                maxHeight: '320px', // ~20rem, adjust as needed
                                overflowY: 'auto'
                              }}
                            >
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