function getSocketValue(id, socketNumber) {
  var url = 'https://www.wowhead.com/wotlk/item=' + id + '&xml';
  var response = UrlFetchApp.fetch(url);
  var xmlContent = response.getContentText();
  var document = XmlService.parse(xmlContent);
  var root = document.getRootElement();
  var jsonEquipElement = root.getChild('item').getChild('jsonEquip');

  if (jsonEquipElement) {
    var jsonEquipContent = jsonEquipElement.getText().trim();
    var jsonData = JSON.parse('{' + jsonEquipContent + '}');

    var socketKey = 'socket' + socketNumber; // Формируем ключ для поиска нужного сокета
    if (jsonData.hasOwnProperty(socketKey)) {
      var socketValue = jsonData[socketKey];
      Logger.log("The value of " + socketKey + " is: " + socketValue);
      return socketValue;
    } else {
      Logger.log(socketKey + " not found");
      return '';
    }
  } else {
    Logger.log("No jsonEquip content found");
    return '';
  }
}
