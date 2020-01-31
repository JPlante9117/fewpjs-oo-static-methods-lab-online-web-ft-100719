class Formatter {
  static capitalize(string){
    let letters = string.split('')
    letters[0] = letters[0].toUpperCase()
    string = letters.join("")
    return string
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let lowerWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    words[0] = Formatter.capitalize(words[0])
    for(let i = 1; i < words.length; i++){
      if(!lowerWords.includes(words[i])){
        words[i] = Formatter.capitalize(words[i])
      }
    }
    string = words.join(" ")
    return string
  }
}