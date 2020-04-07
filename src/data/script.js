const fs = require('fs')

const INPUT_FILE = './input.csv' // 入力ファイル(CSV)のパス
const OUTPUT_FILE = './output.json' // 出力ファイル(JSON)のパス

const main = async () => {
  const input = await fs.promises.readFile(INPUT_FILE, 'utf-8')
  
  const output = csvToJson(input.split('\n').map(line => line.split(',')))
  
  await fs.promises.writeFile(OUTPUT_FILE, JSON.stringify(output))
}

/**
 * CSVをJSONに変換する
 * @param csv {string[][]} CSVをパースしたデータ
 * @returns {any}
 */
const csvToJson = (csv) => {
  // 変換処理
  // 何かオブジェクトなり配列なりを返す
  csv
}

main()