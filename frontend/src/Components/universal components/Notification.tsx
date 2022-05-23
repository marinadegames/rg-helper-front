import s from './Notification.module.css'

type PropsType = {
    message: string
    typeMessage: 'successful' | 'error'
}

export const Notification = ({message, typeMessage}: PropsType) => {

    return (
        <div className={typeMessage === "successful" ? s.notification_successful : s.notification_error}>
            {message}
        </div>
    )
}