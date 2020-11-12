import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MathComponent } from 'mathjax-react';

import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  // const htmlStr = katex.renderToString('\\ce{CO2 + C -> 2 C0}');
  // useEffect(() => {
  // katex.render(
  //   'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
  //   document.getElementById('math1') as HTMLElement
  // );
  // }, []);
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [valueC, setValueC] = useState('');
  const [calcResult, setCalcResult] = useState('');

  const handleCalcResult = () => {
    const numberA = +valueA;
    const numberB = +valueB;
    const numberC = +valueC;
    if (numberB ** 2 - 4 * numberA * numberC < 0) {
      alert('限制条件： b^2 - 4ac 必须大于等于0');
      return;
    }
    const result =
      numberB - Math.sqrt(numberB ** 2 - 4 * numberA * numberC) / (2 * numberA);
    setCalcResult(result.toString());
  };

  const handleClear = () => {
    setValueA('');
    setValueB('');
    setValueC('');
    setCalcResult('');
  };
  return (
    <div className={styles.container} data-tid="container">
      <MathComponent tex={String.raw`x = {b - \sqrt{b^2-4ac} \over 2a}`} />
      <div>
        <span style={{ color: 'red' }}>限制条件： b^2 - 4ac 必须大于等于0</span>
        <p>请输入如下的值：</p>
        <form action="">
          <div className={styles.mb10}>
            <label htmlFor="value-a">
              a:
              <input
                type="text"
                id="value-a"
                value={valueA}
                className={styles['value-input']}
                onChange={(e) => setValueA(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.mb10}>
            <label htmlFor="value-b">
              b:
              <input
                type="text"
                id="value-b"
                value={valueB}
                className={styles['value-input']}
                onChange={(e) => setValueB(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.mb10}>
            <label htmlFor="value-a">
              c:
              <input
                type="text"
                id="value-c"
                value={valueC}
                className={styles['value-input']}
                onChange={(e) => setValueC(e.target.value)}
              />
            </label>
          </div>
        </form>
        <div className={styles.mb10}>
          <button
            type="button"
            onClick={handleCalcResult}
            className={styles['result-btn']}
            style={{ marginRight: 30 }}
          >
            计算
          </button>
          <button
            type="button"
            onClick={handleClear}
            className={styles['result-btn']}
          >
            清除
          </button>
        </div>
        <div>
          <span>
            x的结果是：
            {calcResult}
          </span>
        </div>
      </div>
      {/* <ul>
        <li>
          <Link to={routes.MATHAJX1}>to MATHAJX1</Link>
        </li>
        <li>
          <Link to={routes.COUNTER}>to Counter</Link>
        </li>
      </ul> */}
      {/* <div>{htmlStr}</div> */}
    </div>
  );
}
