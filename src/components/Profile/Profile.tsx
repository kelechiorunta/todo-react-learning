// import React from "react";

// const Card = ({ children }: { children: React.ReactNode }) => {
//   return <div className="card">{children}</div>
// }

// interface AvatarType {
//   title: string;
//   photo: string;
//   src: string;
//   alt: string;
//   description: string;

// }

// const Avatar = (props : AvatarType ) => {
//   return  <div className="card-content"><h1>{props.title}</h1> {props.src && <img src={props.src} className="avatar" alt={props.alt} />} <p>{props.description}</p></div>
// }

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}