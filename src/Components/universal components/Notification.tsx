import s from './Notification.module.css'

type PropsType = {
    message: string
}

export const Notification = ({message}: PropsType) => {
    return (
        <div className={s.notification_successful}>{message}</div>
    )
}