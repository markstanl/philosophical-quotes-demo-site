import React, { useEffect, useState } from 'react';

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
    return (
        <div className={"w-full h-screen rounded-lg flex items-center " +
            "flex-col border-slate-400 border-2"}>
            <div>
                <p>theme{requestQuery.theme}</p>
                <p>author{requestQuery.author}</p>
                <p>quote{requestQuery.quote}</p>
                <p>dailyquote{requestQuery.dailyQuote}</p>
                <p>include{requestQuery.includeIDs}</p>
                <p>exclude{requestQuery.excludeIDs}</p>
            </div>
        </div>
    )
}
export default Demo
