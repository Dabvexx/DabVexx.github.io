document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.id = 'my-element';
    container.textContent = 'Hello from JavaScript!';
    document.body.appendChild(container);

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      container.textContent = 'Button Clicked!';
    });
    document.body.appendChild(button);
  });