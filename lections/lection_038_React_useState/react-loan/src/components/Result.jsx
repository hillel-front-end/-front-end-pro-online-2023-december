import Table from "../UI/Table";

const COL_DESC = {
  month: "Місяць",
  loanBody: "Заборгованість за кредитом, грн",
  monthlyPayment: "Погашення кредиту, грн",
  loanInterest: "Відсотки за кредитом, %",
  summaryMonthlyPayment: "Виплата в місяць, грн",
};

const COLUM_ORDER = [
  "month",
  "loanBody",
  "monthlyPayment",
  "loanInterest",
  "summaryMonthlyPayment",
];

const Result = ({ schedual }) => {
  console.log("---Result---");
  const thead = (
    <tr>
      {COLUM_ORDER.map((col, index) => (
        <th key={index}>{COL_DESC[col]}</th>
      ))}
    </tr>
  );

  return (
    <div className="result-container">
      <Table id="result" thead={thead}>
        {schedual.map((row) => (
          <tr>
            {COLUM_ORDER.map((col, index) => (
              <td key={index}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Result;
