import Card from "../UI/Card";
import Input from "./Input";
import validators from "../helpers/index";
import initialUseValidation from "../hooks/useValidation";

const validatorsUserInput = {
  price: validators.minLength(1000),
};

const initialValidationState = {
  price: { invalid: true, valid: false, touched: false },
};

const useValidation = initialUseValidation(
  validatorsUserInput,
  initialValidationState
);

const UserInput = ({ userInput, ...props }) => {
  const { error, onValidate } = useValidation();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };

  console.log(error, "error");

  return (
    <Card className="credit-calculator text-center flex-column-center">
      <div className="w-35">
        <Input
          label="Ціна (грн)"
          type="number"
          name="price"
          placeholder="Ціна (грн)"
          onChange={onChangeHandler}
          onBlur={onValidate}
          value={userInput.price}
        />
        {error["price"].invalid && error["price"].touched && (
          <div className="invalid">Price invalid !</div>
        )}
      </div>

      <Input
        className="w-35"
        label="Перший внесок(грн)"
        type="number"
        name="firstPayment"
        placeholder="Перший внесок"
        onChange={onChangeHandler}
        value={userInput.firstPayment}
      />
      <Input
        className="w-35"
        label="Строк кредитування"
        type="number"
        name="term"
        placeholder="Строк кредитування"
        onChange={onChangeHandler}
        value={userInput.term}
      />
      <Input
        className="w-35"
        label="Відсоткова ставка за кредитом(%)"
        type="number"
        name="rate"
        placeholder="Відсоткова ставка за кредитом(%)"
        onChange={onChangeHandler}
        value={userInput.rate}
      />
    </Card>
  );
};

export default UserInput;
