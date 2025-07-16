document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !phone || !date || !message) {
      msg.textContent = 'Please fill in all required fields.';
      msg.style.color = 'red';
      return;
    }

    // Simulate async submission
    msg.textContent = 'Sending...';
    msg.style.color = '#004d40';

    setTimeout(() => {
      msg.textContent = '✅ Appointment request sent successfully!';
      msg.style.color = 'green';
      form.reset();
    }, 1000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const serviceDetails = {
    "Heart Disease": "We offer advanced diagnosis and treatment for heart-related conditions.",
    "Blood Pressure": "Monitoring and controlling high/low blood pressure through expert care.",
    "Kidney Disorders": "Nephrology services for acute and chronic kidney conditions.",
    "Liver Diseases": "Liver function tests, hepatitis treatment, and more.",
    "Lung Issues": "COPD, asthma, and other pulmonary care services.",
    "Joint Pain / Arthritis": "Relief and therapy for joint pain and inflammatory arthritis.",
    "Thyroid Treatment": "Treatment for hypo/hyperthyroidism and hormonal disorders.",
    "Diabetes": "Comprehensive diabetes management with diet and medication.",
    "Chest Pain": "Emergency and regular diagnosis for chest-related symptoms.",
    "Epileptic Seizures": "Neurological care and medications for seizure control.",
    "Dengue": "Supportive care and platelet management for dengue patients.",
    "Malaria": "Diagnosis, prevention, and treatment for malaria cases.",
    "Hepatitis": "Screening and management of hepatitis A, B, C infections.",
    "Normal Delivery": "Safe and expert gynecological services for childbirth."
  };

  const cards = document.querySelectorAll('.service-card');
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');
      modalTitle.textContent = service;
      modalDesc.textContent = serviceDetails[service] || "Details coming soon.";
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

