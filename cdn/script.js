function loading() {
  document.querySelectorAll(".bar").forEach(function (current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;

    /* 
      setInterval() time sholud be set as trasition time / 100. 
      In our case, 2 seconds / 100 = 20 milliseconds. 
      */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${endWidth}%`;
        current.firstElementChild.innerText = `${startWidth}%`;
      }
    }
  });
}

setTimeout(loading, 1000);
