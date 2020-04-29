# コロナ分析サイト
 
"コロナ分析サイト"は、コロナ感染者数・死者数をグラフで分析するサイトである。
 
 
# DEMO
 
<img width="1440" alt="img" src="https://user-images.githubusercontent.com/60467960/80489954-9458b880-899b-11ea-9b5d-e7e20d42f082.png">
  
 
# Requirement
 
* Node.js
https://nodejs.org/ja/
 
 
# Installation

プロジェクトルートで、npm installしてください。
 
# Usage
  
- プロジェクトのインストール<br>
$ git clone https://github.com/yuuyuu-1015/covid-19.git
$ cd covid-19
$ npm i

- データの更新<br>
$ curl https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/ecdc/full_data.csv > src/data/AllData.csv
$ node ./src/data/script.js

- 開発サーバの起動<br>
$ npm run serve
 
 
# Note
 
Chromeでのみ動作確認済み
 
 
# Author
  
* Yuta Fukuchi / 福地　祐太
* fufufu10155@gmail.com


# License
 
"コロナ分析サイト"is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 

Thank you!
