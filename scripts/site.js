window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    document.querySelector('nav').classList.add('sticky');
  }else {
    document.querySelector('nav').classList.remove('sticky');
  }
}

function sign(x) {
  document.getElementById('register').classList.toggle('open');
  if (x == 'sign-in') { 
    document.getElementById('register').classList.add('sign-in');
    document.getElementById('register').classList.remove('sign-up');
  }else if (x == 'sign-up') {
    document.getElementById('register').classList.add('sign-up');
    document.getElementById('register').classList.remove('sign-in');
  }else if (x == 'submit') {
    document.getElementById('register_status').classList.add('signed');
    document.getElementById('avatar').classList.remove('signed');
    document.getElementById('choosing').classList.remove('unvisibile');
  }
}

const ENDPOINT = [];

function submitChoosing(e) {
  let choosing = document.querySelectorAll('#choosing input')
  let t = {}

  for (let x = 0; x <= choosing.length-1; x++) {
    if (!choosing[x].value) {
      return;
    }

    switch (choosing[x].name) {
     case 'from':
      t.from = choosing[x].value
     break;
     case 'to':
      t.to = choosing[x].value
     break;
     case 'date':
      t.date = choosing[x].value
     break;
    }
  }
  ENDPOINT.push(t);
  document.getElementById('counter').classList.remove('open');
  document.getElementById('counter').textContent = ENDPOINT.length;
}

function openChoosing() {
  if(ENDPOINT.length <= 0) {
    return
  }
  document.body.classList.add('replace');
  let fragement = '';
  for (let x = 0; x <= ENDPOINT.length-1; x++) {
    let tr = `
    <tr>
      <td>${x+1}</td>
      <td>${ENDPOINT[x].from}</td>
      <td>${ENDPOINT[x].to}</td>
      <td>${ENDPOINT[x].date}</td>
    </tr>`
    fragement += tr
  }
  document.getElementById('choosing_table').innerHTML = `
  <tr>
  <th></th>
  <th>From</th>
  <th>to</th>
  <th>date</th>
</tr>
${fragement}
  `
}
function closeChoosing() {
  document.body.classList.remove('replace');
}