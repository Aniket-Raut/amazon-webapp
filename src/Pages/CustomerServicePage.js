import { ToastDialog } from "../components/ReusableComponents/Toast/ToastDialog"
import './customerservice.css'

export const CustomerService=()=>{
    let warning = "New to Amazon? Visit the Get started with Amazon page to guide you through your shopping journey with Amazon. You can also enjoy the shopping experience in your language of preference by switching to your desired language (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Bengali). To know more, visit this page."
    return(
        <div>
            {
                //dynamic Content
                <ToastDialog message={warning} type="Warn"></ToastDialog>
            }

            <h1 className="main-title">Hello. What can we help you with?</h1>

        </div>
    )
}