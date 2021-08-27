import React, { useState } from 'react'
import { useEffect } from 'react'

const Hooks = () => {
  // constructor
  const [nilai, setNilai] = useState(0)

  useEffect(() => {
    // did mount
    document.title = `title change: ${nilai}`
    // willunmount
    return () => {
      document.title = "React JS with Hooks"
    }
  }, [
    document.title = `title change: ${nilai}`
  ])

  return (
    <>
    <p>Nilai saat ini adalah : {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Update Nilai</button>
    </>
  )
}

export default Hooks

// export default class Hooks extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       nilai: 5
//     }
//   }

//   componentDidMount() {
//     document.title = `title change : ${this.state.nilai}`
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     document.title = `title change : ${this.state.nilai}`
//   }

//   componentWillUnmount() {
//     document.title = "Inixindo"
//   }

//   onUpdate = () => {
//     this.setState({
//       nilai: this.state.nilai + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>Nilai saat ini adalah : {this.state.nilai}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     )
//   }
// }
