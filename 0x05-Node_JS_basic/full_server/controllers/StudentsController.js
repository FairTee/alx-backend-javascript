import readDatabase from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const databasePath = process.argv[2];
            const students = await readDatabase(databasePath);
            const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            
            let responseText = 'This is the list of our students\n';
            responseText += `Number of students: ${Object.values(students).reduce((a, b) => a + b.length, 0)}\n`;
            
            fields.forEach(field => {
                responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });

            res.status(200).send(responseText);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        try {
            const databasePath = process.argv[2];
            const { major } = req.params;

            if (major !== 'CS' && major !== 'SWE') {
                res.status(500).send('Major parameter must be CS or SWE');
                return;
            }

            const students = await readDatabase(databasePath);
            if (!students[major]) {
                res.status(200).send('List: ');
                return;
            }

            res.status(200).send(`List: ${students[major].join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default StudentsController;
