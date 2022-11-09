import './toast.css'
import warningIco from '../../../assets/images/warning_ico.png'

export const ToastDialog=(prop)=>{
    const{message,type} = prop
    return(
        <div className='toast-dialog-container'>
            <div>
                <img src={warningIco}></img>
            </div>
            <div className='toast-message'>{message}</div>
        </div>
    )
}