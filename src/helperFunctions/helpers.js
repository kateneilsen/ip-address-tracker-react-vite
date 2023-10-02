const validIp = new RegExp(
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
);
export function isIpAddress(str) {
  if (validIp.test(str) == true) {
    return true;
  } else {
    return false;
  }
}
const validDomain = new RegExp(
  /^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/
);
export function isDomain(str) {
  if (validDomain.test(str) == true) {
    return true;
  } else {
    return false;
  }
}
