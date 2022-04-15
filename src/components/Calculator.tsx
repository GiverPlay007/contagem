import styles from "./styles.module.scss";

export function Calculator() {
  const calculate = event => {
    event.preventDefault();

    const form = event.target;
    const groupWeight = form.groupWeight.value;
    const totalWeight = form.totalWeight.value;
    const tare = form.tare.value;

    const result = (totalWeight - tare) * 10 / groupWeight
    form.result.value = result.toFixed(0);
  };

  return (
    <div className={styles.content}>
      <form onSubmit={calculate}>
        <div className={styles.inputBlock}>
          <label htmlFor="groupWeight">Peso de 10 itens</label>
          <input id="groupWeight" type="number" defaultValue={0} min={0} required/>
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="totalWeight">Peso total</label>
          <input id="totalWeight" type="number" defaultValue={0} min={0} required/>
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="tare">Tara</label>
          <input id="tare" type="number" defaultValue={0} min={0} required/>
        </div>

        <div className={styles.inputBlock}>
          <span>Resultado</span>
          <input id="result" type="number" disabled/>
        </div>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
}
