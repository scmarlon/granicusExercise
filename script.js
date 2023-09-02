$(document).ready(function () {
  // Retrieve references to the elements
  const checkbox = $("#checkbox");
  const from = $("#mainForm");
  const reStAddress = $("#reStAddress");
  const resCity = $("#resCity");
  const maStAddress = $("#maStAddress");
  const maiCity = $("#maiCity");
  const residentialZip = $("#residentialZip");
  const mailingZip = $("#mailingZip");

  // Function for autocompleting inputs
  checkbox.on("change", function () {
    if (checkbox.prop("checked")) {
      maStAddress.val(reStAddress.val());
      maiCity.val(resCity.val());
      mailingZip.val(residentialZip.val());
    } else {
      maStAddress.val("");
      maiCity.val("");
      mailingZip.val("");
    }
  });

  // Auto clean inputs
  $("#cleaner").on("click", function () {
    from[0].reset();
  });

  const allInputs = from.find("input");
  allInputs.on("input", function () {
    $(this).removeClass("error");
  });

  $("#done").on("click", function () {
    let validatedInputs = true;

    const inputs = from.find("input[required]");

    inputs.each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("error");
        validatedInputs = false;
      } else {
        $(this).removeClass("error");
      }
    });

    if (validatedInputs) {
      alert("Form sent successfully!!");
      from[0].reset();
    } else {
      alert("Please complete all required fields.");
    }
  });
});
