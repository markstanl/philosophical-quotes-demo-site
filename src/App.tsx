import { useState } from 'react'
import Settings from './Settings/Settings'
import Demo from './Demo/Demo'
import './App.css'

function App() {
    interface QueryProps {
        theme: string;
        author: string;
        quote: string;
        dailyQuote: string;
        includeIDs: string;
        excludeIDs: string;
    }

    const [requestQuery, setRequestQuery] = useState<QueryProps>({
        theme: "default",
        author: "",
        quote: "",
        dailyQuote: "false",
        includeIDs: "",
        excludeIDs: ""
    })

  return (
      <div className={"flex flex-row w-screen h-screen"}>
          <div className={"w-1/5"} />
        <div className={"flex flex-col items-center w-3/5 mt-16"}>
            <h1 className={"text-green-300"}>Github ReadMe Philosophical Quotes</h1>
            <div className={"flex justify-center gap-6"}>
                <p>Space for icons</p>
                <p>other icon</p>
            </div>
            <div className={"flex w-full h-full gap-4"}>
                <Settings setRequest={setRequestQuery}/>
                <Demo requestQuery={requestQuery}/>
            </div>
        </div>

          <div className={"w-1/5"}>
                <p>Night</p>
          </div>
      </div>
  )
}

export default App
