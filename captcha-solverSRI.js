var iframe = document.evaluate('//*[@id="contenidoPrincipal"]/div[13]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
var visibility = iframe.singleNodeValue.style.visibility;
if (visibility != 'hidden') {
  const xhr = new XMLHttpRequest();
  const url1='https://2captcha.com/in.php?key=APIKEY_2CAPTCHA&method=userrecaptcha&googlekey=6Lc6rokUAAAAAJBG2M1ZM1LIgJ85DwbSNNjYoLDk&pageurl=https://srienlinea.sri.gob.ec';
  xhr.open('GET', url1, { mode: 'no-cors' });
  xhr.send();
  let token1 = xhr.responseText;
  token1 = token1.substring(3);
  setTimeout(function() {
    const url2='https://2captcha.com/in.php?key=APIKEY_2CAPTCHA&action=get&id=' + token1;
    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', url2, { mode: 'no-cors' });
    xhr2.send();
    let token2 = xhr2.responseText;
    token2 = token2.substring(3);;
    document.getElementById("g-recaptcha-response").innerHTML = token2;
    rcBuscar();
  }, 25000);
}