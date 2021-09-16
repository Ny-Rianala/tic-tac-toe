import React from 'react'

function CountDownTimer() {
  const [counter, setCounter] = React.useState(10)

  React.useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <div className='App'>
      <div>Turn time limit in seconds: {counter}</div>
    </div>
  )
}

export default CountDownTimer
