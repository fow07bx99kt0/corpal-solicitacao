
function loadForm(type) {
  const formContainer = document.getElementById("form-container");
  let url = "";
  if (type === "viagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNDcxRlZHRzBKMjVJM1lWVFc4UU8zOUc0SS4u&origin=lprLink&route=shorturl";
  } else if (type === "hospedagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNjZYRUdHUEtKNUNDSEYyV001TE9VU0ZUVy4u&origin=lprLink&route=shorturl";
  } else if (type === "inovacao") {
    url = "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=emONPyFz50qudewosdtpDCPJHkcW2CpMmyPiHvcb7dFUOUxBVkkzTExFVlZSWVNETjVSMkw5MDZJRi4u&Token=779a58036ac442ca92032fa65de3dea3";
  }

  formContainer.innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
}
