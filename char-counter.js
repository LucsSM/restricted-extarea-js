const container = document.getElementById('container');
const textarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
const maxChars = 250;

textarea.addEventListener('input', (event) => {
    const validText = textarea.value.replace(/(\r\n|\n|\r)/g, '');
    const currentLength = validText.length;
        
        charCount.textContent = `${currentLength} / ${maxChars}`;
        
        if (currentLength >= maxChars) {
            container.classList.add('limit-reached');
            charCount.classList.add('max-chars');
        } else {
            container.classList.remove('limit-reached');
            charCount.classList.remove('max-chars');
        }
});
