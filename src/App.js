import "./styles.css";
import React, { useState } from "react";
const questions = [
  {
    question:
      "The right order of PCR process 1. Denaturation 2. Annealing 3. Extension?",
    choices: ["1,2,3", "2,3,1", "2,1,3", "None Of The Above"],
    rightAnswer: "1,2,3",
    hint: "https://www.youtube.com/watch?v=L_jWHffIx5E"
  },
  {
    question: "By what is RNA copied into complementary DNA (cDNA)?",
    choices: [
      "Taq DNA polymerase",
      "RNA polymerase II",
      "Reverse transcriptase",
      "Uracil-N-Glycosylase"
    ],
    rightAnswer: "Reverse transcriptase",
    hint: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    question: "Denaturation involves",
    choices: [
      "heating between 90-98'C",
      "heating between 40-60'C",
      "heating between 72'C",
      "none of the above"
    ],
    rightAnswer: "none of the above",
    hint: "https://www.youtube.com/watch?v=YVkUvmDQ3HY"
  },
  {
    question: "PCR is used to",
    choices: [
      "amplify gene of interest",
      "construct RAPD maps",
      "detect the presence of transgene in an organism",
      "all of the above"
    ],
    rightAnswer: "amplify gene of interest",
    hint: "https://www.youtube.com/watch?v=yBLdQ1a4-JI"
  },
  {
    question:
      "The process of binding of primer to the denatured strand is called?",
    choices: ["denaturation", "annealing", "renaturation", "none of the above"],
    rightAnswer: "annealing",
    hint: "https://www.youtube.com/watch?v=KmtzQCSh6xk"
  },
  {
    question:
      "What would be the effect on the PCR reaction if any of the following circumstances arose: 1) there are no primers? 2) there are no dNTPs in the reaction, 3) there is no Taq polymerase in the reaction?",
    choices: [
      "PCR would proceed normally",
      "Non-specific PCR of random templates will occur",
      "The reaction will cease after a few cycles",
      "The PCR will not commence"
    ],
    rightAnswer: "The PCR will not commence",
    hint: "https://www.youtube.com/watch?v=KmtzQCSh6xk"
  },
  {
    question:
      "What would the expected effect be on a PCR reaction if the primers used were slightly shorter and more variable than the intended oligonucleotide sequences?",
    choices: [
      "The PCR reaction would not commence",
      "The PCR reaction would end after one cycle",
      "The reaction would generate a single short PCR product",
      "The reaction would yield a mixture of non-specific products"
    ],
    rightAnswer: "The reaction would yield a mixture of non-specific products",
    hint: "https://www.youtube.com/watch?v=KmtzQCSh6xk"
  },
  {
    question: "Which type of gene is used as an internal control gene?",
    choices: [
      "housekeeping gene",
      "plasmid",
      "target gene",
      "maintenence gene"
    ],
    rightAnswer: "housekeeping gene",
    hint: "https://www.youtube.com/watch?v=KmtzQCSh6xk"
  },
  {
    question:
      "Through which phase of the amplification plot is the threshold line drawn to work out Ct values?",
    choices: [
      "ground phase",
      "exponential phase",
      "linear phase",
      "plateau phase"
    ],
    rightAnswer: "exponential phase",
    hint: "https://www.youtube.com/watch?v=KmtzQCSh6xk"
  }
];

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

const Prices = [
  "500",
  "1,000",
  "5,000",
  "10,000",
  "50,000",
  "100,000",
  "250,000",
  "500,000",
  "1,000,000",
  "2,000,000"
];

export default function App() {
  // Option Buttons
  const [styleA, setStyleA] = useState("button");
  const changeStyleA = () => {
    if (styleA === "button") {
      setStyleA("button clicked");
      setAnswer(questions[questionIndex].choices[0]);
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleA === "button clicked") {
      setStyleA("button");
    }
  };

  const [styleB, setStyleB] = useState("button");
  const changeStyleB = () => {
    if (styleB === "button") {
      setStyleB("button clicked");
      setAnswer(questions[questionIndex].choices[1]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleB === "button clicked") {
      setStyleB("button");
    }
  };

  const [styleC, setStyleC] = useState("button");
  const changeStyleC = () => {
    if (styleC === "button") {
      setStyleC("button clicked");
      setAnswer(questions[questionIndex].choices[2]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleC === "button clicked") {
      setStyleC("button");
    }
  };

  const [styleD, setStyleD] = useState("button");
  const changeStyleD = () => {
    if (styleD === "button") {
      setStyleD("button clicked");
      setAnswer(questions[questionIndex].choices[3]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
    }
    if (styleD === "button clicked") {
      setStyleD("button");
    }
  };

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(questions.length + 1);
  const [answer, setAnswer] = useState("");

  //50:50
  const [Fifty, setFifty] = useState("fif");
  const changeFifty = () => {
    if (Fifty === "fif") {
      setFifty("fif clicked");
      var ans = questions[questionIndex].rightAnswer;
      var ans_i = questions[questionIndex].choices.indexOf(ans);
      switch (ans_i) {
        default:
          break;
        case 0:
          setStyleC("button used");
          setStyleD("button used");
          break;
        case 1:
          setStyleA("button used");
          setStyleC("button used");
          break;
        case 2:
          setStyleB("button used");
          setStyleD("button used");
          break;
        case 3:
          setStyleA("button used");
          setStyleB("button used");
          break;
      }
    }
  };

  // Call your supervisor
  const [Call, setCall] = useState("call");
  const changeCall = () => {
    if (Call === "call") {
      openLink(questions[questionIndex].hint, true);
      setCall("call clicked");
    }
  };

  //Poll
  const [Poll, setPoll] = useState("poll");
  const changePoll = () => {
    if (Poll === "poll") {
      setPoll("poll clicked");
      change_pollper();
    }
  };

  const [pollper, set_pollper] = useState([25, 25, 25, 25]);
  const change_pollper = () => {
    var ans = questions[questionIndex].rightAnswer;
    var ans_i = questions[questionIndex].choices.indexOf(ans);
    var Y1 = Math.floor(Math.random() * 10) + 25;
    var Y2 = Math.floor(Math.random() * 10) + 20;
    var Y3 = Math.floor(Math.random() * 10) + 20;
    var Y4 = 100 - (Y1 + Y2 + Y3);
    switch (ans_i) {
      default:
        break;
      case 0:
        set_pollper([Y1, Y2, Y3, Y4]);
        break;
      case 1:
        set_pollper([Y4, Y1, Y2, Y3]);
        break;
      case 2:
        set_pollper([Y3, Y4, Y1, Y2]);
        break;
      case 3:
        set_pollper([Y2, Y3, Y4, Y1]);
        break;
    }
  };

  const [RA, setRA] = useState("ra");
  const changeRA = () => {
    if (RA === "ra") {
      openLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ", true);
    }
    setRA("ra clicked");
  };

  const restart = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
    setStyleA("button");
    setStyleB("button");
    setStyleC("button");
    setStyleD("button");
    setFifty("fif");
    setCall("call");
    setPoll("poll");
    setRA("ra");
  };

  const submit = (e) => {
    e.preventDefault();
    if (answer === questions[questionIndex].rightAnswer) {
      setScore((score) => score + 1);
      setStyleA("button");
      setStyleB("button");
      setStyleC("button");
      setStyleD("button");
      if (Fifty === "fif clicked") {
        setFifty("fif used");
      }
      if (Poll === "poll clicked") {
        setPoll("poll used");
      }
      if (Call === "call clicked") {
        setCall("call used");
      }
      if (RA === "ra clicked") {
        setRA("ra used");
      }
      if (questionIndex < questions.length) {
        setQuestionIndex((i) => i + 1);
      }
    } else {
      setScore((score) => score - 0.25);
      switch (questions[questionIndex].choices.indexOf(answer)) {
        default:
          break;
        case 0:
          setStyleA("button wrong");
          break;
        case 1:
          setStyleB("button wrong");
          break;
        case 2:
          setStyleC("button wrong");
          break;
        case 3:
          setStyleD("button wrong");
          break;
      }
    }
  };

  const BackToStart = () => {
    setQuestionIndex((i) => i + 1);
  };

  function CheckQNum(n) {
    if (n === questionIndex) {
      return "price_current";
    } else {
      return "price_tr";
    }
  }

  //Game Engine
  if (questionIndex < questions.length) {
    const N = questions.length;
    var arr_p = Array.from({ length: N }, (_, index) => index + 1).reverse();
    var arr_q = arr_p.slice(
      Math.max(N - questionIndex - 5, 0),
      Math.max(N - questionIndex, 5)
    );
    return (
      <div>
        <div class="top_row_left">
          <table class="lifelines_table">
            <tr>
              <button class={Fifty} onClick={changeFifty}>
                50:50
              </button>
            </tr>
            <tr>
              <button class={Call} onClick={changeCall}>
                Phone Your Supervisor
              </button>
            </tr>
            <tr>
              <button class={Poll} onClick={changePoll}>
                Ask the Audience
              </button>
            </tr>
            <tr>
              <button class={RA} onClick={changeRA}>
                Ask RA
              </button>
            </tr>
          </table>
        </div>
        <img
          src={require("./Who_wants_to_be.png")}
          alt="The Who Wants to be a Researcher Logo"
        ></img>
        <div class="icon"></div>
        <div class="top_row_right">
          <table class="price_table">
            <th>Your current research funding</th>
            {arr_q.map((c) => {
              return (
                <tr class={CheckQNum(c - 1)}>
                  <td class="price_td">{`${c}. £${
                    Prices[Math.min(c - 1, N)]
                  }`}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div>
          <div>
            <div class="question">{questions[questionIndex].question}</div>
          </div>
          <div class="button_div">
            <input
              type="button"
              class={styleA}
              value={`A. ${questions[questionIndex].choices[0]}`}
              onClick={changeStyleA}
              onChange={(e) => setAnswer(questions[questionIndex].choices[0])}
              checked={answer === questions[questionIndex].choices[0]}
            />
            <input
              type="button"
              className={styleB}
              value={`B. ${questions[questionIndex].choices[1]}`}
              onClick={changeStyleB}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[1]}
            />
          </div>
          <div class="button_div">
            <input
              type="button"
              className={styleC}
              value={`C. ${questions[questionIndex].choices[2]}`}
              onClick={changeStyleC}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[2]}
            />
            <input
              type="button"
              className={styleD}
              value={`D. ${questions[questionIndex].choices[3]}`}
              onClick={changeStyleD}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[3]}
            />
          </div>
          <div>
            {Poll === "poll clicked" ? (
              <div class="poll_results">
                Poll Results
                <table class="poll_table">
                  <tr>
                    <th class="poll_th">A</th>
                    <th class="poll_th">B</th>
                    <th class="poll_th">C</th>
                    <th class="poll_th">D</th>
                  </tr>
                  <tr>
                    <td class="poll_td">{pollper[0]}%</td>
                    <td class="poll_td">{pollper[1]}%</td>
                    <td class="poll_td">{pollper[2]}%</td>
                    <td class="poll_td">{pollper[3]}%</td>
                  </tr>
                </table>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {styleA === "button clicked" ||
            styleB === "button clicked" ||
            styleC === "button clicked" ||
            styleD === "button clicked" ? (
              <div class="answer_sub">
                <button type="button" onClick={submit}>
                  Final Answer?
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (questionIndex === questions.length) {
    return (
      <form>
        <div>
          <h1>Your Final Research Funding</h1>
          <p>{`£ ${(
            (score / questionIndex) *
            Prices[questionIndex - 1]
          ).toFixed(2)}`}</p>
          <button type="button" onClick={BackToStart}>
            Try Again
          </button>
        </div>
      </form>
    );
  }
  if (questionIndex === questions.length + 1) {
    return (
      <div>
        <h1>Who Wants to be a Researcher?</h1>
        <image src={require("./Who_wants_to_be.png")}></image>
        <button type="button" onClick={restart}>
          Start
        </button>
      </div>
    );
  }
}
