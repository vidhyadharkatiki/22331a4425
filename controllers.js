function generateShortId(longUrl) {
    const hash = crypto.createHash('sha256').update(longUrl).digest('hex');
  
    const base62Chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let shortId = '';
    for (let i = 0; i < 7; i++) { 
      const charIndex = parseInt(hash.substring(i * 2, (i * 2) + 2), 16) % base62Chars.length;
      shortId += base62Chars[charIndex];
    }
    return shortId;
  }

module.exports = {generateShortId};