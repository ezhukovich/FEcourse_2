

document.addEventListener('keydown', function (eventE) {
    if (eventE.code == 'KeyE' && (eventE.ctrlKey || eventE.metaKey)) {
        eventE.preventDefault();

        let x = document.createElement('textarea');
        document.body.appendChild(x);
        // x.classList.add('areaClass');
        x.style.height = '200px';
        x.style.width = '200px';
        x.style.position = 'absolute';



    }
});
document.addEventListener('keydown', function (eventS) {
    if (eventS.code == 'KeyS' && (eventS.ctrlKey || eventS.metaKey)) {
        eventS.preventDefault();

    }
});   
