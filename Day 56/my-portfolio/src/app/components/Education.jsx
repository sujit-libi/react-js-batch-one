const education = [
  {
    year: '2025',
    degree: 'MBA in Finance',
    institution: 'Boston International College',
  },
  {
    year: '2022',
    degree: 'BE in Computer Engineering',
    institution: 'Khwopa Engineering College',
  },
];

function Education() {
  return (
    <>
      <h1 className="text-4xl text-center my-6 font-bold">Education</h1>
      <ul className="timeline  flex justify-around">
        {education.map((edu, index) => (
          <li
            key={index}
            className="border-l-4 border-l-blue-500 pl-4 mb-6 border bg-white p-6 rounded-md"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-gray-600">
              {edu.institution} - {edu.year}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Education;
