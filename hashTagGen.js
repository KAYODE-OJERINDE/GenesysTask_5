/*function generateHashtag(str) {
    if (str.length == 0) return false;
    let words = str.split(' ');
    let result = '#';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
    return result.length > 140 ? false : result;
  } */

  function autoGenHashtag(inputString) {
    // Remove spaces and capitalize the first letter of each word
    const input = inputString.replace(/\s+/g, '').replace(/^(.)/, (match) => match.toUpperCase());
  
    // Check if the input or result is empty
    if (!input) {
      return false;
    }
  
    // Add the hash symbol and check if the final result is within the character limit
    const hashtag = '#' + input;
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  const inputString = "Marketing team";
  const hashtag = autoGenHashtag(inputString);
  if (hashtag) {
    console.log(hashtag);
  } else {
    console.log("Invalid input or result is too long.");
  }