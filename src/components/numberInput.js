export function checkInput() { // 잘못된 값 입력하는지 검증
    const userInput = document.getElementById('userInput').value
    const numbers = userInput.split('').map(Number)
    const isValid = numbers.length === 3 && numbers.every(num => num>=1 && num<=9 && Number.isInteger(num))
    const isDuplicate = new Set(numbers).size === numbers.length

    if (!isValid || !isDuplicate) {
        alert('잘못된 값을 입력했습니다. 다시 입력해 주세요!')
        return;
    }
    console.log('입력 받은 숫자: ', numbers);
}