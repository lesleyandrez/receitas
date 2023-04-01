(() => {
    typeof window !== 'undefined' &&
        document.addEventListener('DOMContentLoaded', function () {
            const container = document.querySelector('.container');
            const textNode = document.createElement('strong');

            textNode.classList.add('text');
            textNode.innerHTML = 'Some text here from js file...';

            container.appendChild(textNode);
        });
})();
