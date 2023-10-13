
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagCount = {}

for (var i = 0; i < tags.length; i++) tags[i] in tagCount ? tagCount[tags[i]] += 1 : tagCount[tags[i]] = 1

console.log(tagCount)

var sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1])
console.log(sortedTags)