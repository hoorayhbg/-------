function encryption() {
    let text = document.getElementById('userInput').value;
    // alert(text);
    let result = '';
    // for - это цикл. Мы его создали,
    // чтобы перебрать все символы в тексте юзера.
    for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    if (text[i] === 'а') {
    result += 'ала'
    } else if (text[i] === 'е') {
    result += 'еле';
    } else if (text[i] === 'и') {
    result += 'или';
    } else if (text[i] === 'о') {
    result += 'оло';
    } else if (text[i] === 'у') {
    result += 'улу';
    } else if (text[i] === 'ы') {
    result += 'ылы';
    } else if (text[i] === 'ю') {
    result += 'юлю';
    } else if (text[i] === 'э') {
    result += 'элэ';
    } else if (text[i] === 'я') {
    result += 'яля';
    } else {
    result += text[i];
    }
    }
    document.getElementById('output').innerText = result;
    }
    