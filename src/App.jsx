import React from 'react';
import reactImages from './assets/react-core-concepts.png';
import components from './assets/components.png';
import { CORE_CONCEPTS } from './data';
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

    function handleButtonClick(selectedTab) {
        console.log(`You clicked the ${selectedTab} tab!`);
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
                        <CoreConcepts
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcepts1 {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu >
                        <TabButton handleClick={() => handleButtonClick('Components')}>Components</TabButton>
                        <TabButton handleClick={() => handleButtonClick('JSX')}>JSX</TabButton>
                        <TabButton handleClick={() => handleButtonClick('Props')}>Props</TabButton>
                        <TabButton handleClick={() => handleButtonClick('State')}>State</TabButton>
                    </menu>
                    Dynamic Conetent
                </section>
            </main>
        </div>
    );
}

export default App;