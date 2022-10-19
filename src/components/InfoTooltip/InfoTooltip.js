function InfoTooltip({ onClose, status: { isOpen, successful, text } }) {
   
  function handleClickOverlay(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return (
    <div
      className={`info-tooltip ${isOpen ? "info-tooltip_opened" : ""}`}
      onClick={handleClickOverlay}
    >
      <div className="info-tooltip__container">
      <div
          className={`info-tooltip__status ${
            successful
              ? 'info-tooltip__status_success'
              : 'info-tooltip__status_fail'
          }`}
        ></div>
        <h2 className="info-tooltip__text">{text}</h2>
        <button
          className="info-tooltip__close-button opacity-on-hover"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
