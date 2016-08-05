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
      if (description.charAt(characterLimit) === ' ') {
        description = `${description.slice(0, characterLimit)}...`;
      } else {
          let j = characterLimit;
          while (description.charAt(j) !== ' ') {
            j--;
            if (description.charAt(j) === ' ') {
              description = `${description.slice(0, j)}...`;
              return description;
            }
          }
      }
    }
    return description
  },
}
