document.addEventListener("DOMContentLoaded", function() {
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const ticketFormSection = document.getElementById('ticket-form-section');
    const ticketForm = document.getElementById('ticketForm');

    openFormBtn.addEventListener('click', function() {
        ticketFormSection.classList.remove('hidden');
    });

    closeFormBtn.addEventListener('click', function() {
        ticketFormSection.classList.add('hidden');
    });

    ticketForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Ticket Submitted!');
        ticketForm.reset();
        ticketFormSection.classList.add('hidden');
    });
});
