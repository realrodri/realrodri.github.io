var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzMO58Nctnky4oeq0gS8eaW67Q7hHsWtE-BmlXVfdePiEOrgK4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})