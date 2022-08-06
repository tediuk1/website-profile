let i = 0,
  text;
text = "My Portofolio";

function mengetik() {
  if (i < text.length) {
    document.getElementById("efek-ngetik").innerHTML += text.charAt(i);
    i++;
    setTimeout(mengetik, 300);
  }
}
mengetik();
