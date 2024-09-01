function statValues(id) {
  var properties = PropertiesService.getDocumentProperties();
  var cachedId = properties.getProperty('cachedId');
  var cachedStats = properties.getProperty('cachedStats');

  if (cachedId == id && cachedStats) {
    Logger.log("Using cached values");
    return JSON.parse(cachedStats);
  } else {
    Logger.log("Fetching new values");
    var url = 'https://www.wowhead.com/wotlk/item=' + id + '&xml';
    var response = UrlFetchApp.fetch(url);
    var xmlContent = response.getContentText();
    var document = XmlService.parse(xmlContent);
    var root = document.getRootElement();
    var jsonEquipElement = root.getChild('item').getChild('jsonEquip');
    
    if (jsonEquipElement) {
      var jsonEquipContent = jsonEquipElement.getText().trim();
      var jsonData = JSON.parse('{' + jsonEquipContent + '}');

      var stats = ["sta", "agi", "str", "int", "spi", "rgdatkpwr", "spldmg", "critstrkrtng", "armorpenrtng", "splpen", "hastertng", "hitrtng", "exprtng", "defrtng", "dodgertng", "parryrtng", "manargn", "resirtng"];
      var statValues = [];

      stats.forEach(function(stat) {
        if (jsonData.hasOwnProperty(stat)) {
          var statValue = jsonData[stat];
          Logger.log("The value of " + stat + " is: " + statValue);
          statValues.push(statValue);
        } else {
          Logger.log(stat + " not found");
          statValues.push('');
        }
      });

      properties.setProperty('cachedId', id);
      properties.setProperty('cachedStats', JSON.stringify(statValues));

      return statValues;
    } else {
      Logger.log("No jsonEquip content found");
      return null;
    }
  }
}
