import { MyEmail, MyEmailInput } from '../../../styles/01-02-emotion'

export default function EmotionPage(){
    return (
        <div>
            <MyEmail>이메일: </MyEmail>
            <MyEmailInput type="text" />
            <button>로그인</button>
            <img src="/next.svg" />
        </div>
    )
}