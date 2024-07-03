function chinese() {
  // chinese numbers thing. copied from https://stackoverflow.com/questions/46534376/javascript-convert-arabic-numerals-to-chinese-characters
  function numberToWords(n) {
    if (!Number.isInteger(n) && n < 0) {
      throw Error("請輸入自然數");
    }

    const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    const positions = [
      "",
      "十",
      "百",
      "千",
      "萬",
      "十萬",
      "百萬",
      "千萬",
      "億",
      "十億",
      "百億",
      "千億",
    ];
    const charArray = String(n).split("");
    let result = "";
    let prevIsZero = false;
    //處理0  deal zero
    for (let i = 0; i < charArray.length; i++) {
      const ch = charArray[i];
      if (ch !== "0" && !prevIsZero) {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      } else if (ch === "0") {
        prevIsZero = true;
      } else if (ch !== "0" && prevIsZero) {
        result +=
          "零" + digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    }
    if (n < 100) {
      result = result.replace("一十", "十");
    }
    return result;
  }
  // chinese numbers thing end

  title = "將進酒";
  author = "唐 · 李白";
  comma = "，";
  dot = "。";
  comma2 = "、";
  space = "";
  text = "";
  seperator = "\n";
  // start
  obligatory_opening = "君不見";
  after_opening_1 = ["黃河之水天上來", "高堂明鏡悲白髮"];
  after_opening_2 = ["奔流到海不復回", "朝如青絲暮成雪"];
  // lines 3-4
  line3 = ["人生得意須盡歡", "莫使金樽空對月"];
  line4 = ["天生我材必有用", "千金散盡還復來"];
  // line 5
  line5 = ["烹羊宰牛且為樂", "會須一飲", "杯"];
  //line 6
  line6 = ["岑夫子", "丹丘生", "將進酒", "杯莫停"];
  // line 7
  line7 = ["與君歌一曲", "請君為我傾耳聽"];
  // lines 8-11
  thoselines = [
    "鐘鼓饌玉不足貴",
    "但願長醉不復醒",
    "古來聖賢皆寂寞",
    "惟有飲者留其名",
    "陳王昔時宴平樂",
    "斗酒十千恣歡謔",
    "主人何為言少錢",
    "徑須沽取對君酌",
  ];
  // line 12
  line12 = ["五花馬", "千金裘", "呼兒將出換美酒", "與爾同銷萬古愁"];
  // combine everything
  // lines 1 and 2
  for (let i = 0; i < 2; i++) {
    text +=
      obligatory_opening +
      after_opening_1[i] +
      comma +
      after_opening_2[i] +
      dot +
      seperator;
  }
  // lines 3 and 4
  for (let i = 0; i < 2; i++) {
    if (line3[i] != line3[1]) {
      if (line3[i] != line3[0]) {
      } else {
        text += line3[i] + comma;
      }
    } else {
      text += line3[i] + dot + seperator;
    }
  }
  for (let i = 0; i < 2; i++) {
    if (line4[i] != line4[1]) {
      if (line4[i] != line4[0]) {
      } else {
        text += line4[i] + comma;
      }
    } else {
      text += line4[i] + dot + seperator;
    }
  }

  // line 5
  beerCount = numberToWords(300);
  text +=
    line5[0] +
    comma +
    line5[1] +
    beerCount +
    space +
    line5[2] +
    dot +
    seperator;

  // line 6
  for (let i = 0; i < 4; i++) {
    if (line6[i] != line6[3]) {
      text += line6[i] + comma;
    } else {
      text += line6[i] + dot + seperator;
    }
  }

  // line 7
  for (let i = 0; i < 2; i++) {
    if (line7[i].length == 7) {
      text += line7[i] + dot + seperator;
    } else {
      text += line7[i] + comma;
    }
  }
  // lines 8 to 11
  for (let i = 0; i < 8; i++) {
    if (thoselines.indexOf(thoselines[i]) == 0) {
      text += thoselines[i] + comma;
    } else {
      if (thoselines.indexOf(thoselines[i]) % 2 == 1) {
        text += thoselines[i] + dot + seperator;
      } else {
        text += thoselines[i] + comma;
      }
    }
  }

  // line 12
  for (let i = 0; i < 4; i++) {
    if (line12[i].length != 3) {
      if (line12[i] == line12[3]) {
        text += thoselines[i] + dot + seperator;
      } else {
        text += thoselines[i] + comma;
      }
    } else {
      if (line12[i] != line12[1]) {
        text += line12[i] + comma;
      } else {
        text += line12[i] + comma2;
      }
    }
  }
  // final touches
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}

function english() {
  /*    
 	Convert numbers to words
 	
 	copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
 	permission to use this Javascript on your web page is granted
 	provided that all of the code (including this copyright notice) is
 	used exactly as shown (you can change the numbering system if you wish)
*/
  var numberToWords = function (s) {
    var th = ["", "thousand", "million", "billion", "trillion"];
    var dg = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    var tn = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    var tw = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    s = (s || "").toString();
    s = s.replace(/[\, ]/g, "");
    if (s != parseFloat(s)) return "not a number";
    var x = s.indexOf(".");
    if (x == -1) x = s.length;
    if (x > 15) return "too big";
    var n = s.split("");
    var str = "";
    var sk = 0;
    for (var i = 0; i < x; i++) {
      if ((x - i) % 3 == 2) {
        if (n[i] == "1") {
          str += tn[Number(n[i + 1])] + " ";
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tw[n[i] - 2] + " ";
          sk = 1;
        }
      } else if (n[i] != 0) {
        str += dg[n[i]] + " ";
        if ((x - i) % 3 == 0) str += "hundred ";
        sk = 1;
      }
      if ((x - i) % 3 == 1) {
        if (sk) str += th[(x - i - 1) / 3] + " ";
        sk = 0;
      }
    }
    if (x != s.length) {
      var y = s.length;
      str += "point ";
      for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
    }
    return str.replace(/\s+/g, " ");
  };

  // number thing end

  title = "about to go in wine";
  author = "sugar · white li";
  comma = ", ";
  dot = ".";
  comma2 = ", ";
  space = " ";
  text = "";
  seperator = "\n";
  // start
  obligatory_opening = "cannot see you";
  after_opening_1 = [
    "yellow river water from sky",
    "high high clear mirror sad white hair",
  ];
  after_opening_2 = [
    "run stream to ocean no come back",
    "morning like black silk become snow",
  ];
  // lines 3-4
  line3 = [
    "ginseng happy go lucky must happy go lucky",
    "don't let chalice empty towards moon",
  ];
  line4 = [
    "god send me material must have use",
    "a thousand bucks scattered reincarnate",
  ];
  // line 5
  line5 = ["cook sheep kill cow very happy", "must drink", "cup"];
  //line 6
  line6 = ["mr sium", "mr tan", "about to go in wine", "cup no stop"];
  // line 7
  line7 = ["with you song one sing", "compulsory listening"];
  // lines 8-11
  thoselines = [
    "bell drum jade not expensive enough",
    "wish me tipsy like princess aurora",
    "pass wise man also very lonely",
    "only alcoholic autograph left",
    "emperor tan old time enjoy music",
    "ten thousand shots very very happy",
    "i go ask how much money",
    "radius must get then drink in front",
  ];
  // line 12
  line12 = [
    "five flower horse",
    "thousand golden snitch",
    "call out change pretty wine",
    "with you we complain",
  ];
  // combine everything
  // lines 1 and 2
  for (let i = 0; i < 2; i++) {
    text +=
      obligatory_opening +
      space +
      after_opening_1[i] +
      comma +
      after_opening_2[i] +
      dot +
      seperator;
  }
  // lines 3 and 4
  for (let i = 0; i < 2; i++) {
    if (line3[i] != line3[1]) {
      if (line3[i] != line3[0]) {
      } else {
        text += line3[i] + comma;
      }
    } else {
      text += line3[i] + dot + seperator;
    }
  }
  for (let i = 0; i < 2; i++) {
    if (line4[i] != line4[1]) {
      if (line4[i] != line4[0]) {
      } else {
        text += line4[i] + comma;
      }
    } else {
      text += line4[i] + dot + seperator;
    }
  }

  // line 5
  beerCount = numberToWords(300);
  text +=
    line5[0] +
    comma +
    line5[1] +
    space +
    beerCount +
    space +
    line5[2] +
    dot +
    seperator;

  // line 6
  for (let i = 0; i < 4; i++) {
    if (line6[i] != line6[3]) {
      text += line6[i] + comma;
    } else {
      text += line6[i] + dot + seperator;
    }
  }

  // line 7
  for (let i = 0; i < 2; i++) {
    if (line7[i] == line7[1]) {
      text += line7[i] + dot + seperator;
    } else {
      text += line7[i] + comma;
    }
  }
  // lines 8 to 11
  for (let i = 0; i < 8; i++) {
    if (thoselines.indexOf(thoselines[i]) == 0) {
      text += thoselines[i] + " (oi)" + comma;
    } else {
      if (thoselines.indexOf(thoselines[i]) % 2 == 1) {
        text += thoselines[i] + " (oi)" + dot + seperator;
      } else {
        text += thoselines[i] + " (oi)" + comma;
      }
    }
  }

  // line 12
  for (let i = 0; i < 4; i++) {
    if (line12[i].length != 3) {
      if (line12[i] == line12[3]) {
        text += thoselines[i] + dot + seperator;
      } else if (line12[i] == line12[1]) {
        text += thoselines[i] + comma + seperator;
      } else {
        text += thoselines[i] + comma;
      }
    } else {
      if (line12[i] != line12[1]) {
        text += line12[i] + comma;
      } else {
        text += line12[i] + comma2;
      }
    }
  }
  // final touches
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}

console.log(chinese());
