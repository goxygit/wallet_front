import classNames from "classnames";
import s from "./styles.module.scss";
import Diagram from "./diagrams/main";
export default () => {
  const profit = 38; // Замените на реальное значение прибыли
  const loss = 62; // Замените на реальное значение убытков

  return (
    <div className={s.statistics_block}>
      <div className={s.value_block}>
        <div className={s.value_blocks}>
          TOTAL INCOME:
          <div className={classNames(s.value, s.value_income)}>$0.00</div>
        </div>
        <div className={s.value_blocks}>
          TOTAL EXPENSE:
          <div className={classNames(s.value, s.value_expense)}>$0.00</div>
        </div>
      </div>
      <div className={s.diagram}>
        <Diagram profit={profit} loss={loss} />
      </div>
      <div className={s.info}>
        <div className={classNames(s.info_element, s.first_element)}>
          <div className={s.color_block_green}></div>
          Incomes
        </div>
        <div className={s.info_element}>
          <div className={s.color_block_red}></div>
          Expense
        </div>
      </div>
    </div>
  );
};
