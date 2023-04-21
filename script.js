const send = document.querySelector("#actionButton");
function verifyAnswer() {
  //this function will verify the user answer based on the selected tonality
  const selectField = document.querySelector("#selectField");
  const selectedOption = selectField.value;
  const userAnswer = document.querySelector("#answerField").value;

  switch (selectedOption) {
    case "C":
      const correctC = "C Dm Em F G Am B";
      if (userAnswer === correctC) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "D":
      const correctD = "D Em F#m G A Bm C#";
      if (userAnswer === correctD) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "E":
      const correctE = "E F#m G#m A B C#m D#";
      if (userAnswer === correctE) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "F":
      const correctF = "F Gm Am Bb C Dm E";
      if (userAnswer === correctF) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "G":
      const correctG = "G Am Bm C D Em F#";
      if (userAnswer === correctG) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "A":
      const correctA = "A Bm C#m D E F#m G#";
      if (userAnswer === correctA) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
    case "B":
      const correctB = "B C#m D#m E F# G#m A#";
      if (userAnswer === correctB) {
        alert("Parabéns, você acertou tudo");
      } else {
        alert("Hmm... Tem algo errado! Dá uma olhada na tua resposta");
      }
      break;
  }
}
send.addEventListener("click", verifyAnswer);

function showQuestion() {
  const selectedElement = document.querySelector("#select");
  const selectedOption = selectedElement.value;
  const question = document.querySelector("#question-text");

  if (userAnswer === null) {
    alert("Preencha o campo de resposta");
  }

  switch (selectedOption) {
    case "C":
      question.innerHTML = "Insira os acordes do campo de C";
      break;

    case "D":
      question.innerHTML = "Insira os acordes do campo de D";
      break;

    case "E":
      question.innerHTML = "Insira os acordes do campo de E";
      break;

    case "F":
      question.innerHTML = "Insira os acordes do campo de F";
      break;

    case "G":
      question.innerHTML = "Insira os acordes do campo de G";
      break;

    case "A":
      question.innerHTML = "Insira os acordes do campo de A";
      break;

    case "B":
      question.innerHTML = "Insira os acordes do campo de B";
      break;
  }
}
