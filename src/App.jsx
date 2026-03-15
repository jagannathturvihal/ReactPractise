import React from 'react';
import reactImages from './assets/react-core-concepts.png';
import components from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';

// function CoreConcepts(props) {
//   return (
//     <li>
//         <img src={props.image} alt="" />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcepts1(concept) {
    const { image, title, description } = concept
    return (
        <li>
            <img src={image} alt="title" />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}


function App() {
    const [selectedTopic, setSelectedTopic] = React.useState();
    function handleButtonClick(selectedTab) {
        console.log(`You clicked the ${selectedTab} tab!`);
        setSelectedTopic(selectedTab);
        console.log(`selectedTopic: ${selectedTopic}`);
    }

    let tabConent = <p>Select any Topic.</p>
    if (selectedTopic) {
        tabConent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <main>
                {/* <h2>Time to get started!</h2> */}
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* <CoreConcepts 
                            image={components}
                            title="Components"
                            description="The Core Concept for building React apps."
                        /> */}
                        {/* <CoreConcepts
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcepts1 {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
                        {CORE_CONCEPTS.map((item) => (
                            <CoreConcepts key={item.title} {...item} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu >
                        <TabButton isTabSelected={selectedTopic === 'components'} handleClick={() => handleButtonClick('components')}>Components</TabButton>
                        <TabButton isTabSelected={selectedTopic === 'jsx'} handleClick={() => handleButtonClick('jsx')}>JSX</TabButton>
                        <TabButton isTabSelected={selectedTopic === 'props'} handleClick={() => handleButtonClick('props')}>Props</TabButton>
                        <TabButton isTabSelected={selectedTopic === 'state'} handleClick={() => handleButtonClick('state')}>State</TabButton>
                    </menu>
                    {/* {selectedTopic} */}
                    {/* <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                        <p>{EXAMPLES[selectedTopic]?.description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic]?.code}</code>
                        </pre> 
                    </div> */}
                    {tabConent}
                </section>
            </main>
        </div>
    );
}

export default App;