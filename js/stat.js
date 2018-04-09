'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Константы
const GISTOGRAM_HEIGHT = 150,
      GISTOGRAM_WIDTH = 40,
      GISTOGRAM_SPACE = 50,
      CLOUD_PADDING = 55,
      CLOUD_X = 100,
      CLOUD_Y = 10,
      CLOUD_WIDTH = 420,
      CLOUD_HEIGHT = 280,
      FONT_SIZE = '16px',
      FONT_FAMILY = 'PT Mono',
      MAX_TIME = Math.max.apply(null, times),
      MAX_TIME_INDEX = times.indexOf(MAX_TIME),
      RANDOM_NUM = +(0.5 + Math.random() * (1 - 0.5)).toFixed(1);

  // Функции
  var renderCloud = function(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.strokeRect(x, y, width, height);
    ctx.fillRect(x, y, width, height);
  };

  var printText = function (text, x, y, font, color, align) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textAlign = align;
    ctx.fillText(text, x, y);
  };

  var renderBar = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  // Отрисовка облака
  renderCloud(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT,'rgba(0, 0, 0, 0.7)');
  renderCloud(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  // Отрисовка текста о победе
  printText('Ура, вы победили!', 120, 40, FONT_SIZE + FONT_FAMILY, '#000', 'left');
  printText('Cписок результатов: ', 120, 60, FONT_SIZE + FONT_FAMILY, '#000', 'left');
  printText(`Худшее время: ${+(MAX_TIME / 1000).toFixed(2)} сек у игрока ${names[MAX_TIME_INDEX]}`, 120, 80, FONT_SIZE + FONT_FAMILY, '#000', 'left');

  // Гистограмма

  for (var i = 0; i < names.length; i++) {
    var step = Math.round(times[i]) * GISTOGRAM_HEIGHT / MAX_TIME,
        barMarginTop = GISTOGRAM_HEIGHT - step,  
        gistogramColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : `rgba(70, 130, 180, ${RANDOM_NUM})`,
        coordX = CLOUD_X + CLOUD_PADDING + (GISTOGRAM_WIDTH + GISTOGRAM_SPACE) * i;

    renderBar(coordX, 45 + barMarginTop + 20 * 4, GISTOGRAM_WIDTH, step, gistogramColor);
    printText(names[i], coordX + GISTOGRAM_WIDTH / 2, 110, FONT_SIZE + FONT_FAMILY, '#000', 'center');
  }

};

