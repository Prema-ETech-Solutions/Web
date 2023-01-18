import React from 'react'
// Change The elements
function Four() {
    var myObj =
    {
        id:"01",Letter:"A",capital :true
    }
    const [data, setdata] = React.useState(myObj)
    const change = () => {
        let lett = data.Letter;
        if (lett === "A") {
            setdata({ ...data, Letter: "B" });
        }
        else { 
            setdata({ ...data, Letter: "A"});
        }
    }
    return (
        <>
            <div className='con'>
                <h2 className='cen'>
                    Type - {String(data.capital)} & Word - {data.Letter}
                </h2>
                <button className='cen' onClick={change}> Change Button</button>
            </div>
        </>
  )
}

export default Four