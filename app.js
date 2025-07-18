
function loadForm(type) {
  const formContainer = document.getElementById("form-container");
  let url = "";
  if (type === "viagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNDcxRlZHRzBKMjVJM1lWVFc4UU8zOUc0SS4u&origin=lprLink&route=shorturl";
  } else if (type === "hospedagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNjZYRUdHUEtKNUNDSEYyV001TE9VU0ZUVy4u&origin=lprLink&route=shorturl";
  }

  formContainer.innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
}
