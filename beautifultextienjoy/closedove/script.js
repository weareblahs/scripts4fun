function english() {
  title = "diploma mouse";
  term1 = ["corn", "wheat", "sprout"];
  term2 = ["care", "moral", "labour"];
  term3 = ["soil", "country", "rural area"];
  term4 = ["toilet", "straight", "last"];

  line1 = "diploma mouse diploma mouse, no eat me ";
  line2 = "three year feed you, no me want ";
  line3 = "pass general go you, suitable me happy ";
  line4term = "happy ";
  text = "";
  author = "by a wise chinese man";
  for (let i = 0; i < 3; i++) {
    text += "";
    text += line1 + term1[i] + "!\n";
    text += line2 + term2[i] + ".\n";
    text += line3 + term3[i] + ".\n";
    if (term4[i] != "last") {
      line4text = "love got me " + term4[i] + ".\n";
    } else {
      line4text = "who forever call?";
    }
    text +=
      line4term +
      term3[i] +
      " " +
      line4term +
      term3[i] +
      ", " +
      line4text +
      "\n";
  }
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}

function chinese() {
  title = "碩鼠";
  term1 = ["黍", "麥", "苗"];
  term2 = ["顧", "德", "勞"];
  term3 = ["土", "國", "郊"];
  term4 = ["所", "直", "last"];

  line1 = "碩鼠碩鼠，無食我";
  line2 = "三歲貫女，莫我肯";
  line3 = "逝將去女，適彼樂";
  line4term = "樂";
  text = "";
  author = "未知";
  for (let i = 0; i < 3; i++) {
    text += "";
    text += line1 + term1[i] + "！\n";
    text += line2 + term2[i] + "。\n";
    text += line3 + term3[i] + "。\n";
    if (term4[i] != "last") {
      line4text = "爰得我" + term4[i] + "。\n";
    } else {
      line4text = "誰之永號？";
    }
    text +=
      line4term + term3[i] + line4term + term3[i] + "，" + line4text + "\n";
  }
  htmlText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  finalArray = [title, author, htmlText];
  return finalArray;
}
