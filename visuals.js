const fontPairs = [
  ['Merriweather','Inter','Merriweather','Inter','a'],
  ['Montserrat','PT Sans','Montserrat','PT Sans','b'],
  ['Playfair Display','Playfair','Playfair Display','Playfair','c'],
  ['Lora','Roboto','Lora','Roboto','d'],
  ['Advent Pro','Oswald','Advent Pro','Oswald','e'],
  ['Comfortaa','Geologica','Comfortaa','Geologica','f']
];
function fontBoard(pairs) {
  return '<figure class="study-figure"><div class="font-board">' + pairs.map(([left,right,headline,body,tone]) =>
    '<div class="type-sample type-' + tone + '" style="--headline:&quot;' + headline + '&quot;;--body:&quot;' + body + '&quot;"><small>' + left + ' + ' + right + '</small><strong>Шрифт для заголовка</strong><b>Шрифт для подзаголовка</b><span>Пример основного текста. Сравните форму букв, размер и читаемость.</span></div>'
  ).join('') + '</div></figure>';
}
const appGroups = [
  ['Цветокоррекция','Lightroom','Snapseed'],['Удаление фона','Bazaart','Meitu','MagicEraser'],
  ['Фильтры','PRFCT','VSCO','Suxov'],['Нейросети','ChatGPT','GPTPal'],
  ['Истории / вертикальные видео','Instories','Mojo','Unfold','Storius','Clay','Studio','Лето.Шрифты'],['Видеоэффекты','PREQUEL'],
  ['Монтаж','CapCut','VN'],['Дизайн для веба','Canva'],['Вдохновение','Pinterest','Canva'],
  ['Стикеры','Picsart','Bazaart'],['Поиск фрагментов','Vlipsy']
];
const appBoard = '<figure class="study-figure app-board"><h4>Чек-лист приложений</h4><div class="app-grid">' + appGroups.map(([title,...names]) => '<div><strong>' + title + '</strong><ul>' + names.map(name=>'<li>'+name+'</li>').join('') + '</ul></div>').join('') + '</div></figure>';
const hookRows = [
  ['Главная ошибка, которая мешает тебе + (цель)','Ты делаешь это неправильно, и я говорю про + (тема)','5 минут в день, и ты + (выгода)','Секрет, о котором молчат все + (ниша)'],
  ['Что будет, если ты перестанешь + (ошибка ЦА)','Как один простой шаг изменит твой + (результат)','Люди, которые + (цель), всегда делают это','Этот трюк поможет тебе + (потребность) в 2 раза быстрее'],
  ['Вот почему у тебя не получается + (цель)','Лучшая привычка для + (выгода), которую ты упускаешь','Почему ты до сих пор не + (результат)? Ошибка № 1','Что делать, если ты не знаешь, как + (проблема)'],
  ['Как я исправил свою самую большую ошибку в + (тема)','Этот метод сэкономит тебе + (ресурс: время, деньги, нервы)','Существует только один способ + (потребность), и вот он','Как понять, что ты на верном пути к + (цель)'],
  ['Топ-3 мифа о + (ниша), в которые ты веришь','Не делай этого, если хочешь + (результат)','Всего один маленький шаг, и ты + (цель)','Как я начал делать + (действие) в 2 раза быстрее']
];
const hookBoard = '<figure class="study-figure hook-board"><h4>20 фраз для начала ролика</h4><div class="table-wrap" role="region" tabindex="0" aria-label="Таблица из 20 хуков"><table aria-label="20 шаблонов хуков"><tbody>' + hookRows.map(row => '<tr>'+row.map(hook=>'<td>'+hook+'</td>').join('')+'</tr>').join('') + '</tbody></table></div></figure>';
const vkAssets = [
 ['Главная обложка','1920 × 768','cover','Заголовок и логотип ближе к центру'],
 ['Живая обложка','1080 × 1920','vertical','Полоса 850 px · по 115 px с боков'],
 ['Пункт меню','376 × 256','menu','Минимальный размер'],
 ['Сниппет','1:1 или 5:2','snippet','Ширина от 500 px'],
 ['Фотоальбом','1200 × 800','album','Нижние 200 px могут скрываться'],
 ['Товар','1000 × 1000','product','Квадратная карточка'],
 ['Видео','1280 × 720','video','Ориентир для горизонтального видео'],
 ['История','720 × 1280','vertical','1080 × 1920 для рабочего макета']
];
const vkBoard = '<figure class="study-figure"><div class="vk-board">' + vkAssets.map(([title,size,shape,note])=>'<div><strong>'+title+'</strong><div class="asset-stage"><span class="asset asset-'+shape+'">'+size+'</span></div><small>'+note+'</small></div>').join('') + '</div></figure>';
function fitnessStory(photo, title, copy) {
  return '<div class="fitness-story" style="--photo:url(\'fitness-'+photo+'.webp\')"><strong>'+title+'</strong><span>'+copy+'</span></div>';
}
const fitnessBoards = '<figure class="study-figure"><div class="story-grid">' + [
  [1,'Твоё тело','Поддерживайте привычки, которые вам подходят'],
  [2,'Дисциплина','Выберите направление, в которое хочется возвращаться'],
  [3,'Приходите вдвоём','Два гостевых занятия по условиям клуба'],
  [4,'Body Reset','Новая программа · три занятия в неделю']
].map(args=>fitnessStory(...args)).join('') + '</div><figcaption><b>Промосерия.</b> В каждом кадре один главный заголовок. Жёлтый акцент выделяет условия, тёмная подложка сохраняет контраст.</figcaption></figure>'
+ '<figure class="study-figure"><div class="fitness-mosaic">' + [9,'Начните с одного шага',7,8,4,6,1,'Вы можете',2].map(item=>typeof item==='number' ? '<img src="fitness-'+item+'.webp" alt="Фотография для визуальной сетки фитнес-клуба" loading="lazy" width="480" height="480">' : '<div>'+item+'</div>').join('') + '</div><figcaption><b>Визуальная сетка.</b> Графитовые фото, синий акцент и светлые текстовые карточки объединяют разные сюжеты. Такой набор можно использовать как ориентир для обложек и ленты.</figcaption></figure>'
+ '<figure class="study-figure"><div class="story-grid education-stories">' + [
 [5,'Первый визит в зал','На стойке подскажут, куда идти'],
 [6,'Начните с разминки','Выберите знакомые движения'],
 [8,'Настройте тренажёр','Попросите тренера показать посадку']
].map(args=>fitnessStory(...args)).join('')+'</div><figcaption><b>Образовательная серия.</b> Первый кадр обещает помощь с конкретной ситуацией, следующие разбивают объяснение на понятные шаги.</figcaption></figure>';
const actionStory = '<figure class="study-figure"><div class="single-story" style="--photo:url(&quot;fitness-5.webp&quot;)"><strong>Ваш первый визит в зал</strong><span>Выберите удобное время</span><span>Возьмите форму и воду</span><b>Посмотреть расписание</b></div></figure>';
const retentionBoard = '<figure class="study-figure retention-board"><div><small>Охват</small><strong>8 000</strong><span>Уникальные зрители</span></div><div><small>Удержание</small><strong>54%</strong><span>Остались на 3-й секунде</span></div><div><small>Действия</small><strong>160</strong><span>Реакции, комментарии и репосты</span></div><figcaption>Условные данные. Охват показывает масштаб, удержание отвечает за просмотр, действия — за отклик.</figcaption></figure>';
