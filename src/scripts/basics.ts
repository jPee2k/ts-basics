const add = (a: number, b: number) : number => {
    return a + b;
}

const updateOutput = (input1: HTMLInputElement, input2: HTMLInputElement, output: HTMLOutputElement) : void => {
    output.textContent = add(+input1.value, +input2.value).toString();
};

const runApp = () : void => {
    const input1 = document.querySelector('.js-input-1') as HTMLInputElement;
    const input2 = document.querySelector('.js-input-2') as HTMLInputElement;
    const output = document.querySelector('.js-output') as HTMLOutputElement;
    const button = document.querySelector('.js-btn') as HTMLElement;

    let a: string;

    button.addEventListener('click', () => {
        updateOutput(input1, input2, output);
        a = 'I\'m here';
        console.log(a);
    });
};

runApp();
