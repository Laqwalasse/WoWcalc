let gem_stat_dict = {
  'NONE': [],
  
  '+20 Agility': [{ name: 'Agility', value: 20 }],
  '+20 Intellect': [{ name: 'Intellect', value: 20 }],
  '+30 Stamina': [{ name: 'Stamina', value: 30 }],

  '+10 Agility and +10 Critical Strike Rating': [{ name: 'Agility', value: 10 }, { name: 'Critical Strike Rating', value: 10}],
  '+10 Agility and +10 Hit Rating': [{ name: 'Agility', value: 10 }, { name: 'Hit Rating',  value: 10}],
}

function _extract_stats() {
  let data = SpreadsheetApp.getActive().getRange('DB!E26').getValue()
  let json = '{' + data + '}'
  let obj = JSON.parse(json)

  if (1) return
}

function _sum(stat_names, coefficients, item_stats, gems) {
  let result = 0

  // переменные для читаемости
  let [stat_name_rows, stat_name_cols] = [stat_names.length, stat_names[0].length]
  let [coefficient_rows, coefficient_cols] = [coefficients.length, coefficients[0].length]
  let [item_stat_rows, item_stat_cols] = [item_stats.length, item_stats[0].length]
  let [gem_rows, gem_cols] = [gems.length, gems[0].length]

  // принимаем диапазоны только с одной колонокой
  if (stat_name_cols !== 1 || coefficient_cols !== 1 || item_stat_cols !== 1 || gem_cols !== 1) {
    return null
  }

  // сверяем кол-во строк в диапазонах
  if (stat_name_rows !== coefficient_rows || stat_name_rows !== item_stat_rows) {
    return null
  }

  // костыль
  let stat_row_dict = {}
  for (let row = 0; row < stat_name_rows; row++) {
    let stat_name = stat_names[row][0]
    stat_row_dict[stat_name] = row
  }

  // считаем статы айтема
  for (let row = 0; row < coefficient_rows; row++) {
    let item_stat = item_stats[row][0]
    let coefficient = coefficients[row][0]
    result += item_stat/coefficient
  }

  // считаем статы гемов
  for (let row = 0; row < gem_rows; row++) {
    let gem = gems[row][0]
    let gem_stats = gem_stat_dict[gem]
    for (let gem_stat of gem_stats) {
      if (gem_stat.name in stat_row_dict) {
        let stat_row = stat_row_dict[gem_stat.name]
        let coefficient = coefficients[stat_row][0]
        result += gem_stat.value/coefficient
      }
    }
  }
  
  // округлять или не округлять?
  return Math.round(result)
}
