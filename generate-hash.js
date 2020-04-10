const Keygen = async (message) => {

  const messageBuffer = new TextEncoder('utf-8').encode(message);
  const hashBuffer    = await crypto.subtle.digest('SHA-256', messageBuffer);
  const hashArray     = Array.from(new Uint8Array(hashBuffer));

  const hashHex       = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

  return hashHex;
}