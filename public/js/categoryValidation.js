(function() {
    'use strict';

    const form = document.getElementById('listingForm');
    const categoryInputs = document.querySelectorAll('input[name="listing[category]"]');
    const categoryError = document.getElementById("category-error");
    const categoryGroup = document.getElementById("category-group");

    // Real-time validation when checkboxes are clicked
    categoryInputs.forEach(input => {
        input.addEventListener("change", function() {
            let checked = Array.from(categoryInputs).some(inp => inp.checked);
            
            if (checked) {
                categoryError.style.display = "none";
                categoryGroup.classList.remove("is-invalid");
            }
        });
    });

    // Validation on form submit
    form.addEventListener("submit", function(event) {
        // Check if at least one category is selected
        let categoryChecked = Array.from(categoryInputs).some(input => input.checked);
        
        // Prevent form submission if not valid
        if (!form.checkValidity() || !categoryChecked) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Show/hide category error
        if (!categoryChecked) {
            categoryError.style.display = "block";
            categoryGroup.classList.add("is-invalid");
            
            // Scroll to category section if it's the only error
            if (form.checkValidity()) {
                categoryGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            categoryError.style.display = "none";
            categoryGroup.classList.remove("is-invalid");
        }

        // Add Bootstrap validation classes
        form.classList.add('was-validated');
    }, false);
})();