# NAME
 
"コロナ分析サイト"は、コロナ感染者数・死者数をグラフで分析するサイトである。
 
 
# DEMO
 
<img width="1440" alt="img" src="https://user-images.githubusercontent.com/60467960/80489954-9458b880-899b-11ea-9b5d-e7e20d42f082.png">
 
# Features
 
"コロナ分析サイト"は、世界と世界各国のデータを各機能ごと閲覧できるようになっている。<br>
各機能は以下の通りである。
・感染者数総数
・新規感染者数
・感染者数増加率
・死亡者数総数
・新規死亡者数
・死亡者数増加率
 
 
# Requirement
 
* Vue 3.11.0
* Vue-chartjs 
 
 
# Installation
 
・Vueのインストール方法 
 
```bash
npm install -g @vue/cli
```

・Vue-chartjsのインストール方法

```bash
npm install vue-chartjs chart.js --save
```

 
# Usage
  
```bash
https://github.com/yuuyuu-1015/covid-19.git
npm run serve
cd src/data
curl https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/ecdc/full_data.csv > AllData.csv
node ./script.js
```
 
 
# Note
 
開発者の環境は、Mac, Chromeである。Windows, 他のブラウザではテストしていない。
 
 
# Author
  
* Yuta Fukuchi / 福地　祐太
* fufufu10155@gmail.com


# License
 
"コロナ分析サイト"is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 

Thank you!
