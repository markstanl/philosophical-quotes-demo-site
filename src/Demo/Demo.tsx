import React, {useEffect, useState} from 'react';
import SvgComponent from "@/Components/SVG";
import copyImage from "@/assets/copy.png";

interface QueryProps {
    theme: string;
    author: string;
    quote: string;
    dailyQuote: string;
    includeIDs: string;
    excludeIDs: string;
}

interface DemoProps {
    requestQuery: QueryProps;
}

const Demo: React.FC<DemoProps> = ({requestQuery}) => {

    /**
     * Function to get the request link
     * @param requestQuery the object containing the request query
     */
    const getRequestLink = (requestQuery: QueryProps) => {
        let requestString: string = "https://github-readme-philosophical-quotes.vercel.app/api/generate-image?";
        let requestParams: string[] = [];
        if (requestQuery.theme !== "default") requestParams.push(`theme=${requestQuery.theme}`);
        if (requestQuery.author !== "") requestParams.push(`author=${requestQuery.author}`);
        if (requestQuery.quote !== "") requestParams.push(`quote=${requestQuery.quote}`);
        if (requestQuery.dailyQuote === "true") requestParams.push(`daily-quote=true`);
        if (requestQuery.includeIDs !== "") requestParams.push(`include-ids=${requestQuery.includeIDs}`);
        if (requestQuery.excludeIDs !== "") requestParams.push(`exclude-ids=${requestQuery.excludeIDs}`);

        for (let i = 0; i < requestParams.length; i++) {
            requestString += requestParams[i];
            if (i !== requestParams.length - 1) requestString += "&";
        }
        return requestString;
    }

    const getMarkdownUrl = (requestString: string): string[] => {
        const credits = "<!-- Generated by the Philosophical Quotes API https://github.com/markstanl/Philosophical-Quotes-API/blob/main/README.md -->"
        return [`![Philosophical Quote](${requestString})`, credits]
    }

    const getHTMLUrl = (requestString: string): string => {
        return `<a href="https://github.com/markstanl/github-readme-philosophical-quotes">
    <img src="${requestString}" alt="Philosophical Quote"> 
</a>`
    }

    const [svgUrl, setSvgUrl] = useState<string>("");

    useEffect(() => {
        setSvgUrl(getRequestLink(requestQuery));
    }, [requestQuery]);

    return (
        <div className={"w-full h-full rounded-lg flex items-center " +
            "flex-col border-slate-400 border-2 p-2"}>
            <div>
                <h1 className={'text-2xl font-bold mb-2 w-full text-center'}>Preview</h1>
                <hr className={'w-full border-white mb-4'}/>
                <div className={'w-full overflow-hidden mb-4'}>
                    <SvgComponent requestURL={svgUrl}/>
                </div>
                <h2 className={`text-2xl font-bold`}>Markdown</h2>
                <p className={`m-2 bg-code-bg text-sm font-mono rounded-md flex flex-row align-top p-2`}>
                    <div>
                        {getMarkdownUrl(svgUrl)[0]}
                        <br/>
                        <br/>
                        {getMarkdownUrl(svgUrl)[1]}
                    </div>
                    <img src={copyImage} alt={"copy"} className={"h-3.5 hover:cursor-pointer"}
                         onClick={() => navigator.clipboard.writeText(getMarkdownUrl(svgUrl).join('\n\n'))}/>
                </p>
                <h2 className={`text-2xl font-bold`}>HTML</h2>
                <p className={`m-2 bg-code-bg text-sm font-mono rounded-md flex flex-row align-top p-2`}>
                    <div>
                        {getHTMLUrl(svgUrl)}
                    </div>
                    <img src={copyImage} alt={"copy"} className={"h-3.5 hover:cursor-pointer"}
                         onClick={() => navigator.clipboard.writeText(getHTMLUrl(svgUrl))}/>
                </p>
            </div>
        </div>
    )
}
export default Demo
