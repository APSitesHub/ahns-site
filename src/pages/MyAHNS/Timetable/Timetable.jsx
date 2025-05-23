import { useState } from 'react';
import eyesImg from '../../../img/quiz/eyes.png';
import { CalendarIcon } from '../Attendance/Attendance.styled';
import {
  EyesEmoji,
  PointsPlaceHolder,
  PointsPlaceHolderText,
} from '../Points/Points.styled';
import {
  TimetableBody,
  TimetableBox,
  TimetableDaysCell,
  TimetableDaysItem,
  TimetableHead,
  TimetableHeading,
  TimetableLessonLink,
  TimetableLessonLinkText,
  TimetableLessonType,
  TimetableTable,
  TimetableWebinars,
  TimetableWebinarsHead,
} from './Timetable.styled';

export const Timetable = ({ user, timetable }) => {
  //eslint-disable-next-line
  const [isAnimated, setIsAnimated] = useState(false);
  //eslint-disable-next-line
  const [marathonId, setMarathonId] = useState('92768');
  //eslint-disable-next-line
  const [personalTimetable, setPersonalTimetable] = useState(
    timetable.find(timeline => marathonId === timeline.marathon)
  );

  // const changeTimetable = () => {
  //   setIsAnimated(true);
  //   setMarathonId(marathonId => (marathonId === '92768' ? '79231' : '92768'));
  //   setPersonalTimetable(
  //     personalTimetable =>
  //       (personalTimetable = timetable.find(timeline =>
  //         marathonId === '92768'
  //           ? '79231' === timeline.marathon
  //           : '92768' === timeline.marathon
  //       ))
  //   );
  //   setTimeout(() => {
  //     setIsAnimated(false);
  //   }, 3000);
  // };

  const getLink = () => {
    const baseStreamUrl = 'https://ahns.ap.education/lesson/';

    return marathonId.includes('92768') && baseStreamUrl + 'online';
  };

  const link = getLink();

  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <TimetableBox style={{ top: '142px' }}>
      <TimetableHeading>
        <CalendarIcon />
        Class schedule
        {/* {user.group !== '2' && (
          <TimetableChangeCourseBtn onClick={changeTimetable}>
            <TimetableChangeCourseBtnText>
              Change course
            </TimetableChangeCourseBtnText>
          </TimetableChangeCourseBtn>
        )} */}
      </TimetableHeading>
      {!personalTimetable ? (
        <PointsPlaceHolder>
          <EyesEmoji src={eyesImg} alt="Eyes emoji" width="80" />
          <PointsPlaceHolderText>
            Looking for your schedule!
          </PointsPlaceHolderText>
          <PointsPlaceHolderText>
            Please, try again later!
          </PointsPlaceHolderText>
        </PointsPlaceHolder>
      ) : (
        <TimetableBody>
          <TimetableWebinars>
            <TimetableWebinarsHead>
              <TimetableLessonType
                className={isAnimated ? 'animated' : undefined}
              >
                {/* {marathonId.includes('92768')
                  ? 'Logistics'
                  : 'Preparation Course'} */}
                Online Course
              </TimetableLessonType>
              <TimetableLessonLink href={link} target="_blank">
                <TimetableLessonLinkText>Go to lesson</TimetableLessonLinkText>
              </TimetableLessonLink>
            </TimetableWebinarsHead>
            <TimetableTable>
              <thead>
                <tr>
                  <TimetableHead className="day">Day</TimetableHead>
                  <TimetableHead className="time">Time</TimetableHead>
                  <TimetableHead className="lessonNumber">
                    Lesson №
                  </TimetableHead>
                  <TimetableHead className="topic">Topic</TimetableHead>
                </tr>
              </thead>
              <tbody>
                {personalTimetable.schedule
                  .filter(
                    lesson =>
                      lesson.type.toLowerCase() === 'webinar' ||
                      lesson.type.toLowerCase() === 'webinar, repeat'
                  )
                  .sort((a, b) => a.day - b.day)
                  .map((lesson, i) => (
                    <TimetableDaysItem
                      key={i}
                      style={
                        lesson.day === new Date().getDay()
                          ? { backgroundColor: '#D6C38580' }
                          : {}
                      }
                    >
                      <TimetableDaysCell className="day">
                        {DAYS[lesson.day - 1]}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="time">
                        {lesson.time}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="lessonNumber">
                        {lesson.lessonNumber}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="topic">
                        {lesson.topic}
                      </TimetableDaysCell>
                    </TimetableDaysItem>
                  ))}
              </tbody>
            </TimetableTable>
          </TimetableWebinars>{' '}
          {/* <TimetableSpeakings>
            <TimetableWebinarsHead>
              <TimetableLessonType>Practice online</TimetableLessonType>
              <TimetableLessonLink href={speakingLink} target="_blank">
                <TimetableLessonLinkText>Go to lesson</TimetableLessonLinkText>
              </TimetableLessonLink>
            </TimetableWebinarsHead>
            <TimetableTable>
              <thead>
                <tr>
                  <TimetableHead className="day">Day</TimetableHead>
                  <TimetableHead className="time">Time</TimetableHead>
                  <TimetableHead className="lessonNumber">
                    Lesson №
                  </TimetableHead>
                  <TimetableHead className="teacher">Teacher</TimetableHead>
                </tr>
              </thead>
              <tbody>
                {personalTimetable.schedule
                  .filter(lesson => lesson.type === 'speaking')
                  .sort((a, b) => a.day - b.day)
                  .map((lesson, i) => (
                    <TimetableDaysItem
                      key={i}
                      style={
                        lesson.day === new Date().getDay()
                          ? { backgroundColor: '#F9C838' }
                          : {}
                      }
                    >
                      <TimetableDaysCell className="day">
                        {DAYS[lesson.day - 1]}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="time">
                        {lesson.time}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="lessonNumber">
                        {lesson.lessonNumber}
                      </TimetableDaysCell>
                      <TimetableDaysCell className="teacher">
                        {lesson.teacher}
                      </TimetableDaysCell>
                    </TimetableDaysItem>
                  ))}
              </tbody>
            </TimetableTable>
          </TimetableSpeakings> */}
        </TimetableBody>
      )}
    </TimetableBox>
  );
};
