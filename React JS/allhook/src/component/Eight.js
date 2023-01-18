import React from 'react'
// Login Page
function Eight() {


    const [user, setuser] = React.useState("")
    const [pass, setpass] = React.useState("")
    const [Entry, setentry] = React.useState([])
    const [id, setid] = React.useState(1)
    const submit = () =>
    {
    //   let newEntry = {id,user,pass};
      let newEntry = {id:id,user :user ,pass : pass};
        let id_ = id;
        id_=id_ + 1;
        setid(id_);
        setentry([...Entry,newEntry])
    }
    return (
      <> 
            <div id='Login-base'>
                <div id='inner-base'>
                    <input type="text" className='getval' value={user} onChange={(e) => setuser(e.target.value)} autoComplete="off" />
                    <input type="text" className='getval' value={pass} onChange={(e) => setpass(e.target.value)} autoComplete="off" />
                    <input type="button" value="Click" onClick={submit}/>
                </div>
                {
                    Entry.map((element) => {
                        // const {id ,user , pass} = element
                        return (
                            
                                <div key={element.id}>
                                    { console.log(element.id)}
                                <label >{element.user}</label>
                                <label >{element.pass}</label>
                                {/* <label >{user}</label>
                                <label >{pass}</label> */}
                                </div>
                            
                        )
                        
                    })
                }
            </div>

      </>
  )
}
export default Eight