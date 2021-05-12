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
    hero: '/img/hero-100.jpg',
    title: 'Title2',
    desc: 'description',
    id: 2,
  },
  {
    hero: '/img/hero-100.jpg',
    title: 'Title3',
    desc: 'description',
    id: 3,
  },
  {
    hero: '/img/hero-100.jpg',
    title: 'Title4',
    desc: 'description',
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
                    <Link to={path + '/' + list.id} >Work 01</Link>
                        <div><span>{list.title}</span></div>
                        <div><span>{list.desc}</span></div>
                    </div>
                </div>
              })}
        </div>
      </div>
  );
}



