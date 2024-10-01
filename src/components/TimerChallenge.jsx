export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challeng-time">
                {targetTime} second{targetTime > 1 ? 's' : ""}
            </p>
            <p>
                <button>
                    start Challenge
                </button>
            </p>
            <p className="">
                Time is Running
            </p>
        </section>
    )
}
