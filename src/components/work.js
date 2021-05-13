import React from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

import p1Cover from '../img/p1Cover.jpg';
import p1Mockup from '../img/p1Mockup.jpg';
import p1Intro from '../img/p1Intro.jpg';

import p2Intro from '../img/p2Intro.png';
import p2Flow from '../img/p2Flow.jpg';

import p4Mockup from '../img/p4Mockup.png';
import p4Intro from '../img/p4Intro.jpg';
import p4Corr1 from '../img/p4Corr1.jpg';
import p4Corr2 from '../img/p4Corr2.jpg';
import p4Story1 from '../img/p4Story1.jpg';
import p4Story2 from '../img/p4Story2.jpg';
import p4Flow from '../img/p4Flow.jpg';

import {
    useParams,
    Link,
} from "react-router-dom";



export default function Work() {

    let { workId } = useParams();
    const currentWork = Number(workId);

    return (
        <div className="main-ctn srollable-y">
            {currentWork === 1 && <First />}
            {currentWork === 2 && <Second />}
            {currentWork === 3 && <Third />}
            {currentWork === 4 && <Fourth />}
            <Navigator current={currentWork} />
        </div>
    )

}


function Navigator(props) {
    return (
        <div>
            {
                props.current === 1 &&
                <span>
                    <Link to={'/works/' + (props.current - 1)} onClick={(event) => event.preventDefault()} className="btn btn-primary">Previous</Link>
                    <Link to={'/works/' + (props.current + 1)} replace className="btn btn-primary">Next</Link>
                </span>
            }
            {
                props.current === 4 &&
                <span>
                    <Link to={'/works/' + (props.current - 1)} className="btn btn-primary">Previous</Link>
                    <Link to={'/works/' + (props.current + 1)} onClick={(event) => event.preventDefault()} className="btn btn-primary">Next</Link>
                </span>
            }
            {
                props.current !== 1 && props.current !== 4 &&
                <span>
                    <Link to={'/works/' + (props.current - 1)} className="btn btn-primary">Previous</Link>
                    <Link to={'/works/' + (props.current + 1)} replace className="btn btn-primary">Next</Link>
                </span>
            }

        </div>
    )
}

function First() {
    return (
        <section class="mx6 pvl">
            <header>
                <div class="t1 f1">BYOD</div>
                <div class="t2 f4">Self-ordering mobile web application</div>
                <div class="f5 pts pml mid-gray">UI/UX Design | Front-end Devopment - Ionic framework</div>
            </header>
            <div className="cover" style={{ backgroundImage: `url(${p1Cover})` }}></div>
            <main class="main-content">
                    <div class="block">
                        <div class="f4">Problem to solve</div>
                        <div class="f5 pts">Waiting in a queue or raising hands for the server to make orders is sometimes painful. In the fast-food industry, customers simply want to get the food ready as soon as they can. On the other hand, as delightful customer service doesn’t come to the first priority to these groups of customers, freeing up the man-power from taking orders and turning them into food preparation could be a win-win situation.</div>
                    </div>
                    <div class="block">
                        <div class="f4">User Story</div>
                        <div></div>
                    </div>
                    <div class="block">
                        <div class="f4 pbm">User Flow</div>
                        <InnerImageZoom src={p1Mockup} />
                    </div>
                    <div class="block">
                        <div class="f4 pbm">Business Concern</div>
                    </div>
                    <div class="block">
                        <div class="f4">Research and Development</div>
                        
                    </div>
                    <div class="block">
                        <div class="f4">Product Thinking</div>
                        
                    </div>
                </main>
        </section>
    );
}

function Second() {
    return (
        <section class="mx6 pvl">
            <header>
                <div class="t1 f1">Stocker</div>
                <div class="t2 f4">All-in-one stock portfolio management mobile application</div>
                <div class="f5 pts pml mid-gray">UI/UX Design</div>
            </header>
            <div className="cover" style={{ backgroundImage: `url(${p2Intro})` }}></div>
            <main class="main-content">
                    <div class="block">
                        <div class="f4">Problem to solve</div>
                        <div class="f5 pts">Nowadays stock investors buy stock or other assets from different countries, which are diversely located in many platforms, some are from the bank, others are in the hot trading platform, tracking the summary of personal assets becomes difficult.</div>
                    </div>
                    <div class="block">
                        <div class="f4 pbm">User Flow</div>
                        <InnerImageZoom src={p2Flow} />
                    </div>
                    <div class="block">
                        <div class="f4">Design Elements</div>
                        
                    </div>
                </main>
        </section>
    );
}

function Third() {
    return (
        <div>
            <div>3</div>
        </div>
    );
}

function Fourth() {
    return (
        <section class="mx6 pvl">
            <header>
                <div class="t1 f1">Stock Replenishment System</div>
                <div class="t2 f4">Stremline the automated replenishment report and approval process</div>
                <div class="f5 pts pml mid-gray">UI/UX Design| Front-end Devopment - Angular framework</div>
            </header>
            <div className="cover" style={{ backgroundImage: `url(${p4Intro})` }}></div>
            <main class="main-content">
                    <div class="block">
                        <div class="f4">Problem to solve</div>
                        <div class="f5 pts">Stock replenishment helps ensure the right stock is on the shelves at the right time while keeping inventory holding costs low and customers happy. The system is designed to streamline the operation of numerous excels and emails.</div>
                    </div>
                    <div class="block">
                        <div class="f4">User Story</div>
                        <div class="f5 pts">There are two groups of users, while the admin user can approve or reject any request.</div>
                        <div class="pts">
                            <InnerImageZoom src={p4Story1} />
                            <InnerImageZoom src={p4Story2} />
                        </div>
                    </div>
                    <div class="block">
                        <div class="f4 pbm">User Flow</div>
                        <InnerImageZoom src={p4Mockup} />
                    </div>
                    <div class="block">
                        <div class="f4 pbm">User Flow</div>
                        <div>
                            <InnerImageZoom src={p4Flow} width='320' height='200'/>
                        </div>
                    </div>
                    <div class="block">
                        <div class="f4 pbm">Avoid unintentionally quit</div>
                        <div>
                            <img style={{maxWidth: 50 + '%'}} src={p4Corr1}></img>
                            <div>While users are creating a new form, he/she may quit intentionally due to various reasons and it could be frustrating. To cope with the unexpected situation, always ask the user to save the form before totally removing the content. </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="f4 pbm">Avoid Slip Input</div>
                        <div>
                            <img style={{maxWidth: 50 + '%'}} src={p4Corr2}></img>
                            <div>Parts of the input fields are interdependent, which means some value limited the upper or lower bond of another value. The validation should be instant to remind users of this kind of slip. </div>
                        </div>
                    </div>
                </main>
        </section>
    );
}
