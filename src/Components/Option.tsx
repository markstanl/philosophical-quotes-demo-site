import React, {useState} from 'react'
import Select, {CSSObjectWithLabel, MultiValue} from 'react-select'

interface QueryProps {
    theme: string;
    author: string;
    quote: string;
    dailyQuote: string;
    includeIDs: string;
    excludeIDs: string;
}

interface OptionProps {
    description: string;
    optionType: string;
    options?: string[] | number[];
    query: QueryProps;
    queryParameter: string;
    setQuery: React.Dispatch<React.SetStateAction<QueryProps>>;
}

const Option: React.FC<OptionProps> = ({
                                           description, optionType, options,
                                           query, queryParameter, setQuery
                                       }) => {

    const [buttonColor, setButtonColor] = useState('#2a2e34')
    const [underline, setUnderline] = useState('')

    if (!(queryParameter in query)) {
        throw new Error(`Invalid query parameter: ${queryParameter}`);
    }

    const quoteChosen = (): boolean =>{
        return query['quote'] !== 'None'
    }

    const key = queryParameter as keyof QueryProps;

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setQuery(prevQuery => {
            if (queryParameter in prevQuery) {
                return {...prevQuery, [queryParameter]: value};
            }
            throw new Error(`Invalid query parameter: ${queryParameter}`);
        });
        console.log(query)
    }

    const handleMultiSelectChange = (selectedOptions: MultiValue<any>) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setQuery(prevQuery => ({
            ...prevQuery,
            [queryParameter]: selectedValues.join(',')
        }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setQuery(prevQuery => ({
            ...prevQuery,
            [queryParameter]: event.target.value
        }));
        console.log(query)
    }

    const handleButtonChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonColor === '#2a2e34'){
            setButtonColor('#3F6945')
            setUnderline('underline')
        }else{
            setButtonColor('#2a2e34')
            setUnderline('')
        }

        if (query.dailyQuote === "true") {
            setQuery(prevQuery => ({
                ...prevQuery,
                [queryParameter]: "false"
            }));
        } else {
            setQuery(prevQuery => ({
                ...prevQuery,
                [queryParameter]: "true"
            }));
        }
    }

    const shortenWord = (word: string | number) => {
        if (typeof word === "number") {
            return word
        }
        if (word.length > 30) {
            return word.slice(0, 30) + "..."
        }
        return word
    }

    const convertToNumberArray = (stringList: string) => {
        return stringList.split(',').map((string) => parseInt(string));
    }

    const isOptionValid = (option: string) => {
        let unavailableOptions: number[];
        if (queryParameter === "excludeIDs") {
            unavailableOptions = convertToNumberArray(query.includeIDs);
        } else unavailableOptions = convertToNumberArray(query.excludeIDs);
        return !unavailableOptions.includes(parseInt(option));
    }

    if (optionType === "input") {
        return (
            <div className={"flex"}>
                <h2>{description}</h2>
                <input type={queryParameter} placeholder={description}
                       onChange={handleInputChange}/>
            </div>
        )
    } else if (optionType === "select" && options) {
        if(quoteChosen() && description == 'Author' && options.length > 0){
            options = [options[0]] as string[] | number[]
        }
        if (options && options.every(option => typeof option === "string")) {

            return (
                <div className={"w-full flex justify-between items-center"}>
                    <label>{description}</label>
                    <select
                        value={query[key]}
                        onChange={handleSelectChange}
                        className={"overflow-hidden text-sm w-1/2 h-8 rounded-md p-1 bg-code-bg"}
                    >
                        {options.map((option, index) => (
                            <option key={`${option}${index}`} value={option}>
                                {shortenWord(option)}
                            </option>
                        ))}
                    </select>
                </div>
            )
        } else throw new Error("No options provided for select type")
    } else if (optionType === "button") {
        return (
            <div className={"w-full flex items-center justify-between"}>
                <h2 style={{textDecoration: underline}}>{description}</h2>
                <button
                    className={'h-8 flex items-center border-interact-border border-1'}
                    style={{backgroundColor: buttonColor}}
                    onClick={handleButtonChange}>{description}</button>
            </div>
        )
    } else if (optionType === "multiselect" && options && options.every(option => typeof option === "number")) {
        const newOptions: { value: string, label: string }[] = options.map((option) => {
            return {value: option.toString(), label: option.toString()}
        });

        const baseStyles: CSSObjectWithLabel = {
            //add fonts mavbe?
        }


        return (
            <div className={"w-full flex justify-between items-center"}>
                <label>{description}</label>
                <Select options={quoteChosen() ? [] : newOptions}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                color: 'black',
                                backgroundColor: 'white',
                                maxWidth: '14rem',
                            }),
                            menu: (baseStyles) => ({
                                ...baseStyles,
                                color: 'black',
                                backgroundColor: 'white',
                            }),
                            option: (baseStyles, {isDisabled, isFocused, isSelected}) => ({
                                ...baseStyles,
                                color: 'black',
                                backgroundColor: isDisabled
                                    ? 'grey'
                                    : isSelected
                                        ? 'lightgray'
                                        : isFocused
                                            ? 'silver'
                                            : 'white',
                            }),
                        }}
                        isMulti={true}
                        onChange={handleMultiSelectChange}
                        isOptionDisabled={(option) => !isOptionValid(option.value)}
                />
            </div>
        )
    }
}

export default Option