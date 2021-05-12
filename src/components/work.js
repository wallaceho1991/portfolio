import React from 'react';
import p1Cover from '../img/p1Cover.jpg';
import p1Mockup from '../img/p1Mockup.jpg';
import p1Intro from '../img/p1Intro.jpg';

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
                <div class="f5 pts pml mid-gray">UI | UX | Front-end Devopment - Ionic framework</div>
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
                        <img style={{maxWidth: 100 + '%'}} src={p1Mockup}></img>
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
        <div>
            <div>2</div>
        </div>
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
        <div>
            <div>4</div>
        </div>
    );
}
