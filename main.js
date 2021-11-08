// Now js part
const tg = new window["@tolgee/core"].Tolgee({
  apiUrl: "https://app.tolgee.io",
  apiKey: "ede0i4ipdul0aiqgqj0uetc3gi",
  inputPrefix: "%-%",
  inputSuffix: "%-%",
  watch: true,
});

// We say that when we run the function tg then do the following task
tg.run().then(() => {
    // Hide the loader after tolgee has ran
    document.querySelector('.loader').style.display = "none";
});

// selecting languages select bar
let langs = document.querySelector('.lang-select');
langs.addEventListener('change', (e) => {
    // remember not to put langs here
    tg.lang = e.target.value;
});