const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);

        if (students.length === 0) {
            throw new Error('No students found in the database');
        }

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach(student => {
            const [firstname, , , field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        for (const field in fields) {
            if (fields.hasOwnProperty(field)) {
                const list = fields[field].join(', ');
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
