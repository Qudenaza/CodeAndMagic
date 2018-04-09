'use strict';
var cloudX = 100,
    cloudY = 10,
    cloudWidth = 420,
    cloudHeight = 270;
    

window.renderStatistics = function(ctx, names, times) {
  // Тень под белым прямоугольником
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(cloudX + 10, cloudY + 10, cloudWidth, cloudHeight);
  ctx.fillRect(cloudX + 10, cloudY + 10, cloudWidth, cloudHeight);

  // Белый прямоугольник с результатами
  ctx.fillStyle = 'white';
  ctx.strokeRect(cloudX, cloudY, cloudWidth, cloudHeight);
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);
  
  // Надпись о победе
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  /*
   max - максимальное значение в массиве times, 
   me - моя позиция в массиве names,
   c - случайное число для определение прозрачности
  */
  var max = Math.max.apply(null, times),
      maxIndex = times.indexOf(max),
      histogramWidth = 150,
      step = histogramWidth / (max - 0),
      randomNum = +(0.5 + Math.random() * (1 - 0.5)).toFixed(1);
  
  function printText() {

  }    
// Надпись о худшем времени
  ctx.fillText('Худшее время: ' + max.toFixed(0) + ' мс у игрока ' + names[maxIndex], 120, 80);

// Меняем цвет на синий с случайной прозрачностью  
  ctx.fillStyle = `rgba(70, 130, 180, ${randomNum})`;

// Цикл отрисовывает имена и колонки с временем
  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(120 + 50 * i, 80, times[i] * step, 20);
    ctx.fillText(names[i], 130 + histogramWidth, 100 + 15 + 50 * i); 
    // Отрисовка красным цветом моей колонки
    if(names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(120, 100 + 50 * i, times[i] * step, 20);
      ctx.fillText(names[i], 130 + histogramWidth, 100 + 15 + 50 * i);
      ctx.fillStyle = `rgba(70, 130, 180, ${randomNum})`;
      continue;
    }
  }
} 