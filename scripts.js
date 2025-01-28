// Array of PDF filenames (you can manually list them or use a backend to fetch them)
const pdfFiles = [
    "Regnerekkefølgen.pdf",
    "Lineære funksjoner, stigningstall og konstantledd.pdf",
    "Når bruke hvilken trignonomiske setning.pdf"
];

// Get the <ul> element
const pdfList = document.getElementById("pdf-list");

// Loop through the PDF files and create <li> elements
pdfFiles.forEach((file) => {
    const listItem = document.createElement("li");
    const pdfPath = `pdfs/${file}`;

    // Create "View" link
    const viewLink = document.createElement("a");
    viewLink.href = pdfPath;
    viewLink.target = "_blank";
    viewLink.className = "se-knapp";
    viewLink.textContent = `Se: "${file}"`;

    // Create "Download" link
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfPath;
    downloadLink.download = file;
    downloadLink.className = "last-ned-knapp";
    downloadLink.textContent = `Last ned fil`;

    // Add links to the <li>
    listItem.appendChild(viewLink);
    //listItem.appendChild(document.createTextNode(" | "));
    listItem.appendChild(downloadLink);

    // Add <li> to the <ul>
    pdfList.appendChild(listItem);
});