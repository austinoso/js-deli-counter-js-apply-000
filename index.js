function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length){
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var currentLine = []

  if(line.length){
    for (var i = 0; i < line.length; i++) {
      currentLine.push(`${i+1}. ${line[i]}`)
    }
  }
}
