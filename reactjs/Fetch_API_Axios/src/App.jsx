import { useEffect, useRef, useState, memo } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [users, setUsers] = useState([])
    const [userId , setUserID] = useState()
    const inputRef = useRef()

    const timeoutID = useRef()

    // 1. Fetch
    // useEffect(() => {
    //     const url = "https://jsonplaceholder.typicode.com/users"
    //     fetch(url)
    //         .then(response => {
    //           console.log(response)
    //             if (!response.ok) {
    //                 throw new Error(response.status)
    //             }
    //             return response.json()
    //         })
    //         .then(data => {
    //             setUsers(data)
    //             timeoutID.current = setTimeout(() => {
    //                 setLoading(false)
    //             }, 1000)
    //         })
    //         .catch(error => {
    //             console.log({ error })
    //             setError(true)
    //         })
    // }, [])

    // 2. Async/Await
    useEffect(() => {
      // let timeId
      const actionFetch = async () => {
        let url = "https://jsonplaceholder.typicode.com/users"
        if (userId) {
          url+= "/" + userId
          console.log(url);
        }
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(response.status)
          }
          const data = await response.json()
          console.log(data);
          
          setUsers(userId ? [data] : data)
          setError(null)
        } catch (error) {
          setError("An error occurred")
        } finally {
          timeoutID.current = setTimeout(() => {
            setLoading(false)
          }, 1000);
        }
      }
      actionFetch()

      // return ()=> {
      //   console.log(timeId)
      // }
    }, [userId])

    const handleClick = () => {
      try {
        let inputVal = parseInt(inputRef.current.value)
        if (inputVal < 1 || inputVal > 10) {
          throw new Error(`User ${inputVal } not found.`)
        }
        setUserID(inputVal)
        
      } catch (error) {
        setError(error.message)
        setUsers([])
      } finally {
        inputRef.current.value = ""
        inputRef.current.focus
      }
    }

    function handleDisplay(loading, error) {
        const childrent = [
          <input key="inputUserId" placeholder="Enter userId" ref={inputRef} />,
          <button key="btnGetUser" type="button" onClick={handleClick}>Get User</button>
        ]
        if (!loading && users.length !== 0) {
            // Clear timeout
            if (timeoutID.current) {
                clearTimeout(timeoutID.current)
                timeoutID.current = undefined
            }

            childrent.push(<UsersComponet data={users} userId={userId} key="listUsers"/>)

        } else if (error) {
            childrent.push(<div key="errorMsg" style={{color: 'red'}}>{error}</div>)
        } else {
            childrent.push(<div key="loadingMsg">Loading...</div>)
        }
        return childrent;
    }

    return <>{handleDisplay(loading, error)}</>
}

const UsersComponet = memo(function UsersComponet({data, userId}) {
  return (
      <ul>
          {data.map(item => {
            const vals = userId ? [item.name, item.phone, item.website] : [item.name, item.email]
              return (
                  <li style={{ textAlign: "left" }} key={item.id}>
                      ({item.id}) {vals.join(' | ')}
                  </li>
              )
          })}
      </ul>
  )
})

export default App
