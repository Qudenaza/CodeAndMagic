'use strict';

var userDialog = document.querySelector('.setup'),
    similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
    similarListElement = document.querySelector('.setup-similar-list'),
    WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'],
    wizards = [
      {         
        name: randomProperty(WIZARD_NAMES) + ' ' + randomProperty(WIZARD_SURNAMES),
        coatColor: randomProperty(COAT_COLOR),
        eyesColor: randomProperty(EYES_COLOR)
      },
      {
        name: randomProperty(WIZARD_NAMES) + ' ' + randomProperty(WIZARD_SURNAMES),
        coatColor: randomProperty(COAT_COLOR),
        eyesColor: randomProperty(EYES_COLOR)
      },
      {
        name: randomProperty(WIZARD_NAMES) + ' ' + randomProperty(WIZARD_SURNAMES),
        coatColor: randomProperty(COAT_COLOR),
        eyesColor: randomProperty(EYES_COLOR)
      },
      {
        name: randomProperty(WIZARD_NAMES) + ' ' + randomProperty(WIZARD_SURNAMES),
        coatColor: randomProperty(COAT_COLOR),
        eyesColor: randomProperty(EYES_COLOR)
      }
];

document.querySelector('.setup-similar').classList.remove('hidden');

// Функции

// Функция возвращает случайный элемент массива arr
function randomProperty(arr) {
   return arr[randomInteger(arr.length - 1)];
}

// Функция поиска случайного значения от нуля до max
function randomInteger(max) {
    var rand = Math.floor(0 + Math.random() * (max + 1 - 0));

    return rand;
};

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

userDialog.classList.remove('hidden');
