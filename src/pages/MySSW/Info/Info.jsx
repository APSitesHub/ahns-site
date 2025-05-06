import { ReactComponent as PdfIcon } from '../../../img/svg/pdf-icon.svg';
import { InfoBtnIcon } from '../MySSWPanel/MySSWPanel.styled';
import {
  InfoBox,
  InfoHeading,
  InfoList,
  InfoListItem,
  InfoListItemDate,
  InfoListItemText,
  PdfBox,
  PdfLink,
  PdfWrapper,
  Video,
} from './Info.styled';

export const Info = () => {
  return (
    <InfoBox style={{ top: '142px' }}>
      <InfoHeading>
        <InfoBtnIcon />
        Important information
      </InfoHeading>
      <InfoList>
        <InfoListItem>
          <InfoListItemDate>03.03.2025</InfoListItemDate>
          <InfoListItemText>
            {
              'Dear student, \nAt our last meeting, we discussed your academic practice. We are sending you the  internship journal and a video tutorial.'
            }
          </InfoListItemText>
          <PdfBox>
            <PdfWrapper>
              <PdfLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://ssw.ap.education/static/docs/Internship_journal.pdf"
              >
                <PdfIcon />
                Internship Journal
              </PdfLink>
            </PdfWrapper>
          </PdfBox>

          <Video
            src="https://ssw.ap.education/static/docs/instructions_for_the_internship_journal.mp4"
            type="video/mp4"
            width={'100%'}
            controls
            autoPlay={true}
          ></Video>
        </InfoListItem>
        <InfoListItem>
          <InfoListItemDate>17.02.2025</InfoListItemDate>
          <InfoListItemText>
            {
              'INTERNSHIP \n \nThe internship begins two months after the start of the course. This timetable is designed to give participants time to adapt to the new learning environment, learn basic theoretical knowledge and prepare for the practical application of the acquired knowledge.            \n \nDear student,  \n \nWe would like to emphasise that you have already completed part of your studies. Therefore, we would like to emphasise that an important event for our students will take place soon. \n \nWe invite you to an offline Open Day, which will take place on: \n📅 Date: 20 February \n🕒 Time: 12:00  \n📍 Place: Higher School of Social Sciences ‘SSW’, 115 Marshalkowska St., 00-102 Warsaw  \n\nProgramme of the day:  \n1. 12:00 - Meeting of the participants  \n   Our staff and curators will be happy to welcome you to the university.  \n2. 13:30 - Introductory speech  \n   A representative of the university will introduce you to general information \n3. 13:40 - 14:40 - Lecture by the curator, Doctor of Philosophy Mykola Perikh'
            }
          </InfoListItemText>
        </InfoListItem>
        <InfoListItem>
          <InfoListItemDate>06.01.2025</InfoListItemDate>
          <InfoListItemText>
            {
              'Dear student,  \n \nWe would like to remind you that your studies started on 16 December, so we would like to emphasise that an important event for our students will take place very soon. \n \nWe invite you to the Offline Open Day, which is taking place on: \n📅 Date: 8 January  \n🕒 Time: 12:00  \n📍 Place: SSW Higher School of Social Sciences, Marszałkowska 115, 00-102 Warsaw  \n\nProgramme of the day:  \n1. 12:00 - Meeting of the participants  \n   Our staff and curators will be happy to welcome you to the university.  \n2. 12:30 - Receiving and signing the necessary documents \n   We will help you complete all the formalities quickly and safely.  \n3. 13:30 - Introductory speech  \n   A representative of the university will introduce you to general information\n4. 13:40 - 14:40 - Lecture by the curator, Doctor of Philosophy Mykola Perih  \n\nThe lecture will cover the following topics:  \n   - Adaptation in Europe  \n   - Opportunities and prospects for students  \n   - Further education and practice \n   - Analysis of salary levels and living conditions in European countries  \n\nWe hope that this day will be an important step in your educational journey. If you have any questions or need more information, please do not hesitate to contact us.  \n\nWe are looking forward to seeing you!  '
            }
          </InfoListItemText>
        </InfoListItem>
        <InfoListItem>
          <InfoListItemDate>16.12.2024</InfoListItemDate>
          <InfoListItemText>
            {
              'Dear student! \n \nWe are pleased to welcome you to our LOGISTICS COURSE. Here you will find out more about our programme.\n\nCourse Structure \nDuration: 6 months \nMode of study: Dual \n \nThe course includes: \n • Theoretical Module – conducted online on the e-learning platform. Total number of theoretical hours: 169 hours \n • Practical Module – internships in logistics companies. Total number of practical hours: 576 hours \n • Final Exams – verifying the acquired knowledge and skills.'
            }
          </InfoListItemText>
        </InfoListItem>
      </InfoList>
    </InfoBox>
  );
};
