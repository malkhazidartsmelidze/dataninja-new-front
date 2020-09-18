export default function parseHostFromUrl(_url) {
  try {
    const url = new URL(_url);
    return url.host;
  } catch (err) {
    return false;
  }
}
