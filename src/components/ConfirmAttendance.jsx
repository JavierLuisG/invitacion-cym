import numContacts from "../mocks/numContact.json";

const ConfirmAttendance = () => {
  const waMessage = `Hola 👋, quiero confirmar mi asistencia a tu boda 💒 💍. \n\n*Nota: _Esta celebración está reservada solo para adultos_.*`;
  
  return (
    <div className="container_confirm flex_column box">
      <h2>Confirmar asistencia</h2>
      <p>
        Tu asistencia es muy importante para nosotros, por favor confirma tu
        asistencia a cualquiera de los dos por medio de WhatsApp
      </p>
      <div>
        <div className="container_btns flex_row">
          <a
            href={`https://wa.me/${numContacts[0].husband}?text=${encodeURIComponent(
              waMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="container_btn_confirm flex_row"
          >
            <img src="/whatsapp.svg" />
            <div className="text_btn_confirm">Cristian</div>
          </a>
          <a
            href={`https://wa.me/${numContacts[1].wife}?text=${encodeURIComponent(
              waMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="container_btn_confirm flex_row"
          >
            <img src="/whatsapp.svg" />
            <div className="text_btn_confirm">Mariapaz</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAttendance;
