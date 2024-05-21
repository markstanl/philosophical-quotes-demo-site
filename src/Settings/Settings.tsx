import React, {useState} from 'react'
import Option from "@/Components/Option"

interface QueryProps {
    theme: string;
    author: string;
    quote: string;
    dailyQuote: string;
    includeIDs: string;
    excludeIDs: string;
}

interface SettingsProps {
    setRequest: React.Dispatch<React.SetStateAction<QueryProps>>;
}

const Settings: React.FC<SettingsProps> = ({
                                            setRequest
                                        }) => {

    const [query, setQuery] = useState<QueryProps>({
        theme: "default",
        author: "",
        quote: "",
        dailyQuote: "false",
        includeIDs: "",
        excludeIDs: ""
    })

    const quotesArray = [
        "One must imagine Sisyphus happy.",
        "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        "The unexamined life is not worth living.",
        "The only good is knowledge and the only evil is ignorance.",
        "I am the wisest man alive, for I know one thing, and that is that I know nothing.",
        "Only the dead have seen the end of war.",
        "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
        "God is dead. God remains dead. And we have killed him.",
        "Man is born free, and everywhere he is in chains.",
        "Revolt is the right of the people",
        "The first man who, having fenced in a piece of land, said 'This is mine,' and found people naive enough to believe him, was the real founder of civil society.",
        "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        "I would never die for my beliefs because I might be wrong.",
        "Live your life as though your every act were to become a universal law.",
        "The wise man can change his mind; the stubborn one, never.",
        "The gazelle and the lion are enemies only in the minds of the Takers. The lion that comes across a herd of gazelles doesn’t massacre them, as an enemy would. It kills one, not to satisfy its hatred of gazelles but to satisfy its hunger, and once it has made its kill the gazelles are perfectly content to go on grazing with the lion right in their midst.",
        "The premise of the Taker story is 'the world belongs to man'. … The premise of the Leaver story is 'man belongs to the world'.",
        "The principles of justice are chosen behind a veil of ignorance.",
        "We strive for the best we can attain within the scope the world allows.",
        "Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.",
        "Be a philosopher; but, amidst all your philosophy, be still a man.",
        "Cogito ergo sum.",
        "Conquer yourself rather than the world.",
        "I think, therefore I am.",
        "In heaven, all the interesting people are missing.",
        "That the sun will not rise tomorrow is no less intelligible a proposition, and implies no more contradiction, than the affirmation, that it will rise.",
        "All knowledge degenerates into probability.",
        "What was Aristotle’s life?’ Well, the answer lay in a single sentence: ‘He was born, he thought, he died.’ And all the rest is pure anecdote.",
        "The most thought-provoking thing in our thought-provoking time is that we are still not thinking.",
        "A serious and good philosophical work could be written consisting entirely of jokes.",
        "The limits of my language means the limits of my world.",
        "Whereof one cannot speak, thereof one must be silent.",
        "What we must do is bring nonhuman animals within our sphere of moral concern and cease to treat their lives as expendable for our ends.",
        "We are, quite literally, gambling with the future of our planet - for the sake of hamburgers",
        "Putting yourself in the place of others... is what thinking ethically is all about.",
        "All the arguments to prove man's superiority cannot shatter this hard fact: in suffering the animals are our equals.",
        "We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.",
        "They pity and they eat the objects of their compassion.",
        "The question is not, Can they reason?, nor Can they talk? but, Can they suffer?",
        "Sometimes they succeed in breaking free of the prevailing ideology: more often they become its most sophisticated defenders.",
        "That animals can’t be moral agents doesn’t seem to be relevant to their status as moral patients.",
        "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.It is up to you to give [life] a meaning.",
        "We are our choices.",
        "You are -- your life, and nothing else.",
        "One is not born, but rather becomes, a woman.",
        "...her wings are cut and then she is blamed for not knowing how to fly.",
        "Man is defined as a human being and woman as a female – whenever she behaves as a human being she is said to imitate the male.",
        "A person is not morally responsible for what he has done if he did it only because he could not have done otherwise",
        "Those who educate children well are more to be honored than they who produce them; for these only gave them life, those the art of living well.",
        "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
        "It is impossible for someone to lie unless he thinks he knows the truth. Producing bullshit requires no such conviction.",
        "If someone doesn’t value logic, what logical argument could you provide to show the importance of logic?",
        "A puppet is free as long as he loves his strings.",
        "What I'm asking you to entertain is that there is nothing we need to believe on insufficient evidence in order to have deeply ethical and spiritual lives.",
        "You are not controlling the storm, and you are not lost in it. You are the storm.",
        "You can do what you decide to do — but you cannot decide what you will decide to do.",
        "You can’t really change the heart without telling a story.",
        "Knowledge is no guarantee of good behavior, but ignorance is a virtual guarantee of bad behavior.",
        "If people never did silly things nothing intelligent would ever get done."
    ]

    const authorsArray = ["Albert Camus", "Socrates", "Plato", "Friedrich Nietzsche", "Jean-Jacques Rousseau", "Aristotle", "Bertrand Russell", "Immanuel Kant", "Daniel Quinn", "John Rawls", "David Hume",
        "René Descartes", "Martin Heidegger", "Ludwig Wittgenstein", "Peter Singer", "Richard Dawkins", "Oliver Goldsmith", "Jeremy Bentham", "Alastair Norcross", "Jean-Paul Sartre", "Simone de Beauvoir ", "Simone de Beauvoir", "Harry Frankfurt", "Sam Harris", "Martha Nussbaum"]

    const themeNames: string[] = [
        "default",
        "default_repocard",
        "transparent",
        "shadow_red",
        "shadow_green",
        "shadow_blue",
        "dark",
        "radical",
        "merko",
        "gruvbox",
        "gruvbox_light",
        "tokyonight",
        "onedark",
        "cobalt",
        "synthwave",
        "highcontrast",
        "dracula",
        "prussian",
        "monokai",
        "vue",
        "vue-dark",
        "shades-of-purple",
        "nightowl",
        "buefy",
        "blue-green",
        "algolia",
        "great-gatsby",
        "darcula",
        "bear",
        "solarized-dark",
        "solarized-light",
        "chartreuse-dark",
        "nord",
        "gotham",
        "material-palenight",
        "graywhite",
        "vision-friendly-dark",
        "ayu-mirage",
        "midnight-purple",
        "calm",
        "flag-india",
        "omni",
        "react",
        "jolly",
        "maroongold",
        "yeblu",
        "blueberry",
        "slateorange",
        "kacho_ga",
        "outrun",
        "ocean_dark",
        "city_lights",
        "github_dark",
        "github_dark_dimmed",
        "discord_old_blurple",
        "aura_dark",
        "panda",
        "noctis_minimus",
        "cobalt2",
        "swift",
        "aura",
        "apprentice",
        "moltack",
        "codeSTACKr",
        "rose_pine",
        "catppuccin_latte",
        "catppuccin_mocha",
        "date_night",
        "one_dark_pro",
        "rose",
        "holi",
        "neon",
        "blue_navy",
        "calm_pink",
        "ambient_gradient",
    ];

    return (
        <div className={"w-full h-screen border-slate-500 border-2 rounded-xl items-center " +
            "flex flex-col"}>
            <h1>Settings</h1>
            <Option description={"Theme*"} optionType={"select"} options={themeNames} query={query}
                    queryParameter={"theme"} setQuery={setQuery}/>
            <Option description={"Author"} optionType={"select"} options={authorsArray} query={query}
                    queryParameter={"author"}
                    setQuery={setQuery}/>
            <Option description={"Quote"} optionType={"select"} options={quotesArray} query={query}
                    queryParameter={"quote"}
                    setQuery={setQuery}/>
            <Option description={"Daily Quote"} optionType={"button"} query={query} queryParameter={"dailyQuote"}
                    setQuery={setQuery}/>
            <Option description={"Include IDs"} optionType={"multiselect"} query={query} queryParameter={"includeIDs"}
                    setQuery={setQuery} options={Array.from({length: quotesArray.length}, (_, i) => i + 1)}/>
            <Option description={"Exclude IDs"} optionType={"multiselect"} query={query} queryParameter={"excludeIDs"}
                    setQuery={setQuery} options={Array.from({length: quotesArray.length}, (_, i) => i + 1)}/>

            <button className={"bg-blue-500 text-white rounded-lg p-2"}
                onClick={() => setRequest(query)}
            >Save
            </button>

            <p>theme{query.theme}</p>
            <p>author{query.author}</p>
            <p>quote{query.quote}</p>
            <p>dailyquote{query.dailyQuote}</p>
            <p>include{query.includeIDs}</p>
            <p>exclude{query.excludeIDs}</p>
        </div>
    )
}

export default Settings
