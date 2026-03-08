export default function Profile() {
  return (

    <div>

      <h1>Про нас</h1>

      <p style={{marginTop:20}}>
        Corvus — це мерч підрозділу, створений для підтримки
        бійців та збору коштів на потреби підрозділу.
      </p>

      <p style={{marginTop:10}}>
        Купуючи наш мерч, ви допомагаєте забезпечувати
        підрозділ необхідним спорядженням та технікою.
      </p>

      <p style={{marginTop:10}}>
        Кожна покупка — це внесок у спільну справу.
      </p>

      <a
        href="https://send.monobank.ua/ВАША_БАНКА"
        target="_blank"
        className="add-cart"
        style={{display:"inline-block",marginTop:20}}
      >
        Підтримати підрозділ
      </a>

    </div>

  )
}