var tipuesearch = {"pages":[{"text":"2017Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","url":"./pages/about/","tags":"misc","title":"About"},{"text":"本週的學習重點在導入 Leo Editor @clean 節點指令的用法, 利用子節點管理各章節的範例, 逐一將程式改寫為 Brython 格式後, 直接在瀏覽器中執行. 讓學員了解使用階層式架構管理資料的便利性. 以下為 http://mde.tw/2016fallcp/course/Python3Programs.txt 中的 ch01 綜合範例, 其餘範例位於本 Leo Editor 專案檔中的 \"Python3 程式範例\" 節點, 請各組一一將範例程式碼與執行結果, 放入各學員的課程網誌中. 本課程 W15 - W18 週將利用 introduction_to_prog_python3_2012.pdf 與 python_for_everybody_2015.pdf 中有關物件導向的說明, 並且配合 https://github.com/mdecourse/webgame 倉儲中的 Leo Editor 專案, 希望各組能夠了解利用 Python3 與 Brython 語法處理 靜態圖檔 、 動態圖檔 與 網際遊戲 的運作原理, 順利完成各組的期末報告. window.onload=function(){ brython(1); } from browser import document from browser import alert ''' # 利用 input() 取得使用者輸入, 然後進行資料處理或運算後, 列出結果 #01-01.py print (\"Hello World!\") #01-02.py thetext = input(\"Enter some text \") print (\"This is what you entered:\") print (thetext) #01-03.py # Note that \\n within quote marks forces a new line to be printed thetext = input(\"Enter some text\\n\") print (\"This is what you entered:\") print (thetext) #01-04.py prompt = \"Enter a some text \" thetext = input(prompt) print (\"This is what you entered:\") print (thetext) ''' def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 取輸入後, 列印出來 from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 取輸入後, 列印出來 from browser import document from browser import alert ''' #02-01.py total = 0.0 number1=float(input(\"Enter the first number: \")) total = total + number1 number2=float(input(\"Enter the second number: \")) total = total + number2 number3=float(input(\"Enter the third number: \")) total = total + number3 average = total / 3 print (\"The average is \" + str(average)) ################################################################ # # # 02-02.py # # Purpose: to demonstrate storage of a floating point number # # # # Programmer: Anne Dawson # # Last updated: Sunday 21st March 2010, 12:45 PT # # # # See this resource to find out how the input function works: # # http://www.annedawson.net/Python3_Input.txt # # # # See this resource to find out how important comments are: # # http://www.annedawson.net/PythonComments.txt # # # ################################################################ number1=float(input(\"Enter the first number: \")) number2=float(input(\"Enter the second number: \")) number3=float(input(\"Enter the third number: \")) total = number1 + number2 + number3 average = total / 3 print (\"The average is: \") print (average) #02-03.py total = 0.0 count = 0 while count < 3: number=float(input(\"Enter a number: \")) count = count + 1 total = total + number average = total / 3 print (\"The average is \" + str(average)) '''","url":"./ji-suan-ji-cheng-shi-w14-fan-li-zheng-li.html","tags":"Course","title":"計算機程式 W14 範例整理"}]};