//string
document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Functions');
    const iframe = document.getElementById('pyFrame');
    
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.python.org/3.11/library/functions.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });
  // int
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Types');
    const iframe = document.getElementById('pyFrame');
  
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.python.org/3.11/library/stdtypes.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });
  //double
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Formats');
    const iframe = document.getElementById('pyFrame');
  
    loadButton.addEventListener('click', function () {
      iframe.src = ' https://docs.python.org/3.11/library/fileformats.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });
  //lang
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('DataTypes');
    const iframe = document.getElementById('pyFrame');
  
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.python.org/3.11/library/datatypes.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });
  //rect
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Constants');
    const iframe = document.getElementById('pyFrame');
  
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.python.org/3.11/library/constants.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });

//Auto open
  document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('pyFrame');
  
    
      iframe.src = 'https://docs.python.org/3.11/index.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
//Math
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Math');
    const iframe = document.getElementById('pyFrame');
  
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.python.org/3.11/library/numeric.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      const compFrame = document.getElementById('compFrame');
      compFrame.style.display = 'none';
    });
  });
//Math
document.addEventListener('DOMContentLoaded', function () {
  const loadButton = document.getElementById('Comp');
  const iframe = document.getElementById('compFrame');

  loadButton.addEventListener('click', function () {
    iframe.style.display = 'block';
    const compFrame = document.getElementById('pyFrame');
    compFrame.style.display = 'none';
  });
});

