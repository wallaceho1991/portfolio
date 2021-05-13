import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

const lists = [
  {
    hero: '/img/byod_v2-1.png',
    title: 'BYOD',
    desc: 'Self-Ordering in restaurant Experience',
    id: 1,
  },
  {
    hero: '/img/p2Cover.png',
    title: 'Stocker',
    desc: 'All-in-one stock portfolio management mobile application',
    id: 2,
  },
  {
    hero: '/img/hero-100.jpg',
    title: 'Title3',
    desc: 'description',
    id: 3,
  },
  {
    hero: '/img/p4Cover.jpg',
    title: 'Replenishment System',
    desc: 'Stremline the automated replenishment report and approval process',
    id: 4,
  }
]


export default function MainList() {

  let { path } = useRouteMatch();

  return (
      <div className="main-ctn">
        <div className="list-ctn">
          {lists.map((list)=>{
                return <div key={list.title} className="list" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + list.hero})`}}>
                    <div className="cover">
                        <Link className="full" to={path + '/' + list.id} ></Link>
                        <div className="f2"><span>{list.title}</span></div>
                        <div className="f4 pts tc"><span>{list.desc}</span></div>
                    </div>
                </div>
              })}
        </div>
      </div>
  );
}



