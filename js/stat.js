'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 30;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_DISTANCE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getColor = function (names) {
  if (names === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  return 'rgba(0, 0,' + randomInteger(0, 255) + ', 1)';
};

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH + GAP);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + GAP + (TEXT_WIDTH + FONT_GAP + GAP) * i, CLOUD_HEIGHT);

    ctx.fillStyle = getColor(names[i]);
    ctx.fillRect(CLOUD_X + FONT_GAP + GAP + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT - (TEXT_WIDTH - FONT_GAP) - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + GAP + (TEXT_WIDTH + FONT_GAP + GAP) * i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime);
  }
};
