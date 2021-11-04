import React, { useCallback, useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import DialogContext from '../utils/DialogContext';

// set body to overflow hidden?

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;
`;

const StyledDialog = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(50% - 30rem);
  max-width: 60rem;
  width: 100%;
  padding: 2rem;
  background: white;
  z-index: 100;
`;

const Dialog = ({children, ...props}) => {
  const { dialog, setDialog } = useContext(DialogContext)
  console.log(dialog, 'dialog')
  const { isOpen, text, handler, noBtnText, yesBtnText } = dialog
  const btnRef = useRef(null)

  const resetDialog = useCallback(() => {
    setDialog({ isOpen: false, text: '', handler: null })
  }, [setDialog])

  const handleYesClick = () => {
    handler()
    resetDialog()
  }

  const handleNoClick = () => {
    resetDialog()
  }

  useEffect(() => {
    const { current } = btnRef
    if (current) current.focus()
  }, [isOpen])

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') resetDialog()
    }
    window.addEventListener('keydown', handleKeydown)
    return ()=> window.removeEventListener('keydown', handleKeydown)
  }, [resetDialog])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <>
      <StyledOverlay/>
      <StyledDialog {...props} role='dialog' aria-describedby='dialog-desc'>
        <p id="dialog-desc">{text}</p>
        {children}
        <button onClick={handleNoClick} variant='red'>
          {noBtnText}
        </button>
        <button onClick={handleYesClick}>{yesBtnText}</button>
      </StyledDialog>
    </>,
    document.getElementById('portal')
  )
}

export default Dialog
