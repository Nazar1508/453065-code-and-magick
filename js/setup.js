'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Создаем функцию для генерации случайного элемента массива
var randomArrayGenerator = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return rand;
};

// Создаем функцию для создания случайного волшебника
var createWizard = function (wizardName, wizardSurname, coatColor, eyesColor) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[randomArrayGenerator(wizardName)] + ' ' + WIZARD_SURNAMES[randomArrayGenerator(wizardSurname)];

  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLOR[randomArrayGenerator(coatColor)];

  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLOR[randomArrayGenerator(eyesColor)];

  return wizardElement;
};

// Создаем фрагмент
var fragment = document.createDocumentFragment();

// Добавляем в фрагмент четырех волшебников
for (var i = 0; i < 4; i++) {
  fragment.appendChild(createWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR));
}

// Добавляем фрагмент в DOM
similarListElement.appendChild(fragment);
