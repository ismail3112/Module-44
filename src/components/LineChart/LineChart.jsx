import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        {
          student: "Student 1",
          math: 85,
          science: 78,
          english: 92,
          history: 88,
          geography: 70,
        },
        {
          student: "Student 2",
          math: 78,
          science: 76,
          english: 88,
          history: 85,
          geography: 72,
        },
        {
          student: "Student 3",
          math: 92,
          science: 89,
          english: 94,
          history: 91,
          geography: 85,
        },
        {
          student: "Student 4",
          math: 88,
          science: 85,
          english: 90,
          history: 78,
          geography: 92,
        },
        {
          student: "Student 5",
          math: 70,
          science: 65,
          english: 72,
          history: 75,
          geography: 68,
        },
        {
          student: "Student 6",
          math: 95,
          science: 92,
          english: 98,
          history: 89,
          geography: 93,
        },
        {
          student: "Student 7",
          math: 83,
          science: 80,
          english: 87,
          history: 79,
          geography: 81,
        },
        {
          student: "Student 8",
          math: 89,
          science: 87,
          english: 91,
          history: 86,
          geography: 88,
        },
        {
          student: "Student 9",
          math: 76,
          science: 72,
          english: 80,
          history: 74,
          geography: 78,
        },
        {
          student: "Student 10",
          math: 91,
          science: 88,
          english: 93,
          history: 90,
          geography: 86,
        },
      ];
      
      

    return (
        <div>
            <LChart width={500} height={400} data={studentMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey="science" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;