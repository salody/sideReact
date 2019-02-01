import count from './count'


export default function* IndexSaga() {
  // yield [
  //   count()
  // ]
  yield count()
}
