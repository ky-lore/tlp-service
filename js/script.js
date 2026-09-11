document.addEventListener('DOMContentLoaded', function () {

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.closest('.faq-list').querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---- Formspree AJAX submit -> redirect to /thank-you/ ---- */
  var form = document.querySelector('form[data-formspree]');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          window.location.href = '/thank-you/';
        } else {
          if (status) {
            status.textContent = 'Something went wrong. Please call us at (818) 614-5787 instead.';
            status.className = 'form-status show error';
          }
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
        }
      }).catch(function () {
        if (status) {
          status.textContent = 'Something went wrong. Please call us at (818) 614-5787 instead.';
          status.className = 'form-status show error';
        }
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
      });
    });
  }

});
