import './styles.css'
import { BackgroundModule } from './modules/background.module';
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';

// Создаем экземпляр контекстного меню
const contextMenu = new ContextMenu();

// Создаем и добавляем модули в контекстное меню
const randomBackgroundModule = new BackgroundModule('Рандомный цвет фона');
const timerModule = new TimerModule('Таймер');
const shapeModule = new ShapeModule('Рандомная фигура')

contextMenu.add(randomBackgroundModule);
contextMenu.add(timerModule);
contextMenu.add(shapeModule);

// Обработчик события клика правой кнопкой мыши
document.body.addEventListener('contextmenu', event => {
  event.preventDefault();
  const x = event.clientX;
  const y = event.clientY;
  contextMenu.open(x, y);
});

// Закрытие контекстного меню при клике вне него
document.body.addEventListener('click', event => {
  if (contextMenu.isOpen && event.target.offsetParent !== contextMenu.el) {
    contextMenu.close();
  }
});
