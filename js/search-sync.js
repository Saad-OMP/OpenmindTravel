document.addEventListener("DOMContentLoaded", function () {
  // Wait for the hidden widget to load
  // (adjust the timeout if needed)
  setTimeout(() => {
    // Get references to your custom input elements
    const myOriginInput = document.getElementById("my-origin-input"); // Corrected ID!
    const myDestinationInput = document.getElementById("my-destination-input"); // Corrected ID!
    const myDepartDateInput = document.getElementById("my-depart-date-input");
    const myReturnDateInput = document.getElementById("my-return-date-input");
    const mySearchButton = document.getElementById("my-search-button");

    // Get references to the hidden widget's elements
    const hiddenOriginInput = document.querySelector(
      'input[data-testid="autocomplete-input-origin"]'
    );
    const hiddenDestinationInput = document.querySelector(
      'input[data-testid="autocomplete-input-destination"]'
    );
    const hiddenDepartDateInput = document.getElementById(
      "DateRange_from_7879_0"
    );
    const hiddenReturnDateInput = document.getElementById(
      "DateRange_to_7879_0"
    );
    const hiddenSearchButton = document.getElementById("Submit_6_7879_0");

    // Function to update a hidden input and trigger a change event
    function updateHiddenInput(hiddenInput, newValue) {
      // Find the underlying input element (likely a <input type="hidden">)
      const realInput = hiddenInput.querySelector('input[type="hidden"]');

      if (realInput) {
        realInput.value = newValue;
        realInput.dispatchEvent(new Event("change", { bubbles: true }));

        // Additional check: Trigger 'input' event if needed
        hiddenInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }

    if (
      hiddenOriginInput &&
      hiddenDestinationInput &&
      hiddenDepartDateInput &&
      hiddenReturnDateInput &&
      hiddenSearchButton
    ) {
      // Syncing Origin
      myOriginInput.addEventListener("input", () => {
        updateHiddenInput(hiddenOriginInput, myOriginInput.value);
      });

      // Syncing Destination
      myDestinationInput.addEventListener("input", () => {
        updateHiddenInput(hiddenDestinationInput, myDestinationInput.value);
      });

      // Syncing Depart Date (handle date format if needed)
      myDepartDateInput.addEventListener("input", () => {
        // You may need to format the date value to match the widget's expected format
        const formattedDate = myDepartDateInput.value; // Add formatting if required
        updateHiddenInput(hiddenDepartDateInput, formattedDate);
      });

      // Syncing Return Date (same logic and potential formatting as Depart Date)
      myReturnDateInput.addEventListener("input", () => {
        const formattedDate = myReturnDateInput.value;
        updateHiddenInput(hiddenReturnDateInput, formattedDate);
      });

      // Triggering the Search
      mySearchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent your form from submitting normally
        hiddenSearchButton.click();
      });
    } else {
      console.error(
        "One or more hidden widget elements not found. Check your selectors."
      );
    }
  }, 2000); // 2 seconds timeout - adjust if the widget takes longer to load
});
