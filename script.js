let runningTotal = 0;
let displayNumber = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function ButtonClick(value)
{
    if (isNaN(value))
    {
        Symbol(value);
    }
    else
    {
        handleNumber(value);
    }
    screen.innerText = displayNumber;
}

function Symbol(symbol)
{
    switch(symbol)
    {
        case 'C':
            displayNumber = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null)
            {
                return
            }
            Operation(parseInt(displayNumber));
            previousOperator = null;
            displayNumber = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (displayNumber.length === 1)
            {
                displayNumber = '0';
            }
            else
            {
                displayNumber = displayNumber.substring(0, displayNumber.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            Math(symbol);
            break;
    }
}

function Math(symbol)
{
    if (displayNumber === '0')
    {
        return;
    }

    const intBuffer = parseInt(displayNumber);

    if (runningTotal === 0)
    {
        runningTotal = intBuffer;
    }
    else
    {
        Operation(intBuffer);
    }

    previousOperator = symbol;
    displayNumber = '0';
}

function Operation(intBuffer)
{
    if (previousOperator === '+')
    {
        runningTotal += intBuffer;
    }
    else if (previousOperator === '−')
    {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === '×')
    {
        runningTotal *= intBuffer;
    }
    else if (previousOperator === '÷')
    {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString)
{
    if (displayNumber === "0")
    {
        displayNumber = numberString;
    }
    else
    {
        displayNumber += numberString;
    }
}

function init()
{
    document.querySelector('.calc-buttons').addEventListener('click', function(event)
    {
        ButtonClick(event.target.innerText);
    })
}

init();
