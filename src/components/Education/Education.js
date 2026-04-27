import data from "../../components/data/data";
import "../Education/Education.css";

const Education = () => {
  return `
    <section class="education">
      <h2>Education</h2>

      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.graduationYear}</p>

      <h3>Relevant Courses</h3>

      <ul class="relevantcourses">
        ${data.education.relevantCourses
          .map((course) => `<li><p>${course}</p></li>`)
          .join("")}
      </ul>
    </section>
  `;
};

export default Education;
