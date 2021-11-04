import { useState } from 'react'
import DialogContext from './DialogContext'

function DialogProvider({ children, ...props }) {
  const [dialog, setDialog] = useState({
    isOpen: false,
    text: '',
    closeBtnText: ''
  })

  return (
    <DialogContext.Provider value={{ dialog, setDialog }} {...props}>
      {children}
    </DialogContext.Provider>
  )
}

export default DialogProvider
