function chinese() {
  title = "關雎";
  author = "未知";
  comma = "，";
  dot = "。";
  // lines 1 and 2
  part1text = ["關關雎鳩，在河之洲。\n", "參差荇菜，左右流之。\n"];
  term1 = "窈窕淑女";
  part2text = ["君子好逑", "寤寐求之"];
  text = "";
  for (let i = 0; i < 2; i++) {
    text += part1text[i] + term1 + comma + part2text[i] + dot + "\n";
  }
  // line 3
  line3text = "求之不得，寤寐思服。\n";
  line3text2 = "悠哉";
  line3text3 = "輾轉反側";
  text += line3text + line3text2 + line3text2 + comma + line3text3 + dot + "\n";

  // lines 4 and 5
  part1text2 = "參差荇菜，左右";
  term2 = ["采", "芼"];
  // use back term 1
  term3 = ["琴瑟友", "鐘鼓樂"];
  part2text2 = "之";
  for (let i = 0; i < 2; i++) {
    text +=
      part1text2 +
      term2[i] +
      part2text2 +
      dot +
      "\n" +
      term1 +
      comma +
      term3[i] +
      part2text2 +
      dot +
      "\n";
  }
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}

function english() {
  title = "close dove";
  author = "by a wise chinese man";
  comma = ", ";
  dot = ".";
  // lines 1 and 2
  part1text = [
    "close close hawk dove, state at river.\n",
    "scattered veggie, left right flow.\n",
  ];
  term1 = "beautiful girl";
  part2text = ["young man like", "sleep sleep also want"];
  text = "";
  for (let i = 0; i < 2; i++) {
    text += part1text[i] + term1 + comma + part2text[i] + dot + "\n";
  }
  // line 3
  line3text = "cannot ask, sleep sleep think think.\n";
  line3text2 = "cincai";
  line3text3 = "flip come flip go";
  text +=
    line3text + line3text2 + " " + line3text2 + comma + line3text3 + dot + "\n";

  // lines 4 and 5
  part1text2 = "scattered veggie, left right ";
  term2 = ["pick", "bud"];
  // use back term 1
  term3 = ["violin harp friend", "bell drum happy"];
  part2text2 = "";
  for (let i = 0; i < 2; i++) {
    text +=
      part1text2 +
      term2[i] +
      part2text2 +
      dot +
      "\n" +
      term1 +
      comma +
      term3[i] +
      part2text2 +
      dot +
      "\n";
  }
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}

console.log(english());
