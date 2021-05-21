# CKHSC 16th 成發：《不自然》入場券系統

[ckhsc16.github.io](https://github.com/ckhsc16/ckhsc16.github.io)

以下是成發入場系統的使用說明，今天因為疫情的關係我們沒辦法辦成發，希望學弟能夠順利。

## 目前有的功能

- 來賓輸入姓名取得畫面顯示上下半場場次

- 連結到每個分場各自的頁面，可顯示：
  - 姓名
  - 論文名稱
  - 論文全文（直接在網站上載入速度比連結 Google 雲端快）

## 取得

#### 直接在右上角下載

- 點選 Code > Download ZIP

or

#### 使用 git 指令

- `git clone https://github.com/ckhsc16/ckhsc16.github.io.git`

## 使用

#### 來賓資料

1. 開啟一個 csv 檔案，分別創建「身分別」、「姓名」、「上半場場次」與「下半場場次」四個直行

2. 使用`res`資料夾中的`convert_data.py`將 csv 轉為 json 格式及以下編排

   ```json
   {
   	"姓名": ["身份別", "上半場場次", "下半場場次"]
   }
   ```

3. 將檔案命名為 list.json 放在`scripts`資料夾

#### 分場頁面

依據該場次人數，複製`<div class='present'>`及其內部的語法，就會多出一個區塊放人物介紹。

全文請放在`doc`資料夾並自行在頁面中連結

#### 其他

剩下的就自行依據成發需要修改
