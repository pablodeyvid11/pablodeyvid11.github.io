function test() {
    const customHTML = `
    <div style="text-align: center;">
        <h2>Blockchain</h2>
        <p>Custom message goes here.</p>
    </div>
`;

    // Display SweetAlert with personalized HTML
    Swal.fire({
        html: customHTML,
        confirmButtonText: 'OK',
    });
}