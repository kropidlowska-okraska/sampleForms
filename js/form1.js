function init() {

    const checkbox = document.getElementById("invoice");
    const invoiceData = document.getElementById("invoiceData");

    toggleInvoiceData();

    checkbox.addEventListener("change", toggleInvoiceData);

    function toggleInvoiceData() {
        if (checkbox.checked === true) {
            invoiceData.classList.remove("hidden");
        }
        if (checkbox.checked === false) {
            invoiceData.classList.add("hidden");
        }
    }
}

document.addEventListener("DOMContentLoaded", init);