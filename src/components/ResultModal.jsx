import { forwardRef , useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({result, targetTime } , ref) {

    const dialog = useRef();

    useImperativeHandle(ref , () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>
                You {result}
            </h2>
            <p>
                The Target Time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You Stopped the Timer with <strong>X seconds. left</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal