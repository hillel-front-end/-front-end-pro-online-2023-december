const box = document.querySelector('.box');


function onDragAndDrop(box) {
    let store = {
        offsetX: 0,
        offsetY: 0
    }
    
    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove(event) {
        // console.log(event.clientX, 'clientX');
        // console.log(event.clientY, 'clientY');
        console.log('----onMouseMove----')
        box.style.left = `${event.clientX - store.offsetX}px`;
        box.style.top = `${event.clientY -  store.offsetY}px`;
        // box.style.left = `${event.clientX }px`;
        // box.style.top = `${event.clientY}px`;
    }
    
    function onMouseDown({ offsetY, offsetX }) {
        console.log('----onMouseDown----', offsetY, offsetX)
    
        store = { ...store, offsetY, offsetX };
    
        window.addEventListener('mousemove', onMouseMove);
    }
    
    function onMouseUp() {
        console.log('----onMouseUp----')
        window.removeEventListener('mousemove', onMouseMove);
    }

}

onDragAndDrop(box);