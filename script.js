const inputs = document.getElementsByTagName('input');
const labels = document.getElementsByTagName('label');
const form = document.querySelector('#income_form');
const ageInput = document.querySelector('#age');
const modal = document.getElementById('myModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeBtn = document.querySelector('.close');

function addErrorTooltip(id) {
    const showErrorBtn = document.querySelector(`#${id}_error`);
    const errorTooltip = document.querySelector(`#${id}_error_tooltip`);
    showErrorBtn.addEventListener('mouseenter', () => {
        errorTooltip.style.display = 'block';
    });

    showErrorBtn.addEventListener('mouseleave', () => {
        errorTooltip.style.display = 'none';
    });
}

for (let i = 0; i < inputs.length; i++) {
    const showErrorBtn = document.querySelector(`#${inputs[i].id}_error`);
    inputs[i].addEventListener('keyup', () => {
        if (isNaN(Number(inputs[i].value))) {
            showErrorBtn.style.display = 'block';
        } else {
            showErrorBtn.style.display = 'none';
        }
    });
    addErrorTooltip(inputs[i].id);
}

for (let i = 0; i < labels.length; i++) {
    const infoBtn = document.querySelector(`#${labels[i].id}_info_btn`);
    const tooltip = document.querySelector(`#${labels[i].id}_tooltip`);

    infoBtn.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    infoBtn.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {};
    const inputs = form.querySelectorAll('input, select');
    const showErrorBtn = document.querySelector(`#age_error`);
    if (!ageInput.value) {
        showErrorBtn.style.display = 'block';
        addErrorTooltip(ageInput.id);
        return;
    } else {
        showErrorBtn.style.display = 'none';
    }

    for (let i = 0; i < inputs.length; i++) {
        if (isNaN(Number(inputs[i].value))) return;
        formData[inputs[i].id] = Number(inputs[i].value);
    }

    console.log(formData);

    modal.style.display = 'flex';
    modalBackdrop.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
  }
});
