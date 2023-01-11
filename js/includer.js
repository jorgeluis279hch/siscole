const d = document;

async function getHTML(filename) {
  const selector = filename.split(".")[0]; // eliminando la extension
  const output = d.querySelectorAll(`#${selector}`);

  try {
    let req = await fetch(`http://127.0.0.1:5500/src/${filename}`);
    let text = await req.text();

    output.forEach((am) => {
      am.innerHTML = text;
    });
  } catch (err) {
    console.log("Failed to fetch page: ", err);
  }
}

export { getHTML };
