window.onload = () => {
    let gradeCount = 2;

    let addNewGradeButton = document.getElementById('add-grade');
    let countGradeButton = document.getElementById('count-grades');
    let container = document.getElementById('container');
    let result = document.getElementById('result');

    addNewGradeButton.addEventListener('click',() => {
        let div = document.createElement('div');
        let label = document.createElement('label');
        label.innerText = 'Grade ' + gradeCount;
        let input = document.createElement('input');

        div.appendChild(label);
        div.appendChild(input);

        container.appendChild(div);

        gradeCount++;
    });

    countGradeButton.addEventListener('click', () => {
        let divs = container.children;
        let sum = 0;
        for(let i = 0; i < divs.length; i++) {
            let input = divs[i].querySelector('input');
            sum += parseFloat(input.value);
        }

        result.innerText = "Průměr je: " + sum / divs.length;
    });
};
