document.querySelector('.contact-submit').onclick = function () {
  var x = String(document.querySelector('.contact-name').value);
  var y = String(document.querySelector('.contact-email').value);
  var z = String(document.querySelector('.contact-message').value);

  console.log('Name:' + x + '.');
  console.log('Email:' + y + '.');
  console.log('Message:' + z + '.');

  alert('Thank you for submitting. We appreciate your feedback.');
};
