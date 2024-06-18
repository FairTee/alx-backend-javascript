const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const students = lines.slice(1);

            if (students.length === 0) {
                reject(new Error('No students found in the database'));
                return;
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

            resolve();
        });
    });
}

module.exports = countStudents;
