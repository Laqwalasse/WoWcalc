function socket1(id) {
  var url = 'https://www.wowhead.com/wotlk/item=' + id + '&xml';
  var response = UrlFetchApp.fetch(url);
  var xmlContent = response.getContentText();
  var document = XmlService.parse(xmlContent);
  var root = document.getRootElement();
  var jsonEquipElement = root.getChild('item').getChild('jsonEquip');

  if (jsonEquipElement) {
    var jsonEquipContent = jsonEquipElement.getText().trim();
    var jsonData = JSON.parse('{' + jsonEquipContent + '}');

    if (jsonData.hasOwnProperty('socket1')) {
      var socketValue = jsonData['socket1'];
      Logger.log("The value of socket1 is: " + socketValue);
      return socketValue;
    } else {
      Logger.log("socket1 not found");
      return '';
    }
  } else {
    Logger.log("No jsonEquip content found");
    return '';
  }
}

function socket2(id) {
  var url = 'https://www.wowhead.com/wotlk/item=' + id + '&xml';
  var response = UrlFetchApp.fetch(url);
  var xmlContent = response.getContentText();
  var document = XmlService.parse(xmlContent);
  var root = document.getRootElement();
  var jsonEquipElement = root.getChild('item').getChild('jsonEquip');

  if (jsonEquipElement) {
    var jsonEquipContent = jsonEquipElement.getText().trim();
    var jsonData = JSON.parse('{' + jsonEquipContent + '}');

    if (jsonData.hasOwnProperty('socket2')) {
      var socketValue = jsonData['socket2'];
      Logger.log("The value of socket2 is: " + socketValue);
      return socketValue;
    } else {
      Logger.log("socket2 not found");
      return '';
    }
  } else {
    Logger.log("No jsonEquip content found");
    return '';
  }
}

function socket3(id) {
  var url = 'https://www.wowhead.com/wotlk/item=' + id + '&xml';
  var response = UrlFetchApp.fetch(url);
  var xmlContent = response.getContentText();
  var document = XmlService.parse(xmlContent);
  var root = document.getRootElement();
  var jsonEquipElement = root.getChild('item').getChild('jsonEquip');

  if (jsonEquipElement) {
    var jsonEquipContent = jsonEquipElement.getText().trim();
    var jsonData = JSON.parse('{' + jsonEquipContent + '}');

    if (jsonData.hasOwnProperty('socket3')) {
      var socketValue = jsonData['socket3'];
      Logger.log("The value of socket3 is: " + socketValue);
      return socketValue;
    } else {
      Logger.log("socket3 not found");
      return '';
    }
  } else {
    Logger.log("No jsonEquip content found");
    return '';
  }
}
