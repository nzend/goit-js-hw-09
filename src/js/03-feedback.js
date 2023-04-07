import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 0));

function onInputChange(evt) {
  const messageForm = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };

  const jsonMessageForm = JSON.stringify(messageForm);
  localStorage.setItem(STORAGE_KEY, jsonMessageForm);
}

populateTextarea();

function populateTextarea() {
  const parseSavedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parseSavedData) {
    refs.textarea.value = parseSavedData.message;
    refs.input.value = parseSavedData.email;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.textarea.value.trim() === '' || refs.input.value.trim() === '') {
    return alert('Please fill in all the fields!');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
