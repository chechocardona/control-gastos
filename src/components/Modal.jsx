import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const cerrarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
            src={CerrarBtn}
            alt='cerrar modal'
            onClick={cerrarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal
