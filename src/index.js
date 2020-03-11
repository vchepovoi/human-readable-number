module.exports = function toReadable (number) {
  var read = "";
  var str = String(number);
  var firstNumeral = Number(str[str.length-3]);
  var secondNumeral = Number(str[str.length-2]);
  var lastNumeral = Number(str[str.length-1]);
  if (number < 10) {
    if (lastNumeral == 0) read ="zero";
    if (lastNumeral == 1) read ="one";
    if (lastNumeral == 2) read ="two";
    if (lastNumeral == 3) read ="three";
    if (lastNumeral == 4) read ="four";
    if (lastNumeral == 5) read ="five";
    if (lastNumeral == 6) read ="six";
    if (lastNumeral == 7) read ="seven";
    if (lastNumeral == 8) read ="eight";
    if (lastNumeral == 9) read ="nine";
  }

    if (number < 100) {
      if ((secondNumeral == 1) & (lastNumeral == 0)) read +="ten";
      if ((secondNumeral == 1) & (lastNumeral == 1)) read +="eleven";
      if ((secondNumeral == 1) & (lastNumeral == 2)) read +="twelve";
      if ((secondNumeral == 1) & (lastNumeral == 3)) read +="thirteen";
      if ((secondNumeral == 1) & (lastNumeral == 4)) read +="fourteen";
      if ((secondNumeral == 1) & (lastNumeral == 5)) read +="fifteen";
      if ((secondNumeral == 1) & (lastNumeral == 6)) read +="sixteen";
      if ((secondNumeral == 1) & (lastNumeral == 7)) read +="seventeen";
      if ((secondNumeral == 1) & (lastNumeral == 8)) read +="eighteen";
      if ((secondNumeral == 1) & (lastNumeral == 9)) read +="nineteen";
      if (secondNumeral == 2) read +="twenty";
      if (secondNumeral == 3) read +="thirty";
      if (secondNumeral == 4) read +="forty";
      if (secondNumeral == 5) read +="fifty";
      if (secondNumeral == 6) read +="sixty";
      if (secondNumeral == 7) read +="seventy";
      if (secondNumeral == 8) read +="eighty";
      if (secondNumeral == 9) read +="ninety";
      if ((secondNumeral > 1) & (lastNumeral == 1)) read +=" one";
      if ((secondNumeral > 1) & (lastNumeral == 2)) read +=" two";
      if ((secondNumeral > 1) & (lastNumeral == 3)) read +=" three";
      if ((secondNumeral > 1) & (lastNumeral == 4)) read +=" four";
      if ((secondNumeral > 1) & (lastNumeral == 5)) read +=" five";
      if ((secondNumeral > 1) & (lastNumeral == 6)) read +=" six";
      if ((secondNumeral > 1) & (lastNumeral == 7)) read +=" seven";
      if ((secondNumeral > 1) & (lastNumeral == 8)) read +=" eight";
      if ((secondNumeral > 1) & (lastNumeral == 9)) read +=" nine";
    }

    if (number >= 100) {
      if (firstNumeral == 1) read +="one hundred";
      if (firstNumeral == 2) read +="two hundred";
      if (firstNumeral == 3) read +="three hundred";
      if (firstNumeral == 4) read +="four hundred";
      if (firstNumeral == 5) read +="five hundred";
      if (firstNumeral == 6) read +="six hundred";
      if (firstNumeral == 7) read +="seven hundred";
      if (firstNumeral == 8) read +="eight hundred";
      if (firstNumeral == 9) read +="nine hundred";

      if ((secondNumeral == 0) & (lastNumeral == 1)) read +=" one";
      if ((secondNumeral == 0) & (lastNumeral == 2)) read +=" two";
      if ((secondNumeral == 0) & (lastNumeral == 3)) read +=" three";
      if ((secondNumeral == 0) & (lastNumeral == 4)) read +=" four";
      if ((secondNumeral == 0) & (lastNumeral == 5)) read +=" five";
      if ((secondNumeral == 0) & (lastNumeral == 6)) read +=" six";
      if ((secondNumeral == 0) & (lastNumeral == 7)) read +=" seven";
      if ((secondNumeral == 0) & (lastNumeral == 8)) read +=" eight";
      if ((secondNumeral == 0) & (lastNumeral == 9)) read +=" nine";

      if ((secondNumeral == 1) & (lastNumeral == 0)) read +=" ten";
      if ((secondNumeral == 1) & (lastNumeral == 1)) read +=" eleven";
      if ((secondNumeral == 1) & (lastNumeral == 2)) read +=" twelve";
      if ((secondNumeral == 1) & (lastNumeral == 3)) read +=" thirteen";
      if ((secondNumeral == 1) & (lastNumeral == 4)) read +=" fourteen";
      if ((secondNumeral == 1) & (lastNumeral == 5)) read +=" fifteen";
      if ((secondNumeral == 1) & (lastNumeral == 6)) read +=" sixteen";
      if ((secondNumeral == 1) & (lastNumeral == 7)) read +=" seventeen";
      if ((secondNumeral == 1) & (lastNumeral == 8)) read +=" eighteen";
      if ((secondNumeral == 1) & (lastNumeral == 9)) read +=" nineteen";

      if (secondNumeral == 2) read +=" twenty";
      if (secondNumeral == 3) read +=" thirty";
      if (secondNumeral == 4) read +=" forty";
      if (secondNumeral == 5) read +=" fifty";
      if (secondNumeral == 6) read +=" sixty";
      if (secondNumeral == 7) read +=" seventy";
      if (secondNumeral == 8) read +=" eighty";
      if (secondNumeral == 9) read +=" ninety";

      if ((secondNumeral > 1) & (lastNumeral == 1)) read +=" one";
      if ((secondNumeral > 1) & (lastNumeral == 2)) read +=" two";
      if ((secondNumeral > 1) & (lastNumeral == 3)) read +=" three";
      if ((secondNumeral > 1) & (lastNumeral == 4)) read +=" four";
      if ((secondNumeral > 1) & (lastNumeral == 5)) read +=" five";
      if ((secondNumeral > 1) & (lastNumeral == 6)) read +=" six";
      if ((secondNumeral > 1) & (lastNumeral == 7)) read +=" seven";
      if ((secondNumeral > 1) & (lastNumeral == 8)) read +=" eight";
      if ((secondNumeral > 1) & (lastNumeral == 9)) read +=" nine";
    }
  return read;
}
