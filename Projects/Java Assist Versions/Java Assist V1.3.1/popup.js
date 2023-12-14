//comp
document.addEventListener('DOMContentLoaded', function () {
  const loadButton = document.getElementById('comp');
  const iframe = document.getElementById('compFrame');
  const jframe = document.getElementById('javaFrame');

  loadButton.addEventListener('click', function () {

    iframe.style.display = 'block';
    console.log("comp");
    jframe.style.display = 'none';
    
  });
});
//string
document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('string');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/String.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      console.log("string");
      cframe.style.display = 'none';
    });
  });
  // int
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('int');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/Integer.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
  //double
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('double');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/Double.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
  //lang
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Circ');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/lang/package-summary.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
  //rect
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Rect');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.desktop/java/awt/Rectangle.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });

//Auto open
  document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('javaFrame');
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/index.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      console.log('here')
    });
//Math
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Math');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/math/package-summary.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
  //Array
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('Array');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/Arrays.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
    //ArrayList
  document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('ArrayList');
    const iframe = document.getElementById('javaFrame');
    const cframe = document.getElementById('compFrame');
    loadButton.addEventListener('click', function () {
      iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/ArrayList.html'; // Replace with your desired URL
      iframe.style.display = 'block';
      cframe.style.display = 'none';
    });
  });
    //sets
    document.addEventListener('DOMContentLoaded', function () {
      const loadButton = document.getElementById('Sets');
      const iframe = document.getElementById('javaFrame');
      const cframe = document.getElementById('compFrame');
      loadButton.addEventListener('click', function () {
        iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/Set.html';
        iframe.style.display = 'block';
        cframe.style.display = 'none';
      });
    });
      //Dict
      document.addEventListener('DOMContentLoaded', function () {
        const loadButton = document.getElementById('Dict');
        const iframe = document.getElementById('javaFrame');
        const cframe = document.getElementById('compFrame');
        loadButton.addEventListener('click', function () {
          iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/util/Dictionary.html';
          iframe.style.display = 'block';
          cframe.style.display = 'none';
        });
      });
  
  

