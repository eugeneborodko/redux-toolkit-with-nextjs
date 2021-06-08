import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './../store/counterSlice'

const HomePage = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>Home page</div>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>Plus</button>
    </>
  )
}

export default HomePage
