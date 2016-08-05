module.exports = {
  capitalizeFirstName: (fName) => {
    return `${fName.charAt(0).toUpperCase()}${fName.slice(1)}`;
  },

  truncateLastName: (lName) => {
    return `${lName.charAt(0).toUpperCase()}.`;
  },

  formatURL: (url) => {
    return url
      .replace(/ |--/g, '-')
      .replace(/\[\]/g, '')
      .match(/[a-zA-z0-9]|-|_/g).join('');
  },

  shortenDescription: (description) => {
    const characterLimit = 47;
    if (description.length > characterLimit) {
      // case 1: 48th character IS NOT in the middle of a word
      if (description.charAt(characterLimit) === ' ') {
        description = `${description.slice(0, characterLimit)}...`;
      } 
      //case 2: 48th character IS in the middle of a word
      else {
        let index = characterLimit;
        while (description.charAt(index) !== ' ') {
          index--;
          if (description.charAt(index) === ' ') {
            description = `${description.slice(0, index)}...`;
            return description;
          }
        }
      }
    }
    return description
  },
}
