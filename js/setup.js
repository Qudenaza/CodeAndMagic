'use strict';

(function() {
// Переменные и константы
var userNameInput = document.querySelector('.setup-user-name'),
    wizardCoat = document.querySelector('.wizard-coat'),
    wizardEyes = document.querySelector('.wizard-eyes'),
    wizardFireball = document.querySelector('.setup-fireball-wrap'),
    similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
    similarListElement = document.querySelector('.setup-similar-list'),
    WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    wizards = [
      {         
        name: window.util.randomProperty(WIZARD_NAMES) + ' ' + window.util.randomProperty(WIZARD_SURNAMES),
        coatColor: window.util.randomProperty(COAT_COLOR),
        eyesColor: window.util.randomProperty(EYES_COLOR)
      },
      {
        name: window.util.randomProperty(WIZARD_NAMES) + ' ' + window.util.randomProperty(WIZARD_SURNAMES),
        coatColor: window.util.randomProperty(COAT_COLOR),
        eyesColor: window.util.randomProperty(EYES_COLOR)
      },
      {
        name: window.util.randomProperty(WIZARD_NAMES) + ' ' + window.util.randomProperty(WIZARD_SURNAMES),
        coatColor: window.util.randomProperty(COAT_COLOR),
        eyesColor: window.util.randomProperty(EYES_COLOR)
      },
      {
        name: window.util.randomProperty(WIZARD_NAMES) + ' ' + window.util.randomProperty(WIZARD_SURNAMES),
        coatColor: window.util.randomProperty(COAT_COLOR),
        eyesColor: window.util.randomProperty(EYES_COLOR)
      }
];

document.querySelector('.setup-similar').classList.remove('hidden');

// Функции

wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = window.util.randomProperty(COAT_COLOR);
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = window.util.randomProperty(EYES_COLOR);
});

wizardFireball.addEventListener('click', function() {
  wizardFireball.style.backgroundColor = window.util.randomProperty(FIREBALL_COLOR);
});


// Обработчик события проверки валидности поля ввода имени 
userNameInput.addEventListener('invalid', function(e) {
  e.preventDefault();
  if(userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if(userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if(userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  };
});


// Функция отрисовки мага
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

// Создаем пустой фрагмент
var fragment = document.createDocumentFragment();

// И помещаем в него четырех магов
for(var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

// Помещаем магов на страницу
similarListElement.appendChild(fragment);

var shopElement = document.querySelector('.setup-artifacts-shop'),
    draggedItem = null,
    artifactsElement = document.querySelector('.setup-artifacts');

shopElement.addEventListener('dragstart', function(e) {
  if(e.target.localName === 'img') {
    draggedItem = e.target.cloneNode();
    e.dataTransfer.setData('text/plain', e.target.alt);
  };
});

artifactsElement.addEventListener('dragover', function(e) {
  e.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function(e) {
  e.target.style.backgroundColor = '';
  e.target.style.border = '';
  e.preventDefault();
  if(!e.srcElement.firstChild && e.srcElement.localName !== 'img') {
    e.target.appendChild(draggedItem);
  } else {
    throw new Error('Ячейка занята!')
  }
});

artifactsElement.addEventListener('dragenter', function(e) {
    e.target.style.backgroundColor = 'yellow';
    e.target.style.border = '2px solid red';
    e.preventDefault();
});

artifactsElement.addEventListener('dragleave', function(e) {
  e.target.style.backgroundColor = '';
  e.target.style.border = '';
  e.preventDefault();
});
})();