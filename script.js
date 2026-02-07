
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').onclick = function () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        const hex = "#" +
            r.toString(16).padStart(2, '0') +
            g.toString(16).padStart(2, '0') +
            b.toString(16).padStart(2, '0');

        if (rgb == `rgb(0, 0, 0)`) {
            document.getElementById('btn').innerHTML = `
        <div style="background:${rgb}; color: white">
            rgb: ${rgb}<br>
            hex: ${hex}
        </div>
    `;
        }
        else {
            document.getElementById('btn').innerHTML = `
        <div style="background:${rgb};">
            rgb: ${rgb}<br>
            hex: ${hex}
        </div>
    `;
        }

    };
    input.oninput = function () {
        counter.textContent = this.value.length + '/' + this.maxLength;
    };
    document.getElementById('addBtn').onclick = function () {
        const input = document.getElementById('input2');
        const text = input.value.trim();

        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            document.getElementById('list').appendChild(li);
            input.value = '';
        }
        else {
            const li = document.createElement('li');
            li.style.color = 'red';
            li.textContent = 'Пустую строку нельзя добавить';
            document.getElementById('list').appendChild(li);

            input.value = '';
        }
    };
    let counter2 = 0;
    const output = document.getElementById('output');
    document.getElementById('more').onclick = function() {
        counter2++;
        output.value = counter2;
    }
    document.getElementById('less').onclick = function() {
        counter2--;
        output.value = counter2;
    }
    document.getElementById('reset').onclick = function() {
        counter2 = 0;
        output.value = counter2;
    }
})