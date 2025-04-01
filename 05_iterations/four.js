const myObject = {
    ja: 'javascript',
    cpp: 'c++',
    py: 'python',
    rb: 'ruby',
    swift: 'swift by apple',
}

for(const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['javascript', 'c++', 'python', 'ruby', 'swift']
for(const key in programming) {
    console.log(`${key} is in position ${programming[key]}`);
}



