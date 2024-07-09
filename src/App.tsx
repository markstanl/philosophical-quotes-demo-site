import {useState} from 'react'
import Settings from './Settings/Settings'
import Demo from './Demo/Demo'
import './App.css'
import Button from '@/Components/Button'
import github from '@/assets/github.png'

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

    // 1080 Pixels
    return (
        <div className={"flex flex-row w-screen"}>
            <div className={"w-1/5"}/>
            <div className={"flex flex-col items-center w-4/5 mt-16"}>
                <h1 className={"text-white font-bold text-4xl mb-4"}>Github ReadMe Philosophical Quotes</h1>
                <div className={"flex justify-center gap-6 m-2"}>
                    <Button text={"View on GitHub"}
                            link={'https://github.com/markstanl/github-readme-philosophical-quotes'} image={github}/>
                </div>
                <div className={"flex w-full h-full gap-4 mt-2"}>
                    <Settings setRequest={setRequestQuery}/>
                    <Demo requestQuery={requestQuery}/>
                </div>
            </div>

            <div className={"w-1/5"}>
                {/*{<p>Night</p>}*/}
            </div>
        </div>
    )
}

export default App
