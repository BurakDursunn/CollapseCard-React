import React, { StrictMode } from 'react';
import { ReactDOM } from 'react-dom';
import { createRoot } from 'react-dom/client';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">

                    <div className="col">
                        <Collapse href="collapse1">
                            <Card
                                cardTitle="Cuppertino"
                                cardDesc="Cupertino is a city located in California, and it is the home of Apple Inc. headquarters. The city is known for its high-tech industry, and many technology companies have their offices in Cupertino. The city has a Mediterranean climate, and it offers many recreational opportunities such as parks, hiking trails, and golf courses."
                                cardTime="Updated 4 min ago"
                                image="https://www.travellens.co/content/images/2022/07/Cupertino-CA.jpg"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapse2">
                            <Card
                                cardTitle="Palo Alto"
                                cardDesc="Palo Alto is a city located in California, and it is the home of Stanford University. The city is also known for its thriving technology industry, and many technology companies have their offices in Palo Alto. The city has many parks and outdoor recreational areas, including the Stanford Arboretum, the Stanford Dish, and the Foothills Park."
                                cardTime="Updated 6 min ago"
                                image="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_ca101_fiveamazingthings_palalto_alto1_videostill_1280x640.jpg?itok=YkwiYI_l"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapse3">
                            <Card
                                cardTitle="Menlo Park"
                                cardDesc="Menlo Park is a city located in California, and it is situated in the heart of Silicon Valley, which is the hub of technology companies. Prominent companies such as Facebook, Tesla, and SoftBank have their headquarters in Menlo Park. In addition, Menlo Park is known for its natural beauty, parks, and museums. "
                                cardTime="Updated 2 min ago"
                                image="https://www.hotelscombined.com.tr/rimg/dimg/e2/53/46a3027e-city-10870-16d956de970.jpg?width=1366&height=768&xhint=1384&yhint=932&crop=true"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

