'use strict';

var userDialog = document.querySelector('.setup'),
    popupOpen = document.querySelector('.setup-open'),
    popupOpenIcon = popupOpen.querySelector('.setup-open-icon'),
    popupClose = document.querySelector('.setup-close'),
    userNameInput = userDialog.querySelector('.setup-user-name'),
    KEY_ESC = 27,
    KEY_ENTER = 13,
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

function onPopupEscPress(e) {
  if(e.keyCode === KEY_ESC) {
    closePopup();
  };
};

function openPopup() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

function closePopup() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

popupOpen.addEventListener('click', function() {
  openPopup();
});


popupOpenIcon.addEventListener('keydown', function(e) {
  if(e.keyCode === KEY_ENTER) {
    openPopup();
  }
});

popupClose.addEventListener('click', function() {
  userDialog.classList.add('hidden');
});

popupClose.addEventListener('keydown', function(e) {
  if(e.keyCode === KEY_ENTER) {
    closePopup();
  };
});

wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = randomProperty(COAT_COLOR);
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = randomProperty(EYES_COLOR);
});

wizardFireball.addEventListener('click', function() {
  wizardFireball.style.backgroundColor = randomProperty(FIREBALL_COLOR);
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

