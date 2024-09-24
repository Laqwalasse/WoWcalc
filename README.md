# WoWcalc

Проект делался вместе с [Gottfr1ed](https://github.com/Gottfr1ed)

**LINK:** https://docs.google.com/spreadsheets/d/1zn8SRW_emkZvs2q2L4hWa5ybwenzDhxKQxbYrNKio-k/edit?gid=0#gid=0

Applicable to expansions: WotLK (preferably), BC, and Classic. For expansions starting from Cataclysm, it is necessary to add new stat types. Overall, you have all the source materials, and if desired, you can work on this.

Применим к дополнениям: WotLK (предпочтительно), BC и Classic. Для дополнений начиная от Cataclysm необходимо добавлять новые типы характеристик. В целом, у вас есть все исходники и при желании вы можете этим заняться.

## ENGLISH

**Requirements for the table to work:**

1. Fill in the correlation table of stats on the left (it might be hidden by grouping). This is entirely subjective; there might be a way to mathematically justify the numbers, but we haven't done that. Start with the main stat for the current build, such as Agility, and set its value to "1". All other stats should either be equal to 1 or greater than 1. If a stat is useless, set it to 0.

2. Enter the item ID. You can find it via the item URL on wowhead.com/wotlk, for example: [https://www.wowhead.com/wotlk/item=47239/archon-glaive](https://www.wowhead.com/wotlk/item=47239/archon-glaive); where the number (47239) after "item=" and before the first slash "/" is the item ID. Alternatively, you can download the ItemID addon ([WowInterface](https://www.wowinterface.com/downloads/info22048-ItemID.html) or [CurseForge](https://www.curseforge.com/wow/addons/project-3985)).

![item ID](https://github.com/user-attachments/assets/1c3aa9f3-dc75-47f7-8f19-109b346d2585)


![put ID](https://github.com/user-attachments/assets/77d670ff-e697-4f73-97e4-ea98ee859561)


It's better to create a separate sheet for each build by duplicating the existing one.

Each socket slot is automatically assigned a maximum value of 20 points. If the item has at least 1 socket, an additional 4 points are awarded for the socket bonus. The 4 points are the minimum (range 4-8), as we do not always socket according to the colors.

The XML link is not needed for users; it's for developers. However, those who are curious can explore the scripts in Google Apps Script along with the XML file and formulas to understand how the document works.

## РУССКИЙ (RUSSIAN)

**Для работы таблицы требуется:**

1. Заполнить слева таблицу корреляций статов (может быть скрыта группировкой). Тут всё абсолютно субъективно, может быть и можно вывести математическое обоснование под цифры, но мы этим не занимались. Берём самый главный стат для текущего билда, например ловкость (agility), ставим ему значение "1". Все остальные статы должны быть либо =1, либо >1. Если стат бесполезный, то ставим ему "0".

2. Заполнить айди предмета. Достать его можно через URL айтема на wowhead.com/wotlk, например: [https://www.wowhead.com/wotlk/item=47239/archon-glaive](https://www.wowhead.com/wotlk/item=47239/archon-glaive); где цифры (47239) после "item=" и до первого слэша "/" будет айди предмета. Либо можно скачать ItemID аддон ([WowInterface](https://www.wowinterface.com/downloads/info22048-ItemID.html) или [CurseForge](https://www.curseforge.com/wow/addons/project-3985)).

Для каждого отдельного билда лучше создавать отдельный лист через дублирование.

Каждому слоту сокетов автоматически присваивается максимальное значение в 20 баллов. Если у предмета есть хоть 1 сокет, то появляются дополнительные 4 балла за сокет бонус. 4 балла — это минималка (диапазон 4-8), так как не всегда мы вставляем сокеты по цветам.

Ссылка на XML пользователям не нужна, она для разработчиков. Но отдельные любопытные могут полазить и на основе скриптов в Google Apps Script + XML файла + формул, понять, как работает документ.
