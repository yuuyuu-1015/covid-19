const fs = require('fs')

const INPUT_FILE = './AllData.csv' // 入力ファイル(CSV)のパス
const OUTPUT_FILE = './AllData.json' // 出力ファイル(JSON)のパス

const main = async () => {
  const input = await fs.promises.readFile(INPUT_FILE, 'utf-8')
  
  const output = csvToJson(input.split('\n').map(line => line.split(',')))
  
  await fs.promises.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2))
}

/**
 * CSVをJSONに変換する
 * @param csv {string[][]} CSVをパースしたデータ
 * @returns {any}
 */
const csvToJson = (csv) => {
  // 変換処理
  // 何かオブジェクトなり配列なりを返す
  const result = [] 
  for (let i = 0, l = csv.length; i < l; i++) {
    result.push({ date: csv[i][0], location: csv[i][1], new_cases: csv[i][2], new_deaths: csv[i][3], total_cases: csv[i][4], total_deaths: csv[i][5]})
  }
  return result
}

main()