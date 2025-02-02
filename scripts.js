// Array of PDF filenames (you can manually list them or use a backend to fetch them)
const pdfFiles = [
    {
        name: "Regnerekkefølgen",
        file: "Regnerekkefølgen.pdf"
    },
    {
        name: "Potens og kvadratrot (ikke ferdig)",
        file: "Potens, kvadratrot og kvadrattall.pdf"
    },
    {
        name: "Lineære funksjoner, stigningstall og konstantledd (ikke ferdig)",
        file: "Lineære funksjoner, stigningstall og konstantledd.pdf"
    },
    {
        name: "Avstanden mellom sola og jorda",
        file: "PDF - Fysikk - Avstand mellom jorda og sola.pdf"
    },
    {
        name: "Når bruke hvilken trignonomiske setning",
        file: "Når bruke hvilken trignonomiske setning.pdf"
    }
];

// Get the <ul> element
const pdfList = document.getElementById("pdf-list");

// Loop through the PDF files and create <li> elements
pdfFiles.forEach((info) => {
    const file = info.file;
    const name = info.name;
    const listItem = document.createElement("li");
    const pdfPath = `pdfs/${file}`;

    // Create "View" link
    const viewLink = document.createElement("a");
    viewLink.href = pdfPath;
    viewLink.target = "_blank";
    viewLink.className = "se-knapp";
    viewLink.textContent = `Se: "${name}"`;

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