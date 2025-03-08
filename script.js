<!--let studentData = [];

document.getElementById('fileInput').addEventListener('change', handleFile, false);

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        studentData = XLSX.utils.sheet_to_json(worksheet);
        console.log(studentData); // For debugging
    };

    reader.readAsArrayBuffer(file);
}

function generateMarksheet() {
    const rollNo = document.getElementById('rollNo').value;
    const student = studentData.find(s => s['Roll No'] == rollNo);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (student) {
        resultDiv.innerHTML = `
            <h2>Marksheet for ${student.Name}</h2>
            <p>Subject 1: ${student['Subject 1']}</p>
            <p>Subject 2: ${student['Subject 2']}</p>
            <p>Subject 3: ${student['Subject 3']}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p>No data found for this roll number.</p>';
    }
}
-->






let studentData = [];

// Load the Excel file when the page loads
window.onload = function() {
    fetch('marksheet.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            studentData = XLSX.utils.sheet_to_json(worksheet);
            console.log(studentData); // For debugging
        })
        .catch(error => console.error('Error loading the Excel file:', error));
};

function generateMarksheet() {
    const rollNo = document.getElementById('rollNo').value;
    const student = studentData.find(s => s['Roll No'] == rollNo);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (student) {
        resultDiv.innerHTML = `
            <h2>Marksheet for ${student.Name}</h2>
            <p>Subject 1: ${student['Subject 1']}</p>
            <p>Subject 2: ${student['Subject 2']}</p>
            <p>Subject 3: ${student['Subject 3']}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p>No data found for this roll number.</p>';
    }
}