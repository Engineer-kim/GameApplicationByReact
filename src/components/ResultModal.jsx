import { forwardRef , useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom'


const ResultModal = forwardRef(function ResultModal({targetTime ,timeRemaining ,handleReset } , ref) {

    const dialog = useRef();
    const userIsLoose = timeRemaining  <= 0
    const formatTime = (timeRemaining / 1000).toFixed(2)
    const score = Math.round((1- timeRemaining / (targetTime * 1000)) * 100)

    useImperativeHandle(ref , () => {
        return {
            open() {
                dialog.current.showModal();    // 부모 컴포넌트가 사용할 수 있는 메서드 정의 , showModal은 웹 바인딩된 기본 함수
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal"> 
                {userIsLoose && <h2>You Lost</h2>}
                {!userIsLoose && <h2>Your Score: {score}</h2>}
            <p>
                The Target Time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You Stopped the Timer with <strong>{formatTime} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={handleReset}>
                <button>Close</button>
            </form>
        </dialog>,   //첫번째 파라미터 JSX
        document.getElementById('modal')   //두번째 파라미터 랜더링 될 위치
    )
})

export default ResultModal