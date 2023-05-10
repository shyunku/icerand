import BigNumber from "bignumber.js";

export function shuffleWithSeed(intArr, seed) {
  const shuffled = [...intArr];
  let currentIndex = shuffled.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(seed % currentIndex);
    seed /= currentIndex;
    currentIndex -= 1;

    temporaryValue = shuffled[currentIndex];
    shuffled[currentIndex] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }

  return shuffled;
}

// timestamp to relative time string
export function toRelativeTime(milli, progress = false) {
  if (milli == null) return "-";

  const now = Date.now();
  let diff = now - milli;

  let rel = diff < 0 ? "left" : "ago";
  if (diff < 0) {
    diff = -diff;
  }

  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);

  if (year > 10) return `> 10 years ${rel}`;
  if (year > 0) return `${year} years ${rel}`;
  if (month > 0) return `${month} months ${rel}`;
  if (week > 0) return `${week} weeks ${rel}`;
  if (day > 0) return `${day} days ${rel}`;
  if (hour > 0) return `${hour} hours ${rel}`;
  if (min > 0) return `${min} minutes ${rel}`;
  if (sec > 0) return `${sec} seconds ${rel}`;
  if (diff > 0) return `0 second ${rel}`;
  return progress ? "Done" : "Just now";
}

const CURRENCY_UNITS = ["", "만", "억", "조", "경", "해", "자", "양", "구", "간", "정", "재", "극"];
/**
 *
 * @param {BigNumber} value
 */
export function formatKoUnit(value) {
  let str = "";
  for (let i = 0; i < CURRENCY_UNITS.length; i++) {
    if (value.comparedTo(10000) > 0) {
      const rem = value.mod(10000);
      str = rem.integerValue() + CURRENCY_UNITS[i] + " " + str;
    } else {
      str = value.integerValue() + CURRENCY_UNITS[i] + " " + str;
      break;
    }
    value = value.div(10000);
  }
  return str;
}

function formatSize(value) {
  if (value >= 100) return new BigNumber(value).toFormat(0);
  if (value >= 10) return new BigNumber(value).toFormat(1);
  return new BigNumber(value).toFormat(2);
}

export function shortenSize(size) {
  if (Number.isNaN(size) || size == null) return "-";
  if (size < 1000) return formatSize(size) + "B";
  size /= 1000;
  if (size < 1000) return formatSize(size) + "KB";
  size /= 1000;
  if (size < 1000) return formatSize(size) + "MB";
  size /= 1000;
  if (size < 1000) return formatSize(size) + "GB";
  size /= 1000;
  return formatSize(size) + "TB";
}

export function fastInterval(handler, period) {
  handler();
  return setInterval(handler, period);
}

export default {};
