function convertToPersianNumber(input) {
  if (typeof input === "number") {
    input = input.toString();
  }
  let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return input.replace(/[0-9]/g, function (w) {
    return persianDigits[+w];
  });
}

function convertToPersianTime(input) {
  let hours = input.getHours();
  let minutes = input.getMinutes();
  let ampm = hours >= 12 ? "بعد از ظهر" : "صبح";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime =
    convertToPersianNumber(hours) +
    ":" +
    convertToPersianNumber(minutes) +
    " " +
    ampm;
  return strTime;
}

const clock = function () {
  let getDate = new Date();
  document.getElementById("clock").innerHTML = convertToPersianTime(getDate);
};
setInterval(function () {
  clock();
}, 1000);
