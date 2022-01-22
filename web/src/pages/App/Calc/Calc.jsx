import React, { useState } from "react";
import "./Calc.scss";

const Calc = () => {
  const [agebmi, setAgebmi] = useState();
  const [heightbmi, setHeightbmi] = useState();
  const [weightbmi, setWeightbmi] = useState();
  const [agekcal, setAgekcal] = useState();
  const [heightkcal, setHeightkcal] = useState();
  const [weightkcal, setWeightkcal] = useState();
  const [gender, setGender] = useState();
  const [bmi, setBmi] = useState();
  const [activity, setActivity] = useState();
  const [kcal, setKcal] = useState();
  const [target, setTarget] = useState("");

  const calcularBmi = () => {
    const calcbmi = weightbmi / (heightbmi * heightbmi);
    setBmi(Math.round(calcbmi));
  };

  const calcularKcal = () => {
    let calckcal = 10 * weightkcal + 6.25 * heightkcal - 5 * agekcal + 5;

    if (activity == 1) {
      calckcal = calckcal * 1.2;
      setKcal(calckcal);
    } else if (activity == 2) {
      calckcal = calckcal * 1.33;
      setKcal(calckcal);
    } else if (activity == 3) {
      calckcal = calckcal * 1.42;
      setKcal(calckcal);
    } else if (activity == 4) {
      calckcal = calckcal * 1.5;
      setKcal(calckcal);
    } else if (activity == 5) {
      calckcal = calckcal * 1.67;
      setKcal(calckcal);
    } else if (activity == 6) {
      calckcal = calckcal * 1.84;
      setKcal(calckcal);
    } else {
      console.log("erro");
    }
  };

  const bulkingkcal = Math.round(kcal) + 300;
  const proteinbulking = weightkcal * 2.5;
  const fatbulking = weightkcal * 1;
  const carbsbulking = weightkcal * 4;

  const cuttingkcal = Math.round(kcal) - 300;
  const proteincutting = weightkcal * 2.2;
  const fatcutting = weightkcal * 0.8;
  const carbscutting = weightkcal * 2;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  return (
    <>
      <div id="calculators">
        <div id="bmi">
          <div className="title">Calculate Bmi</div>
          <div className="subtitle">Body Mass Index</div>
          <form onSubmit={onSubmit}>
            <div className="row">
              <input
                type="number"
                value={agebmi}
                onChange={(e) => setAgebmi(e.target.valueAsNumber)}
                placeholder="Age"
              />
              <input
                type="number"
                value={heightbmi}
                onChange={(e) => setHeightbmi(e.target.valueAsNumber)}
                placeholder="Height"
              />
            </div>
            <div className="row">
              <input
                type="number"
                value={weightbmi}
                placeholder="Weight"
                onChange={(e) => setWeightbmi(e.target.valueAsNumber)}
                id="weight"
              />
              <select
                class="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <input
              type="submit"
              id="submit"
              onClick={() => calcularBmi()}
              value="Calculate"
            />
          </form>
          <div className="resultbmi">Your BMI: {bmi}</div>
        </div>

        <div id="kcal">
          <div className="title">Calculate Kcal</div>
          <div className="subtitle">Your calories needed</div>
          <form onSubmit={onSubmit}>
            <div className="row">
              <input
                type="number"
                value={agekcal}
                onChange={(e) => setAgekcal(e.target.valueAsNumber)}
                placeholder="Age"
              />
              <input
                type="number"
                value={heightkcal}
                onChange={(e) => setHeightkcal(e.target.valueAsNumber)}
                placeholder="Height"
              />
            </div>
            <div className="row">
              <input
                type="number"
                id="weight"
                value={weightkcal}
                placeholder="Weight"
                onChange={(e) => setWeightkcal(e.target.valueAsNumber)}
              />
              <select
                class="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <select
              class="level"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="1">Sedentary</option>
              <option value="2">Light (exercise 1-3 times/week)</option>
              <option value="3">Moderate (exercise 4-5 times/week)</option>
              <option value="4">
                Active (daily or intense exercise 3-4 times/week)
              </option>
              <option value="5">
                Very Active (intense exercise 6-7 times/week)
              </option>
              <option value="6">
                Extra Active (very intense exercise daily, or physical job)
              </option>
            </select>
            <input
              type="submit"
              id="submit"
              value="Calculate"
              onClick={() => calcularKcal()}
            />
          </form>
          <div className="resultbmi">Your maintain: {kcal} kcal</div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setTarget("cutting")}
            >
              Cutting
            </button>

            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setTarget("bulking")}
            >
              Bulking
            </button>
          </div>
          <div className="table">
            <table class="styled-table">
              <thead>
                <tr id="tr1">
                  <th>Carbs</th>
                  <th>Protein</th>
                  <th>Fat</th>
                  <th>Total Calories</th>
                </tr>
              </thead>
              {target === "cutting" ? (
                <tbody>
                  <tr>
                    <td>{carbscutting}</td>
                    <td>{proteincutting}</td>
                    <td>{fatcutting}</td>
                    <td>{cuttingkcal}</td>
                  </tr>
                </tbody>
              ) : target === "bulking" ? (
                <tbody>
                  <tr>
                    <td>{carbsbulking}</td>
                    <td>{proteinbulking}</td>
                    <td>{fatbulking}</td>
                    <td>{bulkingkcal}</td>
                  </tr>
                </tbody>
              ) : null}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;
